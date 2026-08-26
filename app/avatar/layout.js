import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Live Avatar",
  description: "London Strategy Centre live avatar experience.",
  path: "/avatar",
  noindex: true,
});

export default function AvatarLayout({ children }) {
  return children;
}
