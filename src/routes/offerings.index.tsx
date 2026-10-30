import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-offerings.jpg";
import { offerings } from "@/lib/content/offerings";
import { pageHead } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/offerings/")({
  head: () =>
    pageHead({
      title: "Business Consulting Services in India | Valimai Offerings",
      description:
        "Market research, India market entry, stakeholder management, joint ventures and large-scale programme management from an India-focused strategic boutique.",
      path: "/offerings",
    }),
  component: OfferingsPage,
});

const journey = ["Understand the market", "Enter it", "Build the right partnerships", "Manage your relationships", "Deliver at scale"];

function OfferingsPage() {
  return (
    <>
      <PageHero
        image={hero}
        imageAlt="Modern corporate atrium with business professionals in India"
        eyebrow="Our Offerings"
        title={
          <>
            <h1 className="sr-only">Our Offerings</h1>
            <p className="font-display text-4xl leading-tight md:text-6xl">
              From insight to delivery, <span className="italic text-cyan">everything you need to succeed in India.</span>
            </p>
          </>
        }
        description="Each offering stands on its own, and together they form a single journey: understand the market, enter it, build the right partnerships, manage your relationships and deliver at scale."
      />

      <section className="border-b">
        <div className="container-x grid grid-cols-2 gap-px bg-border md:grid-cols-5">
          {journey.map((j, i) => (
            <Reveal key={j} delay={i * 80} className="bg-background px-4 py-8">
              <span className="font-display text-sm text-teal">0{i + 1}</span>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-navy">{j}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x space-y-20 md:space-y-28">
          {offerings.map((o, i) => (
            <div key={o.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={`img-zoom aspect-[16/11] ${i % 2 ? "lg:order-2" : ""}`}>
                <img src={o.image} alt={o.imageAlt} loading="lazy" width={1600} height={1008} className="h-full w-full object-cover" />
              </Reveal>
              <Reveal delay={120}>
                <p className="font-display text-6xl text-gradient-brand">{o.num}</p>
                <h2 className="mt-4 text-2xl leading-snug text-navy md:text-4xl">{o.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{o.tagline}</p>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {o.included.slice(0, 3).map((x) => (
                    <li key={x.name} className="flex gap-3"><span className="mt-2 h-1 w-4 shrink-0 bg-teal" />{x.name}</li>
                  ))}
                </ul>
                <Link to="/offerings/$slug" params={{ slug: o.slug }} className="btn btn-outline mt-8">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="Not sure where to start?" text="Tell us your objective and we'll recommend the right combination of support." />
    </>
  );
}
