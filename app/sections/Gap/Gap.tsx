import { CardIllustration } from "@/components/ui/CardIllustration";
import TabbedContent from "@/components/ui/TabbedContent";
import { container, item } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";

const data = [
  {
    label: "What investors tell us",
    cards: [
      {
        title: "Agents talk features, not numbers.",
        imageUrl: "/img/calculator.png",
      },
      {
        title:
          "They say they ‘get’ my strategy, but the properties don’t fit the brief.",
        imageUrl: "/img/properties.png",
      },
      {
        title: "“I need a one‑page deal snapshot—not a sales pitch.”",
        imageUrl: "/img/cashflow.png",
      },
      {
        title: "“Turnaround is too slow; good deals die.”",
        imageUrl: "/img/turnaround.png",
      },
      {
        title:
          "“No coordinated team of industry experts (finance, legal, PM, trades).”",
        imageUrl: "/img/team.png",
      },
      {
        title: "“Radio silence after closing—no plan for the next deal.”",
        imageUrl: "/img/silence.png",
      },
    ],
  },
  {
    label: "What that means for you",
    cards: [
      {
        title: "Missed repeat business",
        imageUrl: "/img/business.png",
      },
      {
        title: "Price-based competition",
        imageUrl: "/img/totalIncome.png",
      },
      {
        title: "Feast‑or‑famine pipeline",
        imageUrl: "/img/pipeline.png",
      },
    ],
  },
  {
    label: "How REIS™ fixes the gap",
    cards: [
      {
        title: "Agents talk features, not numbers.",
        text: "Cash flow, cap rate, CoC, NOI, DSCR—clear and client‑friendly.",
        imageUrl: "/img/features.png",
      },
      {
        title: "Strategy‑matched curation",
        text: "Every property maps to the client’s defined play (BRRRR, flip, buy‑and‑hold, SFR portfolio, small multi’s).",
        imageUrl: "/img/strategy.png",
      },
      {
        title: "Deal Analyzer snapshots",
        text: "a 60‑second read tha	t investors love.",
        imageUrl: "/img/60‑second.png",
      },
      {
        title: "48‑hour property packs",
        text: "Speed that saves deals.",
        imageUrl: "/img/48h.png",
      },
      {
        title: "Investor EFFECT™ team",
        text: "Mortgage, legal, PM, construction, lenders—ready to execute.",
        imageUrl: "/img/investor.png",
      },
      {
        title: "After‑close cadence",
        text: "Review, refi, redeploy → multi‑deal clients",
        imageUrl: "/img/clients.png",
      },
    ],
  },
];

export default function Gap() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      viewport={{ once: true, margin: "-50px" }}
      whileInView="visible"
      className="section-default"
    >
      <div className="space-y-6 mx-auto max-w-[672px] text-center mb-10">
        <motion.h2 variants={item} className="h2-large">
          The <span className="gradient-text">Gap</span> Investors Feel And How
          You Win By Closing It
        </motion.h2>
        <motion.h4 variants={item}>
          After training <span className="gradient-text">25,000+ </span>
          investors and buying across North America, Gord heard the same pain
          points again and again:
        </motion.h4>
      </div>
      <TabbedContent data={data} cardComponent={CardIllustration} />
    </motion.section>
  );
}
