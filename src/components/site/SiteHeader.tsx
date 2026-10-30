import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { offerings } from "@/lib/content/offerings";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOff, setMobileOff] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;
  const linkCls = `text-[0.78rem] font-medium tracking-[0.08em] uppercase transition-colors ${
    solid ? "text-navy hover:text-royal" : "text-on-dark hover:text-cyan"
  }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/95 shadow-soft backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Logo dark={!solid} />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          <Link to="/" className={linkCls}>Home</Link>
          <Link to="/about" className={linkCls}>About</Link>
          <div className="group relative">
            <Link to="/offerings" className={`${linkCls} inline-flex items-center gap-1`}>
              Offerings <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[26rem] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="border-t-2 border-teal bg-background p-3 shadow-soft">
                {offerings.map((o) => (
                  <Link
                    key={o.slug}
                    to="/offerings/$slug"
                    params={{ slug: o.slug }}
                    className="flex gap-4 rounded-sm px-4 py-3 transition-colors hover:bg-surface"
                  >
                    <span className="font-display text-sm text-teal">{o.num}</span>
                    <span className="text-sm font-medium text-navy">{o.short}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/insights" className={linkCls}>Insights</Link>
          <Link to="/contact" className={`btn ${solid ? "btn-primary" : "btn-light"} !py-3`}>
            Book a Consulting Meeting
          </Link>
        </nav>
        <button
          className={`lg:hidden ${solid ? "text-navy" : "text-on-dark"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t bg-background lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            <Link to="/" className="border-b py-4 text-sm font-medium text-navy">Home</Link>
            <Link to="/about" className="border-b py-4 text-sm font-medium text-navy">About</Link>
            <button
              className="flex items-center justify-between border-b py-4 text-left text-sm font-medium text-navy"
              onClick={() => setMobileOff((v) => !v)}
              aria-expanded={mobileOff}
            >
              Offerings <ChevronDown className={`h-4 w-4 transition-transform ${mobileOff ? "rotate-180" : ""}`} />
            </button>
            {mobileOff && (
              <div className="border-b pb-2">
                <Link to="/offerings" className="block py-2.5 pl-4 text-sm text-royal">All offerings</Link>
                {offerings.map((o) => (
                  <Link key={o.slug} to="/offerings/$slug" params={{ slug: o.slug }} className="block py-2.5 pl-4 text-sm text-muted-foreground">
                    {o.short}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/insights" className="border-b py-4 text-sm font-medium text-navy">Insights</Link>
            <Link to="/contact" className="btn btn-primary mt-6">Book a Consulting Meeting</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
