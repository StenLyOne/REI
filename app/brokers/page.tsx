"use client";

import Button from "@/components/ui/Button";
import CardImage from "@/components/ui/CardImage";
import GlowIcon from "@/components/ui/GlowIcon";
import TabbedContent from "@/components/ui/TabbedContent";
import { useProportions } from "@/hooks/useProportions";
import { container, imgItem, item } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
// import { TypeAnimation } from "react-type-animation";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  //   FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import BackgroundGradients from "@/components/ui/BackgroundGradients";

const features = [
  <>
    Turn everyday homebuyers into{" "}
    <span className="gradient-text">multi-deal clients</span>
  </>,
  <>
    Build consistent, recurring income through{" "}
    <span className="gradient-text">investor strategies</span>
  </>,
  <>
    Identify <span className="gradient-text">profitable deals</span> beyond the
    MLS
  </>,
  <>
    Gain confidence discussing{" "}
    <span className="gradient-text">cash flow, ROI, Cap rates</span> and
    financing options
  </>,
  <>
    Position themselves as{" "}
    <span className="gradient-text">Real Estate Wealth Advisors™</span>
  </>,
  <>
    Build{" "}
    <span className="gradient-text">real estate investment portfolios</span>{" "}
    themselves
  </>,
];

const dataSecondSection = [
  {
    gif: "/icons/profit.mp4",
    title: "Boost Agent GCI and Deal Flow",
    color: "text-soft-violet",

    description:
      "REIS™ trained agents increase productivity, repeat business, and average commission per client. Our graduates report a 15–25% average increase in GCI within the first year of completing the program.",
  },
  {
    gif: "/icons/handshake.mp4",
    title: "Recruit Differently. Retain Longer",
    color: "text-soft-blue",
    description:
      "Today’s agents want more than just a commission split. They want coaching, credibility, and a clear path to growth.",
  },
  {
    gif: "/icons/database.mp4",
    title: "Differentiate Your Value Prop",
    color: "text-soft-indigo",
    description:
      "Offer a designation few brokerages provide—and become a magnet for talent seeking long-term success.",
  },
  {
    gif: "/icons/allocation.mp4",
    title: "Future-Proof Your Office",
    color: "text-soft-teal",
    description:
      "As more consumers focus on wealth building, your team will be equipped to meet that demand.",
  },
];

const dataThirdSection = [
  {
    label: "You’ll learn to",
    cards: [
      {
        title:
          "Complete Online Training with full workbook, video modules, action steps to build an investor business and real-world examples",
        imageUrl: "/img/task_01k8ayvvjnfg6ayqqm7m6vtn0e_1761304613_img_1.webp",
      },
      {
        title:
          "Investor Frameworks your agents can use to convert and retain clients",
        imageUrl: "/img/task_01k8ayyw8pedd877yssmj28ywp_1761304715_img_1.webp",
      },
      {
        title: "Marketing Support to position your agents as experts",
        imageUrl: "/img/task_01k8az1brhf7faagnp3gdr6hbv_1761304797_img_0.webp",
      },
      {
        title: "Monthly Masterminds to keep your team sharp and engaged",
        imageUrl: "/img/task_01k8az3749ekg8ze1agv5sj9af_1761304854_img_0.webp",
      },
      {
        title:
          " Brokerage Volume Discounts to make this a ‘no brainer’ for your agents",
        imageUrl: "/img/task_01k8az515cfhkvw223jd07eawg_1761304918_img_0.webp",
      },
      {
        title: "Optional Co-Branding and launch support",
        imageUrl: "/img/task_01k8az6ks3erfvmzpf63qt2fxm_1761304965_img_1.webp",
      },
    ],
  },
];

const dataFierdSection = [
  {
    name: "If you're seeing your agents struggle with inconsistent income...",
    // description:
    //   "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "If recruiting has become a revolving door...",
    // description:
    //   "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: LockClosedIcon,
  },
  {
    name: "If your top producers are asking what’s next?...",
    // description:
    //   "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
    icon: ArrowPathIcon,
  },
];

export default function Brokers() {
  const isMobile = useProportions().width;
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <main
        id="Home"
        className="relative mx-auto px-4 sm:px-6 lg:px-12 pt-[140px] pb-20 lg:pb-[100px] overflow-hidden  md:h-screen z-10"
      >
        {/* Контейнер с variants */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col h-full my-auto md:flex-row z-10 gap-[70px] items-center relative"
        >
          {/* TEXT CONTENT */}
          <div className="text-left w-full md:max-w-[60%]">
            {/* h1 */}
            <motion.h1
              variants={item}
              className="text-[32px] sm:text-[54px]  text-left mx-auto font-bold leading-tight text-white"
            >
              Elevate Your Agents. <br /> Elevate Your Brokerage
            </motion.h1>

            {/* text */}
            <motion.p
              variants={item}
              className="text-[20px] leading-[28px] text-balance mx-auto font-bold text-[#ECE7FA] pt-6 md:pt-7 pb-5 md:pb-8"
            >
              The Brokerages That Thrive Are the
              <br /> Ones That Teach Their Agents to Lead. <br /> <br />
              {/* You&#39;ve built your business on experience, service, and
              performance. But the rules of real estate are evolving. Margins
              are tighter. Clients are more informed. And top agents are asking
              bigger questions—about sustainability, strategy, and financial
              freedom. That’s where we come in. <br /> <br />
              The Real Estate Investment Specialist™ (REIS) designation helps
              your agents become more than just dealmakers. It helps them become
              trusted advisors to their clients—and future-ready professionals
              who stay and grow with your brand. There’s a better way to grow. */}
            </motion.p>
            <motion.div variants={item} className="mx- w-max ">
              <Button
                label={`${
                  isMobile <= 768
                    ? "Book to find out more"
                    : "Book an appointment to find out more"
                }`}
              />
            </motion.div>
          </div>

          {/* IMAGE SCENE */}
          <div className="md:absolute mx-auto w-[800px] top-[0%] left-[70%] flex gap-4 md:gap-4 mt-40">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-4 mt-16">
              {/* <Image
                src={"/img/certifiedPro.png"}
                alt="certified"
                width={260}
                height={400}
                className="rounded-2xl object-cover w-[176px] h-[264px]"
              /> */}
              <Image
                src={
                  "/img/task_01k8ay1gmkf459tm34pkcwhhzp_1761303746_img_1.webp"
                }
                alt="certified"
                width={260}
                height={400}
                className="rounded-2xl object-cover w-[176px] h-[264px] shadow-classic"
              />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 md:gap-4 -mt-8">
              <Image
                src={
                  "/img/task_01k8ay1rdxe5arfk37mdn6hgm3_1761303756_img_1.webp"
                }
                alt="certified"
                width={260}
                height={400}
                className="rounded-2xl object-cover w-[176px] h-[264px] shadow-classic"
              />
              <Image
                src={
                  "/img/task_01k8ayekm3ermvh01c6z9ggaks_1761304182_img_0.webp"
                }
                alt="certified"
                width={260}
                height={400}
                className="rounded-2xl object-cover w-[176px] h-[264px] shadow-classic"
              />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 md:gap-4 -mt-42">
              <Image
                src={
                  "/img/task_01k8ayev94exga7b8gde4q1rym_1761304188_img_0.webp"
                }
                alt="certified"
                width={260}
                height={400}
                className="rounded-2xl object-cover w-[176px] h-[264px] shadow-classic"
              />
              <Image
                src={
                  "/img/task_01k8aykq10fye9dsb6act7h08z_1761304344_img_0.webp"
                }
                alt="certified"
                width={260}
                height={400}
                className="rounded-2xl object-cover w-[176px] h-[264px] shadow-classic"
              />
            </div>
          </div>
        </motion.div>

        {/* ФОН */}
        <div className="absolute z-2 inset-0 left-0 w-full h-full bg-[#B34AE4]/20 backdrop-blur-[400px]"></div>
        <div className="absolute z-3 bottom-0 left-0 w-full h-[140px] bg-gradient-to-b from-transparent to-[#f6f6f6]"></div>

        {/* ГРАДИЕНТ */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute z-1 w-[150%] md:w-full -translate-x-1/4 translate-y-[40%]  sm:-translate-y-[50%] aspect-square rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#6D55ED_21%,#7055EC_34%,#7D52EA_49%,#A44DE6_74%,#B34AE4_86%,#B44BE4_100%)]"
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

      {/* SECTION 1*/}
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
                What Happens When You Give Agents the{" "}
                <span className="gradient-text">Right Tools?</span>
              </motion.h2>

              {/* 🔹 Мобильная картинка */}
              <motion.div
                variants={imgItem}
                className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
              >
                <Image
                  src="/img/task_01k8ayt9nqe14vjmyjpwbmbh97_1761304565_img_0.webp"
                  alt="section"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>

              <motion.p variants={item} className="p-default">
                “Before REIS™, I was working twice as hard for half the return.
                Now I attract investor clients who buy 3–4 homes a year. My
                income grew 27% and I finally feel like I’m building something
                that lasts.” <br /> — Marilyn S., REIS™ Graduate | Royal LePage
              </motion.p>

              {/* 3. Подзаголовок списка */}
              <motion.h5 variants={item} className="font-semibold">
                Your Agents Will Learn To:
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
                    <p className="font-bold">{feature}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p variants={item} className="p-default">
                And when agents start winning like that… they don’t leave.
              </motion.p>
            </div>

            {/* 🔹 Десктопная картинка */}
            <motion.div
              variants={imgItem}
              className="w-max absolute translate-x-[65%] hidden lg:block"
            >
              <div className="relative w-full h-[50vh] lg:w-[900px] lg:h-[638px] rounded-l-[20px] overflow-hidden">
                <Image
                  src="/img/task_01k8ayt9nqe14vjmyjpwbmbh97_1761304565_img_0.webp"
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

      {/* 2 SECTION */}
      <section className="relative overflow-hidden">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="section-default"
        >
          <div className="flex flex-col items-center text-center space-y-[48px]">
            <div>
              <motion.h2 variants={item} className="h2-large">
                The Brokerage-Level Impact
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {dataSecondSection.map((benefit, i) => (
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
                    <h5 className={`${benefit.color} font-bold text-balance`}>
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

      {/* 3 SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        viewport={{ once: true, margin: "-50px" }}
        whileInView="visible"
        className="section-default space-y-5"
      >
        <div className="space-y-6  text-center">
          <motion.h2 variants={item} className="h2-large max-w-[900px] mx-auto">
            What You{" "}
            <span className="gradient-text">Get With REIS™ Licensing</span>
          </motion.h2>
          <motion.h4 variants={item} className="max-w-[600px] mx-auto">
            We’ve made it easy to bring this to your{" "}
            <span className="gradient-text">
              brokerage—without adding to your plate.{" "}
            </span>
          </motion.h4>
        </div>
        <TabbedContent data={dataThirdSection} cardComponent={CardImage} />
      </motion.section>

      {/* SECTION 4 */}
      <section className="">
        <motion.div
          id="Certification"
          variants={container}
          initial="hidden"
          viewport={{ once: true, margin: "-50px" }}
          whileInView="visible"
          className="section-default space-y-5"
        >
          <div className="lg:text-center">
            <motion.h2 variants={item} className="h2-default mt-2 text-balance">
              Message from the <span className="gradient-text"> REI Team</span>
            </motion.h2>
            <motion.h4 variants={item} className="text-balance mt-6 ">
              We’re not here to replace your coaching or compete with your
              internal training.
            </motion.h4>
            <motion.h4 variants={item} className="text-balance mt-6 ">
              We’re here to{" "}
              <span className="gradient-text"> add something news</span>—a way to
              help your agents serve a{" "}
              <span className="gradient-text"> growing investor market</span>,
              build lasting{" "}
              <span className="gradient-text">client relationships</span>, and
              create{" "}
              <span className="gradient-text">real financial momentum</span> in
              their careers. Then now is the right time to explore this.
            </motion.h4>
          </div>
          <div className="mx-auto mt-16  sm:mt-20 lg:mt-24">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16 ">
              {dataFierdSection.map((feature) => (
                <motion.div
                  key={feature.name}
                  className="relative  flex flex-col gap-5 border-1   bg-white/60 backdrop-blur-md border-b border-white/60
          shadow-classic rounded-2xl p-6"
                >
                  <div className="w-10 h-10 flex size-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  <h4>{feature.name}</h4>

                  {/* <dd className="mt-2 text-base/7 text-gray-600">
                    {feature.description}
                  </dd> */}
                </motion.div>
              ))}
            </dl>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5 */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default  flex flex-col md:flex-row gap-10"
      >
        <motion.div
          variants={item}
          className="p-15 space-y-10 bg-white rounded-2xl flex flex-col justify-between shadow-classic"
        >
          <div className="space-y-5">
            {" "}
            <h4 className="font-bold gradient-text">Book a Discovery Call</h4>
            <h5 className="p-default font-medium">
              Let us walk you through the REIS™ program and how licensing can
              benefit your office.
            </h5>
          </div>

          <Button label="Schedule a Call" />
        </motion.div>
        <motion.div
          variants={item}
          className="p-15 space-y-10 bg-white rounded-2xl flex flex-col justify-between shadow-classic"
        >
          <div className="space-y-5">
            {" "}
            <h4 className="font-bold gradient-text">
              Download the Broker Info Kit
            </h4>
            <h5 className="p-default font-medium">
              See the full training breakdown, agent outcomes, and licensing
              details in one place.
            </h5>
          </div>

          <Button label="Get the Info Kit" />
        </motion.div>
      </motion.section>
      <BackgroundGradients />
    </div>
  );
}
