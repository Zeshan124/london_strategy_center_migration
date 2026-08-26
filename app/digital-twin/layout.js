import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "LSC Digital Twin",
  description:
    "Transform leadership logic into scalable intelligence. LSC's Digital Twin turns how leaders think into continuous organisational intelligence — not AI coaching, but leadership intelligence engineered for scale.",
  path: "/digital-twin",
});

export default function DigitalTwinLayout({ children }) {
  return children;
}
