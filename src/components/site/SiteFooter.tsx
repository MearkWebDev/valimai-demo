import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { offerings } from "@/lib/content/offerings";

export function SiteFooter() {
  const h = "mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cyan";
  const a = "text-sm text-on-dark-muted transition-colors hover:text-on-dark";
  return (
    <footer className="bg-navy-deep text-on-dark">
      <div className="container-x grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-on-dark-muted">
            India-Focused Strategic Boutique Business Consulting Firm. Supporting India's journey to a Developed Nation by 2047.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn btn-light !py-3">Book a Consulting Meeting</Link>
            {/* LinkedIn URL to be confirmed */}
            <a href="#" aria-label="LinkedIn (link to be added)" className="flex h-11 w-11 items-center justify-center border border-on-dark/30 transition-colors hover:border-cyan hover:text-cyan">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className={h}>Offerings</p>
          <ul className="space-y-3">
            {offerings.map((o) => (
              <li key={o.slug}>
                <Link to="/offerings/$slug" params={{ slug: o.slug }} className={a}>{o.short}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-2">
          <p className={h}>Company</p>
          <ul className="space-y-3">
            <li><Link to="/about" className={a}>About Us</Link></li>
            <li><Link to="/offerings" className={a}>Offerings</Link></li>
            <li><Link to="/insights" className={a}>Insights</Link></li>
            <li><Link to="/contact" className={a}>Book a Consulting Meeting</Link></li>
          </ul>
        </div>
        <div className="lg:col-span-3">
          <p className={h}>Contact</p>
          <address className="space-y-2 text-sm not-italic leading-relaxed text-on-dark-muted">
            <p>[Registered office, City, PIN]</p>
            <p>[New Delhi office, if any]</p>
            <p>[email] · [phone]</p>
          </address>
          <p className={`${h} mt-8`}>Legal</p>
          <ul className="space-y-2">
            <li><Link to="/privacy-policy" className={a}>Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className={a}>Terms of Use</Link></li>
            <li><Link to="/ethics-compliance" className={a}>Ethics & Compliance</Link></li>
            <li><Link to="/cookie-policy" className={a}>Cookie Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-on-dark/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-on-dark-muted md:flex-row md:justify-between">
          <p>© 2026 Valimai Private Limited. All rights reserved. · CIN: [ ]</p>
          <p>Strategic Business Consulting. Meaningful Business Growth.</p>
        </div>
      </div>
    </footer>
  );
}
