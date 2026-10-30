import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/ethics-compliance")({
  head: () => pageHead({ title: "Ethics & Compliance | Valimai", description: "Valimai's commitment to anti-bribery, anti-corruption and transparent engagement with government and institutional stakeholders.", path: "/ethics-compliance" }),
  component: () => (
    <LegalPage title="Ethics & Compliance" intro="Trust, respect and integrity are non-negotiable in every engagement.">
      <h2>Our commitment</h2>
      <p>Because we work alongside Government officials and public institutions, we conduct every engagement transparently, through proper channels and in line with applicable laws.</p>
      <h2>Anti-bribery & anti-corruption</h2>
      <p>[Statement covering India's Prevention of Corruption Act and, for foreign clients, the US FCPA and UK Bribery Act.]</p>
      <h2>Independence</h2>
      <p>We are not tied to any vendor, product or interest group. Any fee arrangement is agreed with the client up front and disclosed in full.</p>
      <h2>Raising a concern</h2>
      <p>[Contact details for reporting concerns.]</p>
    </LegalPage>
  ),
});
