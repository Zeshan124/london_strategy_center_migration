import AboutSection from "@/components/Home/AboutSection";
import BlogArticlesSection from "@/components/Home/BlogArticlesSection";
import CertificationsSection from "@/components/Home/CertificationsSection";
import FeaturedEpisode from "@/components/Home/FeaturedEpisode";
import Footer from "@/components/Home/Footer";
import FreebiesSection from "@/components/Home/FreebiesSection";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import IndustriesSection from "@/components/Home/IndustriesSection";
import NewsSection from "@/components/Home/NewsSection";
import PodcastSection from "@/components/Home/PodcastSection";
import ProgramsSection from "@/components/Home/ProgramsSection";
import StatsSection from "@/components/Home/StatsSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CertificationsSection />
        <FeaturedEpisode />
        <IndustriesSection />
        <BlogArticlesSection />
        {/* <ProgramsSection />
        <PodcastSection />
        <FreebiesSection />
        <NewsSection /> */}
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
