import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Insights and analysis on AI, leadership, cyber security, and organisational transformation from London Strategy Centre.",
  path: "/blog",
});

export default function BlogLayout({ children }) {
  return children;
}
