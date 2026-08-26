import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import PressReleaseHero from "@/components/press-releases/PressReleaseHero";
import CTApartners from "@/components/press-releases/CTApartners";
import AboutOrganizations from "@/components/press-releases/AboutOrganizations";
import ContactFormSection from "@/components/InnerPages/CyberExcellence/ContactFormSection";
import { PRESS_RELEASES, getPressReleaseBySlug } from "@/lib/pressReleasesData";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return PRESS_RELEASES.map((pr) => ({ slug: pr.slug }));
}

export function generateMetadata({ params }) {
  const release = getPressReleaseBySlug(params.slug);
  if (!release) return pageMetadata({ title: "Press Release", path: `/press-release/${params.slug}` });
  return pageMetadata({
    title: release.headline,
    description: release.subheadline,
    path: `/press-release/${params.slug}`,
    image: release.heroImage,
    ogType: "article",
  });
}

export default function PressReleasePage({ params }) {
  const release = getPressReleaseBySlug(params.slug);
  if (!release) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PressReleaseHero release={release} />
        <CTApartners ctaSection={release.ctaSection} />
        <AboutOrganizations organizations={release.organizations} />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
