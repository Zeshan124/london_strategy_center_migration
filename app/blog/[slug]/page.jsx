import { pageMetadata } from "@/lib/seo";
import BlogPostClient from "./BlogPostClient";

// Lightweight per-post SEO map. The full article content lives in the client
// component; this only carries the fields search engines and social cards need.
const BLOG_META = {
  "leading-in-the-age-of-agentic-ai": {
    title: "Leading in the Age of Agentic AI",
    description:
      "Why agentic AI demands leadership elasticity — how leaders adapt their thinking, decisions, and teams for an AI-augmented world.",
    image: "/images/InnerPages/reframe-reads/Imran-yaqzan-banner.jpeg",
  },
  "the-real-global-ai-race": {
    title: "The Real Global AI Race Is About Diffusion Without Losing Trust",
    description:
      "The global AI race is not just about capability — it is about diffusing AI across organisations and society without losing trust.",
    image: "/images/InnerPages/reframe-reads/Kamran-Kardan-Thumbnail.jpeg",
  },
  "women-in-leadership-and-ai": {
    title: "Women in Leadership and Women in AI: What Are We Still Getting Wrong?",
    description:
      "Examining the persistent gaps for women in leadership and AI — and what organisations still get wrong about closing them.",
    image: "/images/InnerPages/reframe-reads/blog-1.jpg",
  },
  "techno-feudalism": {
    title: "AI Hard Talk: From Hype to Real-World Impact",
    description:
      "Cutting through AI hype to real-world impact — an honest conversation on where artificial intelligence delivers genuine value.",
    image: "/images/InnerPages/reframe-reads/blog-2.jpg",
  },
  "sustainability_and_technology": {
    title: "Sustainability and Technology",
    description:
      "How technology and artificial intelligence can advance sustainability goals across organisations and industries.",
    image: "/images/InnerPages/reframe-reads/blog-4.jpg",
  },
  "ai-brains-future": {
    title: "AI, Brains, and the Future We Are Shaping",
    description:
      "A neurologist's perspective on artificial intelligence, the human brain, and the future we are shaping together.",
    image: "/images/InnerPages/reframe-reads/blog-3.jpg",
  },
};

export function generateStaticParams() {
  return Object.keys(BLOG_META).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const post = BLOG_META[params.slug];
  if (!post) return pageMetadata({ title: "Blog", path: `/blog/${params.slug}` });
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${params.slug}`,
    image: post.image,
    ogType: "article",
  });
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
