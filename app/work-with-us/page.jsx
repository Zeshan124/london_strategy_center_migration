import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import WorkWithUsHero from "@/components/InnerPages/WorkWithUs/WorkWithUsHero";
import JobListings from "@/components/InnerPages/WorkWithUs/JobListings";

export default function WorkWithUsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <WorkWithUsHero />
        <JobListings />
      </main>
      <Footer />
    </div>
  );
}
