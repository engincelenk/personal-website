import { useState } from "react";
import { MessageSquare, Target } from "lucide-react";
import SectionHead from "./SectionHead.jsx";
import AskPortfolio from "./AskPortfolio.jsx";
import ChallengeMe from "./ChallengeMe.jsx";
import { useLang } from "../i18n.jsx";

export default function Lab({ guest }) {
  const { t } = useLang();
  const [tab, setTab] = useState("challenge");
  const tabs = [["challenge", t("tabChallenge"), Target], ["ask", t("tabAsk"), MessageSquare]];
  return (
    <section id="lab" aria-labelledby="lab-title" className="section">
      <div className="wrap">
        <SectionHead no="05" kicker={t("labKicker")} id="lab-title" title={t("labTitle")} lead={t("labLead")} />
        <div className="panel overflow-hidden">
          <div role="tablist" aria-label={t("labTools")} className="flex border-b border-white/[0.06] p-2">
            {tabs.map(([id, label, I]) => (
              <button key={id} role="tab" type="button" aria-selected={tab === id} aria-controls={`panel-${id}`} id={`tab-${id}`} onClick={() => setTab(id)}
                className={`inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium transition-colors sm:flex-none ${tab === id ? "bg-snow text-ink" : "text-mist hover:text-snow"}`}>
                <I size={16} />{label}
              </button>
            ))}
          </div>
          <div className="p-5 sm:p-8">
            <div role="tabpanel" id="panel-challenge" aria-labelledby="tab-challenge" hidden={tab !== "challenge"}><ChallengeMe guest={guest} /></div>
            <div role="tabpanel" id="panel-ask" aria-labelledby="tab-ask" hidden={tab !== "ask"}><AskPortfolio /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
