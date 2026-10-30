import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { getOffering } from "@/lib/content/offerings";
import { faqSchema, pageHead } from "@/lib/seo";
import { CtaBand, FaqList, OfferingCard, PageHero, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/offerings/$slug")({
  loader: ({ params }) => {
    const o = getOffering(params.slug);
    if (!o) throw notFound();
    return { slug: o.slug };
  },
  head: ({ params, loaderData }) => {
    const o = loaderData ? getOffering(loaderData.slug) : undefined;
    if (!o) return { meta: [{ title: "Offering not found | Valimai" }, { name: "robots", content: "noindex" }] };
    const path = `/offerings/${params.slug}`;
    return pageHead({
      title: o.meta.title,
      description: o.meta.description,
      path,
      type: "article",
      jsonLd: [
        { "@context": "https://schema.org", "@type": "Service", name: o.title, description: o.meta.description, provider: { "@type": "Organization", name: "Valimai Private Limited" }, areaServed: "India" },
        faqSchema(o.faqs),
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Offerings", item: "/offerings" },
            { "@type": "ListItem", position: 3, name: o.short, item: path },
          ],
        },
      ],
    });
  },
  component: OfferingPage,
});

function OfferingPage() {
  const { slug } = Route.useLoaderData();
  const o = getOffering(slug)!;
  const related = o.related.map((r) => getOffering(r)!);

  return (
    <>
      <PageHero
        image={o.image}
        imageAlt={o.imageAlt}
        eyebrow={`Offering ${o.num} · ${o.title}`}
        breadcrumb={
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-on-dark-muted">
            <Link to="/" className="hover:text-on-dark">Home</Link><ChevronRight className="h-3 w-3" />
            <Link to="/offerings" className="hover:text-on-dark">Offerings</Link><ChevronRight className="h-3 w-3" />
            <span className="text-on-dark">{o.short}</span>
          </nav>
        }
        title={
          <>
            <h1 className="text-lg font-medium tracking-wide text-on-dark-muted md:text-xl">{o.title}</h1>
            <h2 className="mt-4 text-3xl leading-tight md:text-5xl">{o.question}</h2>
          </>
        }
        description={o.answer}
      >
        <Link to="/contact" className="btn btn-light">Book a Consulting Meeting <ArrowRight className="h-4 w-4" /></Link>
        <Link to="/contact" className="btn btn-outline-light">Talk to Our Team</Link>
      </PageHero>

      {/* Key facts */}
      <section className="border-b bg-surface">
        <div className="container-x grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {o.facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 70} className="bg-surface p-6 md:p-8">
              <p className="eyebrow">{f.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-navy">{f.value}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="Who it's for" title={o.whoHeading} text="We help leaders answer questions like these:" />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {o.questions.map((q, i) => (
              <Reveal key={q} delay={i * 60} className="flex gap-4 border-l-2 border-teal bg-surface p-6">
                <span className="font-display text-teal">?</span>
                <p className="font-display text-lg leading-snug text-navy">{q}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {o.audiences.map((a) => (
              <span key={a} className="border px-4 py-2 text-xs font-medium tracking-wide text-navy">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* How it's delivered */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            dark
            eyebrow="How it's delivered"
            title="Four stages. A checkpoint you approve at the end of each."
            text="Every engagement is scoped to your objectives, so there is no fixed timeline. What stays constant is the structure: you see progress and approve direction at every stage."
          />
          <div className="relative mt-16 grid gap-6 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-brand md:block" />
            {o.stages.map((s, i) => (
              <Reveal key={s.name} delay={i * 140} className="relative">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-cyan bg-navy font-display text-cyan">{i + 1}</div>
                <h3 className="mt-6 text-xl text-on-dark">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{s.text}</p>
                <p className="mt-5 flex gap-2 border-t border-on-dark/15 pt-4 text-xs font-medium text-cyan">
                  <Check className="h-4 w-4 shrink-0" /> Checkpoint: {s.checkpoint}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="What's included" title="The full scope of support" /></div>
          <div className="divide-y border-y lg:col-span-8">
            {o.included.map((x, i) => (
              <Reveal key={x.name} delay={i * 50} className="grid gap-2 py-6 md:grid-cols-[2rem_1fr]">
                <span className="font-display text-sm text-teal">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg text-navy">{x.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{x.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="What you receive" title="Practical deliverables, not just advice" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {o.deliverables.map((d, i) => (
              <Reveal key={d.name} delay={i * 70} className="border-t-2 border-royal bg-background p-8 transition-shadow duration-500 hover:shadow-soft">
                <h3 className="text-lg text-navy">{d.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">The outcome</p>
            <p className="mt-5 font-display text-2xl leading-snug text-navy md:text-3xl">{o.outcomeSummary}</p>
          </Reveal>
          <ul className="space-y-4">
            {o.outcomes.map((x, i) => (
              <Reveal as="li" key={x} delay={i * 80} className="flex gap-4 border-b pb-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                <span className="text-navy">{x}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Where this leads next" title="Related offerings" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((r, i) => <OfferingCard key={r.slug} o={r} index={i} />)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4"><SectionHeading eyebrow="FAQ" title="Frequently asked questions" /></div>
          <div className="lg:col-span-8"><FaqList faqs={o.faqs} /></div>
        </div>
      </section>

      <CtaBand title="Start with a conversation." text="A no-obligation consultation with our senior team to understand your objectives and agree the right scope." />
    </>
  );
}
