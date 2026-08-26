import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Old Wine in a New Bottle — Leadership Development in the Age of AI",
  description:
    "A London Strategy Centre white paper on rethinking leadership development for an AI-driven world.",
  path: "/old-wine-in-a-new-bottle",
  ogType: "article",
});

export default function OldWineLayout({ children }) {
  return children;
}
