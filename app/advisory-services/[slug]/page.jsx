import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { ADVISORY_SERVICES } from "@/lib/advisoryServicesData";
import ClientPage from "./AdvisoryServicePageClient.jsx";

export function generateStaticParams() {
  return Object.keys(ADVISORY_SERVICES).map((slug) => ({ slug }));
}

export default function ServicePage() {
  return <ClientPage />;
}
