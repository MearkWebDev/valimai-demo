import { Link } from "@tanstack/react-router";
import transparentLogo from "@/assets/valimai-original-transparent.png.asset.json";
import colouredLogo from "@/assets/valimai-original-coloured.jpeg.asset.json";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className={`brand-logo shrink-0 ${dark ? "brand-logo-footer" : ""}`} aria-label="Valimai Private Limited — Home">
      <img src={dark ? colouredLogo.url : transparentLogo.url} alt="Valimai Private Limited" width={1280} height={1280} className="h-full w-full object-contain" />
    </Link>
  );
}
