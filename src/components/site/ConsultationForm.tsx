import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SERVICE_OPTIONS = [
  "Market Research & Strategic Advisory",
  "Market Entry & International Expansion",
  "Stakeholder Management & Coordination",
  "Strategic Partnerships & Joint Ventures",
  "Large-Scale Programme Management",
  "Other",
] as const;

export const consultationSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid business email").max(255),
  company: z.string().trim().min(1, "Please enter your company name").max(150),
  jobTitle: z.string().trim().min(1, "Please enter your job title").max(100),
  country: z.string().trim().min(1, "Please enter your country").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s\-()]{7,20}$/, "Please enter a valid phone number with country code"),
  service: z.enum(SERVICE_OPTIONS, { errorMap: () => ({ message: "Please select a service" }) }),
  objective: z.string().trim().min(1, "Please describe your business objective").max(300),
  message: z.string().trim().min(10, "Please add a short message (at least 10 characters)").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "Please agree to the Privacy Policy" }) }),
});

type Errors = Partial<Record<string, string>>;

const field = "min-w-0 w-full rounded-sm border border-input bg-surface/40 px-4 py-3.5 text-sm leading-relaxed text-foreground outline-none transition-all duration-200 hover:border-teal/60 focus:border-royal focus:bg-background focus:ring-2 focus:ring-ring/15 aria-invalid:border-destructive";
const label = "mb-2.5 block text-sm font-medium text-navy";

export function ConsultationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { ...Object.fromEntries(fd.entries()), consent: fd.get("consent") === "on" };
    const res = consultationSchema.safeParse(data);
    if (!res.success) {
      const errs: Errors = {};
      res.error.issues.forEach((i) => (errs[String(i.path[0])] ??= i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    // TODO: connect to a backend to deliver enquiries. Nothing is sent yet.
    setDone(true);
  }

  if (done) {
    return (
      <div className="border-t-2 border-teal bg-surface p-10" role="status">
        <CheckCircle2 className="h-10 w-10 text-teal" />
        <h3 className="mt-5 text-2xl text-navy">Thank you.</h3>
        <p className="mt-3 text-muted-foreground">Your details passed validation. Online submission is not connected yet, so this enquiry has not been sent.</p>
        <Button variant="link" className="mt-6 px-0" onClick={() => setDone(false)}>Back to the form</Button>
      </div>
    );
  }

  const err = (k: string) => errors[k] && <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p>;
  const F = ({ name, text, type = "text", auto }: { name: string; text: string; type?: string; auto?: string }) => (
    // called as a function (not a component) so inputs keep their values on re-render
    <div>
      <label htmlFor={name} className={label}>{text} *</label>
      <input id={name} name={name} type={type} autoComplete={auto} className={field} aria-invalid={!!errors[name]} />
      {err(name)}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
      {F({name: "fullName", text: "Full Name", auto: "name"})}
      {F({name: "email", text: "Business Email", type: "email", auto: "email"})}
      {F({name: "company", text: "Company Name", auto: "organization"})}
      {F({name: "jobTitle", text: "Job Title", auto: "organization-title"})}
      {F({name: "country", text: "Country", auto: "country-name"})}
      {F({name: "phone", text: "Phone Number", type: "tel", auto: "tel"})}
      <div className="sm:col-span-2">
        <label htmlFor="service" className={label}>Service Interested In *</label>
        <select id="service" name="service" defaultValue="" className={field} aria-invalid={!!errors["service"]}>
          <option value="" disabled>Select a service</option>
          {SERVICE_OPTIONS.map((s) => <option key={s}>{s}</option>)}
        </select>
        {err("service")}
      </div>
      <div className="sm:col-span-2">{F({name: "objective", text: "Business Objective"})}</div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>Message *</label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors["message"]} />
        {err("message")}
      </div>
      <div className="sm:col-span-2">
        <label className="flex gap-3 text-sm text-muted-foreground">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 accent-royal" />
          <span>I agree to the <a href="/privacy-policy" className="text-royal underline">Privacy Policy</a> and consent to Valimai contacting me about this enquiry. *</span>
        </label>
        {err("consent")}
      </div>
      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-destructive sm:col-span-2" role="alert">Please correct the highlighted fields.</p>
      )}
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="btn btn-primary h-auto w-full whitespace-normal sm:w-auto">Book a Consulting Meeting</Button>
      </div>
    </form>
  );
}
