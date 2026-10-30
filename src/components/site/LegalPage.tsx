import type { ReactNode } from "react";
import { PageHero } from "./blocks";

export function LegalPage({ title, intro, children }: { title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={<h1 className="text-4xl md:text-5xl">{title}</h1>} description={intro} />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-8 leading-relaxed text-muted-foreground [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-navy">
          <p className="border-l-2 border-teal bg-surface p-5 text-sm">
            Draft placeholder. Final wording to be reviewed and approved by Valimai's legal advisors before launch.
          </p>
          {children}
        </div>
      </section>
    </>
  );
}
