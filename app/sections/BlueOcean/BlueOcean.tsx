"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import CardSimple from "@/components/ui/CardSimple";

const data98Homes = [
  {
    title: "Convert curiosity → conversations",
    text: "Offer a 15‑minute Homeowner Wealth Review (equity, net worth, cash‑flow potential, financing paths). No listing needed.",
    imageUrl: "/img/convertCuriosity.png",
  },
  {
    title: "Make the primary home a strategy hub",
    text: "HELOC/refi scenarios, house‑hack, second‑door plan, rent‑to‑own options.",
    imageUrl: "/img/primaryHome.png",
  },
  {
    title: "Create a monthly cadence",
    text: "OInvestor Nights, Wealth Workshops, and quarterly portfolio check‑ins that generate repeatable deal flow.",
    imageUrl: "/img/monthlyCadence.png",
  },
];

const blueOcean = [
  {
    title: "Scripts",
    text: "“Equity‑to‑Income” opener; “Investment‑Ready in 90 Days” follow‑up.",
    imageUrl: "/img/scripts.png",
  },
  {
    title: "Tools",
    text: "Deal Analyzer + Wealth Map one‑pager investors can read in 60 seconds.",
    imageUrl: "/img/tools.png",
  },
  {
    title: "Offers",
    text: "Investor Night‑in‑a‑Box + Blue Ocean Playbook to launch within 14 days.",
    imageUrl: "/img/offers.png",
  },
];

export default function BlueOcean() {
  const refSection = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refSection,
    offset: ["start end", "end end"],
  });
  const imageWidth = useTransform(
    scrollYProgress,
    [0.3, 1],
    ["40%", "100%"]
  );

  return (
    <section className="section-default  space-y-25">
      <div ref={refSection} className="space-y-15">
        <div className="space-y-6">
          <h2 className="h2-large mx-auto w-max text-center">
            Your Blue Ocean: <br className="block md:hidden" /> The{" "}
            <span className="text-[#1830E4]"> 98% </span>
          </h2>
          <h4 className="max-w-[886px] mx-auto text-center">
            Most homeowners aren’t
            <span className="text-[#1830E4]"> “in the market” </span> today—but
            they are interested in{" "}
            <span className="text-[#1830E4]"> building wealth </span>. Be the
            pro who brings the plan, not the pitch.
          </h4>
        </div>
        <motion.img
          style={{ width: imageWidth }}
          src="/img/blueOcean.png"
          className="w-full h-[50vh] md:h-auto rounded-[20px] mx-auto object-cover"
          width={1240}
          height={400}
          alt=" Your Blue Ocean: The 98%"
        ></motion.img>
      </div>
      <div className="space-y-15">
        <h2 className="h2-default text-center">
          Turn the <span className="text-[#1830E4]">98% of homes</span> not
          listing into a pipeline
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between">
          {data98Homes.map((item, i) => (
            <CardSimple key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="space-y-15">
        <h2 className="h2-default text-center">
          How REIS™ operationalizes the{" "}
          <span className="text-[#1830E4]">Blue Ocean</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between">
          {blueOcean.map((item, i) => (
            <CardSimple key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
