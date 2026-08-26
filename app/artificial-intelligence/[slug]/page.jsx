import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { AI_SERVICES } from "@/lib/aiServicesData";
import { pageMetadata, serviceDescription } from "@/lib/seo";
import ClientPage from "./AIServicePageClient.jsx";

export function generateStaticParams() {
  return Object.keys(AI_SERVICES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = AI_SERVICES[params.slug];
  if (!service) return pageMetadata({ title: "AI Service", path: `/artificial-intelligence/${params.slug}` });
  return pageMetadata({
    title: service.title,
    description: serviceDescription(service),
    path: `/artificial-intelligence/${params.slug}`,
    image: service.image,
  });
}

export default function ServicePage() {
  return <ClientPage />;
}
