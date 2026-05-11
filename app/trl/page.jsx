import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import HomePage from "@/components/TRL/HomePage";
import CTASection from "@/components/TRL/CTASection";
import LeadersThink from "@/components/TRL/LeadersThink";
import LessonsForLeaders from "@/components/TRL/LessonsForLeaders";
import ThePodcast from "@/components/TRL/ThePodcast";
import ThoughtLeadership from "@/components/TRL/ThoughtLeadership";
import { Bot } from "lucide-react";
import BottomSection from "@/components/TRL/BottomSection";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HomePage />
        <CTASection />
        <LeadersThink />
        <LessonsForLeaders />
        <ThePodcast />
        <ThoughtLeadership />
        <BottomSection />
      </main>
      <Footer />
    </div>
  );
};

export default page;
