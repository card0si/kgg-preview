import { notFound } from "next/navigation";
import { IndustryView } from "@/components/industry-view";
import { industries } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) return {};
  return pageMeta(industry.seo);
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);
  if (!industry) notFound();
  return <IndustryView industry={industry} />;
}
