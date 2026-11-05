"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icon";
import { Button } from "@/components/ui/button";
import { industries, practices } from "@/content/site";

const links = [
  { href: "/ai-and-agents/", label: "AI and Agents" },
  { href: "/assessments/", label: "Assessments" },
  { href: "/approach/", label: "Approach" },
  { href: "/insights/", label: "Insights" },
  { href: "/about/", label: "About" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [ui, setUi] = useState({
    path: "",
    mega: false,
    pinned: false,
    industry: false,
    mobile: false,
    mobileServices: false,
    mobileIndustries: false,
  });
  const live = ui.path === pathname;
  const servicesOpen = live && (ui.mega || ui.pinned);
  const industryOpen = live && ui.industry;
  const mobile = live && ui.mobile;

  function patch(partial: Partial<typeof ui>) {
    setUi((current) => ({ ...current, ...partial, path: pathname }));
  }

  useEffect(() => {
    document.body.classList.toggle("menu-open", mobile);
    return () => document.body.classList.remove("menu-open");
  }, [mobile]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setUi((current) => ({
        ...current,
        mega: false,
        pinned: false,
        industry: false,
        mobile: false,
      }));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="site-header">
      <div className="shell header-bar">
        <Link href="/" aria-label="Kenton Global Group, home">
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Main">
          <div
            className="nav-cluster"
            onMouseEnter={() => patch({ mega: true })}
            onMouseLeave={() => patch({ mega: false })}
          >
            <Link
              className="nav-link"
              href="/services/"
              aria-current={isCurrent(pathname, "/services/") ? "page" : undefined}
            >
              Services
            </Link>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-mega"
              aria-label="Open Services menu"
              onClick={() => patch({ pinned: !ui.pinned })}
            >
              <ChevronDown aria-hidden size={16} />
            </button>
          </div>
          <Link
            className="nav-link"
            href="/ai-and-agents/"
            aria-current={isCurrent(pathname, "/ai-and-agents/") ? "page" : undefined}
          >
            AI and Agents
          </Link>
          <div
            className="nav-cluster"
            onMouseEnter={() => patch({ industry: true })}
            onMouseLeave={() => patch({ industry: false })}
          >
            <Link
              className="nav-link"
              href="/industries/"
              aria-current={isCurrent(pathname, "/industries/") ? "page" : undefined}
            >
              Industries
            </Link>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded={industryOpen}
              aria-controls="industries-menu"
              aria-label="Open Industries menu"
              onClick={() => patch({ industry: !ui.industry })}
            >
              <ChevronDown aria-hidden size={16} />
            </button>
            {industryOpen ? (
              <div id="industries-menu" className="drop">
                {industries.map((item) => (
                  <Link key={item.slug} href={`/industries/${item.slug}/`}>
                    <Icon name={item.icon} />
                    <span>{item.nav}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          {links.slice(1).map((item) => (
            <Link
              key={item.href}
              className="nav-link"
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="ml-3">
            <Link href="/contact/">Book a Discovery Call</Link>
          </Button>
        </nav>
        <button
          className="burger"
          type="button"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          aria-controls="mobile-menu"
          onClick={() => patch({ mobile: !ui.mobile })}
        >
          {mobile ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {servicesOpen ? (
        <div id="services-mega" className="mega">
          <div className="shell mega-grid">
            {practices.map((group) => (
              <div key={group.slug} className="mega-col">
                <Link className="mega-title" href={`/services/${group.slug}/`}>
                  {group.title}
                </Link>
                {group.offerings.map((item) => (
                  <Link key={item.id} href={`/services/${group.slug}/#${item.id}`}>
                    <Icon name={item.icon} />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {mobile ? (
        <div id="mobile-menu" className="mobile-panel">
          <button className="nav-block" type="button" aria-expanded={live && ui.mobileServices} onClick={() => patch({ mobileServices: !ui.mobileServices })}>
            Services <ChevronDown aria-hidden size={18} />
          </button>
          {live && ui.mobileServices ? (
            <div className="mobile-sub pb-3">
              {practices.map((group) => (
                <div key={group.slug} className="pt-3">
                  <Link href={`/services/${group.slug}/`}>{group.title}</Link>
                  {group.offerings.map((item) => (
                    <Link key={item.id} href={`/services/${group.slug}/#${item.id}`}>
                      <Icon name={item.icon} />
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          ) : null}
          <Link href="/ai-and-agents/">AI and Agents</Link>
          <button className="nav-block" type="button" aria-expanded={live && ui.mobileIndustries} onClick={() => patch({ mobileIndustries: !ui.mobileIndustries })}>
            Industries <ChevronDown aria-hidden size={18} />
          </button>
          {live && ui.mobileIndustries ? (
            <div className="mobile-sub pb-3">
              <Link href="/industries/">All industries</Link>
              {industries.map((item) => (
                <Link key={item.slug} href={`/industries/${item.slug}/`}>
                  <Icon name={item.icon} />
                  <span>{item.nav}</span>
                </Link>
              ))}
            </div>
          ) : null}
          {links.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <div className="pt-6">
            <Button asChild>
              <Link href="/contact/">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
