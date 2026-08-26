import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LSC Venture Framework — Investor-Grade Venture Evaluation",
  description:
    "A structured, investor-grade framework for evaluating startup investment opportunities — with a scored INVEST, PIVOT, or DISCARD recommendation from London Strategy Centre.",
  path: "/venture-framework",
});

export default function VentureFrameworkLayout({ children }) {
  return children;
}
