import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { ADVISORY_SERVICES } from "@/lib/advisoryServicesData";
import { pageMetadata, serviceDescription } from "@/lib/seo";
import ClientPage from "./AdvisoryServicePageClient.jsx";

export function generateStaticParams() {
  return Object.keys(ADVISORY_SERVICES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = ADVISORY_SERVICES[params.slug];
  if (!service) return pageMetadata({ title: "Advisory Service", path: `/advisory-services/${params.slug}` });
  return pageMetadata({
    title: service.title,
    description: serviceDescription(service),
    path: `/advisory-services/${params.slug}`,
    image: service.image,
  });
}

export default function ServicePage() {
  return <ClientPage />;
}
