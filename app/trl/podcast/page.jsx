import React from "react";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Navbar";
import ReframeReadsHero from "@/components/ReframeReads/ReframeReadsHero";
import PodcastCarousel from "@/components/ReframeReads/PodcastCarousel";
import VideoSection from "@/components/TRL/VideoSection";
import { fetchChannelVideos } from "@/lib/youtube";
import ContactFormSection from "@/components/ReframeReads/ContactFormSection";

// server component: fetch video data before render
const page = async () => {
  const channelId = process.env.YOUTUBE_CHANNEL_ID || "";
  const allVideos = await fetchChannelVideos(channelId);
  const initialVideos = allVideos.slice(0, 12);
  const totalCount = allVideos.length;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ReframeReadsHero />
        <PodcastCarousel />
        <VideoSection
          initialVideos={initialVideos}
          allVideos={allVideos}
          totalCount={totalCount}
        />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default page;
