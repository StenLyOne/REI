import Button from "@/components/Button";
import GlowIcon from "@/components/GlowIcon";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";

export default function CTA() {
  return (
    <section>
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          aria-label="Call to Action Section"
          className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12 mb-[100px] sm:mb-[200px] "
        >
          <m.div className="px-[20px] py-[48px] sm:p-[48px] bg-[url('/img/ctaBg.jpg')] bg-cover bg-center rounded-[20px] shadow-classic">
            <div className="max-w-[680px]">
              <m.div className="w-[191px]" variants={itemVariants}>
                <GlowIcon text="Ready to get started?" img={false} />
              </m.div>
              <m.h2 className="text-white" variants={itemVariants}>
                Take the First Step Toward Becoming a
                <span className="gradient-text"> Real Estate Investor </span>
              </m.h2>
              <m.p
                className="pb-[36px] pt-[24px] text-white"
                variants={itemVariants}
              >
                Join the REI Institute and start building real results in just
                90 days — no experience required.
              </m.p>
              <m.div variants={itemVariants}>
                <Button />
              </m.div>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  );
}
