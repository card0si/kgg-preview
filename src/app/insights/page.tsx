import { CtaBand } from "@/components/cta";
import { Rich } from "@/components/rich";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.insights);

export default function InsightsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.insights.h1}</h1>
          <p className="lead mt-6">Practical ideas you can use this week.</p>
        </div>
      </section>
      <section className="section">
        <div className="shell grid max-w-3xl gap-14">
          <article id="ai-agents-first" className="offer">
            <h2>Where AI agents pay off first in a small business</h2>
            <p className="muted mt-4">
              Start where work is repetitive, rules-based and high-volume: intake forms, status updates, invoice matching and first-draft emails. These tasks are easy to check, so a person can approve the agent&apos;s work quickly. Avoid starting with judgment-heavy decisions. Pick one workflow, measure the time it takes today, launch an agent with human approval, and compare after 30 days. Once the team trusts it, move to the next workflow.
            </p>
          </article>
          <article id="workflow-signs" className="offer">
            <h2>Five signs your workflows need a redesign</h2>
            <ol className="muted mt-4 grid gap-2 pl-5">
              <li>The same data is typed into more than one system.</li>
              <li>Work waits in someone&apos;s inbox for approval.</li>
              <li>Only one person knows how a key process works.</li>
              <li>Month-end or reporting takes days of manual effort.</li>
              <li>Customers ask for status updates you cannot answer quickly.</li>
            </ol>
            <p className="muted mt-4">If two or more sound familiar, a short workflow review will likely find quick wins.</p>
          </article>
          <article id="brand-launch-checklist" className="offer">
            <h2>Brand launch checklist for a new product line</h2>
            <ul className="muted mt-4 grid gap-2 pl-5">
              <li>Define who it is for and why they should care.</li>
              <li>Write one clear positioning line.</li>
              <li>Set name, logo, colors and voice rules.</li>
              <li>Prepare the website, product pages and listings.</li>
              <li>Plan launch content across email, social and sales.</li>
              <li>Brief your team and partners before launch day.</li>
              <li>Track early results and adjust in the first 60 days.</li>
            </ul>
          </article>
          <div>
            <h2>Stay in the loop</h2>
            <p className="mt-4">
              Newsletter sign-up: <Rich text="[PLACEHOLDER: newsletter form or provider]" />
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
