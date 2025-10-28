import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { container, item } from "@/lib/variantsAnimation";

import CardSimple from "@/components/ui/CardSimple";
import { useProportions } from "@/hooks/useProportions";

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
  const { width } = useProportions();

  const { scrollYProgress } = useScroll({
    target: refSection,
    offset: ["start end", "end start"],
  });
  const imageWidth = useTransform(scrollYProgress, [0.1, 0.2], ["40%", "100%"]);
  const wavesY = useTransform(
    scrollYProgress,
    width >= 768 ? [0.05, 0.2] : [0.05, 0.1],
    [200, 0]
  );
  const wavesOpacity = useTransform(
    scrollYProgress,
    width >= 768 ? [0.05, 0.2, 0.9, 0.95] : [0.05, 0.1, 0.9, 0.95],
    [0, 1, 1, 0]
  );

  return (
    <section ref={refSection} className="relative pt-10">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: wavesY, opacity: wavesOpacity }}
          className="sticky top-0 w-full h-max z-0"
        >
          <img
            src="/img/wave.png"
            alt="wave"
            className="w-full h-screen object-cover"
          ></img>
        </motion.div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default  space-y-25 "
      >
        <div className="space-y-15">
          <div className="space-y-6">
            <motion.h2
              variants={item}
              className="h2-large mx-auto w-max text-center !text-white"
            >
              Your Blue Ocean: <br className="block md:hidden" /> The{" "}
              <span className=""> 98% </span>
            </motion.h2>
            <motion.h4
              variants={item}
              className="max-w-[926px] mx-auto text-center !text-white font-bold"
            >
              Most homeowners aren’t
              <span className=""> “in the market” </span> today—but they are
              interested in <span className=""> building wealth </span>. Be the
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
          <motion.h2
            variants={item}
            className="h2-default text-center !text-white"
          >
            Turn the <span className="">98% of homes</span> not listing into a
            pipeline
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between">
            {data98Homes.map((homes, i) => (
              <motion.div variants={item} key={i}>
                <CardSimple {...homes} colorText="text-white"    titleClass="text-white leading-[40px] text-[32px] font-semibold"/>
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
          <motion.h2
            variants={item}
            className="h2-default text-center !text-white"
          >
            How REIS™ operationalizes the <span className="">Blue Ocean</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between pb-1">
            {blueOcean.map((homes, i) => (
              <motion.div variants={item} key={i}>
                <CardSimple
                  {...homes}
                  colorText="text-white"
                  titleClass="text-white leading-[40px] text-[32px] font-semibold"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
