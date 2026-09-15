import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import CustomisedSolutionsHero from "@/components/InnerPages/CustomisedSolutions/CustomisedSolutionsHero";
import CustomisedIntro from "@/components/InnerPages/CustomisedSolutions/CustomisedIntro";
import CustomisedTestimonial from "@/components/InnerPages/CustomisedSolutions/CustomisedTestimonial";
import CustomisedFeatures from "@/components/InnerPages/CustomisedSolutions/CustomisedFeatures";
import CustomisedCTA from "@/components/InnerPages/CustomisedSolutions/CustomisedCTA";

export default function CustomisedSolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <CustomisedSolutionsHero />
        <CustomisedIntro />
        <CustomisedTestimonial />
        <CustomisedFeatures />
        <CustomisedCTA />
      </main>
      <Footer />
    </div>
  );
}
