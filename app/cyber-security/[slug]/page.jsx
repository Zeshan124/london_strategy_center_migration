import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { CYBER_SERVICES } from "@/lib/cyberServicesData";
import { pageMetadata, serviceDescription } from "@/lib/seo";
import CyberServicePageClient from "./CyberServicePageClient";

export function generateStaticParams() {
  return Object.keys(CYBER_SERVICES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = CYBER_SERVICES[params.slug];
  if (!service) return pageMetadata({ title: "Cyber Security Service", path: `/cyber-security/${params.slug}` });
  return pageMetadata({
    title: service.title,
    description: serviceDescription(service),
    path: `/cyber-security/${params.slug}`,
    image: service.image,
  });
}

export default function CyberServicePage() {
  return (
    <>
      <Navbar />
      <CyberServicePageClient />
      <Footer />
    </>
  );
}
