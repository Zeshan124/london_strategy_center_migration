import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Home/Footer";
import ResearchArticle from "@/components/latest-research/ResearchArticle";
import { LATEST_RESEARCH, getResearchBySlug } from "@/lib/latestResearchData";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return LATEST_RESEARCH.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getResearchBySlug(slug);
  if (!article) return pageMetadata({ title: "Latest Research", path: `/latest-research/${slug}` });
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/latest-research/${slug}`,
    image: article.bannerImage,
    ogType: "article",
  });
}

export default async function LatestResearchArticlePage({ params }) {
  const { slug } = await params;
  const article = getResearchBySlug(slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ResearchArticle article={article} />
      <Footer />
    </div>
  );
}
