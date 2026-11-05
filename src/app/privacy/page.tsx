import { Rich } from "@/components/rich";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.privacy);

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.privacy.h1}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell grid max-w-3xl gap-4">
          <p>
            <em>Stub. Final text to be reviewed by counsel.</em> <Rich text="[PLACEHOLDER: legal review]" />
          </p>
          <p>
            <strong>Effective date: </strong>
            <Rich text="[PLACEHOLDER: date]" />
          </p>
          <ul className="grid gap-3 pl-5">
            <li>
              <strong>What we collect: </strong>
              information you give us through forms and assessments, and basic site usage data.
            </li>
            <li>
              <strong>How we use it: </strong>
              to respond to you, deliver services, improve the site and send updates you opt into.
            </li>
            <li>
              <strong>Sharing: </strong>
              we do not sell your information. We share it only with service providers who help run the site and our services.
            </li>
            <li>
              <strong>Cookies: </strong>
              we use cookies for site function and analytics. You can manage them in your browser.
            </li>
            <li>
              <strong>Your choices: </strong>
              you may request access, correction or deletion of your information.
            </li>
            <li>
              <strong>Contact: </strong>
              <Rich text="[PLACEHOLDER: privacy contact email]" />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
