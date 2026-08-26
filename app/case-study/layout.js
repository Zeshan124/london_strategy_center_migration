import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Real-world AI transformations across aviation, healthcare, real estate, sustainability, marketing automation, and entrepreneurship — delivered by London Strategy Centre.",
  path: "/case-study",
});

export default function CaseStudyLayout({ children }) {
  return children;
}
