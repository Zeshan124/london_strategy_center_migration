import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Press Releases",
  description:
    "Latest announcements, partnerships, and strategic milestones from London Strategy Centre.",
  path: "/press-release",
});

export default function PressReleaseLayout({ children }) {
  return children;
}
