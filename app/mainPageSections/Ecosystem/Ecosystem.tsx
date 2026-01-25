import Button from "@/components/ui/Button";
import EcosystemItem from "@/mainPageSections/Ecosystem/EcosystemItem";
import { motion } from "framer-motion";
import { container, item } from "@/lib/variantsAnimation";

const data = [
  {
    label: "REIS™ Certified",
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
        variants={container}
        viewport={{ once: true, margin: "-50px" }}
        aria-label="Ecosystem comparison between REI Certified and Traditional Realtors"
        className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 my-[80px] lg:my-[100px]"
      >
        <motion.div className="space-y-[48px]">
          <div className="flex flex-col md:flex-row justify-between w-full gap-5">
            <motion.h2 variants={item} className="h2-large ">
              Traditional vs.
              <span className="gradient-text"> REIS™ Certified </span> Realtors
              <span className="text-[35px] align-bottom">®</span>
            </motion.h2>
            <motion.div variants={item} className="">
              <Button label="Get Certified" link="https://buy.stripe.com/9AQeXW9p67cueGscMR"/>
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={item}
              className="w-full px-[20px] py-[36px] sm:p-[36px] rounded-[20px] flex shadow-classic text-left border-1 border-border"
              style={{ background: "var(--secondary)" }}
            >
              <div className="w-full">
                <div className="w-full flex gap-[24px]">
                  <motion.h4
                    variants={item}
                    className="md:w-[50%] pb-[24px] mb-[12px]"
                  >
                    REIS™ Certified Realtors
                    <span className="text-[17px] align-super">®</span>
                  </motion.h4>
                  <motion.h4
                    variants={item}
                    className="w-[50%] pb-[24px] mb-[12px] font-normal hidden md:block"
                  >
                    Traditional Realtors<span className="text-[17px] align-super">®</span>  
                  </motion.h4>
                </div>
                {data[0].text.map((leftText, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="w-full flex items-center justify-between gap-[24px] mb-[16px] pb-[18px] border-b border-gray-200"
                  >
                    {/* слева */}
                    <motion.div variants={item} className="w-full">
                      <EcosystemItem rei={true} text={leftText} />
                    </motion.div>

                    {/* справа */}
                    <motion.div
                      variants={item}
                      className="w-full hidden md:block"
                    >
                      <EcosystemItem rei={false} text={data[1].text[i]} />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
    </section>
  );
}
