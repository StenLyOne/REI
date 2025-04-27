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
      id="FAQ"
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
              q="What is a certified real estate investor?"
              a="A certified real estate investor is a professional who has completed specialized training and demonstrated expertise in property investment strategies, market analysis, and portfolio building. Certification increases credibility and opens up more investment opportunities.r"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="How long does it take to complete the REI Institute program?"
              a="Most students complete the REI Institute certification in 8–12 weeks, depending on their schedule and pace. The program is designed for flexibility, allowing you to learn at your own speed while still gaining in-depth knowledge."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="Do I need prior experience in real estate to enroll?"
              a="No prior experience is required. The program is beginner-friendly and designed to equip both newcomers and experienced professionals with practical, actionable skills in real estate investing."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="What makes the REI Institute program different from traditional real estate courses?"
              a="Unlike many theory-based courses, the REI Institute focuses on real-world applications. Our curriculum includes hands-on case studies, mentorship from seasoned investors, and strategies that are working in today's real estate market."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="How much can I expect to earn after certification?"
              a="Earnings vary depending on your strategy, location, and commitment. Many certified investors report making their first profitable deal within the first 6 months after completing the program."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="Is the certification recognized nationwide?"
              a="Yes, the REI Institute Certification is respected by investors, agencies, and real estate professionals across the U.S. It demonstrates practical skills and readiness to operate successfully in the real estate industry."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="What types of real estate strategies will I learn?"
              a="You will master multiple strategies including residential flips, rental property investing, wholesaling, short-term rentals, and passive income generation through multi-family properties."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="What support do I get after completing the course?"
              a="After certification, you gain lifetime access to our investor community, ongoing mentorship opportunities, and exclusive resources to help you close your first deals and scale your investment portfolio."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="Can I study at my own pace?"
              a="Absolutely. The program is 100% online and self-paced, meaning you can study whenever and wherever works best for you, without sacrificing quality."
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <Question
              q="How do I enroll in the REI Institute Certification Program?"
              a="Simply click the ƒ'Enroll Now' button on this page, complete a short registration form, and you’ll gain immediate access to the learning platform and all course materials."
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
