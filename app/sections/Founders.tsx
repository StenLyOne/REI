"use client";

import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

const data = [
  {
    name: "David Gorski",
    job: "Co-Founder of REI Institute",
    img: "/img/man.jpg",
    description:
      "David Gorski is a seasoned real estate investor with decades of experience in building successful portfolios and mentoring future leaders in the industry.",
  },
  {
    name: "Sarah Johnson",
    job: "Co-Founder of REI Institute",
    img: "/img/woman.jpg",
    description:
      "Sarah Johnson specializes in real estate finance and education, helping aspiring investors turn knowledge into tangible wealth.",
  },
];

export default function Founders() {
  return (
    <motion.section
      id="Founders"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]"
    >
      <GlowIcon text="Founders" img={false} />
      <div className="space-y-[48px]">
        <div className="text-center">
          <motion.h2 variants={itemVariants}>
            Meet The<span className="gradient-text"> Founders of REI</span>{" "}
            Institute
          </motion.h2>
          <motion.p
            className="pt-[24px] max-w-[600px] mx-auto"
            variants={itemVariants}
          >
            Our founders, seasoned real estate investors and educators, built
            the REI Institute to empower the next generation of certified real
            estate professionals. With decades of combined experience, they are
            dedicated to your success.
          </motion.p>
        </div>
        <div className="flex gap-[24px] flex-col sm:flex-row">
          {data.map((founder, i) => (
            <motion.article
              variants={itemVariants}
              key={i}
              className="space-y-[24px] bg-secondary w-full sm:max-w-[400] rounded-[20px] text-left border-1 border-border shadow-classic"
              style={{ background: "var(--secondary)" }}
            >
              <Image
                src={founder.img}
                alt={`${founder.name} - ${founder.job}`}
                width={400}
                height={400}
                className="rounded-[20px] w-full h-auto object-cover"
              />
              <div className="space-y-[20px] pb-[36px] px-[20px] md:px-[24px]">
                <div className="space-y-[3px]">
                  <h4>{founder.name}</h4>
                  <p>{founder.job}</p>
                </div>
                <p>{founder.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <motion.div
        className="absolute top-[0px] right-[-50%] z-[-1] hidden sm:block"
        variants={itemVariants}
      >
        <Image
          className="w-[1004px] h-[1004px] spin-slow"
          src="/icons/Ellipse 1.svg"
          alt="elipse"
          width={1004}
          height={1004}
        />
        <Image
          className="w-[744px] h-[744px] absolute top-[13%] right-[12%] spin-reverse-slow"
          src="/icons/Ellipse 2.svg"
          alt="elipse"
          width={744}
          height={744}
        />
        <Image
          className="w-[500px] h-[500px] absolute top-[25%] right-[22%] spin-slow"
          src="/icons/Ellipse 3.svg"
          alt="elipse"
          width={500}
          height={500}
        />
      </motion.div>
    </motion.section>
  );
}
