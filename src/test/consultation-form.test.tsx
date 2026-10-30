import { describe, expect, it } from "vitest";
import { consultationSchema } from "@/components/site/ConsultationForm";

const valid = {
  fullName: "Asha Rao",
  email: "asha@company.com",
  company: "Acme",
  jobTitle: "CEO",
  country: "India",
  phone: "+91 98765 43210",
  service: "Other",
  objective: "Enter India",
  message: "We would like to discuss entry.",
  consent: true,
};

describe("consultation form validation", () => {
  it("accepts a complete enquiry", () => {
    expect(consultationSchema.safeParse(valid).success).toBe(true);
  });
  it("rejects an invalid email", () => {
    expect(consultationSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it("rejects an invalid phone number", () => {
    expect(consultationSchema.safeParse({ ...valid, phone: "abc" }).success).toBe(false);
  });
  it("requires privacy consent", () => {
    expect(consultationSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });
});
