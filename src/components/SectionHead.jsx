import Reveal from "./Reveal.jsx";
export default function SectionHead({ no, kicker, title, lead, id }) {
  return (
    <Reveal className="mb-8 md:mb-12">
      <p className="label flex items-center gap-3"><span className="text-signal">{no}</span><span className="h-px w-8 bg-white/15" />{kicker}</p>
      <h2 id={id} className="h2 mt-4">{title}</h2>
      {lead && <p className="lead mt-5">{lead}</p>}
    </Reveal>
  );
}
