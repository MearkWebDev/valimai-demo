import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { offerings } from "@/lib/content/offerings";
import { Button } from "@/components/ui/button";
import { offeringMenuState, type MenuEvent } from "@/lib/offering-menu";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOff, setMobileOff] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const menuEvent = (event: MenuEvent) => setDropdown((current) => offeringMenuState(current, event));
  const close = () => { setOpen(false); setMobileOff(false); menuEvent("navigate"); };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setOpen(false); setMobileOff(false); setDropdown(false); }, [pathname]);

  const linkCls = "nav-link text-sm font-medium text-on-dark-muted transition-colors hover:text-on-dark";
  return (
    <header className={`site-header fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled || open ? "border-on-dark/15 bg-navy-deep/95 shadow-soft backdrop-blur-xl" : "border-on-dark/10 bg-navy-deep/80 backdrop-blur-md"}`}>
      <div className="container-x grid h-24 grid-cols-[minmax(0,1fr)_auto] items-center gap-5 lg:flex lg:justify-between">
        <Logo />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          <Link to="/" className={linkCls}>Home</Link>
          <Link to="/about" className={linkCls}>About</Link>
          <div className="relative" onMouseLeave={() => menuEvent("leave")} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) menuEvent("leave"); }} onKeyDown={(event) => { if (event.key === "Escape") menuEvent("escape"); }}>
            <Link to="/offerings" className={`${linkCls} inline-flex items-center gap-1.5 py-4`} onMouseEnter={() => menuEvent("enter")} onFocus={() => menuEvent("enter")} onClick={close} aria-expanded={dropdown} aria-controls="offerings-menu">
              Offerings <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${dropdown ? "rotate-180" : ""}`} />
            </Link>
            <div id="offerings-menu" className={`offering-dropdown absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-2 ${dropdown ? "is-open" : ""}`} inert={!dropdown}>
              <div className="border border-border border-t-2 border-t-teal bg-background p-3 shadow-soft">
                {offerings.map((o) => (
                  <Link key={o.slug} to="/offerings/$slug" params={{ slug: o.slug }} onClick={close} className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-sm px-4 py-4 text-sm font-medium text-navy transition-colors hover:bg-surface focus-visible:bg-surface">
                    <span className="min-w-0 leading-relaxed">{o.short}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-teal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/insights" className={linkCls}>Insights</Link>
          <Button asChild className="btn btn-light h-auto whitespace-normal px-5 py-3"><Link to="/contact">Book a Consulting Meeting</Link></Button>
        </nav>
        <Button variant="ghost" size="icon" className="h-11 w-11 shrink-0 text-on-dark hover:bg-on-dark/10 hover:text-on-dark lg:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} title={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="mobile-navigation max-h-[calc(100svh-6rem)] overflow-y-auto border-t border-on-dark/15 bg-navy-deep lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            <Link to="/" onClick={close} className="border-b border-on-dark/15 py-4 text-sm font-medium text-on-dark">Home</Link>
            <Link to="/about" onClick={close} className="border-b border-on-dark/15 py-4 text-sm font-medium text-on-dark">About</Link>
            <Button variant="ghost" className="h-auto justify-between rounded-none border-b border-on-dark/15 px-0 py-4 text-left text-sm font-medium text-on-dark hover:bg-on-dark/5 hover:text-on-dark" onClick={() => setMobileOff((v) => !v)} aria-expanded={mobileOff}>
              Offerings <ChevronDown className={`transition-transform ${mobileOff ? "rotate-180" : ""}`} />
            </Button>
            {mobileOff && (
              <div className="mobile-navigation border-b border-on-dark/15 pb-2">
                <Link to="/offerings" onClick={close} className="block py-3 pl-4 text-sm text-cyan">All offerings</Link>
                {offerings.map((o) => <Link key={o.slug} to="/offerings/$slug" params={{ slug: o.slug }} onClick={close} className="block py-3 pl-4 text-sm leading-relaxed text-on-dark-muted">{o.short}</Link>)}
              </div>
            )}
            <Link to="/insights" onClick={close} className="border-b border-on-dark/15 py-4 text-sm font-medium text-on-dark">Insights</Link>
            <Button asChild className="btn btn-light mt-6 h-auto whitespace-normal"><Link to="/contact" onClick={close}>Book a Consulting Meeting</Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
