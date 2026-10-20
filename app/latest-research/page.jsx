import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import LatestResearchListing from "@/components/latest-research/LatestResearchListing";

export default function LatestResearchPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LatestResearchListing />
      <Footer />
    </div>
  );
}
