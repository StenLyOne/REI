"use client";
import Button from "@/components/ui/Button";
import CardImage from "@/components/ui/CardImage";
import GlowIcon from "@/components/ui/GlowIcon";
import { useProportions } from "@/hooks/useProportions";
import { container, imgItem, item } from "@/lib/variantsAnimation";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";

const dataFierstSection = [
  {
    label: "You’ll learn to",
    cards: [
      {
        title: "Understand what investors actually want",
        imageUrl: "/img/task_01k8b9s4jcedbvp140m5m3kfk7_1761316069_img_0.webp",
      },
      {
        title: "Confidently lead wealth-building conversations",
        imageUrl: "/img/task_01k8b9wwzwf1eb3wpt3b5b7jmg_1761316186_img_1.webp",
      },
      {
        title: "Generate more repeat business and referrals",
        imageUrl: "/img/task_01k8ba2tdces8snrnde00h3vea_1761316390_img_0.webp",
      },
      {
        title: "Build financial freedom for themselves and their clients",
        imageUrl: "/img/task_01k8batwpmeedb6nmjw1md7wts_1761317171_img_1.webp",
      },
    ],
  },
];

const dataSecondSection = [
  {
    gif: "/icons/profit.mp4",
    title: "Built for Working Agents",
    description:
      "Our training is modular, practical, and immediately applicable. No fluff. Just results.",
  },
  {
    gif: "/icons/handshake.mp4",
    title: "Backed by Industry Experts",
    description:
      "From OREA and TRREB to high-level coaches like July Ono and Julie Hoffman, REIS is earning national support.",
  },
  {
    gif: "/icons/database.mp4",
    title: "Proven to Deliver",
    description:
      "Graduates report a 15- 25%+ increase in GCI, multiple deals from investor clients, and stronger long-term pipelines.",
  },
  {
    gif: "/icons/allocation.mp4",
    title: "Beyond the Course",
    description:
      "We offer monthly masterminds, marketing tools, optional coaching, and a community of like-minded professionals.",
  },
];

export default function About() {
  const isMobile =
    useProportions().width <= 768
      ? "Become an REI Investor ™"
      : "Become A Real Estate Investment Specialist ™";

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });
  return (
    <>
      {" "}
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
                      `About the Real Estate Investment Institute`,
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
              className=" max-w-[1240px] text-[32px] sm:text-[44px] text-center mx-auto font-bold leading-tight text-white"
            >
              Real Estate Should Be About More Than Just Sales.
              <br /> It Should Be About Building Wealth.
            </motion.h1>

            {/* h4 */}
            <motion.p
              variants={item}
              className="max-w-[1020px] text-[20px] leading-[28px] text-balance mx-auto font-bold text-[#ECE7FA] pt-6 md:pt-12 pb-5 md:pb-9"
            >
              The real estate industry taught agents how to sell homes—but not
              how to build futures. And definitely not how to advise clients on
              using real estate to build wealth. <br /> <br />
              That gap cost investors time, money, and trust. And it left
              thousands of REALTORS® scrambling—wondering why clients stopped
              calling back. We decided to change that.
            </motion.p>

            {/* Button */}
            <motion.div variants={item} className="mx-auto w-max">
              <Button label={isMobile} />
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
              src="/img/task_01k8b9bmkmea2v73y5gtfbezdw_1761315628_img_1.webp"
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
                  src="/img/task_01k8b9bmkmea2v73y5gtfbezdw_1761315628_img_1.webp"
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
      <motion.section
        variants={container}
        initial="hidden"
        viewport={{ once: true, margin: "-50px" }}
        whileInView="visible"
        className="section-default space-y-5"
      >
        <div className="space-y-6  text-center">
          <motion.h2 variants={item} className="h2-large max-w-[900px] mx-auto">
            <span className="gradient-text"> Our Mission</span>
          </motion.h2>
          <motion.h4 variants={item} className="max-w-[800px] mx-auto">
            To make{" "}
            <span className="gradient-text">
              investor literacy a core skill.
            </span>{" "}
            <br />
            We don’t just teach real estate. We teach transformation.
          </motion.h4>
        </div>

        <div className="grid mt-10">
          {dataFierstSection.map((ele, i) => (
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
            <div className="w-full space-y-[24px] ">
              {/* 1. Заголовок */}
              <motion.h2 variants={item} className="h2-default">
                From Frustration to Foundation: <br />
                <span className="gradient-text">
                  {" "}
                  The Story Behind the Institute
                </span>
              </motion.h2>

              {/* 🔹 Мобильная картинка */}
              <motion.div
                variants={imgItem}
                className="relative w-full lg:max-w-[530px] h-[50vh] lg:h-[300px] rounded-[20px] overflow-hidden lg:hidden mb-6"
              >
                <Image
                  src="/img/man.jpg"
                  alt="section"
                  fill
                  loading="lazy"
                  className="object-cover  rounded-2xl shadow-classic"
                />
              </motion.div>

              {/* 3. TEXT */}

              <div className="flex gap-10">
                <div className="space-y-5">
                  <motion.p variants={item} className="font-semibold">
                    Every time I needed a REALTOR® to help with one of my own
                    deals, I’d ask:{" "}
                    <span className="gradient-text">
                      {" "}
                      “Do you work with real estate investors?”
                    </span>{" "}
                    And every single time, the answer was “Yes.” pure
                    frustration.
                  </motion.p>
                  <motion.p variants={item} className="font-semibold">
                    But as soon as I shared my investment criteria, I’d get
                    flooded with automated property alerts—deals that made
                    absolutely no sense.
                  </motion.p>
                  <motion.p variants={item} className="font-semibold">
                    Time and again, agents overpromised, underdelivered, and
                    lost my business without even realizing it.
                  </motion.p>
                  <motion.p variants={item} className="font-semibold">
                    That’s when it hit me: The{" "}
                    <span className="gradient-text">#1 roadblock</span> to a
                    real estate investor’s success isn’t financing. It’s not the
                    market. It’s not the deals.
                  </motion.p>
                  <motion.p variants={item} className="font-semibold">
                    <span className="gradient-text">It’s the REALTOR®.</span>{" "}
                    And that’s a problem—because agents are supposed to be the
                    smartest person in the room.
                  </motion.p>
                  <motion.p variants={item} className="font-semibold">
                    That’s why I created the{" "}
                    <span className="gradient-text">
                      {" "}
                      Real Estate Investment Specialist™ (REIS)
                    </span>{" "}
                    designation: To turn frustrated, one-and-done REALTORS® into
                    long-term wealth advisors investors can trust.
                  </motion.p>
                  <motion.p variants={item} className="font-semibold">
                    <span className="gradient-text">
                      {" "}
                      What I didn’t expect?
                    </span>{" "}
                    The same training that made agents better with investors
                    also made them better with homebuyers, sellers, and every
                    other client they served. <br /> <br />
                    Because when you truly understand how wealth is built in
                    real estate, you stop chasing deals—and start building a
                    business that lasts.
                  </motion.p>
                </div>
                <Image
                  src="/img/man.jpg"
                  alt="section"
                  width={300}
                  height={340}
                  loading="lazy"
                  className="object-cover hidden md:block w-[400px] h-[450px] rounded-2xl shadow-classic"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* SECTION 2 */}
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
                Why It Works
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
      {/* SECTION 3 */}
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
                  src="/img/task_01k8b9g7cmed8bcz7p1ckyfvhc_1761315782_img_1.webp"
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
              <span className="gradient-text">The Bigger Vision</span>
            </motion.h2>
            <motion.p
              variants={item}
              className="p-default mt-5 md:mt-6 mb-5 md:mb-10"
            >
              We don’t just want REALTORS® to survive this market. We want them
              to lead it—with confidence, clarity, and a clear roadmap to
              financial freedom.
              <br /> <br />
              And we believe the best way to do that is by turning every
              REALTOR® into a{" "}
              <span className="gradient-text"> Real Estate Advisor</span>{" "}
              —someone who knows how to spot opportunity, structure deals, and
              guide clients through life-changing decisions.
              <br /> <br />
              Because when agents understand investing, they don’t just build
              careers.{" "}
              <span className="gradient-text"> They build legacies.</span>
            </motion.p>
          </div>
        </motion.div>
      </section>
      {/* SECTION 4 */}
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
              Let’s explore how REIS could benefit your board and your members.
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
