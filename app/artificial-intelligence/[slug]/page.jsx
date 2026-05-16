import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { AI_SERVICES } from "@/lib/aiServicesData";
import ClientPage from "./AIServicePageClient.jsx";

export function generateStaticParams() {
  return Object.keys(AI_SERVICES).map((slug) => ({ slug }));
}

export default function ServicePage() {
  return <ClientPage />;
}
