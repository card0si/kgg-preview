import Link from "next/link";
import { CtaBand } from "@/components/cta";
import { Icon } from "@/components/icon";
import { Rich } from "@/components/rich";
import { Badge } from "@/components/ui/badge";
import { audience, serviceFaqs, timeline, type Practice } from "@/content/site";

export function ServiceGroup({ group }: { group: Practice }) {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <p className="eyebrow">
            <Link className="text-link" href="/services/">
              Services
            </Link>
          </p>
          <h1>
            {group.title}: {group.promise}
          </h1>
          <p className="lead mt-6">
            {group.promise} This practice group covers:{" "}
            {group.offerings.map((item, index) => (
              <span key={item.id}>
                {index > 0 ? ", " : null}
                <Link className="text-link" href={`#${item.id}`}>
                  {item.title}
                </Link>
              </span>
            ))}
            .
          </p>
        </div>
      </section>
      <section className="section !border-t-0">
        <div className="shell grid gap-16">
          {group.offerings.map((item) => (
            <article key={item.id} id={item.id} className="offer grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-4">
                <div className="icon-tile mb-4">
                  <Icon name={item.icon} />
                </div>
                <h2>{item.title}</h2>
              </div>
              <div className="col-span-12 grid gap-6 lg:col-span-8">
                <p>
                  <strong>The problem: </strong>
                  {item.problem}
                </p>
                <p>
                  <strong>Who this is for: </strong>
                  {audience}
                </p>
                <div>
                  <h3>How we help</h3>
                  <ul className="mt-3 grid gap-2 pl-5">
                    {item.help.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
                <p>
                  <strong>What you get: </strong>
                  {item.outcome}
                </p>
                <p>
                  <strong>Typical timeline: </strong>
                  <Rich text={timeline} />
                </p>
                <aside className="scenario">
                  <Badge>Example scenario</Badge>
                  <p className="mt-3">
                    <span className="faint">Illustrative, not a real client. </span>
                    {item.scenario}
                  </p>
                </aside>
              </div>
            </article>
          ))}
          <div className="grid gap-4">
            <h2>Frequently asked questions</h2>
            {serviceFaqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p className="muted mt-2">{item.a}</p>
              </details>
            ))}
            <p>
              <strong>Related assessments: </strong>
              <Link className="text-link" href="/assessments/#business-gap">
                Business Gap Check
              </Link>
              {" · "}
              <Link className="text-link" href="/assessments/#workflow">
                Workflow and Automation Check
              </Link>
            </p>
            <p>
              <strong>Related industries: </strong>
              <Link className="text-link" href="/industries/">
                Industries
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
