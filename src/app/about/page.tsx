import Link from "next/link";
import { CtaBand } from "@/components/cta";
import { Rich } from "@/components/rich";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const reasons = [
  { title: "One partner", text: "strategy, brand, operations and technology under one roof." },
  { title: "Problem first", text: "we start with the gap, not the tool." },
  { title: "Built to run", text: "we build and launch, not just advise." },
  { title: "People in charge", text: "AI supports your team; people approve what matters." },
];

const values = ["Clarity", "Ownership", "Practical progress", "Integrity", "Partnership"];

export const metadata = pageMeta(pages.about);

export default function AboutPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.about.h1}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell grid gap-14">
          <div className="max-w-3xl">
            <h2>Our mission</h2>
            <p className="lead mt-4">
              Help businesses grow, run better and put modern technology to work, with plans that are clear and results that last.
            </p>
          </div>
          <div>
            <h2>Why Kenton Global Group</h2>
            <ul className="mt-6 grid list-none gap-4 p-0 md:grid-cols-2">
              {reasons.map((item) => (
                <li key={item.title} className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <strong>{item.title}: </strong>
                  <span className="muted">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Our values</h2>
            <ul className="mt-6 flex list-none flex-wrap gap-3 p-0">
              {values.map((value) => (
                <li key={value} className="border border-[var(--color-border-strong)] px-4 py-2">
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-3xl">
            <h2>Where we work</h2>
            <p className="muted mt-4">
              Based in Kentucky, serving clients across the United States, with remote delivery for businesses anywhere.{" "}
              <Rich text="[PLACEHOLDER: confirm regions served]" />
            </p>
          </div>
          <div className="max-w-3xl">
            <h2>Partner with us</h2>
            <p className="muted mt-4">
              We work with a network of operators and specialists across our practice groups. Interested in partnering?{" "}
              <Link className="text-link" href="/contact/">
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
