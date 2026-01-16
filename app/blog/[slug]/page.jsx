'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Bookmark, Download, Printer, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Home/Footer';
import FeaturedCampaignsSection from '@/components/blog/FeaturedCampaignsSection';

// This would typically come from a database or API
const blogPosts = {
  'emotional-intelligent-leadership': {
    id: 1,
    slug: 'emotional-intelligent-leadership',
    category: 'LEADERSHIP',
    date: '18TH AUGUST, 2025',
    title: 'Emotional intelligent leadership: being it or performing it?',
    author: {
      name: 'Lester Coupland',
      role: 'President at',
      company: 'London Strategy Centre',
      avatar: '/images/blog/blog-inner.jpg'
    },
    readTime: '8 min read',
    image: '/images/blog/1.jpg',
    sections: [
      {
        heading: 'What is maturity?',
        content: `According to Daniel Goleman, a key aspect of maturity is the ability to lengthen the gap between impulse and action. This means that instead of immediately reacting to a feeling or urge, a more mature person can pause, consider the situation, and choose a more thoughtful response.

Goleman's concept connects to his research on emotional intelligence, where self-awareness and self-management are crucial for recognising impulses and regulating them effectively.`
      },
      {
        heading: 'What is reality?',
        content: `Some leaders have a deeply-rooted instinct to act fast. This may be accentuated by an innate "hurry-up driver" relating to parental messaging from early childhood whereby "getting a move on" was conveyed as the best (and maybe only) problem-solving option.

Let's be clear. It's not that this is wrong. On occasions we all need to move quickly, decide fast and be agile; the circumstances will determine this and realistically we may have no option.

A very smart senior leader whom I was coaching said to me recently (referring to the company where he worked) "we're all running at the moment." I knew what he meant and I believed him.`
      },
      {
        heading: 'What is the risk?',
        content: `Here at LSC, we have learned through working globally with thousands of leaders that some seem to be permanently 'caught' in this way of being. For these leaders, everything has to be decided this very moment; they believe acting quickly and being decisive is what leaders must do; slowing down and reflecting are not attributes which belong to this leadership paradigm.`
      },
      {
        heading: 'What is the solution?',
        content: `In the recent past, at a new member induction, a team leader was giving cause for concern. His style was below-standard. He had clearly not endered himself to his peers and he was struggling to adapt to the norms and practices of the organisation sought feedback from his immediate supervisor and threw trusted team members and the conclusion all was 'fire him'. I pointed out that there were other options available to us and, if we did fire him, we would rightly have to find and hire a replacement, a process which would take several weeks and leave the team very stretched. I asked his supervisor to change the team member's role, assigned a colleague who could coach him closely, and asked two colleagues to monitor the team member's performance and get feedback from them. This worked. I worked as a treat and we were able to retain the team member who grew in competence and confidence. We had avoided the impulse to fire him by reflecting on the implications and finding another way forward which ultimately proved successful.`
      },
      {
        heading: 'What are the lessons for leaders?',
        content: null,
        bulletPoints: [
          'Separate the true level of urgency of a situation from your own feelings, impulses and urges',
          'Think carefully and systematically about the possible implications of a course of action if you\'re minded to act fast',
          'Beware group-think if there is a group impulse to act fast and encourage those involved to consider options and potential consequences'
        ]
      }
    ],
    relatedPosts: [
      { id: 2, slug: 'leadership-maturity', title: 'Leadership Maturity', image: '/images/blog/2.jpg' },
      { id: 3, slug: 'leadership-development-roi', title: 'Leadership Development and the ROI Ritual', image: '/images/blog/3.jpg' },
      { id: 4, slug: 'leadership-practices', title: 'Leadership As a Set of Practices', image: '/images/blog/4.jpg' }
    ]
  },
  'leadership-maturity': {
    id: 2,
    slug: 'leadership-maturity',
    category: 'LEADERSHIP',
    date: '11TH AUGUST, 2025',
    title: 'Leadership Maturity',
    author: {
      name: 'Lester Coupland',
      role: 'President at',
      company: 'London Strategy Centre',
      avatar: '/images/authors/lester.jpg'
    },
    readTime: '6 min read',
    image: '/images/blog/2.jpg',
    sections: [
      {
        heading: 'What is maturity?',
        content: `Leadership maturity is not about age or years of experience—it's about the depth of wisdom, self-awareness, and the ability to navigate complex situations with grace and effectiveness.`
      }
    ],
    relatedPosts: [
      { id: 1, slug: 'emotional-intelligent-leadership', title: 'Emotional intelligent leadership: being it or performing it?', image: '/images/blog/1.jpg' },
      { id: 3, slug: 'leadership-development-roi', title: 'Leadership Development and the ROI Ritual', image: '/images/blog/3.jpg' }
    ]
  },
  'leadership-development-roi': {
    id: 3,
    slug: 'leadership-development-roi',
    category: 'LEADERSHIP',
    date: '28TH JULY, 2025',
    title: 'Leadership Development and the ROI Ritual',
    author: { name: 'Michael Roberts', role: 'Leadership Development Expert', company: 'London Strategy Centre', avatar: '/images/authors/michael.jpg' },
    readTime: '7 min read',
    image: '/images/blog/3.jpg',
    sections: [
      {
        heading: 'Understanding ROI',
        content: `Understanding the return on investment for leadership development programs is crucial for organizational success. This article explores how to measure and maximize the impact of your leadership initiatives.`
      }
    ],
    relatedPosts: [
      { id: 1, slug: 'emotional-intelligent-leadership', title: 'Emotional intelligent leadership', image: '/images/blog/1.jpg' },
      { id: 2, slug: 'leadership-maturity', title: 'Leadership Maturity', image: '/images/blog/2.jpg' }
    ]
  },
  'leadership-practices': {
    id: 4,
    slug: 'leadership-practices',
    category: 'LEADERSHIP',
    date: '23RD JULY, 2025',
    title: 'Leadership As a Set of Practices',
    author: { name: 'Jennifer Lee', role: 'Executive Coach', company: 'London Strategy Centre', avatar: '/images/authors/jennifer.jpg' },
    readTime: '6 min read',
    image: '/images/blog/4.jpg',
    sections: [
      {
        heading: 'Daily Practices',
        content: `Leadership is not just a position—it's a collection of daily practices and behaviors that shape how we influence and inspire others.`
      }
    ],
    relatedPosts: [
      { id: 1, slug: 'emotional-intelligent-leadership', title: 'Emotional intelligent leadership', image: '/images/blog/1.jpg' }
    ]
  },
  'womens-leadership-what-to-fix': {
    id: 5,
    slug: 'womens-leadership-what-to-fix',
    category: 'LEADERSHIP',
    date: '17TH JUNE, 2025',
    title: "Women's Leadership: What Exactly Are We Trying to Fix?",
    author: { name: 'Dr. Amanda Foster', role: 'Gender Leadership Researcher', company: 'London Strategy Centre', avatar: '/images/authors/amanda.jpg' },
    readTime: '8 min read',
    image: '/images/blog/5.jpg',
    sections: [
      {
        heading: 'The Question',
        content: `Examining the assumptions and biases in women's leadership development programs and what we should really focus on.`
      }
    ],
    relatedPosts: [
      { id: 6, slug: 'womens-leadership-confidence', title: 'Women\'s Leadership and confidence', image: '/images/blog/6.jpg' }
    ]
  },
  'womens-leadership-confidence': {
    id: 6,
    slug: 'womens-leadership-confidence',
    category: 'LEADERSHIP',
    date: '17TH JUNE, 2025',
    title: 'Women\'s Leadership and "confidence" (Aw), not just "nice to haves" but differentiators',
    author: { name: 'Dr. Amanda Foster', role: 'Gender Leadership Researcher', company: 'London Strategy Centre', avatar: '/images/authors/amanda.jpg' },
    readTime: '7 min read',
    image: '/images/blog/6.jpg',
    sections: [
      {
        heading: 'Confidence Matters',
        content: `Exploring how confidence in women's leadership is a critical differentiator, not just an optional trait.`
      }
    ],
    relatedPosts: [
      { id: 5, slug: 'womens-leadership-what-to-fix', title: 'Women\'s Leadership: What to Fix?', image: '/images/blog/5.jpg' }
    ]
  },
  'limelight-or-shade': {
    id: 7,
    slug: 'limelight-or-shade',
    category: 'LEADERSHIP',
    date: '17TH JUNE, 2025',
    title: 'The Limelight Or The Shade',
    author: { name: 'Thomas Anderson', role: 'Leadership Psychologist', company: 'London Strategy Centre', avatar: '/images/authors/thomas.jpg' },
    readTime: '5 min read',
    image: '/images/blog/7.jpg',
    sections: [
      {
        heading: 'Leadership Visibility',
        content: `Should leaders seek the spotlight or work behind the scenes? Exploring different leadership styles and their effectiveness.`
      }
    ],
    relatedPosts: [
      { id: 1, slug: 'emotional-intelligent-leadership', title: 'Emotional intelligent leadership', image: '/images/blog/1.jpg' }
    ]
  },
  'climate-action-geopolitical-tensions': {
    id: 8,
    slug: 'climate-action-geopolitical-tensions',
    category: 'GEOPOLITICAL',
    date: '5TH JUNE, 2025',
    title: 'Climate Action: Can Climate Action Survive Rising Geopolitical Tensions?',
    author: { name: 'Dr. Elena Rodriguez', role: 'Environmental Policy Expert', company: 'London Strategy Centre', avatar: '/images/authors/elena.jpg' },
    readTime: '9 min read',
    image: '/images/blog/8.jpg',
    sections: [
      {
        heading: 'Global Cooperation',
        content: `Analyzing the intersection of climate policy and geopolitical conflicts, and whether global cooperation can survive current tensions.`
      }
    ],
    relatedPosts: [
      { id: 1, slug: 'emotional-intelligent-leadership', title: 'Emotional intelligent leadership', image: '/images/blog/1.jpg' }
    ]
  },
  'pope-francis-leadership-legacy': {
    id: 9,
    slug: 'pope-francis-leadership-legacy',
    category: 'LEADERSHIP',
    date: '25TH MAY, 2025',
    title: 'The Late Pope Francis and His Leadership Legacy',
    author: { name: 'Father Marcus Thompson', role: 'Religious Studies Scholar', company: 'London Strategy Centre', avatar: '/images/authors/marcus.jpg' },
    readTime: '10 min read',
    image: '/images/blog/9.jpg',
    sections: [
      {
        heading: 'A Legacy',
        content: `Reflecting on Pope Francis's transformative leadership style and the lasting impact of his papacy on the Catholic Church and the world.`
      }
    ],
    relatedPosts: [
      { id: 1, slug: 'emotional-intelligent-leadership', title: 'Emotional intelligent leadership', image: '/images/blog/1.jpg' }
    ]
  },
  'make-innovation-happen': {
    id: 10,
    slug: 'make-innovation-happen',
    category: 'INNOVATION',
    date: '24TH MAY, 2025',
    title: 'How Do We Make Innovation Happen?',
    author: { name: 'Dr. Kevin Park', role: 'Innovation Strategist', company: 'London Strategy Centre', avatar: '/images/authors/kevin.jpg' },
    readTime: '8 min read',
    image: '/images/blog/1.jpg',
    sections: [
      {
        heading: 'Innovation Framework',
        content: `Practical strategies and frameworks for fostering a culture of innovation within organizations and driving breakthrough results.`
      }
    ],
    relatedPosts: [
      { id: 1, slug: 'emotional-intelligent-leadership', title: 'Emotional intelligent leadership', image: '/images/blog/1.jpg' }
    ]
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  const post = blogPosts[slug];
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[#0E2253] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white lg:py-28 py-20">
        {/* Full Width Container */}
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20">
        {/* Category Badge */}
        <div className="mb-6">
          <span className="inline-block px-5 py-2.5 text-xs font-bold tracking-wide uppercase rounded-xl border-2 border-gray-400 text-gray-900">
            {post.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center gap-3 mb-8 ">
          <span className="text-base text-gray-700">
            by <span className="font-semibold border-b border-gray-600">{post.author.name}</span>
          </span>
        </div>

        <div className="text-sm text-gray-900 font-semibold mb-8">
          {post.date}
        </div>

        {/* Featured Image - Full Width */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] mb-12 rounded-2xl overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Two Column Layout for Content and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Content - Article */}
          <div className="lg:col-span-8">

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {post.sections?.map((section, index) => (
                <div key={index} className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
                    {section.heading}
                  </h2>

                  {section.content && (
                    <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                      {section.content}
                    </div>
                  )}

                  {section.bulletPoints && (
                    <ul className="space-y-3 ml-6">
                      {section.bulletPoints.map((point, i) => (
                        <li key={i} className="text-base text-gray-700 leading-relaxed list-disc">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Authors Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Authors</h3>

              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {post.author.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {post.author.role}
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    {post.author.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Save & Download Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                {/* Save for Later */}
                <button className="w-full flex items-center gap-3 text-left group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 group-hover:bg-gray-900 transition-colors">
                    <Bookmark className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    SAVE IT FOR LATER
                  </span>
                </button>

                {/* Download Article */}
                <button className="w-full flex items-center gap-3 text-left group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 group-hover:bg-gray-900 transition-colors">
                    <Download className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    DOWNLOAD ARTICLE
                  </span>
                </button>
              </div>

              {/* Share Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-sm font-bold text-gray-900 mb-6 uppercase tracking-wide">
                  SHARE
                </h3>

                <div className="flex flex-wrap gap-3">
                  <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 group transition-colors">
                    <Mail className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </button>

                  <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 group transition-colors">
                    <Printer className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </button>

                  <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 group transition-colors">
                    <Facebook className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </button>

                  <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 group transition-colors">
                    <Instagram className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </button>

                  <button className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-900 group transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </button>
                </div>
              </div>

              {/* Newsletter Subscription Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-900">
                    <Mail className="w-5 h-5 text-gray-900" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    SUBSCRIBE
                  </h3>
                </div>

                <p className="text-sm text-gray-900 mb-4 font-medium">
                  Subscribe to our Newsletter
                </p>

                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    className="w-full px-5 py-4 pr-20 border-2 border-gray-900 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:border-gray-700 transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0E2253] text-white rounded-full font-medium hover:bg-[#1a3a6b] transition-colors flex items-center justify-center"
                  >
                    <span className="text-lg">→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
          <FeaturedCampaignsSection />
      </div>
      <Footer />
    </>
  );
}
