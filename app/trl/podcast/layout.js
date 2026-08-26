import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LSC Connect Podcast",
  description:
    "Watch LSC Connect — conversations on AI, business growth, and organisational transformation from London Strategy Centre.",
  path: "/trl/podcast",
});

export default function PodcastLayout({ children }) {
  return children;
}
