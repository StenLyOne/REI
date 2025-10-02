import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import useIsLight from "@/hooks/useIsLight";
import { container, item, imgItem } from "@/lib/variantsAnimation";

const features = [
  <>
    Speak the <span className="gradient-text font-bold">investor language</span>
  </>,
  <>
    Evaluate <span className="gradient-text font-bold">properties</span> and
    <span className="gradient-text font-bold">deals</span>
  </>,
  <>
    Lead clients from a first home to a <br className="hidden md:block" />
    <span className="gradient-text font-bold">repeat, multi-deal journey</span>
  </>,
];

export default function RightImage() {
  const isLight = useIsLight();

  return (
    <section id="WhatYouLearn" className="relative overflow-hidden">
      <div className="w-full py-[100px] lg:py-[160px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-[60px] lg:gap-[100px] items-center relative"
        >
          {/* Левая колонка */}
          <div className="lg:max-w-[530px] space-y-[24px]">
            {/* 1. Заголовок */}
            <motion.h2 variants={item} className="h2-default">
              The Future of <span className="gradient-text">Real Estate</span>{" "}
              Starts Here
            </motion.h2>

            {/* 🔹 Мобильная картинка */}
            <motion.div
              variants={imgItem}
              className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
            >
              <Image
                src="/img/section1.png"
                alt="section"
                fill
                loading="lazy"
                className="object-cover"
              />
            </motion.div>

            {/* 2. Абзац */}
            <motion.p variants={item} className="p-default">
              Rethink how you serve. Reimagine what’s possible. With 160,000+
              REALTORS® competing in Canada, one-off deals and endless
              prospecting aren’t a strategy. Clients want wealth building
              guidance—they’re asking tougher questions and expect a plan, not
              just a showing.
            </motion.p>

            {/* 3. Подзаголовок списка */}
            <motion.h5 variants={item} className="font-semibold">
              Most agents were never trained to:
            </motion.h5>

            {/* 4–6. Список */}
            <motion.div
              variants={container}
              className="space-y-[16px] mb-6 mt-4"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={item}
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
            </motion.div>

            {/* 7. h4 */}
            <motion.h4 variants={item}>That’s the gap we close.</motion.h4>

            {/* 8. Кнопка */}
            <motion.div variants={item}>
              <Button label="Learn How" />
            </motion.div>
          </div>

          {/* 🔹 Десктопная картинка */}
          <motion.div
            variants={imgItem}
            className="w-max absolute translate-x-[65%] hidden lg:block"
          >
            <div className="relative w-full h-[50vh] lg:w-[900px] lg:h-[638px] rounded-l-[20px] overflow-hidden">
              <Image
                src="/img/section1.png"
                alt="section"
                width={900}
                height={638}
                loading="lazy"
                className="rounded-l-[20px] w-full md:h-full object-cover"
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
