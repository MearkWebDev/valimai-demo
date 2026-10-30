<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site content (offerings, values) lives in `src/lib/content/offerings.ts`; offering pages render from it via `/offerings/$slug` so copy stays in one place.
- Consultation form validates client-side only (zod schema exported from `ConsultationForm.tsx`); no backend is wired yet.
- Verified company contact and leadership data live in a shared content module so About, Contact and footer stay consistent.
- Original brand uploads are CDN asset pointers; the navbar uses the transparent asset on a dark surface for metallic contrast.
- Desktop offering navigation uses explicit enter/leave/navigation state, rather than CSS hover visibility, to prevent reopening after a click.
- Shared motion and typography rules live in the global stylesheet; reduced-motion overrides disable nonessential transitions across all pages.
- Shared card and item headlines inherit the global h3 typography rule so offering cards and their detail views remain consistent.
