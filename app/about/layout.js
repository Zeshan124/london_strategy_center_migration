import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Learn how London Strategy Centre helps organisations become intelligent, adaptive systems through AI capability transformation, cyber security, and strategic advisory.",
  path: "/about",
});

export default function AboutLayout({ children }) {
  return children;
}
