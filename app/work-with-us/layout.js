import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work With Us",
  description:
    "Latest jobs and career opportunities with London Strategy Centre — we look for dynamic individuals who bring energy and a growth mindset to achieve our vision.",
  path: "/work-with-us",
});

export default function WorkWithUsLayout({ children }) {
  return children;
}
