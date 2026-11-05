import Link from "next/link";
import { CtaBand } from "@/components/cta";
import { Icon } from "@/components/icon";
import { pages, practices } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.services);

export default function ServicesPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.services.h1}</h1>
          <p className="lead mt-6">
            Whatever is holding your business back, one of our four practice groups covers it. Pick a service below, or{" "}
            <Link className="text-link" href="/assessments/">
              take a gap check
            </Link>{" "}
            and we will point you to the right one.
          </p>
        </div>
      </section>
      {practices.map((group) => (
        <section key={group.slug} className="section">
          <div className="shell">
            <h2>{group.title}</h2>
            <p className="lead mt-4">{group.promise}</p>
            <p className="mt-4">
              <Link className="text-link" href={`/services/${group.slug}/`}>
                Go to {group.title}
              </Link>
            </p>
            <div className="mt-10 grid gap-8">
              {group.offerings.map((item) => (
                <article key={item.id} id={item.id} className="offer grid grid-cols-12 gap-4">
                  <h3 className="col-span-12 flex items-center gap-3 lg:col-span-4">
                    <span className="icon-tile">
                      <Icon name={item.icon} />
                    </span>
                    {item.title}
                  </h3>
                  <div className="col-span-12 lg:col-span-8">
                    <p>{item.problem}</p>
                    <p className="muted mt-3">We help with: {item.hubHelp}.</p>
                    <p className="mt-3">
                      <Link className="text-link" href={`/services/${group.slug}/#${item.id}`}>
                        Details
                      </Link>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </main>
  );
}
