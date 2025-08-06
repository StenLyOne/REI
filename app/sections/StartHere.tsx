"use client";

import GlowIcon from "../components/GlowIcon";
import Button from "../components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { useInView } from "react-intersection-observer";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";
import useIsLight from "@/hooks/useIsLight";

const stats = [
  { value: 100, label: "Real Estate Knowledge" },
  { value: 100, label: "Deal Closing Skills" },
  { value: 100, label: "Portfolio Growth Strategy" },
];

export default function Section2() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const isLight = useIsLight();
  const [counts, setCounts] = useState([0, 0, 0]);

  const bgGradient = isLight
    ? "linear-gradient(to right, #f6f6f6, transparent)"
    : "linear-gradient(to right, #0c0a20, rgba(12, 10, 32, 0.8), transparent)";

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

  return (
    <section
      id="StartHere"
      className="relative w-full mb-[100px] lg:mb-[200px]"
    >
      {" "}
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row-reverse gap-[60px] lg:gap-[100px] items-center relative"
        >
          <div className="w-max absolute -translate-x-[65%] hidden lg:block ">
            <m.div
              variants={itemVariants}
              className="relative w-[900px] h-[638px] rounded-r-[20px] overflow-hidden"
            >
              <Image
                src="/img-optimized/section2.webp"
                alt="Real Estate Investment Certification Course"
                width={900}
                height={638}
                className="rounded-r-[20px] w-full h-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute top-0 left-0 h-full w-[30%] pointer-events-none z-10"
                style={{
                  background: bgGradient,
                }}
              />
            </m.div>
          </div>

          <div className="lg:max-w-[530px]">
            <m.div className="max-w-[110px]" variants={itemVariants}>
              <GlowIcon text="Start Here" img={false} />
            </m.div>
            <div className="space-y-[24px]">
              <m.h2 variants={itemVariants}>
                Start Your{" "}
                <span className="gradient-text">Real Estate Investment</span>{" "}
                Journey Today
              </m.h2>
              <m.div className="w-full lg:hidden" variants={itemVariants}>
                <Image
                  src="/img-optimized/section2.webp"
                  alt="Real Estate Investment Certification Course"
                  width={900}
                  height={638}
                  className="rounded-[20px] w-full"
                  loading="lazy"
                />
              </m.div>
              <m.p variants={itemVariants}>
                Take the first step toward becoming a certified real estate
                investor with REI Institute. Learn from the best, practice
                real-world strategies, and join a community of successful
                investors who are changing their lives through smart property
                investments.
              </m.p>
            </div>
            {/* List */}
            <div
              ref={ref}
              className="flex flex-wrap justify-start gap-[22px] my-[36px]"
            >
              {stats.map((item, i) => (
                <m.div
                  variants={itemVariants}
                  key={i}
                  className="text-center space-y-[12px] min-w-[120px]"
                >
                  <m.p className="text-[32px] font-bold text-foreground">
                    +{counts[i]}%
                  </m.p>
                  <p className="text-muted-foreground text-[16px]">
                    {item.label}
                  </p>
                </m.div>
              ))}
            </div>
            <m.div variants={itemVariants}>
              <Button />
            </m.div>
          </div>

          {/* Правая колонка — изображение со сдвигом */}
        </m.div>
        <m.div
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 0.4,
              scale: 1,
              transition: { duration: 2, ease: "easeOut", delay: 1 },
            },
          }}
          className="absolute overflow-visible top-[-50%] right-[10%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
        ></m.div>
        <p className="sr-only">
          Enroll in the REI Institute certification program to master real
          estate investment, deal closing, and portfolio growth strategies.
        </p>
      </LazyMotion>
    </section>
  );
}
