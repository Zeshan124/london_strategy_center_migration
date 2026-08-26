import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Policies & Legislation",
  description:
    "London Strategy Centre's policies — cookie policy, terms of use, anti-spam, data protection, and copyright.",
  path: "/policies-and-legislation",
});

export default function PoliciesLayout({ children }) {
  return children;
}
