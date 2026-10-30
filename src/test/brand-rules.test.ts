import { describe, expect, it } from "vitest";
import { company } from "@/lib/content/company";
import { offeringMenuState } from "@/lib/offering-menu";

describe("verified company details", () => {
  it("uses Chennai as the contact location", () => expect(company.location).toBe("Chennai"));
  it("uses the supplied contact email", () => expect(company.email).toBe("pranav@valimai.net"));
  it("uses the supplied contact phone", () => {
    expect(company.phone).toBe("93421 75098");
    expect(company.phoneHref).toBe("tel:+919342175098");
  });
  it("has only the specified founder", () => {
    expect(company.leaders).toEqual([{ name: "G.K. Pranav", designation: "Founder" }]);
  });
});

describe("offering dropdown lifecycle", () => {
  it("opens on a fresh pointer entry", () => expect(offeringMenuState(false, "enter")).toBe(true));
  it("closes after navigation and remains closed until another entry", () => {
    const closed = offeringMenuState(true, "navigate");
    expect(closed).toBe(false);
    expect(offeringMenuState(closed, "leave")).toBe(false);
    expect(offeringMenuState(closed, "enter")).toBe(true);
  });
  it("closes when the pointer leaves", () => expect(offeringMenuState(true, "leave")).toBe(false));
  it("closes on Escape", () => expect(offeringMenuState(true, "escape")).toBe(false));
});