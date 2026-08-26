import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Explore London Strategy Centre's services across artificial intelligence, cyber security, and strategic advisory.",
  path: "/services",
});

export default function ServicesLayout({ children }) {
  return children;
}
