import Button from "@/components/Button";
import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

export default function WhoSItFor() {
  return (
    <section
      id="WhoSItFor"
      className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
    >
      {" "}
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <GlowIcon text="Who’s it for" img={false} />
          </m.div>

          <div className="text-center max-w-[680px] mx-auto mb-[48px]">
            <m.h2 variants={itemVariants}>
              This Program Right Who Should{" "}
              <span className="gradient-text">
                Join the REI Certification Program
              </span>{" "}
              ?
            </m.h2>

            <m.p className="pb-[36px] pt-[24px]" variants={itemVariants}>
              If you&apos;re ready to build lasting wealth through real estate,
              our program provides the roadmap, tools, and certification you
              need to thrive in today&apos;s competitive market.
            </m.p>

            <m.div className="w-max mx-auto" variants={itemVariants}>
              <Button />
            </m.div>
          </div>
          <m.div
            className="grid lg:grid-cols-3 gap-[24px]"
            variants={containerVariants}
          >
            {/* Card 1 */}
            <m.div
              variants={itemVariants}
              className="max-w-[430px] rounded-[20px] px-[24px] py-[36px] space-y-[24px] shadow-classic text-left border-1 border-border mx-auto"
              style={{ background: "var(--secondary)" }}
            >
              <div className="relative max-w-[362px]">
                <div className="w-full h-[313px] flex ">
                  <div className="absolute insert-0 w-full h-full">
                    <span></span>
                  </div>
                  <div className="w-full h-full border-l-1 border-r-1 border-gray-200 ">
                    <div className="w-full h-full overflow-hidden ">
                      <span className="w-[120%] h-[1px] bg-primary block rotate-[-30deg] translate-y-[195px] translate-x-[-10px]"></span>
                    </div>
                    <span
                      className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full translate-x-[-7px] translate-y-[-90px]"
                      style={{
                        boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                    </span>
                    <span
                      className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[-7px] translate-y-[-200px] shadow-classic"
                      style={{ background: "var(--secondary)" }}
                    >
                      Step 1
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <div className="w-full h-full overflow-hidden ">
                      <span className="w-[120%] h-[1px] bg-primary block rotate-[8deg] translate-y-[170px] translate-x-[-10px]"></span>
                    </div>
                    <span
                      className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full translate-x-[-7px] translate-y-[-157px]"
                      style={{
                        boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                    </span>
                    <span
                      className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[-32px] translate-y-[-250px] shadow-classic"
                      style={{ background: "var(--secondary)" }}
                    >
                      Step 2
                    </span>
                  </div>
                  <div className="w-full h-full border-l-1 border-r-1 border-gray-200">
                    <div className="w-full h-full overflow-hidden ">
                      <span className="w-[120%] h-[1px] bg-primary block rotate-[-25deg] translate-y-[149px] translate-x-[-10px]"></span>
                    </div>
                    <span
                      className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full translate-x-[-7px] translate-y-[-143px]"
                      style={{
                        boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                    </span>
                    <span
                      className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full ml-auto translate-x-[7px] translate-y-[-212px]"
                      style={{
                        boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                    </span>
                    <span
                      className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[-32px] translate-y-[-250px] shadow-classic"
                      style={{ background: "var(--secondary)" }}
                    >
                      Step 3
                    </span>
                    <span
                      className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[60px] translate-y-[-310px] shadow-classic"
                      style={{ background: "var(--secondary)" }}
                    >
                      Step 4
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-[12px]">
                <h4 className="font-semibold">New to Real Estate Investing</h4>
                <p className="">
                  Learn the step-by-step process to start strong and avoid
                  costly mistakes.
                </p>
              </div>
            </m.div>

            {/* Card 2 */}
            <m.div
              variants={itemVariants}
              className="max-w-[430px] rounded-[20px] px-[24px] py-[36px] space-y-[24px] shadow-classic text-left border-1 border-border mx-auto"
              style={{ background: "var(--secondary)" }}
            >
              <div className="max-w-[362px] rounded-[20px] h-[313px] flex flex-col justify-between">
                <div
                  className="w-full flex flex-col items-center p-[12px] rounded-[20px] space-y-[6px] shadow-classic border-1 border-border-two"
                  style={{ background: "var(--secondary)" }}
                >
                  <span className="text-[20px] font-bold flex gap-[10px]">
                    <Image
                      src="/icons/arrowGrow.svg"
                      alt="Arrow indicating growth in investment"
                      width={24}
                      height={24}
                    />
                    +121%
                  </span>
                  <p className="text-grey">Investor Deal</p>
                </div>
                <div
                  className="w-full flex flex-col items-center p-[12px] rounded-[20px] space-y-[6px] bg-secondary shadow-classic border-1 border-border-two"
                  style={{ background: "var(--secondary)" }}
                >
                  <span className="text-[20px] font-bold flex gap-[10px]">
                    <Image
                      src="/icons/arrowGrow.svg"
                      alt="Arrow indicating growth in investment"
                      width={24}
                      height={24}
                    />
                    +89%
                  </span>
                  <p className="text-grey">Investor Deal</p>
                </div>
                <div
                  className="w-full flex justify-center gap-[12px] rounded-[20px] bg-secondary shadow-classic py-[22px] border-1 border-border-two"
                  style={{ background: "var(--secondary)" }}
                >
                  <span className="text-[14px] text-primary font-bold border-1 border-primary py-[8px] px-[24px] rounded-[20px]">
                    Analize
                  </span>
                  <span className="text-[14px] text-white font-bold bg-primary py-[8px] px-[24px] rounded-[20px]">
                    Start
                  </span>
                </div>
              </div>
              <div className="space-y-[12px]">
                <h4 className="font-semibold">Aspiring Full-Time Investors</h4>
                <p className="">
                  Transition from part-time to full-time real estate success.
                </p>
              </div>
            </m.div>
            {/* Card 3 */}
            <m.div
              variants={itemVariants}
              className="max-w-[430px] rounded-[20px] px-[24px] py-[36px] space-y-[24px] shadow-classic text-left border-1 border-border mx-auto"
              style={{ background: "var(--secondary)" }}
            >
              <div
                className="max-w-[362px] rounded-[20px] shadow-classic text-left border-1 border-border "
                style={{ background: "var(--secondary)" }}
              >
                <div className="p-[10px] flex flex-start gap-[6px] border-b-1 border-gray-200">
                  <span className="w-[6px] h-[6px] bg-gray-200 rounded-full"></span>
                  <span className="w-[6px] h-[6px] bg-gray-200 rounded-full"></span>
                  <span className="w-[6px] h-[6px] bg-gray-200 rounded-full"></span>
                </div>
                <div>
                  <div className="space-y-[12px] py-[12px] px-[26px]">
                    <span
                      className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                      style={{ background: "var(--secondary)" }}
                    >
                      <p className="text-[14px]! ">😕</p>
                      <p className="text-[14px]! px-[12px] font-semibold">
                        Scattered focus
                      </p>
                      <p className="text-[14px]! text-red-500 font-semibold">
                        +5%
                      </p>
                    </span>
                    <span
                      className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                      style={{ background: "var(--secondary)" }}
                    >
                      <p className="text-[14px]! ">📉</p>
                      <p className="text-[14px]! px-[12px] font-semibold">
                        Scattered focus
                      </p>
                      <p className="text-[14px]! text-red-500 font-semibold">
                        –12%
                      </p>
                    </span>
                  </div>
                  <div className="flex w-full h-[4px]">
                    <div className="w-1/2 border-t-2 border-dashed border-red-500"></div>
                    <div className="w-1/2 border-t-2 border-dashed border-green-500"></div>
                  </div>
                  <div className="space-y-[10px] py-[12px] px-[26px]">
                    <span
                      className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                      style={{ background: "var(--secondary)" }}
                    >
                      <p className="text-[14px]! ">📈</p>
                      <p className="text-[14px]! font-semibold pl-[8px] text-primary">
                        REI
                      </p>
                      <p className="text-[14px]! pl-[12px] pr-[8px] font-semibold">
                        Clear plan
                      </p>
                      <p className="text-[14px]! text-green-500 font-semibold">
                        +55%
                      </p>
                    </span>
                    <span
                      className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                      style={{ background: "var(--secondary)" }}
                    >
                      <p className="text-[14px]! ">⚡</p>
                      <p className="text-[14px]! font-semibold pl-[8px] text-primary">
                        REI
                      </p>
                      <p className="text-[14px]! pl-[12px] pr-[8px] font-semibold">
                        Fast action
                      </p>
                      <p className="text-[14px]! text-green-500 font-semibold">
                        +90%
                      </p>
                    </span>
                    <span
                      className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                      style={{ background: "var(--secondary)" }}
                    >
                      <p className="text-[14px]! ">🚀</p>
                      <p className="text-[14px]! font-semibold pl-[8px] text-primary">
                        REI
                      </p>
                      <p className="text-[14px]! pl-[12px] pr-[8px] font-semibold">
                        Full support
                      </p>
                      <p className="text-[14px]! text-green-500 font-semibold">
                        +120%
                      </p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-[12px]">
                <h4 className="font-semibold">Looking for Passive Income</h4>
                <p className="">
                  Build a steady cash flow with rental properties and smart
                  investments.
                </p>
              </div>
            </m.div>
          </m.div>
        </m.div>

        <m.div
          className="absolute overflow-visible top-[-50%] right-[45%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
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
        <m.div
          className="absolute overflow-visible top-[50%] right-[-45%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
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
        ></m.div>
        <p className="sr-only">
          Learn who should enroll in the REI Institute Certification Program,
          whether you're new to real estate investing, transitioning to
          full-time, or seeking passive income.
        </p>
      </LazyMotion>
    </section>
  );
}
