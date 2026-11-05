import { NotFoundView } from "@/components/not-found-view";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.notFound);

export default function MissingPage() {
  return <NotFoundView />;
}
