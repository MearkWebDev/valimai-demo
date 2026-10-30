import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Eye, Target, UserRound } from "lucide-react";
import hero from "@/assets/hero-about.jpg";
import { values } from "@/lib/content/offerings";
import { pageHead } from "@/lib/seo";
import { PageHero, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/lib/content/company";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Valimai | India-Focused Strategic Boutique Consultancy",
      description:
        "Learn about Valimai's vision for a Developed India by 2047, our mission to bring responsible technology and automation to India, and the values we stand by.",
      path: "/about",
    }),
  component: About,
});

const different = [
  ["Single-country depth", "India is our only focus, so our insight, networks and on-ground understanding run deep."],
  ["Boutique by design", "Senior people on every engagement, with direct access and personal accountability."],
  ["Relationships that open doors", "Trusted engagement with Government, institutions and industry across New Delhi and other capital regions."],
  ["Independent and neutral", "No vendor ties, so our advice is unbiased."],
  ["End-to-end", "From market research and entry to partnerships, coordination and large-scale programme delivery."],
];

function About() {
  return (
    <>
      <PageHero
        image={hero}
        imageAlt="Senior Indian consultant in conversation with an international executive in a boardroom"
        eyebrow="About Valimai"
        title={
          <>
            <h1 className="sr-only">About Valimai</h1>
            <p className="font-display text-4xl leading-tight md:text-6xl">
              Strength in strategy. <span className="italic text-cyan">Integrity in every partnership.</span>
            </p>
          </>
        }
        description="An India-focused strategic boutique business consulting firm helping governments, global enterprises and Indian businesses turn ambition into outcomes."
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow="Who we are" title="An extended partner, not a distant advisor" /></div>
          <Reveal delay={120} className="space-y-6 leading-relaxed text-muted-foreground lg:col-span-7">
            <p>Valimai Private Limited is a strategic business consulting and advisory firm focused entirely on India. We work closely with senior Indian Government officials in New Delhi and other capital regions, and with organisations, entrepreneurs, institutions and international enterprises, to help them navigate complex business environments and build sustainable growth.</p>
            <p>We combine industry expertise, market intelligence and a relationship-oriented approach to help clients make informed decisions, overcome challenges and deliver tangible results. We believe lasting success comes from strategic thinking, trusted relationships and effective execution, which is why we act as an extended partner, not a distant advisor.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-display text-7xl text-gradient-brand md:text-8xl">வலிமை</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">The meaning of our name</p>
            <p className="mt-5 font-display text-2xl leading-snug text-navy md:text-3xl">
              Valimai (வலிமை) means strength.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              It reflects what we aim to build for our clients and for India: strength in strategy, strength in partnerships and strength in delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="vision-mission relative overflow-hidden bg-navy-deep py-24 text-on-dark md:py-32">
        <div className="container-x relative grid gap-14 md:grid-cols-2 md:gap-0">
          {[
            ["Our vision", "To play a supporting role in transforming India into a Developed Nation by 2047.", "We align our work with India's national ambition for 2047, helping bring the investment, technology, partnerships and execution discipline that a developed India needs."],
            ["Our mission", "To engage international technology and automation providers for a safe and sustainable India.", "We connect India with world-class international technology and automation partners, and guide their responsible entry and adoption, so that innovation improves safety, sustainability, productivity and job creation across the nation."],
          ].map(([e, t, d], i) => (
            <Reveal key={e} delay={i * 120} className={`vision-statement ${i === 0 ? "md:border-r md:border-on-dark/20 md:pr-14" : "border-t border-on-dark/20 pt-12 md:border-t-0 md:pl-14 md:pt-0"}`}>
              {i === 0 ? <Eye className="mb-8 h-9 w-9 text-cyan" strokeWidth={1} /> : <Target className="mb-8 h-9 w-9 text-cyan" strokeWidth={1} />}
              <p className="eyebrow !text-cyan">{e}</p>
              <h2 className="mt-6 text-3xl leading-snug text-on-dark md:text-4xl">{t}</h2>
              <div className="my-8 h-px w-16 bg-cyan" />
              <p className="leading-relaxed text-on-dark-muted">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy py-24 md:py-32">
        <div className="container-x">
          <SectionHeading dark eyebrow="Our values" title="Four pillars" text="Four pillars guide every engagement, every recommendation and every relationship." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90} className="border border-on-dark/15 p-8 md:p-10">
                <span className="font-display text-4xl text-cyan/80">0{i + 1}</span>
                <h3 className="mt-5 text-xl text-on-dark">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading eyebrow="What makes us different" title="An India-focused strategic boutique" /></div>
          <ul className="space-y-6 lg:col-span-7">
            {different.map(([t, d], i) => (
              <Reveal as="li" key={t} delay={i * 70} className="flex gap-5 border-b pb-6">
                <Check className="mt-1 h-5 w-5 shrink-0 text-teal" />
                <p className="leading-relaxed text-muted-foreground"><strong className="font-semibold text-navy">{t}:</strong> {d}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Leadership" title="The people you work with" />
          <div className="mt-14 max-w-xl">
            {company.leaders.map((leader) => (
              <Reveal key={leader.name} className="founder-card grid gap-7 border-t-2 border-teal bg-background p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-center md:p-9">
                <div role="img" aria-label="Founder portrait placeholder" className="flex aspect-[3/4] w-full max-w-[12rem] items-center justify-center border border-border bg-surface text-teal/60 sm:max-w-none">
                  <UserRound className="h-20 w-20" strokeWidth={1} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl text-navy">{leader.name}</h3>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">{leader.designation}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center md:py-32">
        <Reveal className="container-x">
          <h2 className="text-3xl text-navy md:text-5xl">Let's build something lasting</h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">Partner with a team that measures success by your long-term outcomes.</p>
          <Link to="/contact" className="btn btn-primary mt-10">Start a Conversation <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
    </>
  );
}
