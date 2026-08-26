import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Venture Evaluation Dashboard",
  description: "Your venture evaluation dashboard.",
  path: "/venture-framework/dashboard",
  noindex: true,
});

export default function VEFDashboardLayout({ children }) {
  return children;
}
