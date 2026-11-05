import type { Metadata } from "next";

export type Seo = {
  title: string;
  description: string;
  keywords: string;
};

export function pageMeta({ title, description, keywords }: Seo): Metadata {
  return {
    title,
    description,
    keywords,
    robots: { index: false, follow: false },
    openGraph: { title, description },
  };
}
