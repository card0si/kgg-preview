import { Rich } from "@/components/rich";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.terms);

export default function TermsPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.terms.h1}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell grid max-w-3xl gap-6">
          <p>
            <em>Stub. Final text to be reviewed by counsel.</em> <Rich text="[PLACEHOLDER: legal review]" />
          </p>
          <p>
            <strong>Effective date: </strong>
            <Rich text="[PLACEHOLDER: date]" />
          </p>
          <div>
            <h2>Terms of use</h2>
            <ul className="mt-4 grid gap-3 pl-5">
              <li>Site content is for general information and is not professional advice for your specific situation.</li>
              <li>Assessment results are self-reported guidance, not a formal audit.</li>
              <li>All site content belongs to Kenton Global Group, a Kentucky limited liability company, unless noted.</li>
              <li>We may update these terms at any time. Kentucky law governs.</li>
            </ul>
          </div>
          <div id="accessibility" className="offer">
            <h2>Accessibility statement</h2>
            <p className="muted mt-4">
              We aim to meet WCAG 2.1 AA. If any part of the site is hard to use, contact{" "}
              <Rich text="[PLACEHOLDER: accessibility contact email]" /> and we will help.
            </p>
          </div>
          <div id="ai-use" className="offer">
            <h2>AI use statement</h2>
            <p className="muted mt-4">
              We use AI tools in our work and in services we deliver. A person reviews AI output before it reaches clients, and client data is never used to train public models without written consent.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
