import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import type { Faq, Offering } from "@/lib/content/offerings";
import { Reveal } from "./Reveal";

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  children,
  breadcrumb,
  tall = false,
}: {
  image?: string;
  imageAlt?: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  breadcrumb?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className={`page-hero relative flex items-end overflow-hidden bg-navy-deep ${tall ? "min-h-[88svh]" : image ? "min-h-[78svh]" : "min-h-[44svh]"}`}>
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
          fetchPriority="high"
        />
      )}
      <div className="bg-gradient-hero absolute inset-0" />
      <div className="container-x relative pb-20 pt-36 md:pb-28">
        {breadcrumb && <div className="animate-hero-in mb-6">{breadcrumb}</div>}
        <p className="eyebrow animate-hero-in !text-cyan">{eyebrow}</p>
        <div className="animate-hero-in mt-5 max-w-4xl text-on-dark" style={{ animationDelay: "120ms" }}>
          {title}
        </div>
        {description && (
          <p className="animate-hero-in mt-6 max-w-2xl text-base leading-relaxed text-on-dark-muted md:text-lg" style={{ animationDelay: "240ms" }}>
            {description}
          </p>
        )}
        {children && (
          <div className="animate-hero-in mt-10 flex flex-wrap gap-4" style={{ animationDelay: "360ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className={`mt-4 text-3xl leading-tight md:text-[2.75rem] ${dark ? "text-on-dark" : "text-navy"}`}>{title}</h2>
      {text && <p className={`mt-5 text-base leading-relaxed ${dark ? "text-on-dark-muted" : "text-muted-foreground"}`}>{text}</p>}
    </Reveal>
  );
}

export function OfferingCard({ o, index = 0 }: { o: Offering; index?: number }) {
  return (
    <Reveal delay={index * 90} className="h-full">
      <Link
        to="/offerings/$slug"
        params={{ slug: o.slug }}
        className="img-zoom group flex h-full flex-col border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-teal/50 hover:shadow-soft"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={o.image} alt={o.imageAlt} loading="lazy" width={1600} height={1008} className="h-full w-full object-cover" />
          <span className="absolute left-0 top-0 bg-navy px-4 py-2 font-display text-sm text-cyan">{o.num}</span>
        </div>
        <div className="flex flex-1 flex-col p-7">
          <h3 className="text-xl leading-snug text-navy">{o.short}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{o.tagline}</p>
          <span className="link-arrow mt-6">
            Learn more <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function CtaBand({
  title = "Ready to grow in India?",
  text = "Schedule a no-obligation consultation with our senior team to explore your options.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-gradient-brand relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-deep/40" />
      <div className="container-x relative flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
        <Reveal>
          <h2 className="text-3xl text-on-dark md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-on-dark-muted">{text}</p>
        </Reveal>
        <Reveal delay={150}>
          <Link to="/contact" className="btn btn-light">
            Book a Consulting Meeting <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion type="single" collapsible className="border-t">
      {faqs.map((f, i) => (
        <AccordionItem key={f.q} value={`f${i}`} className="border-b">
          <AccordionTrigger className="py-6 text-left font-display text-lg text-navy hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
