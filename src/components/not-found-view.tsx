import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Services", "/services/"],
  ["AI and Agents", "/ai-and-agents/"],
  ["Take a Gap Check", "/assessments/"],
  ["Contact us", "/contact/"],
];

export function NotFoundView() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="shell">
          <h1>We couldn&apos;t find that page</h1>
          <p className="lead mt-6">The page may have moved. Try one of these:</p>
          <ul className="mt-6 grid gap-2 pl-5">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link className="text-link" href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
