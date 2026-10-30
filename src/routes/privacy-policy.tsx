import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy-policy")({
  head: () => pageHead({ title: "Privacy Policy | Valimai", description: "How Valimai Private Limited collects, uses and protects personal data, in line with India's Digital Personal Data Protection Act 2023.", path: "/privacy-policy" }),
  component: () => (
    <LegalPage title="Privacy Policy" intro="How we collect, use and protect the personal data you share with us.">
      <h2>Scope</h2>
      <p>This policy will explain how Valimai Private Limited handles personal data submitted through this website, including the consultation form, in line with India's Digital Personal Data Protection (DPDP) Act 2023 and, where applicable, the GDPR.</p>
      <h2>Data we collect</h2>
      <p>[Details of the personal data collected, purposes, legal basis and retention periods.]</p>
      <h2>Your rights</h2>
      <p>[How individuals can access, correct or erase their data, and how to contact the Data Protection contact.]</p>
      <h2>Contact</h2>
      <p>[email] · [Registered office address]</p>
    </LegalPage>
  ),
});
