import { ContactForm } from "@/components/contact-form";
import { Rich } from "@/components/rich";
import { Card } from "@/components/ui/card";
import { pages } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(pages.contact);

export default function ContactPage() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>{pages.contact.h1}</h1>
        </div>
      </section>
      <section className="section">
        <div className="shell grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <h2>Book a discovery call</h2>
            <p className="muted mt-4">
              A 30-minute call to understand your goals and the gaps in the way. No cost and no obligation.
            </p>
            <p className="mt-4">
              <Rich text="[PLACEHOLDER: calendar booking embed link]" />
            </p>
            <h2 className="mt-12">Or send us a note</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="col-span-12 grid gap-4 lg:col-span-5">
            <Card className="p-5">
              <strong>Email: </strong>
              <Rich text="[PLACEHOLDER: contact email]" />
            </Card>
            <Card className="p-5">
              <strong>Phone: </strong>
              <Rich text="[PLACEHOLDER: phone number]" />
            </Card>
            <Card className="p-5">
              <strong>Mailing address: </strong>
              <Rich text="[PLACEHOLDER: business address, Kentucky]" />
            </Card>
          </div>
          <div className="col-span-12">
            <h2>What happens next</h2>
            <ol className="mt-4 grid max-w-3xl gap-2 pl-5">
              <li>
                We reply within one business day. <Rich text="[PLACEHOLDER: confirm response time]" />
              </li>
              <li>We hold a discovery call.</li>
              <li>We send a short summary with recommended first steps.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
