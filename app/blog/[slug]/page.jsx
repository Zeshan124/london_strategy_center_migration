import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return [
    { slug: "leading-in-the-age-of-agentic-ai" },
    { slug: "the-real-global-ai-race" },
    { slug: "women-in-leadership-and-ai" },
    { slug: "techno-feudalism" },
    { slug: "sustainability_and_technology" },
    { slug: "ai-brains-future" },
  ];
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
