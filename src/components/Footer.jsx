import { person } from "../data/profile.js";
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10" style={{ paddingBottom: "max(2.5rem, env(safe-area-inset-bottom))" }}>
      <div className="wrap flex flex-col gap-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {person.name} · <span className="text-snow/80">Think. Connect. Secure. Innovate.</span></p>
        <p className="flex gap-5"><a className="hover:text-snow" href="/legal.html#imprint">Imprint</a><a className="hover:text-snow" href="/legal.html#privacy">Privacy</a><span>No cookies · No tracking</span></p>
      </div>
    </footer>
  );
}
