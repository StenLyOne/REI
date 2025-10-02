import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { container, item } from "@/lib/variantsAnimation";

import CardSimple from "@/components/ui/CardSimple";

const data98Homes = [
  {
    title: "Convert curiosity → conversations",
    color: "text-blue",
    text: "Offer a 15‑minute Homeowner Wealth Review (equity, net worth, cash‑flow potential, financing paths). No listing needed.",
    imageUrl: "/img/convertCuriosity.png",
  },
  {
    title: "Make the primary home a strategy hub",
    color: "text-blue",
    text: "HELOC/refi scenarios, house‑hack, second‑door plan, rent‑to‑own options.",
    imageUrl: "/img/primaryHome.png",
  },
  {
    title: "Create a monthly cadence",
    color: "text-blue",
    text: "OInvestor Nights, Wealth Workshops, and quarterly portfolio check‑ins that generate repeatable deal flow.",
    imageUrl: "/img/monthlyCadence.png",
  },
];

const blueOcean = [
  {
    title: "Scripts",
    color: "text-blue",
    text: "“Equity‑to‑Income” opener; “Investment‑Ready in 90 Days” follow‑up.",
    imageUrl: "/img/scripts.png",
  },
  {
    title: "Tools",
    color: "text-blue",
    text: "Deal Analyzer + Wealth Map one‑pager investors can read in 60 seconds.",
    imageUrl: "/img/tools.png",
  },
  {
    title: "Offers",
    color: "text-blue",
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
  const imageWidth = useTransform(scrollYProgress, [0.3, 1], ["40%", "100%"]);

  return (
    <section className="bg-[#6BD1FF]/60">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default  space-y-25 "
      >
        <div ref={refSection} className="space-y-15">
          <div className="space-y-6">
            <motion.h2
              variants={item}
              className="h2-large mx-auto w-max text-center !text-blue"
            >
              Your Blue Ocean: <br className="block md:hidden" /> The{" "}
              <span className="text-[#1830E4]"> 98% </span>
            </motion.h2>
            <motion.h4
              variants={item}
              className="max-w-[896px] mx-auto text-center !text-blue"
            >
              Most homeowners aren’t
              <span className="text-[#1830E4]"> “in the market” </span>{" "}
              today—but they are interested in{" "}
              <span className="text-[#1830E4]"> building wealth </span>. Be the
              pro who brings the plan, not the pitch.
            </motion.h4>
          </div>
          <motion.img
            style={{ width: imageWidth }}
            variants={item}
            src="/img/blueOcean.png"
            className="w-full h-[50vh] md:h-auto rounded-[20px] mx-auto object-cover"
            width={1240}
            height={400}
            alt=" Your Blue Ocean: The 98%"
          ></motion.img>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-15"
        >
          <motion.h2 variants={item} className="h2-default text-center !text-blue">
            Turn the <span className="text-[#1830E4]">98% of homes</span> not
            listing into a pipeline
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between">
            {data98Homes.map((homes, i) => (
              <motion.div variants={item} key={i}>
                <CardSimple {...homes} />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-15"
        >
          <motion.h2 variants={item} className="h2-default text-center !text-blue">
            How REIS™ operationalizes the{" "}
            <span className="text-[#1830E4]">Blue Ocean</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between">
            {blueOcean.map((homes, i) => (
              <motion.div variants={item} key={i}>
                <CardSimple {...homes} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
