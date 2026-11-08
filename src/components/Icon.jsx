import { Compass, Network, Wrench, ShieldCheck, Boxes, Workflow, Sparkles, BrainCircuit, Rocket, Layers, MapPin, School, GraduationCap,
  ShieldAlert, ClipboardList, Scale, FileSearch, Map, Plug, UserCog, Truck, LifeBuoy, Lightbulb, Bot, FlaskConical, MessageSquare, FileText, Handshake, Route } from "lucide-react";
const map = { Compass, Network, Wrench, ShieldCheck, Boxes, Workflow, Sparkles, BrainCircuit, Rocket, Layers, MapPin, School, GraduationCap,
  ShieldAlert, ClipboardList, Scale, FileSearch, Map, Plug, UserCog, Truck, LifeBuoy, Lightbulb, Bot, FlaskConical, MessageSquare, FileText, Handshake, Route };
export default function Icon({ name, ...p }) { const C = map[name] || Sparkles; return <C aria-hidden="true" {...p} />; }
