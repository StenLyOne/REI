"use client";

import GlowIcon from "../components/GlowIcon";
import Button from "../components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

const stats = [
  { value: 100, label: "Real Estate Knowledge" },
  { value: 100, label: "Deal Closing Skills" },
  { value: 100, label: "Portfolio Growth Strategy" },
];

export default function Section2() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isLight, setIsLight] = useState(true);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const duration = 1000;
    const interval = 30;
    const steps = duration / interval;

    let animations: NodeJS.Timeout[] = [];
    const timeout = setTimeout(() => {
      animations = stats.map((s, i) => {
        const increment = s.value / steps;
        let current = 0;
        return setInterval(() => {
          current += increment;
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = Math.min(Math.round(current), s.value);
            return updated;
          });
        }, interval);
      });
    }, duration);

    return () => {
      clearTimeout(timeout);
      animations.forEach(clearInterval);
    };
  }, [inView]);

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
      id="StartHere"
      className="relative w-full mb-[100px] lg:mb-[200px]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row-reverse gap-[60px] lg:gap-[100px] items-center relative"
      >
        <div className="w-max absolute -translate-x-[65%] hidden lg:block ">
          <motion.div
            variants={itemVariants}
            className="relative w-[900px] h-[638px] rounded-r-[20px] overflow-hidden"
          >
            <Image
              src="/img/section2.png"
              alt="Real Estate Investment Certification Course"
              width={900}
              height={638}
              className="rounded-r-[20px] w-full h-full object-cover"
            />
            <div
              className="absolute top-0 left-0 h-full w-[30%] pointer-events-none z-10"
              style={{
                background: isLight
                  ? "linear-gradient(to right, #f6f6f6, transparent)"
                  : "linear-gradient(to right, #0c0a20, rgba(12, 10, 32, 0.8), transparent)",
              }}
            />
          </motion.div>
        </div>

        <div className="lg:max-w-[530px]">
          <motion.div className="max-w-[110px]" variants={itemVariants}>
            <GlowIcon text="Start Here" img={false} />
          </motion.div>
          <div className="space-y-[24px]">
            <motion.h2 variants={itemVariants}>
              Start Your{" "}
              <span className="gradient-text">Real Estate Investment</span>{" "}
              Journey Today
            </motion.h2>
            <motion.div className="w-full lg:hidden" variants={itemVariants}>
              <Image
                src="/img/section2.png"
                alt="Real Estate Investment Certification Course"
                width={900}
                height={638}
                className="rounded-[20px] w-full"
              />
            </motion.div>
            <motion.p variants={itemVariants}>
              Take the first step toward becoming a certified real estate
              investor with REI Institute. Learn from the best, practice
              real-world strategies, and join a community of successful
              investors who are changing their lives through smart property
              investments.
            </motion.p>
          </div>
          {/* List */}
          <div
            ref={ref}
            className="flex flex-wrap justify-start gap-[22px] my-[36px]"
          >
            {stats.map((item, i) => (
              <motion.div
                variants={itemVariants}
                key={i}
                className="text-center space-y-[12px] min-w-[120px]"
              >
                <motion.p className="text-[32px] font-bold text-foreground">
                  +{counts[i]}%
                </motion.p>
                <p className="text-muted-foreground text-[16px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div variants={itemVariants}>
            <Button />
          </motion.div>
        </div>

        {/* Правая колонка — изображение со сдвигом */}
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
        className="absolute overflow-visible top-[-50%] right-[10%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
      ></motion.div>
      <p className="sr-only">
        Enroll in the REI Institute certification program to master real estate
        investment, deal closing, and portfolio growth strategies.
      </p>
    </section>
  );
}
