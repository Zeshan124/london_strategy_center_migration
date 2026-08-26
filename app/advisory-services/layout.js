import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Advisory Services",
  description:
    "Strategic, operational, and entrepreneurship advisory for organisations navigating complex challenges — from London Strategy Centre.",
  path: "/advisory-services",
});

export default function AdvisoryLayout({ children }) {
  return children;
}
