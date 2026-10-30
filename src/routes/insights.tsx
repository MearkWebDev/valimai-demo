import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import hero from "@/assets/hero-insights.jpg";
import { offerings } from "@/lib/content/offerings";
import { pageHead } from "@/lib/seo";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/insights")({
  head: () =>
    pageHead({
      title: "Insights on Doing Business in India | Valimai",
      description:
        "Perspectives from Valimai on India market entry, AI and automation adoption, Viksit Bharat 2047 and sector opportunities. Articles coming soon.",
      path: "/insights",
    }),
  component: Insights,
});

const categories = ["All", "India Market Entry", "AI & Automation", "Viksit Bharat 2047", "Sector Opportunities"];

// Placeholder slots only — no articles have been published yet.
const placeholders = categories.slice(1).flatMap((c, i) => [
  { cat: c, img: offerings[i % 5].image, title: `[Article title — ${c}]` },
  { cat: c, img: offerings[(i + 2) % 5].image, title: `[Article title — ${c}]` },
]);

function Insights() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = useMemo(
    () => placeholders.filter((p) => (cat === "All" || p.cat === cat) && p.title.toLowerCase().includes(q.toLowerCase())),
    [cat, q],
  );

  return (
    <>
      <PageHero
        image={hero}
        imageAlt="Reading desk with notebook and fountain pen by a window overlooking New Delhi"
        eyebrow="Insights"
        title={<h1 className="text-4xl leading-tight md:text-6xl">Perspectives on <span className="italic text-cyan">growing in India.</span></h1>}
        description="Our thinking on market entry, responsible AI and automation, Viksit Bharat 2047 and sector opportunities. Articles are being prepared and will appear here soon."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="grid overflow-hidden border lg:grid-cols-2">
            <div className="aspect-[16/10] bg-accent lg:aspect-auto">
              <img src={offerings[1].image} alt="" loading="lazy" className="h-full w-full object-cover opacity-80" />
            </div>
            <div className="flex flex-col justify-center p-10 md:p-14">
              <p className="eyebrow">Featured · Coming soon</p>
              <h2 className="mt-4 text-3xl leading-snug text-navy">[Featured article title]</h2>
              <p className="mt-4 text-muted-foreground">[A short summary of the featured article will appear here once it is published.]</p>
              <span className="link-arrow mt-8 opacity-50">Read more <ArrowRight className="h-4 w-4" /></span>
            </div>
          </Reveal>

          <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Categories">
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={cat === c}
                  onClick={() => setCat(c)}
                  className={`border px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${cat === c ? "border-navy bg-navy text-on-dark" : "text-navy hover:border-teal"}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="flex items-center gap-3 border px-4 py-2.5 md:w-72">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Search insights</span>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search insights" className="w-full bg-transparent text-sm outline-none" />
            </label>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={i} delay={(i % 3) * 80} className="border bg-card">
                <div className="aspect-[16/10] overflow-hidden bg-accent">
                  <img src={p.img} alt="" loading="lazy" className="h-full w-full object-cover opacity-70 grayscale-[40%]" />
                </div>
                <div className="p-7">
                  <p className="eyebrow">{p.cat}</p>
                  <h3 className="mt-3 text-lg text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">[Article summary]</p>
                  <span className="link-arrow mt-5 opacity-50">Read more <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Reveal>
            ))}
            {list.length === 0 && <p className="text-muted-foreground">No placeholder articles match your search.</p>}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">
            Want our perspective on a specific question now? <Link to="/contact" className="text-royal underline">Talk to our team</Link>.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
