import CardImage from "@/components/ui/CardImage";
import TabbedContent from "@/components/ui/TabbedContent";
import { container, item } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";

const data = [
  {
    label: "You’ll learn to",
    cards: [
      {
        title:
          "Speak the investor language (cash flow, cap rate, CoC, NOI, DSCR) without confusing clients.",
        imageUrl: "/img/investorLanguage.png",
      },
      {
        title:
          "Turn everyday homebuyers into investor clients with a simple, ethical roadmap.",
        imageUrl: "/img/homebuyers.png",
      },
      {
        title:
          "Build and lead your Investor EFFECT™ Ecosystem (mortgage, legal, PM, construction, lenders) so deals move fast.",
        imageUrl: "/img/ecosystem.png",
      },
      {
        title:
          "Host Investor Nights and workshops that attract serious clients (templates included).",
        imageUrl: "/img/workshops.png",
      },
      {
        title:
          "Use our Deal Analyzer & scorecards to screen opportunities in minutes.",
        imageUrl: "/img/analyzer.png",
      },
      {
        title: "Create content & follow‑ups that drive repeat transactions.",
        imageUrl: "/img/content.png",
      },
    ],
  },
  {
    label: "What’s included high‑level",
    cards: [
      {
        title:
          "Modular”learn at your own pace” on‑demand portal + weekly live training & Q&A",
        imageUrl: "/img/learn.png",
      },
      {
        title: "Prospecting scripts & Done‑for‑You marketing assets",
        imageUrl: "/img/assets.png",
      },
      {
        title: "Investment Property Analyzer + templates and checklists",
        imageUrl: "/img/checklists.png",
      },
      {
        title: "Mastermind library & recordings",
        imageUrl: "/img/recordings.png",
      },
      {
        title: "North American referral network",
        imageUrl: "/img/network.png",
      },
      {
        title: "Coaching & accountability options",
        imageUrl: "/img/coaching.png",
      },
      {
        title: "Proctored exam & REIS™ designation",
        imageUrl: "/img/exam.png",
      },
    ],
  },
];

export default function Certification() {
  return (
    <motion.section
      id="Certification"
      variants={container}
      initial="hidden"
      viewport={{ once: true, margin: "-50px" }}
      whileInView="visible"
      className="section-default space-y-5"
    >
      <div className="space-y-6  text-center">
        <motion.h2 variants={item} className="h2-large max-w-[900px] mx-auto">
          The <span className="gradient-text"> REIS™ Certification </span> 12
          Weeks → Prospecting Competency
        </motion.h2>
        <motion.h4 variants={item} className="max-w-[900px] mx-auto">
          A rigorous, modern certification focused on prospecting smarter,
          generating quality leads, and{" "}
          <span className="gradient-text">
            {" "}
            building lifelong relationships.{" "}
          </span>
        </motion.h4>
      </div>
      <TabbedContent data={data} cardComponent={CardImage} />
    </motion.section>
  );
}
