import Link from "next/link";
import { CtaBand } from "@/components/cta";
import { ScoreBand } from "@/components/score-band";
import { Badge } from "@/components/ui/badge";
import { pages } from "@/content/site";
import { asset } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

const useCases = [
  { title: "Sales", text: "lead research, proposal drafts, follow-up emails." },
  { title: "Operations", text: "order intake, scheduling, status updates." },
  { title: "Finance", text: "invoice matching, collections reminders, cash reports." },
  { title: "Customer service", text: "first-response drafts, routing, knowledge answers." },
  { title: "Back office", text: "document processing, data entry, report building." },
];

const faqs = [
  { q: "Is our data safe?", a: "We set data rules first and use tools that keep your data private." },
  { q: "Will AI replace our staff?", a: "Our goal is to remove busywork so people focus on higher-value work." },
  { q: "What does a first project look like?", a: "A readiness check, then one agent on one workflow, live in weeks." },
];

export const metadata = pageMeta(pages.ai);

export default function AiPage() {
  return (
    <main id="main">
      <section
        className="page-hero wash"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,11,13,0.82), rgba(10,11,13,0.94)), url(${asset("/images/bg-contours.webp")})`,
        }}
      >
        <div className="shell">
          <h1>{pages.ai.h1}</h1>
          <p className="lead mt-6">
            We put AI to work on the tasks that slow your team down, with a person approving what matters.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell grid max-w-4xl gap-12">
          <div>
            <h2>Overview</h2>
            <p className="muted mt-4">
              AI is only useful when it fixes a real problem. We start with your workflows, find the work an agent can handle, build it, and train your team to run it. We are tool-agnostic and pick the model and platform that fit.
            </p>
          </div>
          <div id="readiness" className="offer">
            <h2>Readiness</h2>
            <p className="muted mt-4">
              We review your data, tools, people and risks, then score where you stand: early, developing or ready.
            </p>
            <div className="mt-6">
              <ScoreBand />
            </div>
          </div>
          <div id="use-cases" className="offer">
            <h2>Use case library</h2>
            <ul className="mt-6 grid list-none gap-4 p-0 sm:grid-cols-2">
              {useCases.map((item) => (
                <li key={item.title} className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <strong>{item.title}: </strong>
                  <span className="muted">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div id="agents" className="offer">
            <h2>Agent build and support</h2>
            <p className="muted mt-4">
              We design agents per workflow: what they read, what they do, when they hand off to a person. Then we build, test, launch and keep tuning.
            </p>
          </div>
          <div id="governance" className="offer">
            <h2>Governance and human approval</h2>
            <p className="muted mt-4">
              Clear rules for data, access, review and logging. People approve every action with real consequences.
            </p>
          </div>
          <div id="data" className="offer">
            <h2>Data foundations</h2>
            <p className="muted mt-4">
              Agents are only as good as the data behind them. We clean, connect and secure it first.
            </p>
          </div>
          <div id="training" className="offer">
            <h2>Training and adoption</h2>
            <p className="muted mt-4">Hands-on training so teams trust and use the tools from week one.</p>
          </div>
          <aside className="scenario">
            <Badge>Example scenario</Badge>
            <p className="mt-3">
              <span className="faint">Illustrative, not a real client. </span>
              A professional services firm spends hours on client intake. We build an agent that reads incoming requests, drafts the intake file and sends it to a staff member to approve.
            </p>
          </aside>
          <div>
            <h2>Frequently asked questions</h2>
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p className="muted mt-2">{item.a}</p>
              </details>
            ))}
            <p className="mt-6">
              <Link className="text-link" href="/assessments/#ai-readiness">
                Take the AI Readiness Check
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
