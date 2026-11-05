import { notFound } from "next/navigation";
import { ServiceGroup } from "@/components/service-group";
import { practices } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return practices.map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = practices.find((item) => item.slug === slug);
  if (!group) return {};
  return pageMeta(group.seo);
}

export default async function ServiceGroupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const group = practices.find((item) => item.slug === slug);
  if (!group) notFound();
  return <ServiceGroup group={group} />;
}
