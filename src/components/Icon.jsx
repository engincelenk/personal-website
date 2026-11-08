import { Compass, Network, Wrench, ShieldCheck, Boxes, Workflow, Sparkles, BrainCircuit, Rocket, Layers } from "lucide-react";
const map = { Compass, Network, Wrench, ShieldCheck, Boxes, Workflow, Sparkles, BrainCircuit, Rocket, Layers };
export default function Icon({ name, ...p }) { const C = map[name] || Sparkles; return <C aria-hidden="true" {...p} />; }
