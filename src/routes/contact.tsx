import { createFileRoute } from "@tanstack/react-router";
import { Clock, Globe2, Mail, MapPin, Phone } from "lucide-react";
import hero from "@/assets/hero-contact.jpg";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/site/blocks";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { Reveal } from "@/components/site/Reveal";

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
            <div className="bg-navy p-10 text-on-dark">
              <p className="eyebrow !text-cyan">Contact details</p>
              <p className="mt-4 font-display text-2xl">Valimai Private Limited</p>
              <div className="mt-6 space-y-4 text-sm text-on-dark-muted">
                <p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-cyan" />[Registered office address], [City, State, PIN]</p>
                <p className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-cyan" />[info@domain]</p>
                <p className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-cyan" />[+91 ...]</p>
                <p className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-cyan" />Monday–Friday, 9:30 am – 6:30 pm IST</p>
                <p className="text-xs">CIN: [Company Identification Number]</p>
              </div>
            </div>
            <div className="mt-6">
              <div className={row}><Globe2 className="h-5 w-5 shrink-0 text-teal" />We respond to every enquiry within two business days. International clients are welcome to request a video call across time zones.</div>
            </div>
            <div className="mt-6 flex aspect-[4/3] items-center justify-center border border-dashed bg-surface text-xs uppercase tracking-[0.14em] text-muted-foreground">
              [Map of registered office]
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
