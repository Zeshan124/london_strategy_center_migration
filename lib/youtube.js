const API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

if (!API_KEY) {
  console.warn('YOUTUBE_API_KEY is not set. YouTube requests will fail.');
}

/**
 * Format an ISO8601 duration string returned by the YouTube API
 * into a human friendly value like "5:23" or "1:02:10".
 */
function formatYouTubeDuration(isoDuration) {
  if (!isoDuration) return null;
  const pattern = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
  const match = isoDuration.match(pattern);
  if (!match) return isoDuration;
  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

/**
 * Simple keyword‑based category detection copied from the original PHP logic.
 */
function detectCategoryFromTitle(title = '') {
  const t = title.toLowerCase();
  const categoryKeywords = {
    podcast: ['podcast', 'trl', 'episode', 'ep ', 'ep.', 'interview', 'discussion', 'talk show', 'conversation', 'guest', '#podcast'],
    ai: ['ai ', 'artificial intelligence', 'machine learning', 'chatgpt', 'automation', 'neural', 'deep learning'],
    marketing: ['marketing', 'digital marketing', 'seo', 'social media', 'branding', 'visibility', 'advertisement'],
    ecommerce: ['ecommerce', 'e-commerce', 'shopify', 'amazon', 'online store', 'dropshipping', 'selling'],
    technology: ['technology', 'tech ', 'software', 'development', 'coding', 'programming', 'app'],
    business: ['business', 'scaling', 'growth', 'revenue', 'profit', 'startup', 'entrepreneur', 'impact'],
  };

  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    for (const kw of keywords) {
      if (t.indexOf(kw) !== -1) {
        return category.charAt(0).toUpperCase() + category.slice(1);
      }
    }
  }
  return 'Business';
}

/**
 * Add a category field to each video object.
 * For now we only support keyword detection; an explicit map could be added later.
 */
function assignCategories(videos) {
  return videos.map((v) => {
    return {
      ...v,
      category: detectCategoryFromTitle(v.title || ''),
    };
  });
}

/**
 * Retrieve the uploads playlist id for a channel identifier (either channel ID
 * or username). This mirrors the PHP service implementation.
 */
async function getUploadsPlaylistId(channelIdentifier) {
  if (!channelIdentifier) return null;
  const params = new URLSearchParams({
    part: 'contentDetails',
    key: API_KEY,
  });
  if (channelIdentifier.startsWith('UC')) {
    params.set('id', channelIdentifier);
  } else {
    params.set('forUsername', channelIdentifier);
  }

  const res = await fetch(`${BASE_URL}/channels?${params}`);
  if (!res.ok) {
    console.error('channels.list failed', await res.text());
    return null;
  }
  const json = await res.json();
  return json.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null;
}

/**
 * Fetch all videos from a channel by crawling the uploads playlist. 50 items
 * are returned per page; the function will walk the pagination tokens until
 * exhaustion. After collecting the bare snippet we call videos.list to enrich
 * with duration, statistics, tags, etc.
 */
export async function getAllVideosFromChannel(channelIdentifier) {
  if (!API_KEY) return [];
  const playlistId = await getUploadsPlaylistId(channelIdentifier);
  if (!playlistId) return [];

  let videos = [];
  let nextPageToken = null;

  do {
    const params = new URLSearchParams({
      part: 'snippet',
      playlistId,
      maxResults: '50',
      key: API_KEY,
    });
    if (nextPageToken) params.set('pageToken', nextPageToken);

    const res = await fetch(`${BASE_URL}/playlistItems?${params}`);
    if (!res.ok) break;
    const data = await res.json();

    (data.items || []).forEach((item) => {
      videos.push({
        videoId: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail:
          item.snippet.thumbnails?.maxres?.url ||
          item.snippet.thumbnails?.standard?.url ||
          item.snippet.thumbnails?.high?.url ||
          item.snippet.thumbnails?.medium?.url ||
          item.snippet.thumbnails?.default?.url ||
          null,
        publishedAt: item.snippet.publishedAt,
      });
    });

    nextPageToken = data.nextPageToken;
  } while (nextPageToken);

  // enrich details in batches of 50
  const ids = videos.map((v) => v.videoId);
  const chunks = [];
  for (let i = 0; i < ids.length; i += 50) {
    chunks.push(ids.slice(i, i + 50));
  }
  const detailsMap = {};
  for (const chunk of chunks) {
    const params = new URLSearchParams({
      part: 'contentDetails,statistics,snippet',
      id: chunk.join(','),
      key: API_KEY,
    });
    const res = await fetch(`${BASE_URL}/videos?${params}`);
    if (!res.ok) continue;
    const data = await res.json();
    (data.items || []).forEach((item) => {
      detailsMap[item.id] = item;
    });
  }

  videos = videos.map((v) => {
    const d = detailsMap[v.videoId];
    if (d) {
      return {
        ...v,
        duration: formatYouTubeDuration(d.contentDetails?.duration),
        viewCount: d.statistics?.viewCount || 0,
        description: d.snippet?.description || '',
        tags: d.snippet?.tags || [],
      };
    }
    return v;
  });

  return videos;
}

/**
 * Convenience wrapper for fetching and assigning categories in one shot. The
 * caller can optionally ask for a revalidation cache control object by passing
 * an options argument like { revalidate: 3600 }.
 */
export async function fetchChannelVideos(channelIdentifier) {
  const all = await getAllVideosFromChannel(channelIdentifier);
  return assignCategories(all);
}
