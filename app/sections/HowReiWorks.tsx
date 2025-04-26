"use client";

import FeatureCard from "@/components/FeatureCard";
import GlowIcon from "@/components/GlowIcon";
import ReiLabel from "@/components/ReiLabel";
import { motion } from "framer-motion";

const data = [
  {
    icon: "/icons/calls.svg",
    images: ["/img/calls1.png", "/img/calls2.png", "/img/calls3.png"],
    title: "Weekly training calls",
  },
  {
    icon: "/icons/calls.svg",
    images: ["/img/calls1.png", "/img/calls2.png", "/img/calls3.png"],
    title: "Weekly training calls",
  },
  {
    icon: "/icons/calls.svg",
    images: ["/img/calls1.png", "/img/calls2.png", "/img/calls3.png"],
    title: "Weekly training calls",
  },
  {
    icon: "/icons/calls.svg",
    images: ["/img/calls1.png", "/img/calls2.png", "/img/calls3.png"],
    title: "Weekly training calls",
  },
  {
    icon: "/icons/calls.svg",
    images: ["/img/calls1.png", "/img/calls2.png", "/img/calls3.png"],
    title: "Weekly training calls",
  },
  {
    icon: "/icons/calls.svg",
    images: ["/img/calls1.png", "/img/calls2.png", "/img/calls3.png"],
    title: "Weekly training calls",
  },
];
export default function HowReiWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.22,
        delayChildren: 0.3,
      },
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
    <section className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[0px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <GlowIcon text="How Rei Works" img={false} />
        </motion.div>

        <div className="mx-auto space-y-[24px] text-center">
          <motion.h2 variants={itemVariants}>
            What is included in the program
          </motion.h2>

          <motion.p variants={itemVariants}>
            In 12 weeks, you will be fully certified as a Real Estate Investment
            Specialist.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
      >
        <ReiLabel />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={itemVariants}
        className="relative w-full h-full"
      >
        <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 max-w-[400px] w-full h-[600px]">
          {/* Central line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[-35px] w-full max-w-[380px] h-[514px] max-[600px]:px-[60px] justify-between pointer-events-none z-0 hidden max-[1024px]:flex">
            <svg
              className="w-full h-[514px]"
              viewBox="0 0 259 514"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0 109.5C0 109.5 82 109.5 85.5 109.5C89 109.5 113 109.5 121.5 101C130 92.5 129.5 67.5 129.5 67.5V0"
                stroke="#BDBDBD"
              />
              <path
                d="M0 312.5C0 312.5 82 312.5 85.5 312.5C89 312.5 113 312.5 121.5 304C130 295.5 129.5 270.5 129.5 270.5V0"
                stroke="#BDBDBD"
              />
              <path
                d="M0 513.5C0 513.5 82 513.5 85.5 513.5C89 513.5 113 513.5 121.5 505C130 496.5 129.5 471.5 129.5 471.5V0"
                stroke="#BDBDBD"
              />
              <path
                d="M258.505 109.5C258.505 109.5 176.505 109.5 173.005 109.5C169.505 109.5 145.505 109.5 137.005 101C128.505 92.5 129.005 67.5 129.005 67.5V0"
                stroke="#BDBDBD"
              />
              <path
                d="M258.505 312.5C258.505 312.5 176.505 312.5 173.005 312.5C169.505 312.5 145.505 312.5 137.005 304C128.505 295.5 129.005 270.5 129.005 270.5V0"
                stroke="#BDBDBD"
              />
              <path
                d="M258.505 513.5C258.505 513.5 176.505 513.5 173.005 513.5C169.505 513.5 145.505 513.5 137.005 505C128.505 496.5 129.005 471.5 129.005 471.5V0"
                stroke="#BDBDBD"
              />
            </svg>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 top-[-35px] w-[971px] h-[293px] justify-between pointer-events-none z-0 hidden min-[1024px]:flex ">
            <svg
              width="1020"
              height="293"
              viewBox="0 0 1020 293"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M631 292.5C631 149 510.334 107.5 510.334 0"
                stroke="#BDBDBD"
              />
              <path
                d="M824 212.5C824 69 510.333 107.5 510.333 0"
                stroke="#BDBDBD"
              />
              <path
                d="M1019 143.5C1019 0.000564575 510.333 107.502 510.333 0.00195312"
                stroke="#BDBDBD"
              />
              <path
                d="M389.333 292.5C389.333 149 510 107.5 510 0"
                stroke="#BDBDBD"
              />
              <path
                d="M196.333 212.5C196.333 69 510 107.5 510 0"
                stroke="#BDBDBD"
              />
              <path
                d="M1.3335 143.5C1.3335 0.000564575 510 107.502 510 0.00195312"
                stroke="#BDBDBD"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-2 gap-y-[70px] justify-between pt-[20px] w-full max-w-[700px] mx-auto lg:hidden"
      >
        {data.map((props, i) => (
          <motion.div key={i} variants={itemVariants}>
            <FeatureCard {...props} />
          </motion.div>
        ))}
      </motion.div>

      <div className="relative w-full max-w-[1200px] mx-auto min-h-[600px] hidden lg:flex">
        {/* Mid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-1/2 flex justify-center gap-[106px]"
        >
          {[data[2], data[3]].map((props, i) => (
            <motion.div key={i} variants={itemVariants}>
              <FeatureCard {...props} />
            </motion.div>
          ))}
        </motion.div>

        {/* Top */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[130px] flex justify-center gap-[488px]"
        >
          {[data[1], data[4]].map((props, i) => (
            <motion.div key={i} variants={itemVariants}>
              <FeatureCard {...props} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bot */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[230px] flex justify-center gap-[867px]"
        >
          {[data[0], data[5]].map((props, i) => (
            <motion.div key={i} variants={itemVariants}>
              <FeatureCard {...props} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="absolute overflow-visible top-[0%] left-[-35%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
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
      <motion.div
        className="absolute overflow-visible top-[0%] right-[-35%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
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
      ></motion.div>
    </section>
  );
}
