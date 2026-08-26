import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Women in Digital Leadership",
  description:
    "London Strategy Centre's programme advancing women in digital and AI leadership.",
  path: "/women-leadership",
});

export default function WomenLeadershipLayout({ children }) {
  return children;
}
