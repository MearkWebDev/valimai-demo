import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/cookie-policy")({
  head: () => pageHead({ title: "Cookie Policy | Valimai", description: "How the Valimai Private Limited website uses cookies and similar technologies.", path: "/cookie-policy" }),
  component: () => (
    <LegalPage title="Cookie Policy" intro="How this website uses cookies and similar technologies.">
      <h2>Current use</h2>
      <p>[List of cookies in use. A consent banner will be added if analytics or similar tracking is installed.]</p>
      <h2>Managing cookies</h2>
      <p>You can control and delete cookies through your browser settings.</p>
    </LegalPage>
  ),
});
