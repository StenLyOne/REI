"use client";

import { container, imgItem, item } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useProportions } from "@/hooks/useProportions";
import GlowIcon from "@/components/ui/GlowIcon";
import CardHorizontal from "@/mainPageSections/Trends/CardHorizontal";
import { useRef } from "react";
import BackgroundGradients from "@/components/ui/BackgroundGradients";

const features = [
  <>
    Burning out chasing <span className="gradient-text">one-off deals</span>
  </>,
  <>
    Struggling to <span className="gradient-text">stand out</span> in a crowded
    industry
  </>,
  <>
    Watching savvy agents{" "}
    <span className="gradient-text">build repeat business</span> through
    investor clients
  </>,
];

const dataThirdSection = [
  {
    gif: "/icons/profit.mp4",
    title: "Earn Meaningful Affiliate Commissions",
    description:
      "We offer competitive payouts on every course registration—plus volume bonuses for top partners.",
  },
  {
    gif: "/icons/handshake.mp4",
    title: "Offer a Proven, High-Conversion Program",
    description:
      "Our training has been trusted by hundreds of agents and endorsed by industry leaders like OREA.",
  },
  {
    gif: "/icons/database.mp4",
    title: "Grow Your Influence &amp; Brand Value",
    description:
      "Be seen as a leader who’s bringing real opportunity to your audience—not just another product.",
  },
  {
    gif: "/icons/allocation.mp4",
    title: "Get a Plug-and-Play Marketing Kit",
    description:
      "We make it easy. You’ll get email templates, landing pages, one-pagers, and swipe copy to start promoting right away.",
  },
];

const dataFourthSection = [
  {
    text: (
      <>
        Have an audience of{" "}
        <span className="gradient-text"> licensed REALTORS®</span>, brokers, or
        investors
      </>
    ),
    color: "bg-[#F7F7F9]",
    imageUrl: "/img/task_01k8b05esjfpyrj8spp34xra06_1761305987_img_1.webp",
  },
  {
    text: (
      <>
        Run a coaching, training, or marketing business for{" "}
        <span className="gradient-text"> real estate professionals</span>
      </>
    ),
    color: "bg-[#F6F6FA]",
    imageUrl: "/img/task_01k8b0dqbwe29r2ys1drbzdmge_1761306243_img_1.webp",
  },
  {
    text: (
      <>
        Want to offer more than “motivation”—{" "}
        <span className="gradient-text"> you want to offer a path</span>
      </>
    ),
    color: "bg-[#F5F4FC]",
    imageUrl: "/img/task_01k8b0k69fembt47sxhahyfv52_1761306359_img_1.webp",
  },
  {
    text: (
      <>
        Are aligned with{" "}
        <span className="gradient-text"> our mission to raise</span> the bar in
        the real estate industry
      </>
    ),
    color: "bg-[#F5F4FC]",
    imageUrl: "/img/task_01k8b0tay2fty8gkpwhbjh0n9n_1761306671_img_0.webp",
  },
];

const testimonials = [
  {
    name: "— Affiliate Partner, Ontario",
    text: "“Sharing REIS with my audience was easy. Agents are craving real solutions. And the commissions? Let’s just say I wish every partnership ran this smoothly.”",
    avatar: "/icons/realtors.png",
  },
  {
    name: "— Team Leader, BC",
    text: "“My brokerage audience lit up when I introduced REIS. I’ve never had so many meaningful conversations about agent value and repeat deals.”",
    avatar: "/icons/realtors1.png",
  },
];

export default function Affiliates() {
  const isMobile = useProportions().width;
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 1; // Scroll by 80% of container width
    if (dir === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  //   const bgGradient = "linear-gradient(to right, #f6f6f6, transparent)";
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <main
        id="Home"
        className="relative mx-auto px-4 sm:px-6 lg:px-12 pt-[200px] pb-20 lg:pb-[100px]  h-screen z-10"
      >
        {/* Контейнер с variants */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid z-10 grid-cols-1 gap-[70px] items-center relative"
        >
          {/* TEXT CONTENT */}
          <div className="text-center ">
            {/* h1 */}
            <motion.h1
              variants={item}
              className=" max-w-[1220px] text-[32px] sm:text-[54px] lg:text-[60px] text-center mx-auto font-bold leading-tight text-white"
            >
              Partner With Purpose: Become a REIS Affiliate Help REALTORS® Work
              Smarter-and Get Paid to Do It
            </motion.h1>

            {/* h4 */}
            <motion.h4
              variants={item}
              className="max-w-[1220px] mx-auto font-bold text-[#ECE7FA] pt-6 md:pt-12 pb-5 md:pb-9"
            >
              Are you a coach, content creator, consultant, or entrepreneur with
              an audience of real estate agents or investors? We want to partner
              with you. The Real Estate Investment Specialist™ (REIS)
              designation is transforming how agents think about income,
              clients, and long-term wealth. And we’re inviting aligned
              affiliates to help us spread the word—while earning generous
              commissions and making a real impact.
            </motion.h4>
            <motion.div variants={item} className="mx-auto w-max ">
              <Button
                label={`${
                  isMobile <= 768
                    ? "Become an REI Investor ™"
                    : "Become A Real Estate Investment Specialist ™"
                }`}
              />
            </motion.div>
          </div>
          {/* Button */}
        </motion.div>

        {/* ФОН */}
        <div className="absolute z-2 inset-0 w-full h-full bg-[#B34AE4]/20 backdrop-blur-[400px]"></div>
        <div className="absolute z-3 bottom-0 left-0 w-full h-[140px] bg-gradient-to-b from-transparent to-[#f6f6f6]"></div>

        {/* ГРАДИЕНТ */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute z-1 w-[150%] md:w-full translate-y-[40%]  sm:-translate-y-[50%] aspect-square rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#6D55ED_21%,#7055EC_34%,#7D52EA_49%,#A44DE6_74%,#B34AE4_86%,#B44BE4_100%)]"
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

      {/* 2 SECTION */}
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
                The Future ofReal Estate Why Partner With{" "}
                <span className="gradient-text">REIS™?</span>
              </motion.h2>

              {/* 🔹 Мобильная картинка */}
              <motion.div
                variants={imgItem}
                className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
              >
                <Image
                  src="/img/task_01k8b0z98gft3r2y5nwx148aj6_1761306756_img_1.webp"
                  alt="section"
                  fill
                  loading="lazy"
                  className="object-cover"
                />
              </motion.div>

              {/* 3. Подзаголовок списка */}
              <motion.h5 variants={item} className="font-semibold">
                REALTORS® everywhere are:
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

              <motion.p variants={item} className="p-default">
                The REIS designation shows agents how to serve investors and
                become investors themselves. It’s not just another training.
                It’s a mindset shift
              </motion.p>

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
                  src="/img/task_01k8b0z98gft3r2y5nwx148aj6_1761306756_img_1.webp"
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

      {/* 3 SECTION */}
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
                What’s In It For You
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

      {/* 3 SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default "
      >
        <div className="space-y-5 text-center mb-16 ">
          <motion.h2 variants={item} className="h2-large text-center">
            Who We&#39;re Looking For
          </motion.h2>
          <motion.h4 className="">
            You&#39;re a <span className="gradient-text"> great fit </span>if
            you:
          </motion.h4>
        </div>

        {/* ОБЩИЙ контейнер для всех карточек */}
        <motion.div variants={item} className="relative h-[400vh]">
          {dataFourthSection.map((item, i) => (
            <div
              key={i}
              className="sticky top-0 md:top-[15vh]"
              style={{ zIndex: i + 1 }}
            >
              <CardHorizontal {...item} />
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* 4 SECTION */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default "
      >
        <div className=" text-center flex justify-between w-full space-y-6">
          <motion.h2
            variants={item}
            className="text-left w-full text-[24px] leading-[36px] md:text-[32px] md:leading-[44px] font-semibold"
          >
            Hear From Our{" "}
            <span className="gradient-text font-bold">Affiliates</span>
          </motion.h2>
          {/* стрелки */}
          {testimonials.length > 2 && (
            <div className="hidden md:flex w-max h-max  p-1 gap-1 bg-[#F0F0F0] rounded-full">
              <motion.button
                variants={item}
                onClick={() => handleScroll("left")}
                className="w-10 h-10 flex items-center justify-center  bg-white shadow rounded-full p-2 cursor-pointer"
              >
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.397603 8.00016L8.07979 0L10 1.99969L3.27791 9L10 16.0003L8.07979 18L0.397603 9.99984C0.143018 9.73464 0 9.375 0 9C0 8.625 0.143018 8.26536 0.397603 8.00016Z"
                    fill="#333333"
                  />
                </svg>
              </motion.button>
              <motion.button
                variants={item}
                onClick={() => handleScroll("right")}
                className="w-10 h-10 flex items-center justify-center  bg-white shadow rounded-full p-2 rotate-180 cursor-pointer"
              >
                <svg
                  width="10"
                  height="18"
                  viewBox="0 0 10 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.397603 8.00016L8.07979 0L10 1.99969L3.27791 9L10 16.0003L8.07979 18L0.397603 9.99984C0.143018 9.73464 0 9.375 0 9C0 8.625 0.143018 8.26536 0.397603 8.00016Z"
                    fill="#333333"
                  />
                </svg>
              </motion.button>
            </div>
          )}
        </div>

        {/* {CARD} */}
        <div className="relative -mx-5">
          <div
            ref={scrollRef}
            className="flex  justify-start overflow-x-auto no-scrollbar scroll-smooth py-10 px-2"
          >
            {testimonials.map((t, i) => (
              <motion.div
                variants={item}
                key={i}
                className="bg-white rounded-xl shadow-classic p-6 text-left flex flex-col justify-between gap-6 flex-shrink-0 basis-3/3 max-w-[70%] md:basis-2/3 md:max-w-[48%] lg:basis-1/3 lg:max-w-[32%] mx-3"
              >
                <div className="space-y-5">
                  <div className="flex  text-yellow-400">★ ★ ★ ★ ★</div>
                  <p className="text-gray-700 font-medium">{t.text}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full w-full h-full max-w-[50px] max-h-[50px]"
                  />
                  <div>
                    <h5 className="font-semibold">{t.name}</h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
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
                <span className="text-white "> Let’s Build a</span>
                <span className="gradient-text"> Win-Win Partnership</span>
              </motion.h2>
              <motion.h4 className=" pt-10 text-white">
                We’ll review your application and connect you with a partnership
                coordinator to set you up for success.
              </motion.h4>
              <motion.h4 className="pb-15 pt-5 text-white">
                Together, we can elevate agent careers, client outcomes, and the
                future of real estate.
              </motion.h4>
              <motion.div>
                <Button />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <BackgroundGradients />
    </div>
  );
}
