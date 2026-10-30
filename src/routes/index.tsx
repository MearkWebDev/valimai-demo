import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Landmark, Globe2, Cpu, Building2, TrendingUp, Search, Compass, Handshake, Rocket,
} from "lucide-react";
import hero from "@/assets/hero-home.jpg";
import vision from "@/assets/vision-delhi.jpg";
import { offerings, values } from "@/lib/content/offerings";
import { pageHead } from "@/lib/seo";
import { CtaBand, OfferingCard, PageHero, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Valimai | India-Focused Strategic Business Consulting Firm",
      description:
        "Valimai is an India-focused strategic boutique consulting firm helping governments and global businesses with market entry, partnerships and programme delivery.",
      path: "/",
    }),
  component: Home,
});

const audiences = [
  { icon: Landmark, label: "Government & Public Institutions" },
  { icon: Globe2, label: "International Enterprises" },
  { icon: Cpu, label: "Technology & Automation Providers" },
  { icon: Building2, label: "Indian Corporates & MSMEs" },
  { icon: TrendingUp, label: "Entrepreneurs & Investors" },
];

const why = [
  { t: "India-focused. Boutique by design.", d: "We focus only on India, and we stay deliberately small, so every engagement gets senior attention, deep local insight and genuine accountability." },
  { t: "Trusted access across India", d: "We have strong working relationships with senior Government officials in New Delhi and state capitals, and across industry bodies and institutions, to help clients engage the right people the right way." },
  { t: "Independent and unbiased", d: "We are not tied to any vendor, product or agenda. Our advice is built around your interests and India's long-term growth." },
  { t: "From strategy to delivery", d: "We don't stop at the report. We help you enter, partner, coordinate and deliver large programmes on time, on budget and to quality." },
];

const steps = [
  { icon: Search, t: "Understand", d: "Your objectives, context and constraints." },
  { icon: Compass, t: "Strategise", d: "Research-led options and a clear roadmap." },
  { icon: Handshake, t: "Connect", d: "The right partners, stakeholders and institutions." },
  { icon: Rocket, t: "Deliver", d: "Hands-on execution and programme management." },
];

const goals = [
  { q: "I need to know if India is right for us.", slug: offerings[0].slug },
  { q: "We're ready to enter or expand in India.", slug: offerings[1].slug },
  { q: "We need someone to manage our relationships on the ground.", slug: offerings[2].slug },
  { q: "We're looking for a partner, manufacturer or investor.", slug: offerings[3].slug },
  { q: "We have a major programme that must be delivered.", slug: offerings[4].slug },
];

const stats = [
  "Years of combined senior experience",
  "Sectors served",
  "International partners engaged",
  "States & capital regions covered",
];

function Home() {
  const [goal, setGoal] = useState(0);
  const selected = offerings.find((o) => o.slug === goals[goal].slug)!;

  return (
    <>
      <PageHero
        tall
        image={hero}
        imageAlt="Business professionals walking through a modern New Delhi business district at dusk"
        eyebrow="India-Focused Strategic Boutique Business Consulting Firm"
        title={
          <h1 className="text-4xl leading-[1.08] md:text-6xl lg:text-7xl">
            Strategic Business Consulting.
            <br />
            <span className="italic text-cyan">Meaningful Business Growth.</span>
          </h1>
        }
        description="We work closely with senior Indian Government officials in New Delhi and other capital regions, as well as organisations, entrepreneurs and international enterprises, to navigate complex business environments, unlock emerging opportunities and drive sustainable growth in India."
      >
        <Link to="/contact" className="btn btn-light">Book a Consulting Meeting <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/offerings" className="btn btn-outline-light">Explore Our Offerings</Link>
      </PageHero>

      {/* Who we work with */}
      <section className="border-b bg-background">
        <div className="container-x grid grid-cols-2 gap-px bg-border md:grid-cols-5">
          {audiences.map((a, i) => (
            <Reveal key={a.label} delay={i * 70} className="flex flex-col items-center gap-3 bg-background px-4 py-10 text-center">
              <a.icon className="h-6 w-6 text-teal" strokeWidth={1.5} />
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-navy">{a.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Who we are" title="An India-focused strategic boutique, built on relationships" />
          </div>
          <Reveal delay={120} className="space-y-6 text-base leading-relaxed text-muted-foreground lg:col-span-7">
            <p>Valimai is an India-focused strategic boutique business consulting firm. We help businesses and institutions succeed in India through informed strategy, meaningful partnerships and result-driven execution.</p>
            <p>Driven by a commitment to relationships, quality, integrity and excellence, we offer tailored consulting across market research, business strategy, market entry, strategic partnerships, stakeholder management, government and institutional engagement, investment facilitation and large-scale programme management.</p>
            <p>As a boutique firm, every client works directly with our senior team. We go beyond conventional advisory to become an extended strategic partner, working alongside clients to build relationships, open doors, solve challenges and create long-term value.</p>
            <p className="border-l-2 border-teal pl-6 font-display text-xl italic leading-snug text-navy">
              Our commitment is simple: to deliver excellence, build lasting trust and create meaningful business impact.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="relative overflow-hidden bg-navy-deep">
        <img src={vision} alt="Aerial view of India Gate and Kartavya Path in New Delhi at blue hour" loading="lazy" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="bg-gradient-dark absolute inset-0" />
        <div className="container-x relative py-28 text-center md:py-40">
          <Reveal>
            <p className="eyebrow !text-cyan">Our vision</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-3xl leading-tight text-on-dark md:text-5xl">
              Supporting India's journey to becoming a Developed Nation by 2047.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-on-dark-muted">
              We bring the world's best technology, automation and partners to India, responsibly, to help build a safer, more sustainable and more prosperous nation.
            </p>
            <Link to="/about" className="btn btn-outline-light mt-10">Read Our Story</Link>
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="How we help" title="Our Offerings" text="Five integrated offerings that take you from insight to on-ground delivery." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o, i) => <OfferingCard key={o.slug} o={o} index={i} />)}
            <Reveal delay={450} className="flex flex-col justify-between bg-navy p-8 text-on-dark">
              <div>
                <p className="eyebrow !text-cyan">Not sure where to start?</p>
                <p className="mt-4 font-display text-2xl leading-snug">Tell us your objective and we'll recommend the right combination of support.</p>
              </div>
              <Link to="/contact" className="btn btn-light mt-8 self-start">Speak to Our Team</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Valimai */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Why Valimai" title="Why organisations choose Valimai" />
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:col-span-8">
            {why.map((w, i) => (
              <Reveal key={w.t} delay={i * 90} className="bg-background p-8 md:p-10">
                <span className="font-display text-sm text-teal">0{i + 1}</span>
                <h3 className="mt-3 text-xl text-navy">{w.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-x">
          <SectionHeading dark eyebrow="Our values" title="What we stand for" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="group border border-on-dark/15 p-8 transition-colors duration-500 hover:border-cyan/60 hover:bg-on-dark/5">
                <span className="font-display text-4xl text-cyan/80">0{i + 1}</span>
                <h3 className="mt-6 text-lg leading-snug text-on-dark">{v.title}</h3>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <Link to="/about" className="link-arrow !text-cyan">Our values in full <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </section>

      {/* How we work */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading center eyebrow="How we work" title="Four steps, one accountable team" />
          <div className="relative mt-16 grid gap-10 md:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-brand md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 150} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-teal/40 bg-background">
                  <s.icon className="h-6 w-6 text-royal" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 text-xl text-navy">{i + 1}. {s.t}</h3>
                <p className="mx-auto mt-2 max-w-[14rem] text-sm text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Goal selector */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="What's your goal?" title="Where are you on your India journey?" text="Choose the goal that fits you best. Each one links to the offering that answers it." />
          <div className="mt-14 grid gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-2 lg:col-span-6" role="tablist" aria-label="India journey goals">
              {goals.map((g, i) => (
                <button
                  key={g.q}
                  role="tab"
                  aria-selected={goal === i}
                  onClick={() => setGoal(i)}
                  className={`border-l-2 px-6 py-5 text-left font-display text-lg transition-all duration-300 ${
                    goal === i ? "border-royal bg-background text-navy shadow-soft" : "border-transparent text-muted-foreground hover:border-teal/50 hover:text-navy"
                  }`}
                >
                  "{g.q}"
                </button>
              ))}
            </div>
            <div key={selected.slug} className="animate-hero-in lg:col-span-6">
              <Link to="/offerings/$slug" params={{ slug: selected.slug }} className="img-zoom group block bg-background">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={selected.image} alt={selected.imageAlt} loading="lazy" width={1600} height={1008} className="h-full w-full object-cover" />
                </div>
                <div className="p-8">
                  <p className="eyebrow">Recommended offering · {selected.num}</p>
                  <h3 className="mt-3 text-2xl text-navy">{selected.short}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{selected.tagline}</p>
                  <span className="link-arrow mt-6">Explore this offering <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="border-b py-20">
        <div className="container-x grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s} delay={i * 90} className="border-l border-teal/40 pl-6">
              <p className="font-display text-5xl text-gradient-brand">[ ]+</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-navy">{s}</p>
            </Reveal>
          ))}
        </div>
        <p className="container-x mt-8 text-xs text-muted-foreground">Figures to be added once verified.</p>
      </section>

      <CtaBand />
    </>
  );
}
