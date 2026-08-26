import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "White Paper — Cyber Excellence: Building Resilient Organisations",
  description:
    "A London Strategy Centre white paper on building resilient organisations through governance-led cyber excellence.",
  path: "/white-paper-cyber-excellence",
  ogType: "article",
});

export default function WhitePaperLayout({ children }) {
  return children;
}
