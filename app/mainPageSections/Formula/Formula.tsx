import Button from "@/components/ui/Button";
import CardSimple from "@/components/ui/CardSimple";
import { motion } from "framer-motion";
import { container, item } from "@/lib/variantsAnimation";
import { useProportions } from "@/hooks/useProportions";

const data = [
  {
    title: "Attract",
    color: "gradient-text",
    text: "Blue‑Ocean outreach, Investor Nights, and numbers‑first content that filters for serious clients.",
    imageUrl: "/img/attract.png",
  },
  {
    title: "Diagnose",
    color: "gradient-text",
    text: "Wealth Review → Deal Criteria → Financing Path in one tight consult.",
    imageUrl: "/img/diagnose.png",
  },
  {
    title: "Prescribe",
    color: "gradient-text",
    text: "Strategy‑matched Property Packs within 48 hours (Deal Analyzer snapshot + risk notes).",
    imageUrl: "/img/prescribe.png",
  },
  {
    title: "Execute",
    color: "gradient-text",
    text: "Power Team Alliances (mortgage, legal, PM, construction, lenders) to move quickly and cleanly.",
    imageUrl: "/img/execute.png",
  },
  {
    title: "Compound",
    color: "gradient-text",
    text: "Post‑close cadence: review, refi, redeploy → multi‑deal clients.",
    imageUrl: "/img/compound.png",
  },
];

export function Formula() {
  const isMobile =
    useProportions().width <= 768
      ? "Get The Agent Freedom Formula"
      : "Get The Agent Freedom Formula Launch Kit";

  return (
    <motion.section
      id="Formula"
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: true, margin: "-50px" }}
      className="section-default flex flex-col md:flex-row justify-between gap-20 md:gap-8"
    >
      <div className="relative w-full md:w-1/2">
        <div className="sticky top-[30vh] space-y-10">
          <div className="space-y-6">
            <motion.h2 variants={item} className="h2-default max-w-[510px]">
              The{" "}
              <span className="gradient-text"> Agent Freedom Formula™ </span>{" "}
              Your Prospecting System
            </motion.h2>
            <motion.p
              variants={item}
              className="p-default max-w-[390px] !font-medium"
            >
              Stop competing in the same crowded silo. The Agent Freedom Formula™ 
              turns education into a repeatable deal machine
            </motion.p>
          </div>
          {/* <motion.div variants={item}>
            {" "}
            <Button label={isMobile} />
          </motion.div> */}
        </div>
      </div>
      <div className="space-y-15">
        {data.map((card, index) => (
          <motion.div
            key={index}
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // появится, когда ~30% карточки в экране
          >
            <CardSimple {...card} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
