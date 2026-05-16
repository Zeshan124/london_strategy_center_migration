import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import AdvisoryHero from "@/components/Advisory/AdvisoryHero";
import PracticeAreas from "@/components/CyberSecurity/practiceAreas";
import CTASection from "@/components/Advisory/CTASection";
import AdvisoryPractices from "@/components/Advisory/AdvisoryPractices";
import SecondCTASection from "@/components/Advisory/SecondCTASection";
import BottomSection from "@/components/Advisory/BottomSection";

const ADVISORY_FEATURES = [
  {
    id: 1, slug: "strategy-advisory",
    icon: "/images/InnerPages/cyber-security/security_governance.svg",
    title: "Strategy Advisory",
    description: "Translating strategic intent into organisational reality — from strategic diagnosis through to execution architecture.",
  },
  {
    id: 2, slug: "leadership-advisory",
    icon: "/images/InnerPages/cyber-security/security_mature.svg",
    title: "Leadership Advisory",
    description: "Strengthening the leadership capability that drives organisational performance — at individual, team, and system level.",
  },
  {
    id: 3, slug: "organisational-design",
    icon: "/images/InnerPages/cyber-security/virtual.svg",
    title: "Organisational Design",
    description: "Designing the structures, governance mechanisms, and operating models that enable strategy and sustain performance.",
  },
  {
    id: 4, slug: "digital-transformation-advisory",
    icon: "/images/InnerPages/cyber-security/board_level.svg",
    title: "Digital Transformation Advisory",
    description: "Ensuring digital investment produces organisational capability — addressing governance, leadership, and the structural conditions for digital performance.",
  },
];

const advisoryPracticeAreas = {
  heading: "Advisory Services",
  subheading: "LSC's advisory services address the strategic, leadership, and organisational conditions that determine whether organisations can perform at the level their context demands.",
  features: ADVISORY_FEATURES,
  linkPrefix: "/advisory-services",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AdvisoryHero />
        <CTASection />
        <AdvisoryPractices />
        <SecondCTASection />
        <BottomSection />
      </main>
      <Footer />
    </div>
  );
};

export default page;
