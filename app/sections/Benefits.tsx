"use client";

import { motion } from "framer-motion";
import GlowIcon from "@/components/GlowIcon";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

export default function Benefits() {
  const data = [
    {
      gif: "/icons/profit.gif",
      title: "Investor Ecosystem",
      description:
        "Learn to build your own Investor EFFECT Ecosystem to become the go-to real estate investment specialist and 4X your business in 12 months.",
    },
    {
      gif: "/icons/handshake.gif",
      title: "Fast Closures",
      description:
        "Secure two investment properties under contract within 30 days of completing the REIS Certification.",
    },
    {
      gif: "/icons/Database.gif",
      title: "Database Growth",
      description:
        "Increase your qualified investor database by 10%-20% within 30 days of completing your REIS Certification.",
    },
    {
      gif: "/icons/engagement.gif",
      title: "Client Acquisition",
      description:
        "Quickly find clients in a saturated market with proven strategies.",
    },
    {
      gif: "/icons/choosing-customer.gif",
      title: "Lead by Example",
      description:
        "Invest in real estate yourself and become a role model for clients, family, and colleagues.",
    },
    {
      gif: "/icons/growth.gif",
      title: "Wealth Building",
      description:
        "Build wealth passively while reducing the stress of chasing new clients.",
    },
  ];

  return (
    <motion.section
      id="Benefits"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
    >
      <div className="flex flex-col items-center text-center space-y-[48px]">
        <div>
          <motion.div variants={itemVariants}>
            <GlowIcon text="Benefits" img={false} />
          </motion.div>
          <div className="max-w-[780px] text-center space-y-[24px]">
            <motion.h2 variants={itemVariants}>
              Transform
              <span className="gradient-text"> Your Real Estate Career </span>
              With REI Institute Certification
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="max-w-[800px] mx-auto text-center"
            >
              Whether you are starting fresh or scaling your existing real
              estate career, our program is your ultimate launchpad. Unlock new
              opportunities, achieve financial independence, and gain a
              competitive edge.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {data.map((benefit, i) => (
            <motion.article
              variants={itemVariants}
              key={i}
              className="p-[20px] space-y-[24px] rounded-[20px] text-left border-1 border-border shadow-classic"
              style={{ background: "var(--secondary)" }}
            >
              <div className="w-[78px] h-[78px]">
                <GlowIcon text={benefit.gif} img={true} />
              </div>
              <div className="space-y-[12px]">
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute overflow-visible top-[40%] right-[-20%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
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
      ></motion.div>
    </motion.section>
  );
}
