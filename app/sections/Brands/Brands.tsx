import { container, item, imgItem } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";

const data = [
  "/img/sutton.png",
  "/img/toronto.png",
  "/img/remax.png",
  "/img/orea.png",
  "/img/exp.png",
  "/img/royal.png",
];

export default function Brands() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="section-default space-y-10"
    >
      <div className="space-y-3">
        <motion.h2 variants={item} className="h2-default font-semibold">
          Trusted by the <span className="gradient-text">biggest brands</span>{" "}
          in real estate
        </motion.h2>
        <motion.p
          variants={item}
          className="text-gray-400 text-[16px] leading-6"
        >
          “Know your profession. Speak the language of investing. Lead the
          conversation.”
        </motion.p>
      </div>
      <div
        className="
    w-full
    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10
    lg:flex lg:flex-nowrap lg:items-center lg:justify-between lg:gap-0
  "
      >
        {data.map((src, i) => (
          <motion.img
            variants={imgItem}
            key={i}
            src={src}
            alt="logo"
            className="h-10 w-auto shrink-0 mx-auto lg:mx-0"
            height={40}
          />
        ))}
      </div>
    </motion.section>
  );
}
