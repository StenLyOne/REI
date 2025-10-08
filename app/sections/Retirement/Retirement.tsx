"use clinet";

import Card from "./Card";

import { container, item } from "@/lib/variantsAnimation";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const introRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"], // когда заголовок проходит весь свой скролл
  });

  // 2-я строка: плавно появляется и подъезжает к первой
  const secondOpacity = useTransform(scrollYProgress, [0.34, 0.5], [0, 1]);
  const secondY = useTransform(scrollYProgress, [0.34, 0.5], [24, 0]);
  // (по желанию) 1-я строка чуть приподнимается, чтобы освободить место
  const firstY = useTransform(scrollYProgress, [0.15, 0.35], [0, -6]);

  const therdOpacity = useTransform(scrollYProgress, [0.5, 0.65], [0, 1]);
  const therdY = useTransform(scrollYProgress, [0.5, 0.65], [24, 0]);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: " -50px" }}
      className="section-default space-y-15 md:space-y-0 mt-40"
    >
      <div className="space-y-6 text-center  mx-auto">
        <motion.div
          variants={item}
          className="relative  h-[1000px] "
          ref={introRef}
        >
          <div className="sticky top-[50vh] -translate-y-1/2 space-y-6">
            <h2 className="h2-large mx-auto">
              {/* ЕДИНЫЙ sticky-контейнер */}
              <div className="flex flex-col items-center">
                {/* 1-я строка — видна сразу */}
                <motion.span
                  style={{ y: firstY }}
                  className="block text-center"
                >
                  Your{" "}
                  <span className="gradient-text">
                    Your Retirement Plan Starts Now
                  </span>
                  
                </motion.span>

                {/* 2-я строка — скрыта в начале, появляется при скролле и едет вместе с первой */}
                <motion.span
                  style={{ opacity: secondOpacity, y: secondY }}
                  className="block text-center"
                >
                  Get In the Game
                </motion.span>
              </div>
            </h2>
            <motion.h4
              style={{ opacity: therdOpacity, y: therdY }}
              className="max-w-[800px] mx-auto"
            >
              <span className="gradient-text">
                {" "}
                REALTORS® don’t get pensions.{" "}
              </span>{" "}
              Commission cheques aren’t a retirement plan.{" "}
              <span className="gradient-text">
                {" "}
                The Agent Freedom Formula™{" "}
              </span>{" "}
              helps you build your own portfolio—so you can{" "}
              <span className="gradient-text"> lead clients by example</span>
            </motion.h4>
          </div>
        </motion.div>
      </div>
      <div className="space-y-25">
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
      </div>
    </motion.section>
  );
}
