import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cyber Excellence",
  description:
    "LSC's Cyber Excellence programme and certification — building resilient organisations through governance-led cyber capability.",
  path: "/cyberexcellence",
});

export default function CyberExcellenceLayout({ children }) {
  return children;
}
