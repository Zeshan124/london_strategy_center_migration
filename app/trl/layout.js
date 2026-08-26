import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "The Reframe Lab",
  description:
    "LSC's intellectual platform — where the assumptions behind strategy, capability, and organisational design are examined and reconstructed.",
  path: "/trl",
});

export default function TRLLayout({ children }) {
  return children;
}
