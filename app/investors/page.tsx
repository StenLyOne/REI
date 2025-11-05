"use client";

import BackgroundGradients from "@/components/ui/BackgroundGradients";
import Button from "@/components/ui/Button";
import CardSimple from "@/components/ui/CardSimple";
import GlowIcon from "@/components/ui/GlowIcon";
import { container, imgItem, item } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  <>
    You waste time filtering agents who don’t
    <span className="gradient-text"> “get it”</span>
  </>,
  <>
    You miss out on
    <span className="gradient-text">
      {" "}
      underpriced, off-market, multi-unit opportunities
    </span>
  </>,
  <>
    You risk working with someone who doesn’t understand
    <span className="gradient-text"> cash flow, ROI, or zoning</span>
  </>,
];

const features2 = [
  <>
    <span className="gradient-text">Close multiple properties</span> over time
  </>,
  <>
    Uncover new opportunities using
    <span className="gradient-text"> proven frameworks</span>
  </>,
  <>
    Avoid
    <span className="gradient-text"> costly mistakes</span> most agents don’t
    even see
  </>,
  <>
    Get
    <span className="gradient-text"> tailored guidance</span>, not cookie-cutter
    advice
  </>,
];
const dataThirdSection = [
  {
    gif: "/icons/profit.mp4",
    title: "Investor Literacy",
    description:
      "They know the difference between a deal and a dud—and they use real numbers to back it up.",
  },
  {
    gif: "/icons/handshake.mp4",
    title: "Strategy-First Approach",
    description:
      "They understand short-term cash flow vs. long-term wealth building. They are trained on BRRRR, flips, lease options, JV structures, and more.",
  },
  {
    gif: "/icons/database.mp4",
    title: "Power Team Connections",
    description:
      "REIS™ agents are taught to build networks of investor-savvy mortgage brokers, lawyers, contractors, and property managers.",
  },
  {
    gif: "/icons/allocation.mp4",
    title: "Ethical and Transparent",
    description:
      "Our agents are trained to protect your best interests, not just chase commissions. They’re bound by disclosure rules and clear investment disclaimers.",
  },
];

const dataSevenSection = [
  {
    imageUrl: "/img/task_01k8b3dvtmf3esb0m1zv3t5wqz_1761309392_img_0.webp",
    title: "Real Estate Investor Mastery",
    text: "Ttraining provides investors the confidence to spot a great deal (or a bad one) on their own. Our training walks through cash flow analysis, cap rates, BRRRR math, and financing options in plain language.",
  },
  {
    imageUrl: "/img/task_01k8b3h3j5fwyaadtytm3pd02m_1761309488_img_1.webp",
    title: "From first deal to full portfolio—we show you the path.",
    text: "Whether you&#39;re house hacking your first duplex or assembling a 12-unit portfolio, we give you a step-by-step blueprint to scale wisely (without overleveraging or guessing).",
  },
  {
    imageUrl: "/img/task_01k8b3n9w8e81a15fy9k3d3vnq_1761309575_img_0.webp",
    title:
      "We don't just teach theory—we teach frameworks investors actually use to build wealth.",
    text: "Every module is built on real scenarios, not hypotheticals. You’ll learn how to spot profit centres, structure joint ventures, and navigate renovation risks.",
  },
  {
    imageUrl: "/img/task_01k8b3raesewk8mxzh9551vzwf_1761309742_img_1.webp",
    title:
      "We give investors the skills to out-negotiate, out-analyze, and outsmart the average buyer.",
    text: "When you understand how investors think—and how deals are really made—you don’t just buy differently. You buy better.",
  },
  {
    imageUrl: "/img/task_01k8b3vvr8ecjr6abf4m815453_1761309862_img_1.webp",
    title:
      "Investor success isn’t just about buying property. It’s about buying smart, financing creatively, and planning 3 moves ahead.",
    text: "We train you to think like a strategist. That’s what separates a landlord from a portfolio builder.",
  },
];

export default function Investors() {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <main
        id="Home"
        className="relative mx-auto px-4 sm:px-6 lg:px-12 pt-[140px] pb-20 lg:pb-[100px] overflow-hidden   z-10"
      >
        {/* Контейнер с variants */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col h-[50vh]  md:flex-row z-10 gap-[70px] items-center relative"
        >
          {/* TEXT CONTENT */}
          <div className="text-left  w-full md:max-w-[60%]">
            {/* h1 */}
            <motion.h1
              variants={item}
              className="  text-[32px] sm:text-[0px]  text-left mx-auto font-bold leading-tight text-white"
            >
              For Real Estate Investors:
            </motion.h1>

            {/* text */}
            <motion.p
              variants={item}
              className="text-[20px] max-w-[600px] mr-auto leading-[28px] text-balance font-bold text-[#ECE7FA] pt-6 md:pt-12 pb-5 md:pb-9"
            >
              Work With Agents Who Understand You. Tired of Explaining the
              Numbers to Your Agent? <br /> <br />
              Too many investors waste time educating their agents—when it
              should be the other way around. <br /> <br />
            </motion.p>
            <motion.div variants={item} className="mx- w-max ">
              <Button label={`Find an REIS™ agent near you`} />
            </motion.div>
          </div>

          {/* IMAGE SCENE */}

          <div className="relative md:absolute w-[130%] -ml-[20%] md:-ml-[0%] mt-40 md:mt-0 md:w-[40%] h-[450px] md:h-screen -top-[140px] -right-[48px] clip-hero z-0">
            <Image
              src="/img/task_01k8b2ny3veyctmjsgd2h8z0h3_1761308548_img_1.webp"
              alt="Hero"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* ФОН */}
        <div className="absolute z-2 inset-0 left-0 w-full h-full bg-[#B34AE4]/20 backdrop-blur-[400px]"></div>
        <div className="absolute z-100 bottom-0 left-0 w-full h-[140px] bg-gradient-to-b from-transparent to-[#f6f6f6]"></div>

        {/* ГРАДИЕНТ */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute z-1 w-[300%] md:w-full -translate-x-1/4 translate-y-[40%]  sm:-translate-y-[50%] aspect-square rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#6D55ED_21%,#7055EC_34%,#7D52EA_49%,#A44DE6_74%,#B34AE4_86%,#B44BE4_100%)]"
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

      {/* SECTION 2 */}
      <section className="relative overflow-hidden ">
        <div className="w-full py-[80px] lg:py-[200px]">
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
                The Problem Most
                <span className="gradient-text"> Investors</span> Face
              </motion.h2>

              {/* 🔹 Мобильная картинка */}
              <motion.div
                variants={imgItem}
                className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
              >
                <Image
                  src="/img/task_01k8b2sdmcfg6tjdcm63db6akd_1761308724_img_1.webp"
                  alt="section"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>

              <motion.p variants={item} className="p-default">
                ❝ I called 101 agents before I found two that actually
                understood what I was trying to do. ❞ <br />— July Ono,
                Multi-Million Dollar Investor &amp; REIS™ Supporter
              </motion.p>

              {/* 3. Подзаголовок списка */}
              <motion.h5 variants={item} className="font-semibold">
                Most real estate agents are trained to focus on one-off
                residential sales—not investment strategy. As a result:
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

              {/* 8. Кнопка */}
              {/* <motion.div variants={item}>
                <Button label="Learn How" />
              </motion.div> */}
            </div>

            {/* 🔹 Десктопная картинка */}
            <motion.div
              variants={imgItem}
              className="w-max absolute translate-x-[65%] hidden lg:block"
            >
              <div className="relative w-full h-[50vh] lg:w-[900px] lg:h-[638px] rounded-l-[20px] overflow-hidden">
                <Image
                  src="/img/task_01k8b2sdmcfg6tjdcm63db6akd_1761308724_img_1.webp"
                  alt="section"
                  width={900}
                  height={638}
                  loading="lazy"
                  className="rounded-l-[20px] w-full md:h-full object-cover"
                />
                <div
                  className="absolute top-0 right-0 h-full w-[30%] pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(to left, #f6f6f6, transparent)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* SECTION 3 */}
      <section className="relative overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="section-default  "
        >
          <div className="flex flex-col items-center text-center space-y-[48px]">
            <div>
              <motion.h2 variants={item} className="h2-large">
                What Sets{" "}
                <span className="gradient-text">REIS™ Certified </span>
                Agents Apart
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {dataThirdSection.map((benefit, i) => (
                <motion.article
                  key={i}
                  variants={item}
                  className="p-4 space-y-3 rounded-[20px] text-left border-1 border-border shadow-classic"
                  style={{ background: "var(--secondary)" }}
                >
                  <div className="w-[50px] h-[50px] ml-2 mt-2">
                    <GlowIcon text={benefit.gif} video={true} />
                  </div>
                  <div className="space-y-[12px]">
                    <h5 className="font-semibold">{benefit.title}</h5>
                    <p>{benefit.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      {/* SECTION 4 */}
      <section className="relative w-full my-[100px] md:my-[220px] ">
        {" "}
        <motion.div
          variants={container}
          id="Directory"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row-reverse gap-6 md:gap-[60px] lg:gap-[100px] items-center relative"
        >
          <div className="md:w-max md:absolute md:-translate-x-[65%]  ">
            <motion.div
              variants={imgItem}
              className="relative w-full md:w-[900px] md:h-[600px] rounded-r-[20px] overflow-hidden"
            >
              <motion.div variants={imgItem}>
                <Image
                  src="/img/task_01k8b2zt42ewnahfyqnp0z4gza_1761308877_img_1.webp"
                  alt="Real Estate Investment Certification Course "
                  width={900}
                  height={638}
                  className="rounded-[20px] w-full h-[50vh] md:h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div
                className="hidden md:block absolute top-0 left-0 h-full w-[30%] pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to right, #f6f6f6, transparent)",
                }}
              />
            </motion.div>
          </div>

          <div className="md:max-w-[530px]">
            <motion.h2 variants={item} className="h2-default">
              Ready to Find a{" "}
              <span className="gradient-text">
                Real Estate Investment Specialist?
              </span>
            </motion.h2>
            <motion.p
              variants={item}
              className="p-default mt-5 md:mt-6 mb-5 md:mb-10"
            >
              Work with someone who already understands your strategy—and{" "}
              <span className="gradient-text font-semibold">
                your expectations
              </span>
            </motion.p>
            <motion.div
              variants={container}
              className="flex flex-col md:flex-row gap-4"
            >
              <Button label="Find a REIS™ Certified Agent"></Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      {/* SECTION 5 */}
      <section className="relative overflow-hidden ">
        <div className="w-full py-[80px] lg:py-[200px]">
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
                Done With One-and-Done Agents?
              </motion.h2>

              {/* 🔹 Мобильная картинка */}
              <motion.div
                variants={imgItem}
                className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
              >
                <Image
                  src="/img/task_01k8b34eqqe8rrqh2yamv8jvka_1761309111_img_0.webp"
                  alt="section"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>

              <motion.p variants={item} className="p-default">
                Find a Partner Who Can Grow With You.
              </motion.p>

              {/* 3. Подзаголовок списка */}
              <motion.h5 variants={item} className="font-semibold">
                One REIS™ certified agent can help you:
              </motion.h5>

              {/* 4–6. Список */}
              <motion.div
                variants={container}
                className="space-y-[16px] mb-6 mt-4"
              >
                {features2.map((feature, i) => (
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

              <motion.p variants={item} className="p-default">
                REIS™ trained agents help clients build 6–12 unit portfolios in
                as little as 5–8 years using strategic acquisition plans.
              </motion.p>
            </div>

            {/* 🔹 Десктопная картинка */}
            <motion.div
              variants={imgItem}
              className="w-max absolute translate-x-[65%] hidden lg:block"
            >
              <div className="relative w-full h-[50vh] lg:w-[900px] lg:h-[638px] rounded-l-[20px] overflow-hidden">
                <Image
                  src="/img/task_01k8b34eqqe8rrqh2yamv8jvka_1761309111_img_0.webp"
                  alt="section"
                  width={900}
                  height={638}
                  loading="lazy"
                  className="rounded-l-[20px] w-full md:h-full object-cover"
                />
                <div
                  className="absolute top-0 right-0 h-full w-[30%] pointer-events-none z-10"
                  style={{
                    background:
                      "linear-gradient(to left, #f6f6f6, transparent)",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* SECTION 6 */}
      <section
        id="StartHere"
        className="relative w-full my-[100px] md:my-[220px] "
      >
        {" "}
        <motion.div
          variants={container}
          id="Directory"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row-reverse gap-6 md:gap-[60px] lg:gap-[100px] items-center relative"
        >
          <div className="md:w-max md:absolute md:-translate-x-[65%]  ">
            <motion.div
              variants={imgItem}
              className="relative w-full md:w-[900px] md:h-[600px] rounded-r-[20px] overflow-hidden"
            >
              <motion.div variants={imgItem}>
                <Image
                  src="/img/task_01k8b38k38ecss38yjdd2vhzpe_1761309210_img_1.webp"
                  alt="Real Estate Investment Certification Course "
                  width={900}
                  height={638}
                  className="rounded-[20px] w-full h-[50vh] md:h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div
                className="hidden md:block absolute top-0 left-0 h-full w-[30%] pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to right, #f6f6f6, transparent)",
                }}
              />
            </motion.div>
          </div>

          <div className="md:max-w-[530px]">
            <motion.h2 variants={item} className="h2-default">
              Want to Learn to Create{" "}
              <span className="gradient-text font-semibold">
                Financial Freedom{" "}
              </span>{" "}
              in Real Estate Yourself?
            </motion.h2>
            <motion.h4 variants={item} className="mt-5 md:mt-6 mb-5 md:mb-10">
              We also offer the{" "}
              <span className="gradient-text font-semibold">
                {" "}
                Real Estate Investor Mastery{" "}
              </span>{" "}
              training for new or experienced investors who want to master the
              art of real estate investing for themselves.
            </motion.h4>
            <motion.h4 variants={item} className="mt-5 md:mt-6 mb-5 md:mb-10">
              {" "}
              From analyzing deals to{" "}
              <span className="gradient-text font-semibold">
                financing multi-unit properties—learn
              </span>{" "}
              from the same educators who train{" "}
              <span className="gradient-text font-semibold">
                top REALTORS®.
              </span>
            </motion.h4>
          </div>
        </motion.div>
      </section>

      {/* SECTION 7 */}
      <section className="section-default">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-15"
        >
          <motion.h2 variants={item} className="h2-default text-center ">
            We teach investors{" "}
            <span className="gradient-text">how to evaluate properties</span>{" "}
            like a pro
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between pb-1">
            {dataSevenSection.map((homes, i) => (
              <motion.div variants={item} key={i}>
                <CardSimple
                  {...homes}
                  titleClass="text-[24px] font-semibold"
                  textClass="p-default"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SECTION 8 */}
      <section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          aria-label="Call to Action Section"
          className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12 mb-[100px] sm:mb-[200px] "
        >
          <motion.div className="px-[20px] py-[48px] sm:p-[48px] bg-[url('/img-optimized/ctaBg.webp')] bg-cover bg-center rounded-[20px] shadow-classic">
            <div className="max-w-[900px] text-balance">
              <motion.h2 className="h2-large">
                <span className="text-white "> Let’s Build Something </span>
                <span className="gradient-text"> Bigger—Together</span>
              </motion.h2>
              <motion.h4 className=" pt-10 pb-15 text-white">
                We believe real estate investing is the best tool for financial
                freedom. And you deserve a guide who treats your journey like a
                business, not a transaction.
              </motion.h4>
              <motion.div>
                <Button label="Join Our Investor Info Session" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <BackgroundGradients />
    </div>
  );
}
