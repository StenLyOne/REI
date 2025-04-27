"use client";

import GlowIcon from "../components/GlowIcon";
import Button from "../components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

const features = [
  "Hands-On Assignments",
  "Case Study-Based Learning",
  "Interactive Mentorship",
  "Lifetime Community Access",
];

export default function Section1() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    checkTheme(); // init
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="WhatYouLearn"
      className="relative w-full mb-[100px] lg:mb-[200px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-center relative"
      >
        {/* Левая колонка */}
        <div className="lg:max-w-[530px]">
          <div className="max-w-[152px]">
            <GlowIcon text="What You Learn" img={false} />
          </div>
          <div className="space-y-[24px]">
            <motion.h2 variants={itemVariants}>
              How the REI Institute Prepares You for{" "}
              <span className="gradient-text"> Real-World Success </span>
            </motion.h2>
            <motion.div variants={itemVariants} className="w-full lg:hidden">
              <Image
                src="/img/section1.png"
                alt="section"
                width={900}
                height={638}
                className="rounded-[20px] w-full"
              />
            </motion.div>
            <motion.p variants={itemVariants}>
              Through practical assignments, real-world case studies, and
              interactive mentorship, our certification program ensures you’re
              ready to make confident investment decisions from day one. You
              won&apos;t just learn theory — you&apos;ll be prepared to execute deals,
              build your portfolio, and grow sustainable income streams.
            </motion.p>
          </div>
          {/* List */}
          <div className="flex gap-[22px] my-[36px]">
            {[...Array(2)].map((_, col) => (
              <div key={col} className="space-y-[22px]">
                {features.slice(col * 2, col * 2 + 2).map((feature, row) => (
                  <motion.div
                    variants={itemVariants}
                    key={row}
                    className="flex gap-[16px] items-center"
                  >
                    <span
                      className="w-[32px] h-[32px] flex items-center justify-center shadow-classic rounded-[20px] border border-border"
                      style={{ background: "var(--secondary)" }}
                    >
                      <Image
                        src="/icons/check.svg"
                        alt="check"
                        width={19}
                        height={14}
                      />
                    </span>
                    <p className="font-semibold">{feature}</p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
          <motion.div variants={itemVariants}>
            <Button />
          </motion.div>
        </div>

        {/* Right img */}
        <div className="w-max absolute translate-x-[65%] hidden lg:block">
          <div className="relative w-[900px] h-[638px] rounded-l-[20px] overflow-hidden">
            <Image
              src="/img/section1.png"
              alt="section"
              width={900}
              height={638}
              className="rounded-l-[20px] w-full h-full object-cover"
            />
            <div
              className="absolute top-0 right-0 h-full w-[30%] pointer-events-none z-10"
              style={{
                background: isLight
                  ? "linear-gradient(to left, #f6f6f6, transparent)"
                  : "linear-gradient(to left, #0c0a20, rgba(12, 10, 32, 0.8), transparent)",
              }}
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 0.4,
            scale: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1 },
          },
        }}
        className="absolute overflow-visible top-[-50%] right-[10%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
      ></motion.div>
    </section>
  );
}
