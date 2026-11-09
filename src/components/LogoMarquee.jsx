import Logo from "./Logo.jsx";
import { logoStrip } from "../data/profile.js";
/* Endless logo band. Pauses on hover; with reduced motion it is a normal swipeable row. */
export default function LogoMarquee() {
  const row = hidden => (
    <ul aria-hidden={hidden || undefined} className="marquee-row flex flex-none gap-3 pr-3">
      {logoStrip.map(id => <li key={id}><Logo id={id} className="h-14 w-28" pad="p-2" /></li>)}
    </ul>
  );
  return (
    <div className="marquee -mx-5 mt-4 flex overflow-hidden px-5 sm:mx-0 sm:px-0 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
      {row(false)}{row(true)}
    </div>
  );
}
