import { createFileRoute } from "@tanstack/react-router";
import { Globe2, Mail, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-contact.jpg";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/blocks";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/lib/content/company";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact Valimai | Strategic Business Consulting India",
      description:
        "Talk to Valimai about India market entry, partnerships, stakeholder management or programme delivery. Confidential consultations with our senior team.",
      path: "/contact",
    }),
  component: Contact,
});

function Contact() {
  const row = "flex gap-4 border-b py-5 text-sm text-muted-foreground";
  return (
    <>
      <PageHero
        image={hero}
        imageAlt="Calm consulting office lounge in New Delhi with a city view"
        eyebrow="Book a Consulting Meeting"
        title={<h1 className="text-4xl leading-tight md:text-6xl">Let's build something <span className="italic text-cyan">lasting.</span></h1>}
        description="Schedule a no-obligation consultation with our senior team to explore your options. Every enquiry is treated in confidence."
      />
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Consultation request</p>
            <h2 className="mt-4 text-3xl text-navy">Tell us about your objectives</h2>
            <p className="mt-3 mb-10 text-sm text-muted-foreground">Fields marked * are required.</p>
            <ConsultationForm />
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <div className="contact-details bg-navy p-7 text-on-dark sm:p-10">
              <p className="eyebrow !text-cyan">Contact details</p>
              <p className="mt-4 font-display text-2xl">Valimai Private Limited</p>
              <div className="mt-8 divide-y divide-on-dark/15 text-sm text-on-dark-muted">
                <div className="flex gap-4 py-5"><MapPin className="h-5 w-5 shrink-0 text-cyan" /><div className="min-w-0"><p className="mb-2 text-xs text-cyan">Location</p><p>{company.location}</p></div></div>
                <div className="flex gap-4 py-5"><Mail className="h-5 w-5 shrink-0 text-cyan" /><div className="min-w-0"><p className="mb-2 text-xs text-cyan">Email</p><a href={`mailto:${company.email}`} className="break-words transition-colors hover:text-on-dark">{company.email}</a></div></div>
                <div className="flex gap-4 py-5"><Phone className="h-5 w-5 shrink-0 text-cyan" /><div className="min-w-0"><p className="mb-2 text-xs text-cyan">Phone</p><a href={company.phoneHref} className="transition-colors hover:text-on-dark">{company.phone}</a></div></div>
              </div>
            </div>
            <div className="mt-6">
              <div className={row}><Globe2 className="h-5 w-5 shrink-0 text-teal" />We respond to every enquiry within two business days. International clients are welcome to request a video call across time zones.</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
