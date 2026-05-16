import BlogPostClient from "./BlogPostClient";

export function generateStaticParams() {
  return [
    { slug: "emotional-intelligent-leadership" },
    { slug: "leadership-maturity" },
    { slug: "leadership-development-roi" },
    { slug: "leadership-practices" },
    { slug: "womens-leadership-what-to-fix" },
    { slug: "womens-leadership-confidence" },
    { slug: "limelight-or-shade" },
    { slug: "climate-action-geopolitical-tensions" },
    { slug: "pope-francis-leadership-legacy" },
    { slug: "make-innovation-happen" },
  ];
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
