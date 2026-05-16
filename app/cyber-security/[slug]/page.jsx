import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import { CYBER_SERVICES } from "@/lib/cyberServicesData";
import CyberServicePageClient from "./CyberServicePageClient";

export function generateStaticParams() {
  return Object.keys(CYBER_SERVICES).map((slug) => ({ slug }));
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
