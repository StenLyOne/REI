"use client";

import GlowIcon from "../components/GlowIcon";
import Button from "../components/Button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 100, label: "Lorem ipsum cursus" },
  { value: 100, label: "Lorem ipsum cursus" },
  { value: 100, label: "Lorem ipsum cursus" },
];

export default function Section2() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isLight, setIsLight] = useState(true);
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const duration = 1000; // 1s
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
    }, 1000); // Задержка старта на 1 секунду

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
    <section className="relative w-full mb-[100px] lg:mb-[200px]">
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
              alt="section"
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
          <motion.div className="max-w-[125px]" variants={itemVariants}>
            <GlowIcon text="lorem ipsum" img={false} />
          </motion.div>
          <div className="space-y-[24px]">
            <motion.h2 variants={itemVariants}>
              Lorem ipsum cursus egestas libero sed
            </motion.h2>
            <motion.div className="w-full lg:hidden" variants={itemVariants}>
              <Image
                src="/img/section2.png"
                alt="section"
                width={900}
                height={638}
                className="rounded-[20px] w-full"
              />
            </motion.div>
            <motion.p variants={itemVariants}>
              Lorem ipsum cursus egestas libero sed pulvinar purus nullam
              phasellus in a aliquet enim id odio ultrices viverra aliquam
              adipiscing velit justo aliquam vel non euismod pulvinar nisl neque
              sed et mi accumsan sodales ut
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
    </section>
  );
}
