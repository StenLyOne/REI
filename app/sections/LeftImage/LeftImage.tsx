"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import useIsLight from "@/hooks/useIsLight";
import Button from "@/components/ui/Button";

export default function LeftImage() {
  const isLight = useIsLight();

  const bgGradient = isLight
    ? "linear-gradient(to right, #f6f6f6, transparent)"
    : "linear-gradient(to right, #0c0a20, rgba(12, 10, 32, 0.8), transparent)";

  return (
    <section
      id="StartHere"
      className="relative w-full my-[100px] md:my-[440px] "
    >
      {" "}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row-reverse gap-[60px] lg:gap-[100px] items-center relative"
      >
        <div className="md:w-max md:absolute md:-translate-x-[65%]  ">
          <motion.div className="relative w-full md:w-[900px] h-[600px] rounded-r-[20px] overflow-hidden">
            <Image
              src="/img-optimized/section2.webp"
              alt="Real Estate Investment Certification Course"
              width={900}
              height={638}
              className="rounded-r-[20px] w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className="hidden md:block absolute top-0 left-0 h-full w-[30%] pointer-events-none z-10"
              style={{
                background: bgGradient,
              }}
            />
          </motion.div>
        </div>

        <div className="md:max-w-[530px]">
          <h2 className="h2-default">
            Find a <span className="gradient-text">REIS Certified Pro</span>{" "}
            Directory
          </h2>
          <p className="p-default mt-6 mb-10">
            Tap into our{" "}
            <span className="gradient-text font-semibold">
              North American Referral Directory
            </span>{" "}
            of REIS™‑certified professionals. Refer clients across regions with
            confidence—or get inbound referrals because{" "}
            <span className="gradient-text font-semibold">
              you’re certified.
            </span>
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button label="Search The Directory" />
            <div className="hidden md:block">
              <Button label="Apply to be listed" primary={false} />
            </div>
          </div>
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
