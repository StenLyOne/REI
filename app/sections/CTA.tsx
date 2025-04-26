"use client";

import Button from "@/components/Button";
import GlowIcon from "@/components/GlowIcon";
import { motion } from "framer-motion";

export default function CTA() {
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
      className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12 mb-[100px] sm:mb-[200px] "
    >
      <motion.div className="px-[20px] py-[48px] sm:p-[48px] bg-[url('/img/ctaBg.jpg')] bg-cover bg-center rounded-[20px] shadow-classic">
        <div className="max-w-[680px]">
          <motion.div className="w-[191px]" variants={itemVariants}>
            <GlowIcon text="Ready to get started?" img={false} />
          </motion.div>
          <motion.h2 className="text-white" variants={itemVariants}>
            Take the First Step Toward Becoming a
            <span className="gradient-text"> Real Estate Investor </span>
          </motion.h2>
          <motion.p
            className="pb-[36px] pt-[24px] text-white"
            variants={itemVariants}
          >
            Join the REI Institute and start building real results in just 90
            days — no experience required.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
