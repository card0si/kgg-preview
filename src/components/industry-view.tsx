import Link from "next/link";
import { CtaBand } from "@/components/cta";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Industry } from "@/content/site";

export function IndustryView({ industry }: { industry: Industry }) {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">
            <Link className="text-link" href="/industries/">
              Industries
            </Link>
          </p>
          <h1>{industry.title}</h1>
          <p className="lead mt-6">
            <strong>Who we serve: </strong>
            {industry.who}
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <h2>Common problems</h2>
            <ul className="mt-6 grid gap-3 pl-5">
              {industry.problems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <h2>Recommended service bundle</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {industry.bundle.map((item) => (
                <Card key={item.href}>
                  <Link className="card-link" href={item.href}>
                    <strong>{item.label}</strong>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
          <aside className="scenario col-span-12">
            <Badge>Example scenario</Badge>
            <p className="mt-3">
              <span className="faint">Illustrative, not a real client. </span>
              {industry.scenario}
            </p>
          </aside>
          <div className="col-span-12 grid gap-3">
            <h2>Start with an assessment</h2>
            <p>
              <Link className="text-link" href={industry.assessment.href}>
                {industry.assessment.label}
              </Link>
            </p>
            <h2 className="mt-6">Related insights</h2>
            <p>
              <Link className="text-link" href="/insights/">
                Insights
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
