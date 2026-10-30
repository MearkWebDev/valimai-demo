import { Link } from "@tanstack/react-router";
import logo from "@/assets/valimai-logo.png.asset.json";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Valimai Private Limited — Home">
      <img src={logo.url} alt="Valimai logo" width={44} height={44} className="h-11 w-11 object-contain" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-[0.18em] ${dark ? "text-on-dark" : "text-navy"}`}
        >
          VALIMAI
        </span>
        <span className={`mt-1 text-[0.55rem] font-medium tracking-[0.3em] ${dark ? "text-on-dark-muted" : "text-muted-foreground"}`}>
          PRIVATE LIMITED
        </span>
      </span>
    </Link>
  );
}
