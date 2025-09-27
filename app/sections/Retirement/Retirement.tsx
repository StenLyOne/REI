import Card from "./Card";
import { motion } from "framer-motion";
import { container, item } from "@/lib/variantsAnimation";

const data = [
  {
    title: "Your 90‑day on‑ramp:",
    cards: [
      {
        title: "Define your Buy Box",
        text: "Price, cash-flow target, risk guardrails, financing path",
      },
      {
        title: "Run the Numbers",
        text: "Deal Analyzer + Wealth Map to shortlist real options fast",
      },
      {
        title: "Execute with Accountability",
        text: "Сoaching, pro-team intros, and weekly cadence until you’re under contract",
      },
    ],
  },
  {
    title: "Outcomes we coach to:",
    cards: [
      {
        title: "First contract in 90 days",
        text: "Put your first/next door under contract",
      },
      {
        title: "Monthly passive income",
        text: "Add income + clear path to scale",
      },
      {
        title: "Personal playbook client magnet",
        text: "Turn your own portfolio into a client attraction tool",
      },
    ],
  },
];

export default function Retirement() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: " -50px" }}
      className="section-default space-y-15 md:space-y-25"
    >
      <div className="space-y-6 text-center max-w-[720px] mx-auto">
        <motion.h2 variants={item} className="h2-large">
          Your <span className="gradient-text"> Retirement Starts Now</span>:
          Get In the Game
        </motion.h2>
        <motion.h4 variants={item}>
          <span className="gradient-text"> REALTORS® don’t get pensions. </span>{" "}
          Commission cheques aren’t a retirement plan.{" "}
          <span className="gradient-text"> The Agent Freedom Formula™ </span>{" "}
          helps you build your own portfolio—so you can{" "}
          <span className="gradient-text"> lead clients by example</span>
        </motion.h4>
      </div>
      {data.map((ele, index) => (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: " -50px" }}
          key={index}
          className="space-y-10"
        >
          <motion.h2 variants={item} className="h2-default text-center">
            {ele.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ele.cards.map((ele, i) => (
              <motion.div variants={item} key={i}>
                <Card index={i} title={ele.title} text={ele.text}></Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
