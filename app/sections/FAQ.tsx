"use client";

import GlowIcon from "@/components/GlowIcon";
import Question from "@/components/Question";
import { motion } from "framer-motion";

export default function FAQ() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
    >
      <motion.div className="md:w-[66px]" variants={itemVariants}>
        <GlowIcon text="FAQ" img={false} />
      </motion.div>
      <div className="flex justify-between flex-col md:flex-row gap-[48px]">
        <motion.h2 className="text-center md:text-left" variants={itemVariants}>
          Things People <br /> Usually Ask
        </motion.h2>
        <div className="space-y-[20px]">
          <motion.div variants={itemVariants}>
            <Question
              q="Do I need prior real estate experience?"
              a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="Do I need prior real estate experience?"
              a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="Do I need prior real estate experience?"
              a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="Do I need prior real estate experience?"
              a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="Do I need prior real estate experience?"
              a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 0.4,
            scale: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1 },
          },
        }}
        className="absolute overflow-visible top-[50%] left-[-35%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 0.4,
            scale: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1.3 },
          },
        }}
        className="absolute overflow-visible top-[0%] right-[-35%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
      ></motion.div>
    </motion.section>
  );
}
