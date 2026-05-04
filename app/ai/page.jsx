import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import AIHero from "@/components/AI/AIHero";
import PracticeAreas from "@/components/CyberSecurity/practiceAreas";
import AICTASection from "@/components/AI/AICTASection";
import TiersSection from "@/components/AI/TiersSection";
import SecondCTASection from "@/components/AI/SecondCTASection";
import Phases from "@/components/AI/Phases";
import ContactSection from "@/components/AI/ContactSection";

const AI_DEFAULT_FEATURES = [
  {
    id: 1, slug: "agentic-systems-lab",
    icon: "/images/InnerPages/cyber-security/security_governance.svg",
    title: "The Agentic Systems Lab",
    description: "LSC's operating environment for diagnosing, transforming, and permanently embedding AI-augmented capability at the organisational level — where the gap between strategic intent and system performance is closed.",
  },
  {
    id: 2, slug: "capability-transformation-scan",
    icon: "/images/InnerPages/cyber-security/verified_user.svg",
    title: "Capability Transformation (CT) Scan",
    description: "AI-enabled diagnostic that maps how leaders actually think, where decisions lose quality, how execution fragments, and what systemic constraints prevent strategy from becoming performance.",
  },
  {
    id: 3, slug: "agentic-leadership-transformation",
    icon: "/images/InnerPages/cyber-security/enhanced_encryption.svg",
    title: "Agentic Leadership Transformation",
    description: "Leaders working with AI as a thinking partner in live strategic and operational contexts — developing new decision-making practices against real challenges, not hypothetical scenarios.",
  },
  {
    id: 4, slug: "cybernetic-organisation-design",
    icon: "/images/InnerPages/cyber-security/encrypted.svg",
    title: "Cybernetic Organisation Design",
    description: "Embedding AI-augmented governance structures, sensing systems, and learning mechanisms across the enterprise — creating the structural conditions for continuous adaptation and compounding capability.",
  },
  {
    id: 5, slug: "ai-noise-to-direction",
    icon: "/images/InnerPages/cyber-security/chess_pawn.svg",
    title: "From AI Noise to Clear Direction in 5 Minutes",
    description: "Rapid diagnostic clarity for leadership teams navigating AI complexity — cutting through competing vendor claims to provide structured direction for AI investment.",
  },
  {
    id: 6, slug: "aix-programme",
    icon: "/images/InnerPages/cyber-security/support.svg",
    title: "AIx Programme",
    description: "Accelerated AI transformation pathway — combining diagnostic intelligence, leadership development, and system design into a structured programme with measurable outcomes.",
  },
];

const aiPracticeAreas = {
  heading: "AI Services",
  subheading: "LSC's AI services span the full spectrum from organisational diagnostics to system-level transformation and strategic governance. Each is designed to function independently or as part of a coordinated programme.",
  features: AI_DEFAULT_FEATURES,
};

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AIHero />
        <AICTASection />
       <TiersSection />
       <SecondCTASection />
       <Phases />
       {/* <ContactSection /> */}
        
      </main>
      <Footer />
    </div>
  );
};

export default page;
