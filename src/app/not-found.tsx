import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(pages.notFound);

export default function NotFound() {
  return <NotFoundView />;
}
