"use client";

import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const screenshots = [
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
  "/screenshots/screenshot",
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let framerId: number;
    let direction: "left" | "right" = "left";
    const step = 2;

    const handleScroll = () => {
      isUserScrolling.current = true;
      clearTimeout((handleScroll as any).timeout);
      (handleScroll as any).timeout = setTimeout(() => {
        isUserScrolling.current = false;
      }, 10);
    };

    container.addEventListener("scroll", handleScroll);

    const animate = () => {
      if (!container) return;

      if (isUserScrolling.current) {
        framerId = requestAnimationFrame(animate); // 🔁 если хочешь просто приостановить и продолжить
        return;
      }

      if (direction === "left") {
        container.scrollLeft += step;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth - 1
        ) {
          direction = "right";
        }
      } else {
        container.scrollLeft -= step;
        if (container.scrollLeft <= 0) {
          direction = "left";
        }
      }

      framerId = requestAnimationFrame(animate);
    };
    framerId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(framerId);
      container.removeEventListener("scroll", handleScroll);
    };
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
    <motion.section
      className="relative w-full py-12 space-y-[48px] mb-[100px] lg:mb-[200px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className="px-4 sm:px-6 lg:px-12" variants={itemVariants}>
        <GlowIcon text="Testimonials" img={false} />
        <h2 className="text-center">REIS Certification Success Stories</h2>
      </motion.div>

      <motion.div
        className="no-scrollbar relative overflow-visible"
        variants={itemVariants}
      >
        <div
          ref={scrollRef}
          className="flex gap-[24px] no-scrollbar overflow-x-auto"
          onMouseEnter={() => (isUserScrolling.current = true)}
          onMouseLeave={() => (isUserScrolling.current = false)}
        >
          {screenshots.map((item, i) => (
            <Image
              key={i}
              className="no-scrollbar w-[60%] h-auto md:w-[200px] md:h-[414px] lg:w-[300px] lg:h-[621px] flex-shrink-0"
              src={`${item}.png`}
              alt={`screenshot-${i}`}
              width={392}
              height={312}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute overflow-visible top-[0%] left-[-40%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
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
