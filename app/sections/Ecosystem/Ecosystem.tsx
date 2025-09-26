import Button from "@/components/ui/Button";
import EcosystemItem from "@/sections/Ecosystem/EcosystemItem";
import { motion } from "framer-motion";

const data = [
  {
    label: "REIS™‑Certified",
    text: [
      "Lead with education—win on value",
      "Attract (don’t chase) multi‑deal clients",
      "Predictable deal cadence",
      "Build wealth alongside your clients",
    ],
  },
  {
    label: "Traditional",
    text: [
      "Chase leads and one‑off pay days",
      "Compete on price and promises",
      "Feast‑or‑famine income",
      "No clear retirement path",
    ],
  },
];

export default function Ecosystem() {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        id="Ecosystem"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      
        aria-label="Ecosystem comparison between REI Certified and Traditional Realtors"
        className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
      >
        <motion.div className="space-y-[48px]">
          <div className="flex flex-col md:flex-row justify-between w-full gap-5">
            <motion.h2 className="h2-large ">
              Traditional vs.
              <span className="gradient-text"> REIS™‑Certified </span> Rreal
              Talk
            </motion.h2>
            <motion.div className="">
              <Button label="Get Certified" />
            </motion.div>
          </div>
          <div>
            <div
              className="w-full px-[20px] py-[36px] sm:p-[36px] rounded-[20px] flex shadow-classic text-left border-1 border-border"
              style={{ background: "var(--secondary)" }}
            >
              <div className="w-full">
                <div className="w-full flex gap-[24px]">
                  <h4 className="md:w-[50%] pb-[24px] mb-[12px]">
                    REIS Certified Realtors
                  </h4>
                  <h4 className="w-[50%] pb-[24px] mb-[12px] font-normal hidden md:block">
                    Traditional Realtors
                  </h4>
                </div>
                {data[0].text.map((leftText, i) => (
                  <motion.div
                    key={i}
                    className="w-full flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b border-gray-200"
                  >
                    {/* слева */}
                    <div className="w-full">
                      <EcosystemItem rei={true} text={leftText} />
                    </div>

                    {/* справа */}
                    <div className="w-full hidden md:block">
                      <EcosystemItem rei={false} text={data[1].text[i]} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div
              className="w-full px-[20px] py-[36px] sm:p-[36px]  mt-[32px] bg-secondary rounded-[20px] flex md:hidden shadow-classic border-1 border-border"
              style={{ background: "var(--secondary)" }}
            >
              <div className="w-full">
                {data[1].text.map((text, i) => (
                  <motion.div
                    key={i}
                    className="w-full flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b-1 border-gray-200"
                  >
                    <div className="w-full">
                      <EcosystemItem rei={false} text={text} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute overflow-visible top-[-10%] right-[15%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-purple pointer-events-none"
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
      />
      <motion.div
        className="absolute overflow-visible top-[30%] right-[-15%] w-[1500px] h-[1000px] z-[-1] bg-gradient-soft-pink pointer-events-none"
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
      />
    </section>
  );
}
