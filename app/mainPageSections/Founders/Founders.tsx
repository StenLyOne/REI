import Image from "next/image";
import { motion } from "framer-motion";
import { container, item } from "@/lib/variantsAnimation";

const data = [
  {
    name: "David Gorski",
    job: "Co‑Founder, REI Institute; Broker/Owner, Sutton Group – Summit Realty",
    img: "/img-optimized/man.webp",
  },
  {
    name: "Gord Lemon",
    job: "Co‑Founder, REI Institute; Head of Education & Program Delivery",
    img: "/img-optimized/man.webp",
  },
];

export default function Founders() {
  return (
    <section>
      <motion.div
        id="Founders"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative section-default mb-20"
      >
        <div className="space-y-[48px]">
          <div className="text-center space-y-6">
            <motion.h2 variants={item} className="h2-large">
              Meet the Founders
            </motion.h2>
            <motion.h4 variants={item} className=" max-w-[808px] mx-auto">
              <span className="gradient-text font-bold">
                {" "}
                50+ years combined
              </span>{" "}
              in investing, brokerage leadership, training, and{" "}
              <span className="gradient-text font-bold">
                {" "}
                thousands of agents served{" "}
              </span>{" "}
              across North America.
            </motion.h4>
          </div>
          <div className="flex gap-[24px] flex-col sm:flex-row items-center justify-center">
            {data.map((founder, i) => (
              <motion.article
                key={i}
                variants={item}
                className="space-y-[24px] bg-secondary w-full sm:max-w-[400] rounded-[20px] text-left border-1 border-border shadow-classic"
                style={{ background: "var(--secondary)" }}
              >
                <Image
                  src={founder.img}
                  alt={`${founder.name} - ${founder.job}`}
                  width={400}
                  height={400}
                  className="rounded-[20px] w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="space-y-[20px] pb-[36px] px-[20px] md:px-[24px]">
                  <div className="space-y-[3px]">
                    <h4>{founder.name}</h4>
                    <p>{founder.job}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <p className="sr-only">
          Meet the founders of REI Institute, experienced real estate investors
          and educators committed to empowering the next generation of real
          estate professionals.
        </p>
      </motion.div>
    </section>
  );
}
