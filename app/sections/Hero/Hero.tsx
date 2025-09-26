"use client";

import Button from "@/components/ui/Button";
import { useProportions } from "@/hooks/proportions";
import AnimatedSection from "@/lib/variantsAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const isMobile =
    useProportions().width <= 768
      ? "Become an REI Investor"
      : "Become A Real Estate Investment Specialist (TM)";
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const videoWidth = useTransform(scrollYProgress, [0.1, 1], ["40%", "90%"]);

  return (
    <main
      id="Home"
      className="relative  mx-auto px-4 sm:px-6 lg:px-12 pt-[200px] pb-20  lg:pb-[100px]"
    >
      <AnimatedSection className="grid z-3 grid-cols-1 gap-[70px] items-center  relative">
        {/* Text content */}
        <div className="text-center space-y-5 md:space-y-10">
          <div className="space-y-4 lg:space-y-1">
            <div className="w-max mx-auto bg-white/20 c rounded-4xl border border-white/40 backdrop-blur-[20px]">
              <h5 className="px-6 py-4 max-[360px]:text-[14px] text-[16px] md:text-[20px] font-bold uppercase max-[360px]:leading-5 max-[500px]:leading-6 lg:leading-5 text-white ">
                Be Wealthy. Be Certified.{" "}
                <br className="hidden max-[500px]:block" />
                Be the Professional{" "}
                <br className="max-[500px]:hidden lg:hidden " /> Investors{" "}
                <br className="hidden max-[500px]:block" /> & Homebuyers Trust
              </h5>
            </div>
            <motion.h1 className="max-w-[1240px] text-[32px] sm:text-[54px] lg:text-[84px] text-center mx-auto font-bold  leading-tight  text-white">
              Prospect Smarter. Do More Deals. Build Clients for Life.
            </motion.h1>
          </div>

          <motion.div className="flex justify- items-center flex-col gap-6">
            <motion.h4 className="max-w-[840px] mx-auto font-bold  text-white">
              First‑of‑its‑kind REALTOR® investment certification in North
              America* — built by educators who’ve trained 25,000+ real estate
              investors.
            </motion.h4>
            <Button label={isMobile} />
          </motion.div>
        </div>

        {/* { MOBILE VIDEO} */}
        <motion.div
          id="video"
          className="block md:hidden  aspect-video rounded-2xl overflow-hidden mx-auto w-full"
        >
          <iframe
            src="https://player.vimeo.com/video/288344114?h=63fff44243&autoplay=1&muted=1&background=1"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* { DESKTOP VIDEO} */}
        <div
          className="hidden md:block relative h-[200vh] cursor-pointer "
          ref={ref}
        >
          <motion.div
            id="video"
            style={{ width: videoWidth }}
            className="sticky top-[20%] aspect-video rounded-2xl overflow-hidden mx-auto"
          >
            <iframe
              src="https://player.vimeo.com/video/288344114?h=63fff44243&autoplay=1&muted=1&background=1"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </AnimatedSection>
      <div
        className={`absolute z-2 inset-0 w-full h-full bg-[#B34AE4]/20 backdrop-blur-[400px]`}
      ></div>
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute z-1 w-[250%] md:w-full sm:-translate-y-0 aspect-square rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#6D55ED_21%,#7055EC_34%,#7D52EA_49%,#A44DE6_74%,#B34AE4_86%,#B44BE4_100%)]"
          animate={{
            rotate: [0, 60, 180, 260, 360],
            scale: [1.2, 0.8, 1.2, 0.8, 1.2],
            opacity: [0.8, 1, 0.8, 1, 0.8],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        ></motion.div>
      </div>
    </main>
  );
}
