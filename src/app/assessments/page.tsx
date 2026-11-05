import { CtaBand } from "@/components/cta";
import { Icon } from "@/components/icon";
import { Rich } from "@/components/rich";
import { ScoreBand } from "@/components/score-band";
import { Card } from "@/components/ui/card";
import { assessments, pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.assessments);

export default function AssessmentsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.assessments.h1}</h1>
          <p className="lead mt-6">
            Six short self-checks, about 10 minutes each. Answer one question at a time, get a score band (early, developing or ready) and the services that fit. Then book a call to talk it through.
          </p>
          <div className="mt-8">
            <ScoreBand />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell grid grid-cols-12 gap-4">
          {assessments.map((item) => (
            <Card key={item.id} id={item.id} className="col-span-12 scroll-mt-24 p-6 md:col-span-6 xl:col-span-4">
              <h2 className="flex items-center gap-3 text-[length:var(--size-h3)]">
                <span className="icon-tile">
                  <Icon name={item.icon} />
                </span>
                {item.title}
              </h2>
              <p className="muted mt-4">{item.text}</p>
              <ul className="mt-4 grid gap-2 pl-5">
                <li>10 to 15 questions</li>
                <li>Results: score band plus recommended services</li>
                <li>
                  <strong>Start the {item.title}</strong>{" "}
                  <Rich text="[PLACEHOLDER: assessment form link]" />
                </li>
              </ul>
            </Card>
          ))}
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
