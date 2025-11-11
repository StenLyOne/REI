"use client";

import Button from "@/components/ui/Button";
import { useProportions } from "@/hooks/useProportions";
import { container, item } from "@/lib/variantsAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const isMobile =
    useProportions().width <= 768
      ? "Become an REI Investor ™"
      : "Become A Real Estate Investment Specialist ™";

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;

    video.play().catch((err) => {
      console.warn("Autoplay blocked:", err);
    });
  }, [muted]);

  // const videoWidth = useTransform(scrollYProgress, [0.21, 1], ["40%", "85%"]);

  return (
    <main
      id="Home"
      className="relative mx-auto px-4 sm:px-6 lg:px-12 pt-[200px] pb-20 lg:pb-[100px] z-10"
    >
      {/* Контейнер с variants */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid z-3 grid-cols-1 gap-[70px] items-center relative"
      >
        {/* TEXT CONTENT */}
        <div className="text-center ">
          <motion.div variants={item} className="pb-4 lg:pb-8 mt-10">
            <div className="w-max mx-auto rounded-full border border-white/30 bg-white/10 backdrop-blur-lg shadow-[0_1px_4px_0_rgba(0,0,0,1)]]">
              <h5 className="px-6 py-4 max-[360px]:text-[14px] text-[16px] md:text-[20px] tracking-[0.8px] font-semibold  max-[360px]:leading-5 max-[500px]:leading-6 lg:leading-5 text-white">
                {/* <TypeAnimation
                  sequence={[
                    `Be the Professional Investors\n & Homebuyers Trust.`,
                    2000,
                    "",
                    500,
                  ]}
                  wrapper="span"
                  speed={50}
                  deletionSpeed={40}
                  repeat={Infinity}
                  cursor={true}
                  className="max-[500px]:whitespace-pre-line whitespace-normal"
                /> */}
                Be the Professional Investors & Homebuyers Trust.
              </h5>
            </div>
          </motion.div>

          {/* h1 */}
          <motion.h1
            variants={item}
            className=" max-w-[1240px] text-[32px] sm:text-[54px] lg:text-[84px] text-center mx-auto font-bold leading-tight text-white"
          >
            Prospect Smarter. Do More Deals. Build Clients for Life
          </motion.h1>

          {/* h4 */}
          <motion.h4
            variants={item}
            className="max-w-[920px] mx-auto font-bold text-[#ECE7FA] pt-6 md:pt-12 pb-5 md:pb-9"
          >
            First-of-its-kind REALTOR
            <span className="text-[20px] align-super">®</span> investment
            certification in North America - built by educators who have
            trained over 25,000 investors and Realtors.
          </motion.h4>

          {/* Button */}
          <motion.div variants={item} className="mx-auto w-max">
            <Button label={isMobile} link="https://buy.stripe.com/9AQeXW9p67cueGscMR" />
          </motion.div>
        </div>

        {/* MOBILE VIDEO */}
        <motion.div
          variants={item}
          id="video"
          className="block md:hidden aspect-video rounded-2xl overflow-hidden mx-auto w-full"
        >
          <video className="w-full h-full" autoPlay muted playsInline loop>
            <source src="/videos/hero-video-2025.mp4" />
          </video>
        </motion.div>

        {/* DESKTOP VIDEO */}
        <motion.div
          variants={item}
          className="hidden md:block relative h-[250vh] -mt-12 md:-mt-40" // контейнер длиннее экрана
          ref={ref}
        >
          {/* sticky-зона во весь экран */}
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <motion.div
              className="rounded-2xl overflow-hidden origin-center w-[70vw] max-w-[1200px] aspect-video"
              style={{
                scale: useTransform(scrollYProgress, [0.2, 1], [0.7, 1.15]),
              }}
            >
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  playsInline
                  muted={muted}
                >
                  <source src="/videos/hero-video-2025.mp4" type="video/mp4" />
                </video>

                {/* Кнопка mute/unmute */}
                <button
                  onClick={() => setMuted((m) => !m)}
                  className="absolute bottom-6 right-6 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
                >
                  {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ФОН */}
      <div className="absolute z-2 inset-0 w-full h-full bg-[#B34AE4]/20 backdrop-blur-[400px]"></div>
      <div className="absolute z-3 bottom-0 left-0 w-full h-[60px] bg-gradient-to-b from-transparent to-[#f6f6f6]"></div>

      {/* ГРАДИЕНТ */}
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
