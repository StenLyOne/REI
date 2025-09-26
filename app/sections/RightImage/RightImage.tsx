import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import useIsLight from "@/hooks/useIsLight";

const features = [
  <>
    Speak the <span className="gradient-text font-bold">investor language</span>
  </>,
  <>
    Evaluate <span className="gradient-text font-bold">properties</span> and
    <span className="gradient-textfont-bold">deals</span>
  </>,
  <>
    Lead clients from a first home to a <br />
    <span className="gradient-text font-bold">repeat, multi-deal journey</span>
  </>,
];

export default function Section1() {
  const isLight = useIsLight();

  return (
    <section id="WhatYouLearn" className="relative overflow-hidden ">
      <div className="w-full py-[100px] lg:py-[160px] ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
       
          className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-center relative "
        >
          {/* Левая колонка */}
          <div className="lg:max-w-[530px] ">
            <div className="space-y-[24px]">
              <motion.h2 className="h2-default">
                The Future of
                <span className="gradient-text"> Real Estate </span>
                Starts Here
              </motion.h2>
              <motion.div className="w-full lg:hidden">
                <Image
                  src="/img-optimized/section1.webp"
                  alt="section"
                  width={900}
                  height={638}
                  className="rounded-[20px] w-full"
                  loading="lazy"
                />
              </motion.div>
              <motion.p className="p-default">
                Rethink how you serve. Reimagine what’s possible. With 160,000+
                REALTORS® competing in Canada, one‑off deals and endless
                prospecting aren’t a strategy. Clients want wealth building
                guidance—they’re asking tougher questions and expect a plan, not
                just a showing.
              </motion.p>
            </div>
            {/* List */}
            <div className="flex mt-6 mb-10 flex-col">
              <h5 className="font-semibold">
                Most agents were never trained to:
              </h5>

              <div className="space-y-[16px] mb-6 mt-4">
                {features.map((feature, row) => (
                  <motion.div
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
                    <h5 className="font-semibold">{feature}</h5>
                  </motion.div>
                ))}
              </div>

              <h4>That’s the gap we close.</h4>
            </div>
            <motion.div>
              <Button label="Learn How" />
            </motion.div>
          </div>

          {/* Right img */}
          <div className="w-max absolute translate-x-[65%] hidden lg:block">
            <div className="relative w-[900px] h-[638px] rounded-l-[20px] overflow-hidden">
              <Image
                src="/img-optimized/section1.webp"
                alt="section"
                width={900}
                height={638}
                loading="lazy"
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
      </div>
    </section>
  );
}
