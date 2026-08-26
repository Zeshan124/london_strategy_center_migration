import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cyber Security Services",
  description:
    "Cyber risk, resilience, certification, and governance advisory. London Strategy Centre connects technical assurance with strategic governance across the full security spectrum.",
  path: "/cyber-security",
});

export default function CyberLayout({ children }) {
  return children;
}
