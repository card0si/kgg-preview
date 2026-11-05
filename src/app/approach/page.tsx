import { CtaBand } from "@/components/cta";
import { Rich } from "@/components/rich";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const steps = [
  { title: "Discover", text: "interviews, data review and a gap check." },
  { title: "Design", text: "a prioritized plan with owners, costs and timelines." },
  { title: "Deliver", text: "we build, automate, launch and train with your team." },
  { title: "Sustain", text: "we measure results, tune the work and hand over cleanly." },
];

const models = [
  ["Assessment", "Knowing where to start", "2 to 4 weeks"],
  ["Fixed-scope project", "One clear outcome", "6 to 12 weeks"],
  ["Embedded team", "Larger change programs", "3 to 9 months"],
  ["Ongoing or fractional support", "Leadership and upkeep without a full hire", "Monthly"],
];

const firstMonth = [
  "Week 1: kickoff and discovery interviews.",
  "Week 2: data and workflow review.",
  "Week 3: findings and priorities.",
  "Week 4: plan approved and first build underway.",
];

export const metadata = pageMeta(pages.approach);

export default function ApproachPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.approach.h1}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell grid gap-16">
          <div>
            <h2>How we work</h2>
            <ol className="mt-8 grid list-none gap-6 p-0 md:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t border-[var(--color-border)] pt-4">
                  <span className="faint">0{index + 1}</span>
                  <strong className="mt-2 block">{step.title}</strong>
                  <span className="muted">{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2>Engagement models</h2>
            <div className="mt-6 overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>Best for</th>
                    <th>Typical length</th>
                  </tr>
                </thead>
                <tbody>
                  {models.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell) => (
                        <td key={cell}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              Pricing: <Rich text='[PLACEHOLDER: pricing approach or "scoped after discovery call"]' />
            </p>
          </div>
          <div>
            <h2>Your first 30 days</h2>
            <ul className="mt-6 grid gap-3 pl-5">
              {firstMonth.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Tools we work with</h2>
            <p className="muted mt-4 max-w-3xl">
              We are tool-agnostic. We work with the platforms you already use and recommend new ones only when they clearly pay off.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
