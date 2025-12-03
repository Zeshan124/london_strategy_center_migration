import Footer from "@/components/Home/Footer";
import FreebiesSection from "@/components/Home/FreebiesSection";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";
import NewsSection from "@/components/Home/NewsSection";
import PodcastSection from "@/components/Home/PodcastSection";
import ProgramsSection from "@/components/Home/ProgramsSection";
import StatsSection from "@/components/Home/StatsSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <HeroSection />
        <ProgramsSection />
        <PodcastSection />
        <FreebiesSection />
        <NewsSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
