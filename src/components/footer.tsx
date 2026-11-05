import Link from "next/link";
import { Logo } from "@/components/logo";
import { practices } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <Link href="/" aria-label="Kenton Global Group, home">
            <Logo />
          </Link>
          <div className="footer-links">
            {practices.map((group) => (
              <div key={group.slug}>
                <p className="text-[length:var(--size-eyebrow)] font-semibold uppercase tracking-[0.12em]">
                  <Link href={`/services/${group.slug}/`} className="no-underline">
                    {group.title}
                  </Link>
                </p>
                <ul className="m-0 list-none p-0">
                  {group.offerings.map((item) => (
                    <li key={item.id}>
                      <Link href={`/services/${group.slug}/#${item.id}`}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bar">
          <span>© 2026 Kenton Global Group · Kentucky</span>
          <span>
            <Link href="/privacy/">Privacy</Link>
            {" · "}
            <Link href="/terms/">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
