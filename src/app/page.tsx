import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta";
import { Icon } from "@/components/icon";
import { Rise } from "@/components/rise";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  engagementModels,
  homeExamples,
  homeInsights,
  homeProblems,
  homeSteps,
  industries,
  pages,
  practices,
} from "@/content/site";
import { asset } from "@/lib/paths";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.home);

export default function HomePage() {
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-grid" aria-hidden />
        <div className="shell relative grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10">
            <Rise>
              <div className="accent-bar" />
              <h1 className="display">{pages.home.h1}</h1>
            </Rise>
            <Rise delay={0.08}>
              <p className="lead mt-6">{pages.home.sub}</p>
            </Rise>
            <Rise delay={0.16}>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact/">Book a Discovery Call</Link>
                </Button>
              </div>
            </Rise>
          </div>
        </div>
      </section>

      <section
        className="section wash"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,11,13,0.9), rgba(10,11,13,0.94)), url(${asset("/images/bg-hero-glow.webp")})`,
        }}
      >
        <div className="shell grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <p className="eyebrow">01</p>
            <h2>Problems we solve</h2>
          </div>
          <ul className="col-span-12 m-0 grid list-none gap-px bg-[var(--color-border)] p-0 sm:grid-cols-2 lg:col-span-8">
            {homeProblems.map((item) => (
              <li key={item.text} className="flex gap-4 bg-[var(--color-bg)] p-6">
                <span className="icon-tile shrink-0">
                  <Icon name={item.icon} />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">02</p>
          <h2>One partner, four practice groups</h2>
          <div className="mt-10 grid grid-cols-12 gap-px bg-[var(--color-border)]">
            {practices.map((group) => (
              <Card key={group.slug} className="col-span-12 rounded-none border-0 bg-[var(--color-bg)] md:col-span-6 xl:col-span-3">
                <Link className="card-link" href={`/services/${group.slug}/`}>
                  <strong>{group.title}</strong>
                  <span className="muted">{group.home}</span>
                  <ArrowUpRight className="mt-auto" aria-hidden size={16} />
                </Link>
              </Card>
            ))}
          </div>
          <h3 className="mt-16">All 16 services</h3>
          <div className="mt-4 grid md:grid-cols-2">
            {practices.flatMap((group) =>
              group.offerings.map((item) => (
                <Link key={item.id} className="row-link" href={`/services/${group.slug}/#${item.id}`}>
                  <span className="icon-tile">
                    <Icon name={item.icon} />
                  </span>
                  <span>
                    <strong className="block">{item.title}</strong>
                    <span className="muted">{item.problem}</span>
                  </span>
                  <ArrowUpRight aria-hidden size={16} />
                </Link>
              )),
            )}
          </div>
        </div>
      </section>

      <section
        className="section wash"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10,11,13,0.86), rgba(10,11,13,0.94)), url(${asset("/images/bg-contours.webp")})`,
        }}
      >
        <div className="shell grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow">03</p>
            <h2>Artificial intelligence and agents, problem first</h2>
            <p className="lead mt-4">
              We start with the work, not the tool. We find the tasks that slow you down, design AI agents to handle them, and keep a person in charge of every decision that matters.
            </p>
            <p className="mt-6">
              <Link className="text-link" href="/ai-and-agents/">
                Explore AI and Agents
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <h2>Not sure where to start? Take a gap check</h2>
            <p className="lead mt-4">
              Six short self-checks show where your business is strong and where it leaks time and money.
            </p>
            <p className="mt-6">
              <Link className="text-link" href="/assessments/">
                See all assessments
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>How we work</h2>
          <ol className="mt-10 grid list-none grid-cols-12 gap-6 p-0">
            {homeSteps.map((step) => (
              <li key={step.n} className="col-span-12 border-t border-[var(--color-border)] pt-5 sm:col-span-6 xl:col-span-3">
                <span className="faint font-[family-name:var(--font-display-loaded),var(--font-display)] text-3xl">{step.n}</span>
                <strong className="mt-3 block">{step.title}</strong>
                <span className="muted">{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Ways to work with us</h2>
          <ul className="mt-8 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {engagementModels.map((model) => (
              <li key={model} className="border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5">
                {model}
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link className="text-link" href="/approach/">
              See our approach
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Industries we serve</h2>
          <div className="mt-8 grid grid-cols-12 gap-4">
            {industries.map((item) => (
              <Card key={item.slug} className="col-span-12 sm:col-span-6 xl:col-span-3">
                <Link className="card-link" href={`/industries/${item.slug}/`}>
                  <span className="icon-tile">
                    <Icon name={item.icon} />
                  </span>
                  <strong>{item.nav}</strong>
                  <span className="muted">{item.who}</span>
                </Link>
              </Card>
            ))}
          </div>
          <p className="mt-6">
            <Link className="text-link" href="/industries/">
              Industries
            </Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Example scenarios</h2>
          <div className="mt-8 grid grid-cols-12 gap-4">
            {homeExamples.map((item) => (
              <Card key={item.label} className="col-span-12 p-6 md:col-span-4">
                <Badge>Example scenario</Badge>
                <p className="mt-4">
                  <strong>{item.label}: </strong>
                  {item.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2>Latest insights</h2>
          <div className="mt-8 grid grid-cols-12 gap-4">
            {homeInsights.map((item) => (
              <Card key={item.href} className="col-span-12 md:col-span-4">
                <Link className="card-link" href={item.href}>
                  <strong>{item.title}</strong>
                </Link>
              </Card>
            ))}
          </div>
          <p className="mt-6">
            <Link className="text-link" href="/insights/">
              Read insights
            </Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
