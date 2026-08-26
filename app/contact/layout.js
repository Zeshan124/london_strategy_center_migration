import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with London Strategy Centre to discuss AI capability, cyber security, strategic advisory, or digital twin engagements.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
