import Link from "next/link";
import { CtaBand } from "@/components/cta";
import { Icon } from "@/components/icon";
import { Card } from "@/components/ui/card";
import { industries, pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.industries);

export default function IndustriesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.industries.h1}</h1>
          <p className="lead mt-6">
            Every industry has its own daily problems. Our industry packs pair the right services, example scenarios and gap checks for your sector.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell grid grid-cols-12 gap-4">
          {industries.map((item) => (
            <Card key={item.slug} className="col-span-12 md:col-span-6">
              <div className="card-link">
                <span className="icon-tile">
                  <Icon name={item.icon} />
                </span>
                <h2 className="text-[length:var(--size-h3)]">{item.nav}</h2>
                <p className="muted">{item.hub}</p>
                <Link className="text-link" href={`/industries/${item.slug}/`}>
                  Explore {item.nav}
                </Link>
              </div>
            </Card>
          ))}
          <p className="col-span-12 mt-6 max-w-3xl">
            Don&apos;t see your industry? We also work with construction, healthcare practices, retail and consumer brands, and nonprofits.{" "}
            <Link className="text-link" href="/contact/">
              Talk to us
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
