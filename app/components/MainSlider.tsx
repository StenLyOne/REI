"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

const items = [
  { value: "12+", label: "Years Experience" },
  { value: "8K+", label: "Properties Sold" },
  { value: "30+", label: "Agents Trained" },
];

export default function StatsShowcase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="z-10 relative">
      <motion.div
        className="hidden w-full lg:flex justify-between items-center mt-[86px] z-1 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "100px" }}
        variants={containerVariants}
      >
        {/* Left avatars */}
        <motion.div className="flex items-center gap-4" variants={itemVariants}>
          <div className="flex -space-x-3">
            {["/img/avatar1.png", "/img/avatar2.png", "/img/avatar3.png"].map(
              (src, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Image
                    className="rounded-full border border-white"
                    src={src}
                    alt={`avatar-${i}`}
                    width={50}
                    height={50}
                  />
                </motion.div>
              )
            )}
          </div>
          <motion.div variants={itemVariants}>
            <p className="text-[20px] font-bold text-foreground">16K+</p>
            <p className="text-[16px] text-foreground">User Active</p>
          </motion.div>
        </motion.div>

        {/* Right cards */}
        <div className="flex gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="flex items-center gap-3 py-[6px] px-4 bg-secondary text-foreground rounded-[20px] shadow-classic max-w-[300px] text-left border-1 border-border"
              style={{ background: "var(--secondary)" }}
            >
              <h4 className="text-[24px] text-primary">{item.value}</h4>
              <p className="whitespace-nowrap">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="lg:hidden relative w-full overflow-hidden mt-[68px] space-y-[36px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${items.length * 100}%`,
            transform: `translateX(-${index * (100 / items.length)}%)`,
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="w-full flex-shrink-0 flex justify-center items-center px-4"
              style={{ width: `${100 / items.length}%` }}
            >
              <div
                className="flex items-center gap-3 py-[6px] px-4 z-[10] text-foreground rounded-[20px] mx-auto max-w-[300px] shadow-classic border-1 border-border"
                style={{ background: "var(--secondary)" }}
              >
                <h4 className="text-[24px] text-primary">{item.value}</h4>
                <p className="whitespace-nowrap">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-2 mt-4"
        >
          {items.map((_, i) => (
            <div
              key={i}
              className={`w-[63px] h-[3px] rounded-full transition-all duration-300 ${
                index === i ? "bg-primary" : "bg-grey"
              }`}
            ></div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
