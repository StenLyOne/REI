import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
    
        aria-label="Call to Action Section"
        className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12 mb-[100px] sm:mb-[200px] "
      >
        <motion.div className="px-[20px] py-[48px] sm:p-[48px] bg-[url('/img-optimized/ctaBg.webp')] bg-cover bg-center rounded-[20px] shadow-classic">
          <div className="max-w-[680px]">
            <motion.h2 className="text-white">
              Take the First Step Toward Becoming a
              <span className="gradient-text"> Real Estate Investor </span>
            </motion.h2>
            <motion.p className="pb-[36px] pt-[24px] text-white">
              Join the REI Institute and start building real results in just 90
              days — no experience required.
            </motion.p>
            <motion.div>
              <Button />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
