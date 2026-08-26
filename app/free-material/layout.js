import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Free Materials",
  description:
    "Download free resources, frameworks, and guides on AI, cyber security, and organisational transformation from London Strategy Centre.",
  path: "/free-material",
});

export default function FreeMaterialLayout({ children }) {
  return children;
}
