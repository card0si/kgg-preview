import Link from "next/link";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/paths";

export function CtaBand() {
  return (
    <section
      className="section wash"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(10,11,13,0.88), rgba(10,11,13,0.94)), url(${asset("/images/bg-network.webp")})`,
      }}
    >
      <div className="shell grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <h2>Ready to find your next gain?</h2>
          <p className="lead mt-4">
            Tell us where things feel stuck. In one short call we will point to the gaps worth fixing first.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact/">Book a Discovery Call</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/assessments/">Take a Gap Check</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
