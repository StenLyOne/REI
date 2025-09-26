import FeatureCard from "@/components/ui/FeatureCard";
import ReiLabel from "@/components/ui/ReiLabel";
import { motion } from "framer-motion";

const data = [
  {
    icon: "/icons/Fundamentals.svg",
    images: [
      "/img-optimized/Fundamentals1.webp",
      "/img-optimized/Fundamentals2.webp",
      "/img-optimized/Fundamentals3.webp",
    ],
    title: "Cash flow",
  },
  {
    icon: "/icons/Market.svg",
    images: [
      "/img-optimized/Market1.webp",
      "/img-optimized/Market2.webp",
      "/img-optimized/Market3.webp",
    ],
    title: "Instant Equity",
  },
  {
    icon: "/icons/Financing.svg",
    images: [
      "/img-optimized/Financing1.webp",
      "/img-optimized/Financing2.webp",
      "/img-optimized/Financing3.webp",
    ],
    title: "Leverage",
  },
  {
    icon: "/icons/Property.svg",
    images: [
      "/img-optimized/Property1.webp",
      "/img-optimized/Property2.webp",
      "/img-optimized/Property3.webp",
    ],
    title: "Principal paydown",
  },
  {
    icon: "/icons/Managing.svg",
    images: [
      "/img-optimized/Managing1.webp",
      "/img-optimized/Managing2.webp",
      "/img-optimized/Managing3.webp",
    ],
    title: "Market Appreciation",
  },
  {
    icon: "/icons/Exit.svg",
    images: [
      "/img-optimized/Exit1.webp",
      "/img-optimized/Exit2.webp",
      "/img-optimized/Exit3.webp",
    ],
    title: "Forced appreciation ",
  },
  {
    icon: "/icons/Exit.svg",
    images: [
      "/img-optimized/Exit1.webp",
      "/img-optimized/Exit2.webp",
      "/img-optimized/Exit3.webp",
    ],
    title: "Tax advantages",
  },
  {
    icon: "/icons/Exit.svg",
    images: [
      "/img-optimized/Exit1.webp",
      "/img-optimized/Exit2.webp",
      "/img-optimized/Exit3.webp",
    ],
    title: "Refinancing",
  },
];

export default function HowReiWorks() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        id="HowReiWorks"
        className="section-default"
      >
        <div>
          <div className="mx-auto space-y-[24px] text-center max-w-[820px]">
            <motion.h2 className="h2-large">
              Why the Industry Is
              <span className="gradient-text text-bold"> Shifting</span>
            </motion.h2>

            <div className="space-y-5">
              <h4>
                The old play—“it’ll be worth more next year”—isn’t a plan.
              </h4>
              <p>
                Pre‑construction is mostly an appreciation bet (useful in some
                cycles), but it’s just{" "}
                <span className="gradient-text font-bold">one of eight</span>{" "}
                profit centres.
              </p>
              <p>
                With renewals squeezing households, clients want{" "}
                <span className="gradient-text font-bold">
                  numbers‑first guidance
                </span>{" "}
                that works in any market. The agents who can underwrite
                deals—and{" "}
                <span className="gradient-text font-bold">
                  stack all eight profit centres
                </span>
                —win now.
              </p>
            </div>
          </div>
        </div>

        <motion.div className="mt-15">
          <ReiLabel />
        </motion.div>

        <motion.div className="relative w-full h-full">
          <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 max-w-[400px] w-full h-[600px]">
            {/* MOBILE lineS */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-35px] w-full max-w-[380px] h-[716px] max-[600px]:px-[60px] justify-between pointer-events-none z-0 hidden max-[1024px]:flex">
              <motion.svg
                className="w-full h-[716px]"
                viewBox="0 0 259 716"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <motion.path
                  d="M0 109.5C0 109.5 82 109.5 85.5 109.5C89 109.5 113 109.5 121.5 101C130 92.5 129.5 67.5 129.5 67.5V0"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M0 312.5C0 312.5 82 312.5 85.5 312.5C89 312.5 113 312.5 121.5 304C130 295.5 129.5 270.5 129.5 270.5V0"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M0 513.5C0 513.5 82 513.5 85.5 513.5C89 513.5 113 513.5 121.5 505C130 496.5 129.5 471.5 129.5 471.5V0"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M258.505 109.5C258.505 109.5 176.505 109.5 173.005 109.5C169.505 109.5 145.505 109.5 137.005 101C128.505 92.5 129.005 67.5 129.005 67.5V0"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M258.505 312.5C258.505 312.5 176.505 312.5 173.005 312.5C169.505 312.5 145.505 312.5 137.005 304C128.505 295.5 129.005 270.5 129.005 270.5V0"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M258.505 513.5C258.505 513.5 176.505 513.5 173.005 513.5C169.505 513.5 145.505 513.5 137.005 505C128.505 496.5 129.005 471.5 129.005 471.5V0"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M0 715.5C0 715.5 82 715.5 85.5 715.5C89 715.5 113 715.5 121.5 707C130 698.5 129.5 673.5 129.5 673.5V202"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M258.505 715.5C258.505 715.5 176.505 715.5 173.005 715.5C169.505 715.5 145.505 715.5 137.005 707C128.505 698.5 129.005 673.5 129.005 673.5V0.129836"
                  stroke="#B34AE4"
                />
              </motion.svg>
            </div>

            {/* DESKTOP lineS */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-35px] w-[971px] h-[293px] justify-between pointer-events-none z-0 hidden min-[1024px]:flex ">
              <motion.svg
                width="1122"
                height="292"
                viewBox="0 0 1122 292"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              >
                <motion.path
                  d="M1 143.75C1 -0.253509 561 108.627 561 0.75"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M1121 143.75C1121 -0.253509 561 108.627 561 0.75"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M137 205.75C137 62.25 561 108.25 561 0.75"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M985 205.75C985 62.25 561 108.25 561 0.75"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M294 288.75C294 145 561 108.437 561 0.75"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M828 288.75C828 145 561 108.437 561 0.75"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M470 291.75C470 148.003 561 108.435 561 0.75"
                  stroke="#B34AE4"
                />
                <motion.path
                  d="M652 291.75C652 147.977 561 108.454 561 0.75"
                  stroke="#B34AE4"
                />
              </motion.svg>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-y-[65px] justify-center pt-[30px] w-full max-w-[700px] mx-auto lg:hidden">
          {data.map((props, i) => (
            <motion.div key={i}>
              <FeatureCard {...props} />
            </motion.div>
          ))}
        </div>

        {/*  DESKTOP ICONS */}
        <div className="relative w-full max-w-[1200px] mx-auto min-h-[600px] hidden lg:flex">
          <div className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[255px] flex justify-center gap-[890px]">
            {[data[0], data[5]].map((props, i) => (
              <motion.div key={i}>
                <FeatureCard {...props} />
              </motion.div>
            ))}
          </div>

          <div className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[190px] flex justify-center  gap-[638px]">
            {[data[1], data[4]].map((props, i) => (
              <motion.div key={i}>
                <FeatureCard {...props} />
              </motion.div>
            ))}
          </div>

          <div className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-[130px] flex justify-center gap-[348px]">
            {[data[1], data[4]].map((props, i) => (
              <motion.div key={i}>
                <FeatureCard {...props} />
              </motion.div>
            ))}
          </div>

          <div className="absolute w-full left-1/2 top-1/2 -translate-x-[50%] -translate-y-1/2 flex justify-center gap-[60px]">
            {[data[2], data[3]].map((props, i) => (
              <motion.div key={i}>
                <FeatureCard {...props} />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className="absolute overflow-visible top-[0%] left-[-35%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
              opacity: 0.4,
              scale: 1,
              transition: { duration: 2, ease: "easeOut", delay: 1 },
            },
          }}
        ></motion.div>
      </motion.div>
      <motion.div
        className="absolute overflow-visible top-[0%] right-[-35%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: {
            opacity: 0.4,
            scale: 1,
            transition: { duration: 2, ease: "easeOut", delay: 1.3 },
          },
        }}
      ></motion.div>
    </section>
  );
}
