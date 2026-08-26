import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How London Strategy Centre collects, uses, and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
