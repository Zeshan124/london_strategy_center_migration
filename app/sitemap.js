import { SITE } from "@/lib/seo";
import { AI_SERVICES } from "@/lib/aiServicesData";
import { CYBER_SERVICES } from "@/lib/cyberServicesData";
import { ADVISORY_SERVICES } from "@/lib/advisoryServicesData";
import { PRESS_RELEASES } from "@/lib/pressReleasesData";

// Required for `output: export` — generate a static sitemap.xml at build time.
export const dynamic = "force-static";

// Blog slugs — kept in sync with app/blog/[slug]/page.jsx
const BLOG_SLUGS = [
  "leading-in-the-age-of-agentic-ai",
  "the-real-global-ai-race",
  "women-in-leadership-and-ai",
  "techno-feudalism",
  "sustainability_and_technology",
  "ai-brains-future",
];

const CASE_STUDIES = [
  "aviation-ai",
  "entrepreneurship",
  "healthcare",
  "marketing-automation",
  "real-estate",
  "sustainability",
];

export default function sitemap() {
  const now = new Date();
  const url = (path) => `${SITE.url}${path}`;

  // Core static routes with priorities
  const core = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/artificial-intelligence", priority: 0.9, changeFrequency: "monthly" },
    { path: "/cyber-security", priority: 0.9, changeFrequency: "monthly" },
    { path: "/advisory-services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/digital-twin", priority: 0.8, changeFrequency: "monthly" },
    { path: "/cyberexcellence", priority: 0.8, changeFrequency: "monthly" },
    { path: "/case-study", priority: 0.8, changeFrequency: "monthly" },
    { path: "/trl", priority: 0.7, changeFrequency: "weekly" },
    { path: "/trl/podcast", priority: 0.7, changeFrequency: "weekly" },
    { path: "/reframe-reads", priority: 0.7, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/press-release", priority: 0.7, changeFrequency: "weekly" },
    { path: "/services", priority: 0.6, changeFrequency: "monthly" },
    { path: "/free-material", priority: 0.5, changeFrequency: "monthly" },
    { path: "/women-leadership", priority: 0.6, changeFrequency: "monthly" },
    { path: "/white-paper-cyber-excellence", priority: 0.6, changeFrequency: "monthly" },
    { path: "/old-wine-in-a-new-bottle", priority: 0.6, changeFrequency: "monthly" },
    { path: "/ai-direction-scan", priority: 0.7, changeFrequency: "monthly" },
    { path: "/cyber-assessment", priority: 0.7, changeFrequency: "monthly" },
    { path: "/venture-framework", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/policies-and-legislation", priority: 0.3, changeFrequency: "yearly" },
  ].map((r) => ({ url: url(r.path), lastModified: now, changeFrequency: r.changeFrequency, priority: r.priority }));

  const caseStudies = CASE_STUDIES.map((slug) => ({
    url: url(`/case-study/${slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.7,
  }));

  const aiServices = Object.keys(AI_SERVICES).map((slug) => ({
    url: url(`/artificial-intelligence/${slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.7,
  }));

  const cyberServices = Object.keys(CYBER_SERVICES).map((slug) => ({
    url: url(`/cyber-security/${slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.7,
  }));

  const advisoryServices = Object.keys(ADVISORY_SERVICES).map((slug) => ({
    url: url(`/advisory-services/${slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.7,
  }));

  const pressReleases = PRESS_RELEASES.map((pr) => ({
    url: url(`/press-release/${pr.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.6,
  }));

  const blog = BLOG_SLUGS.map((slug) => ({
    url: url(`/blog/${slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.6,
  }));

  return [
    ...core,
    ...caseStudies,
    ...aiServices,
    ...cyberServices,
    ...advisoryServices,
    ...pressReleases,
    ...blog,
  ];
}
