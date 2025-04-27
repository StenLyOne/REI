"use client";

import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    name: "David Gorski",
    job: "Co-Founder of REI Institute",
    img: "/img/man.jpg",
    description:
      "Lorem ipsum cursus egestas libero sed pulvinar purus nullam phasellus in a aliquet enim id odio ultrices viverra aliquam adipiscing velit justo aliquam vel non euismod pulvinar nisl neque sed et mi accumsan sodales ut ",
  },
  {
    name: "David Gorski",
    job: "Co-Founder of REI Institute",
    img: "/img/man.jpg",
    description:
      "Lorem ipsum cursus egestas libero sed pulvinar purus nullam phasellus in a aliquet enim id odio ultrices viverra aliquam adipiscing velit justo aliquam vel non euismod pulvinar nisl neque sed et mi accumsan sodales ut ",
  },
];

export default function Founders() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
          {data.map((item, i) => (
            <motion.div
              variants={itemVariants}
              key={i}
              className="space-y-[24px] bg-secondary w-full sm:max-w-[400] rounded-[20px] text-left border-1 border-border shadow-classic"
              style={{ background: "var(--secondary)" }}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={650}
                height={650}
                className="rounded-[20px] w-full"
              />
              <div className="space-y-[20px] pb-[36px] px-[20px] md:px-[24px]">
                <div className="space-y-[3px]">
                  <h4>{item.name}</h4>
                  <p>{item.job}</p>
                </div>
                <p>{item.description}</p>
              </div>
            </motion.div>
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
