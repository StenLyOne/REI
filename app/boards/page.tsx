"use client";

import Button from "@/components/ui/Button";
import CardImage from "@/components/ui/CardImage";
import GlowIcon from "@/components/ui/GlowIcon";
import { container, imgItem, item } from "@/lib/variantsAnimation";
import Quote from "@/sections/Quote/Quote";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const dataSecondSection = [
  {
    label: "You’ll learn to",
    cards: [
      {
        title:
          "Consumers being guided by unqualified agents into risky investment decisions",
        imageUrl: "/img/task_01k8b7vhqjf4w91ade5kvp7f59_1761314065_img_0.webp",
      },
      {
        title:
          "REALTORS® marketing themselves as investment experts—without formal training",
        imageUrl: "/img/task_01k8b7zrkrfm2vdb1byx0n9ejv_1761314187_img_0.webp",
      },
      {
        title:
          "Missed opportunities for repeat and referral business in a growing niche",
        imageUrl: "/img/task_01k8b83sxye21snhk4djzzb7ad_1761314314_img_1.webp",
      },
      {
        title:
          "Boards struggling to deliver differentiated education that meets today’s demands",
        imageUrl: "/img/task_01k8b88cjwf36sajafa4ntdfge_1761314393_img_1.webp",
      },
    ],
  },
];

const dataThirdSection = [
  {
    gif: "/icons/profit.mp4",
    title: "Enhance Member Value",
    description:
      "Provide access to industry-leading training that empowers agents to grow their business and serve clients more confidently.",
  },
  {
    gif: "/icons/handshake.mp4",
    title: "Strengthen Public Protection",
    description:
      "REIS™ training includes clear guidelines, legal disclaimers, and a structured designation process to ensure consumers are treated ethically and responsibly.",
  },
  {
    gif: "/icons/database.mp4",
    title: "Raise the Professional Standard",
    description:
      "Position your board as forward-thinking and committed to education that reflects the complexity of modern real estate.",
  },
  {
    gif: "/icons/allocation.mp4",
    title: "Support Non-Dues Revenue Goals",
    description:
      "We offer partnership tiers that allow for co-branded rollouts, volume licensing, and revenue-sharing models for qualifying boards.",
  },
];

const features1 = [
  <>
    25–30% average increase in <span className="gradient-text">GCI</span> for
    agent participants
  </>,
  <>
    Agents report higher{" "}
    <span className="gradient-text">retention of investor clients</span>
  </>,
  <>
    Public-facing <span className="gradient-text">marketing support</span>{" "}
    provided to ensure compliance
  </>,
];

const features2 = [
  <>
    Help clients create <span className="gradient-text">financial freedom</span>{" "}
    through real estate
  </>,
  <>
    Identify investment opportunities using{" "}
    <span className="gradient-text">real-world analysis tools</span>
  </>,
  <>
    Build investor-focused{" "}
    <span className="gradient-text">teams, systems, and strategies</span>
  </>,
  <>
    Become a{" "}
    <span className="gradient-text">Real Estate Wealth Consultant™</span>, not
    just a salesperson
  </>,
];

export default function Boards() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  return (
    <>
      {/* HERO SECTION */}
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
                  <TypeAnimation
                    sequence={[
                      `The Future of Real Estate Demands More Than Sales Training.`,
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
                  />
                </h5>
              </div>
            </motion.div>

            {/* h1 */}
            <motion.h1
              variants={item}
              className=" max-w-[1240px] text-[32px] sm:text-[54px] text-center mx-auto font-bold leading-tight text-white"
            >
              Empower Your Members. <br /> Protect the Public. Raise the Bar.
            </motion.h1>

            {/* h4 */}
            <motion.p
              variants={item}
              className="max-w-[1020px] text-[20px] leading-[28px] text-balance mx-auto font-bold text-[#ECE7FA] pt-6 md:pt-12 pb-5 md:pb-9"
            >
              {/* It Requires Investment Literacy. Real estate is no longer just
              about helping clients buy and sell. Today’s consumers are looking
              for guidance on how to build long-term wealth. Unfortunately, most
              REALTORS® are not trained to provide it. <br /> <br /> */}
              That’s where we come in. The Real Estate Investment Specialist™
              (REIS™) designation equips REALTORS® with the tools, language, and
              strategy to serve the modern consumer—while upholding the highest
              standard of professionalism.
            </motion.p>

            {/* Button */}
            <motion.div variants={item} className="mx-auto w-max">
              <Button label={"Schedule a call"} />
            </motion.div>
          </div>

          {/* MOBILE VIDEO */}
          <motion.div
            variants={item}
            id="video"
            className="block md:hidden aspect-video rounded-2xl overflow-hidden mx-auto w-full"
          >
            <Image
              width={1200}
              height={400}
              alt=""
              src="/img/task_01k8b7nx7dfg4vjagz8e72mksy_1761313789_img_0.webp"
            ></Image>
          </motion.div>

          {/* DESKTOP VIDEO */}
          <motion.div
            variants={item}
            className="hidden md:block relative h-[100vh] -mt-12 md:-mt-40" // контейнер длиннее экрана
            ref={ref}
          >
            {/* sticky-зона во весь экран */}
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <motion.div
                className="rounded-2xl overflow-hidden origin-center w-[70vw] max-w-[1200px] aspect-video"
                style={{
                  scale: useTransform(scrollYProgress, [0.2, 0.7], [0.6, 0.9]),
                }}
              >
                <Image
                  width={1200}
                  height={400}
                  alt=""
                  src="/img/task_01k8b7nx7dfg4vjagz8e72mksy_1761313789_img_0.webp"
                ></Image>
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

      {/* SECTION 1 */}
      <section>
        <motion.div variants={container} className="section-default space-y-10">
          <div className="text-center mx-auto space-y-2">
            <motion.h4 variants={item}>
              The Problem Is Bigger Than Productivity
            </motion.h4>{" "}
            <motion.p className="text-[18px] text-gray" variants={item}>
              It’s About Public Trust and Industry Competency
            </motion.p>
          </div>
          <Quote
            name="~ Harry Ramadeen, REIS™ Graduate | Oakville, ON"
            quote=" I didn’t realize how little I knew until I took the course. Now I understand what investors really
need—and how to protect them from making poor decisions. "
          />
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <motion.section
        variants={container}
        initial="hidden"
        viewport={{ once: true, margin: "-50px" }}
        whileInView="visible"
        className="section-default space-y-5"
      >
        <div className="space-y-6  text-center">
          <motion.h2 variants={item} className="h2-large max-w-[900px] mx-auto">
            <span className="gradient-text"> What’s at Stake:</span>
          </motion.h2>
          <motion.h4 variants={item} className="max-w-[800px] mx-auto">
            The <span className="gradient-text">REIS™ training </span> fills
            this gap—and aligns with RECO’s core competencies and the
            professional obligations agents already hold. brokerage—without
            adding to your plate.{" "}
          </motion.h4>
        </div>

        <div className="grid mt-10">
          {dataSecondSection.map((ele, i) => (
            <div
              key={i}
              className={`col-start-1 row-start-1 transition-opacity duration-300
      
      `}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5 justify-between">
                {ele.cards.map((card, j) => (
                  <motion.div variants={item} key={j}>
                    <CardImage {...card} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

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
              <motion.h2 variants={item} className="h2-default">
                Why Real Estate Boards Choose to{" "}
                <span className="gradient-text"> Partner with REIS™</span>
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
                    <h5 className="font-semibold text-balance">
                      {benefit.title}
                    </h5>
                    <p>{benefit.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 4 */}
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
                <span className="gradient-text">
                  {" "}
                  Real Results. <br />
                  Real Impact.
                </span>
              </motion.h2>

              {/* 🔹 Мобильная картинка */}
              <motion.div
                variants={imgItem}
                className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
              >
                <Image
                  src="/img/task_01k8b8ca18e3brgqa57rvkzvg9_1761314609_img_1.webp"
                  alt="section"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>

              {/* 3. Подзаголовок списка */}
              <motion.h5 variants={item} className="font-semibold">
                Real Estate Boards who offered REIS™ to their members see
                stronger broker participation, and positive feedback from
                consumers.
              </motion.h5>

              {/* 4–6. Список */}
              <motion.div
                variants={container}
                className="space-y-[16px] mb-6 mt-4"
              >
                {features1.map((feature, i) => (
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
              <motion.div variants={item}>
                <Button label={"Schedule a call"} />
              </motion.div>
            </div>

            {/* 🔹 Десктопная картинка */}
            <motion.div
              variants={imgItem}
              className="w-max absolute translate-x-[65%] hidden lg:block"
            >
              <div className="relative w-full h-[50vh] lg:w-[900px] lg:h-[638px] rounded-l-[20px] overflow-hidden">
                <Image
                  src="/img/task_01k8b8ca18e3brgqa57rvkzvg9_1761314609_img_1.webp"
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

      {/* SECTION 5 */}
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
                  src="/img/task_01k8b8gncgfmz9gavht3g99920_1761314667_img_0.webp"
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
              Let’s Work Together to Shape the{" "}
              <span className="gradient-text">
                Next Generation of REALTORS®
              </span>
            </motion.h2>
            <motion.p
              variants={item}
              className="p-default mt-5 md:mt-6 mb-5 md:mb-10"
            >
              We partner with{" "}
              <span className="gradient-text">boards across Canada</span> to
              make the
              <span className="gradient-text"> REIS™ training</span> accessible,
              impactful, and fully aligned with board-level goals. <br /> <br />{" "}
              Whether you’re looking to offer this as part of professional
              development, add a designation to your member benefits, or simply
              explore the value of
              <span className="gradient-text"> investment literacy</span> —
              we’re here to help.
            </motion.p>
            <motion.div
              variants={container}
              className="flex flex-col md:flex-row gap-4"
            >
              <Button label={"Schedule a call"} />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6 */}
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
                What the{" "}
                <span className="gradient-text">
                  {" "}
                  REIS™ Designation Teaches Members
                </span>
              </motion.h2>

              {/* 🔹 Мобильная картинка */}
              <motion.div
                variants={imgItem}
                className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
              >
                <Image
                  src="/img/task_01k8b8krrhedd9p6ythtkfvp6j_1761314769_img_1.webp"
                  alt="section"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>

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

              <motion.h5 variants={item} className="font-medium text-gray">
                And just as importantly, it teaches what not to do—so agents
                stay within their professional limits and don’t risk misleading
                the public.
              </motion.h5>
            </div>

            {/* 🔹 Десктопная картинка */}
            <motion.div
              variants={imgItem}
              className="w-max absolute translate-x-[65%] hidden lg:block"
            >
              <div className="relative w-full h-[50vh] lg:w-[900px] lg:h-[638px] rounded-l-[20px] overflow-hidden">
                <Image
                  src="/img/task_01k8b8krrhedd9p6ythtkfvp6j_1761314769_img_1.webp"
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

      {/* SECTION 7 */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default flex flex-col md:flex-row gap-10"
      >
        <motion.div
          variants={item}
          className="p-15 space-y-10 bg-white rounded-2xl flex flex-col justify-between shadow-classic"
        >
          <div className="space-y-5">
            {" "}
            <h4 className="font-bold gradient-text">
              Book a Meeting with Our Team
            </h4>
            <h5 className="p-default font-medium">
              Let’s explore how REIS™ could benefit your board and your members.
            </h5>
          </div>

          <Button label={"Schedule a call"} />
        </motion.div>
        <motion.div
          variants={item}
          className="p-15 space-y-10 bg-white rounded-2xl flex flex-col justify-between shadow-classic"
        >
          <div className="space-y-5">
            {" "}
            <h4 className="font-bold gradient-text">
              Download the Board Info Kit
            </h4>
            <h5 className="p-default font-medium">
              Includes course outline, partnership options, legal safeguards,
              and member outcomes.
            </h5>
          </div>

          <Button label="Get the Info Kit" />
        </motion.div>
      </motion.section>
    </>
  );
}
