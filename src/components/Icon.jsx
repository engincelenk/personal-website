import { Compass, Network, Wrench, ShieldCheck, Boxes, Workflow, Sparkles, BrainCircuit, Rocket, Layers, MapPin, School, GraduationCap } from "lucide-react";
const map = { Compass, Network, Wrench, ShieldCheck, Boxes, Workflow, Sparkles, BrainCircuit, Rocket, Layers, MapPin, School, GraduationCap };
export default function Icon({ name, ...p }) { const C = map[name] || Sparkles; return <C aria-hidden="true" {...p} />; }
