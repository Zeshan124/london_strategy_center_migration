import AboutSection from "@/components/Home/AboutSection";
import BlogArticlesSection from "@/components/Home/BlogArticlesSection";
import CertificationsSection from "@/components/Home/CertificationsSection";
import FeaturedEpisode from "@/components/Home/FeaturedEpisode";
import Footer from "@/components/Home/Footer";
import HeroSection from "@/components/Home/HeroSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import NewsletterCTASection from "@/components/Home/NewsletterCTASection";
import OurProgrammes from "@/components/Home/OurProgrammes";
import StatsSection from "@/components/Home/StatsSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CertificationsSection />
        <FeaturedEpisode />
        <IndustriesSection />
        {/* <BlogArticlesSection /> */}
        {/* <NewsletterCTASection /> */}
        <OurProgrammes />
      </main>
      <Footer />
    </div>
  );
}
