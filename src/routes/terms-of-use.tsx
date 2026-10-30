import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms-of-use")({
  head: () => pageHead({ title: "Terms of Use & Disclaimer | Valimai", description: "Terms governing the use of the Valimai Private Limited website. Website content is general information, not professional advice.", path: "/terms-of-use" }),
  component: () => (
    <LegalPage title="Terms of Use & Disclaimer" intro="The terms that apply when you use this website.">
      <h2>General information only</h2>
      <p>Content on this website is provided as general information and does not constitute professional, legal, tax or financial advice. You should seek advice specific to your circumstances before acting on any information.</p>
      <h2>Use of this website</h2>
      <p>[Terms covering acceptable use, intellectual property, links to third-party sites and limitation of liability.]</p>
      <h2>Governing law</h2>
      <p>[Jurisdiction and governing law to be confirmed.]</p>
    </LegalPage>
  ),
});
