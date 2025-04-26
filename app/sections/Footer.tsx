"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
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
    <footer className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12 ">
      <motion.div
        className="rounded-t-[20px] px-[20px] py-[48px] sm:p-[48px] text-left shadow-classic border-1 border-border"
        style={{ background: "var(--secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="w-full flex justify-between min-[800px]:flex-row flex-col gap-[48px]">
          <motion.div className="space-y-[24px]" variants={itemVariants}>
            <Image src="/logo.png" alt="logo" width={214} height={23} />
            <div className="flex gap-[24px]">
              <span className="w-[48px] h-[48px] bg-primary rounded-full"></span>
              <span className="w-[48px] h-[48px] bg-primary rounded-full"></span>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-[12px] text-[16px] font-semibold"
            variants={itemVariants}
          >
            <a href="">Home</a>
            <a href="">How REI Works</a>
            <a href="">Benefits</a>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-[12px] text-[16px] font-semibold"
            variants={itemVariants}
          >
            <a href="">Success Stories</a>
            <a href="">Testimonials</a>
            <a href="">Who’s it for</a>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-[12px] text-[16px] font-semibold"
            variants={itemVariants}
          >
            <a href="">Ecosystem</a>
            <a href="">Founders</a>
            <a href="">FAQ</a>
          </motion.div>
        </div>
        <motion.div
          className="w-full h-[1px] bg-grey my-[30px]"
          variants={itemVariants}
        />
        <motion.div
          className="sm:flex justify-between space-y-[24px] sm:space-y-[0px]"
          variants={itemVariants}
        >
          <p>Copyright © 2025 by Real Estate Investment Institute</p>
          <p>Privacy Policy</p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
