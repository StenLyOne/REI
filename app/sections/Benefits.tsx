import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import GlowIcon from "@/components/GlowIcon";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

export default function Benefits() {
  const data = [
    {
      gif: "/icons/profit.mp4",
      title: "Investor Ecosystem",
      description:
        "Learn to build your own Investor EFFECT Ecosystem to become the go-to real estate investment specialist and 4X your business in 12 months.",
    },
    {
      gif: "/icons/handshake.mp4",
      title: "Fast Closures",
      description:
        "Secure two investment properties under contract within 30 days of completing the REIS Certification.",
    },
    {
      gif: "/icons/database.mp4",
      title: "Database Growth",
      description:
        "Increase your qualified investor database by 10%-20% within 30 days of completing your REIS Certification.",
    },
    {
      gif: "/icons/allocation.mp4",
      title: "Client Acquisition",
      description:
        "Quickly find clients in a saturated market with proven strategies.",
    },
    {
      gif: "/icons/choosing-custome.mp4",
      title: "Lead by Example",
      description:
        "Invest in real estate yourself and become a role model for clients, family, and colleagues.",
    },
    {
      gif: "/icons/growth.mp4",
      title: "Wealth Building",
      description:
        "Build wealth passively while reducing the stress of chasing new clients.",
    },
  ];

  return (
    <section>
      <LazyMotion features={domAnimation} strict>
        <m.div
          id="Benefits"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
        >
          <div className="flex flex-col items-center text-center space-y-[48px]">
            <div>
              <m.div variants={itemVariants}>
                <GlowIcon text="Benefits" img={false} />
              </m.div>
              <div className="max-w-[780px] text-center space-y-[24px]">
                <m.h2 variants={itemVariants}>
                  Transform
                  <span className="gradient-text">
                    {" "}
                    Your Real Estate Career{" "}
                  </span>
                  With REI Institute Certification
                </m.h2>

                <m.p
                  variants={itemVariants}
                  className="max-w-[800px] mx-auto text-center"
                >
                  Whether you are starting fresh or scaling your existing real
                  estate career, our program is your ultimate launchpad. Unlock
                  new opportunities, achieve financial independence, and gain a
                  competitive edge.
                </m.p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {data.map((benefit, i) => (
                <m.article
                  variants={itemVariants}
                  key={i}
                  className="p-[20px] space-y-[24px] rounded-[20px] text-left border-1 border-border shadow-classic"
                  style={{ background: "var(--secondary)" }}
                >
                  <div className="w-[78px] h-[78px]">
                    <GlowIcon text={benefit.gif} video={true} />
                  </div>
                  <div className="space-y-[12px]">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </m.article>
              ))}
            </div>
          </div>

          <m.div
            className="absolute overflow-visible top-[40%] right-[-20%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
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
          ></m.div>
          <p className="sr-only">
            Discover the benefits of the REI Institute Certification Program,
            including faster deal closures, client acquisition, database growth,
            and wealth building strategies.
          </p>
        </m.div>
      </LazyMotion>
    </section>
  );
}
