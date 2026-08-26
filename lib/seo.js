// ─────────────────────────────────────────────────────────────────────────────
// Centralised SEO configuration and helpers for London Strategy Centre.
// Keeps metadata generation DRY across all pages. Import `pageMetadata()` in any
// server component / route layout to produce canonical + Open Graph + Twitter tags.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name: 'London Strategy Centre',
  shortName: 'LSC',
  url: 'https://londonstrategycentre.com',
  locale: 'en_GB',
  description:
    'London Strategy Centre builds intelligent, adaptive organisations for an AI-driven world — through AI capability transformation, cyber security, strategic advisory, and digital twin systems.',
  ogImage: '/images/home/1.jpg',
  email: 'info@londonstrategycentre.com',
  social: [
    'https://www.linkedin.com/company/londonstrategycentre/',
    'https://www.youtube.com/@LSCConnect',
    'https://www.facebook.com/londonstrategycentreuk/',
    'https://www.instagram.com/londonstrategycentreuk/',
    'https://www.tiktok.com/@londonstrategycentreuk',
  ],
};

/**
 * Build a Next.js metadata object for a page.
 * @param {Object} opts
 * @param {string} opts.title       - Page title (without the site-name suffix; the template adds it)
 * @param {string} opts.description - Meta description
 * @param {string} [opts.path]      - Canonical path, e.g. "/about" (defaults to "/")
 * @param {string} [opts.image]     - OG image path (defaults to the site OG image)
 * @param {boolean}[opts.noindex]   - When true, the page is excluded from search indexes
 */
export function pageMetadata({ title, description, path = '/', image, ogType = 'website', noindex = false } = {}) {
  const canonical = path;
  const img = image || SITE.ogImage;
  const desc = description || SITE.description;

  // Use an absolute title so the site-name suffix is applied consistently at any
  // nesting depth. (Next.js `title.template` only cascades to a direct child of
  // the segment that defines it, so nested dynamic routes would otherwise lose
  // the suffix; `absolute` sidesteps that and never double-applies the template.)
  const fullTitle = title ? `${title} | ${SITE.name}` : SITE.name;

  return {
    title: title ? { absolute: fullTitle } : undefined,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: desc,
      url: canonical,
      siteName: SITE.name,
      type: ogType,
      locale: SITE.locale,
      images: [{ url: img, width: 1200, height: 630, alt: title || SITE.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [img],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/**
 * Derive a clean meta description from a service data object.
 * The first hero paragraph is the richest, most keyword-relevant source, so we
 * prefer it; a short punchy tagline (>= 60 chars) is used when there is no hero
 * copy, then the `description` field (often just the title), then the site default.
 */
export function serviceDescription(service, max = 160) {
  if (!service) return SITE.description;
  const title = (service.title || '').trim();
  const tagline = (service.tagline || '').trim();
  const hero = Array.isArray(service.heroContent) ? (service.heroContent[0] || '').trim() : '';
  const raw = (service.description || '').trim();

  let text = '';
  if (hero) text = hero;
  else if (tagline && tagline.toLowerCase() !== title.toLowerCase()) text = tagline;
  else if (raw && raw.toLowerCase() !== title.toLowerCase()) text = raw;
  else text = SITE.description;

  if (text.length > max) text = text.slice(0, max - 1).replace(/\s+\S*$/, '').trim() + '…';
  return text;
}

/** Organization JSON-LD — rendered once in the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/icons/lsc-logo-footer.png`,
    description: SITE.description,
    email: SITE.email,
    sameAs: SITE.social,
  };
}

/** WebSite JSON-LD — rendered once in the root layout. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@type': 'Organization', name: SITE.name },
  };
}

/** BreadcrumbList JSON-LD helper. items: [{ name, path }] */
export function breadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}
