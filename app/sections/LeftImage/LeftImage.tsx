import Image from "next/image";
import { motion } from "framer-motion";
import useIsLight from "@/hooks/useIsLight";
import Button from "@/components/ui/Button";
import { container, item, imgItem } from "@/lib/variantsAnimation";

export default function LeftImage() {
  const isLight = useIsLight();

  const bgGradient = isLight
    ? "linear-gradient(to right, #f6f6f6, transparent)"
    : "linear-gradient(to right, #0c0a20, rgba(12, 10, 32, 0.8), transparent)";

  return (
    <section
      id="StartHere"
      className="relative w-full my-[100px] md:my-[440px] "
    >
      {" "}
      <motion.div
        variants={container}
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
            <Image
              src="/img-optimized/section2.webp"
              alt="Real Estate Investment Certification Course"
              width={900}
              height={638}
              className="rounded-[20px] md:rounded-[20px] md:rounded-r-[20px] w-full h-[50vh] md:h-full object-cover"
              loading="lazy"
            />
            <div
              className="hidden md:block absolute top-0 left-0 h-full w-[30%] pointer-events-none z-10"
              style={{
                background: bgGradient,
              }}
            />
          </motion.div>
        </div>

        <div className="md:max-w-[530px]">
          <motion.h2 variants={item} className="h2-default">
            Find a <span className="gradient-text">REIS Certified Pro</span>{" "}
            Directory
          </motion.h2>
          <motion.p variants={item} className="p-default mt-5 md:mt-6 mb-5 md:mb-10">
            Tap into our{" "}
            <span className="gradient-text font-semibold">
              North American Referral Directory
            </span>{" "}
            of REIS™‑certified professionals. Refer clients across regions with
            confidence—or get inbound referrals because{" "}
            <span className="gradient-text font-semibold">
              you’re certified.
            </span>
          </motion.p>
          <motion.div
            variants={container}
            className="flex flex-col md:flex-row gap-4"
          >
            <motion.div variants={item}>
              <Button label="Search The Directory" />
            </motion.div>
            <motion.div variants={item} className="hidden md:block">
              <Button label="Apply to be listed" primary={false} />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
