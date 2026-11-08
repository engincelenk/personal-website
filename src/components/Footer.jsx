import { person } from "../data/profile.js";
import { useLang } from "../i18n.jsx";
export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="border-t border-white/[0.06] py-10" style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}>
      <div className="wrap flex flex-col gap-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {person.name}, {person.degree} · <span className="text-snow/80">{t("footerClaim")}</span></p>
        <p className="flex flex-wrap gap-x-5 gap-y-2"><a className="hover:text-snow" href={`/legal.html?lang=${lang}#imprint`}>{t("imprint")}</a><a className="hover:text-snow" href={`/legal.html?lang=${lang}#privacy`}>{t("privacy")}</a><span>{t("noCookies")}</span></p>
      </div>
    </footer>
  );
}
