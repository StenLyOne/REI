"use client";

import Button from "@/components/Button";
import MainSlider from "@/components/MainSlider";
import VideoModal from "@/components/VideoModal";
import { useState } from "react";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import Image from "next/image";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";
import useIsLight from "@/hooks/useIsLight";

export default function HeroSection() {
  const isLight = useIsLight();
  const [openVideo, setOpenVideo] = useState<string | null>(null);

  return (
    <main
      id="Home"
      className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 pt-[160px] mb-[100px] lg:mb-[200px]"
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-[70px] items-center z-1 relative"
        >
          {/* Text content */}
          <div className="text-center lg:text-left">
            <div className="space-y-[32px]">
              <m.h1
                variants={itemVariants}
                className="text-[40px] sm:text-[54px] font-heading font-bold text-foreground leading-tight"
              >
                Become a
                <span className="gradient-text">
                  {" "}
                  Certified Real Estate Investor{" "}
                </span>{" "}
                and Start Earning From Properties
              </m.h1>
              <m.p
                variants={itemVariants}
                className="max-w-[600px] mx-auto lg:mx-0"
              >
                Join the REI Institute Certification Program and learn how to
                invest in real estate confidently. Gain the skills, strategies,
                and certification you need to grow your wealth through property
                investments.
              </m.p>
              <m.div
                variants={itemVariants}
                className="flex justify-center lg:hidden gap-[16px]"
              >
                <div className="flex">
                  <div className="flex items-center -space-x-3">
                    <Image
                      className="rounded-full border border-white border-[1px]"
                      src="/img-optimized/avatar1.webp"
                      alt="avatar1"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                    <Image
                      className="rounded-full border border-white border-[1px]"
                      src="/img-optimized/avatar2.webp"
                      alt="avatar2"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                    <Image
                      className="rounded-full border border-white border-[1px]"
                      src="/img-optimized/avatar3.webp"
                      alt="avatar3"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="text-left">
                  <p className="text-[20px] font-bold text-foreground">16K +</p>
                  <p className="text-[16px] text-foreground">User Active</p>
                </div>
              </m.div>
            </div>
            <m.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 mt-[56px]"
            >
              <Button />
            </m.div>
          </div>
         
          {/* Visual preview */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOpenVideo("https://www.youtube.com/embed/s7OLmH7DKSg?si=HTTxBFX7lqq_TABd")}
          >
            <m.div
              variants={itemVariants}
              className="rounded-[20px] shadow-classic"
            >
              {isLight !== null && (
                <Image
                  src={`/img-optimized/hero-dashboard-${isLight ? "light" : "dark"}.webp`}
                  alt="Dashboard preview"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto hover:scale-[105%] transition-all duration-600"
                  priority
                />
              )}
            </m.div>
          </div>
        </m.div>
      </LazyMotion>
      <MainSlider />
      <div className="absolute inset-0 w-full h-full z-0 flex justify-between px-[5%]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="relative w-[2px] h-full overflow-hidden">
            <div
              className="absolute w-[1px] h-[100px] "
              style={{
                background:
                  "linear-gradient(to bottom, rgba(108, 84, 236, 0) 0%, rgba(108, 84, 236, 1) 100%)",
                animation: `hero-gradient-anim 5s linear ${
                  index * 0.6
                }s infinite`,
              }}
            />
            <div
              className="bg-neutral-gray"
              style={{
                content: '""',
                position: "absolute",
                width: "1px",
                left: 0,
                top: 0,
                bottom: 0,
              }}
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-[120%] h-[10%] bg-gradient-main"></div>
      <VideoModal
        isOpen={!!openVideo}
        src={openVideo ?? ""}
        onClose={() => setOpenVideo(null)}
      />
      <p className="sr-only">
        Enroll in the REI Institute Certification Program to become a certified
        real estate investor and start earning income through property
        investments.
      </p>
    </main>
  );
}
