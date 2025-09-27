import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12">
      <motion.div
        className="rounded-t-[20px] px-[20px] py-[48px] sm:p-[48px] text-left shadow-classic border-1 border-border"
        style={{ background: "var(--secondary)" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="flex flex-col min-[800px]:flex-row justify-between gap-[48px]">
          {/* Logo + Social */}
          <motion.div>
            <Link href="/" aria-label="Home">
              <Image
                src="/Logo.png"
                alt="REI Institute Logo"
                width={214}
                height={23}
              />
            </Link>
            <div className="flex gap-[24px] mt-[24px]">
              {/* Здесь лучше поставить реальные ссылки на соцсети */}
              <a
                href="#"
                aria-label="Social Link 1"
                className="w-[48px] h-[48px] bg-primary rounded-full"
              />
              <a
                href="#"
                aria-label="Social Link 2"
                className="w-[48px] h-[48px] bg-primary rounded-full"
              />
            </div>
          </motion.div>

          {/* Navigation Columns */}
          <nav className="flex gap-[48px] flex-col md:flex-row">
            <motion.ul className="flex flex-col space-y-[12px] text-[16px] font-semibold">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#HowReiWorks">How REI Works</a>
              </li>
              <li>
                <a href="#Benefits">Benefits</a>
              </li>
            </motion.ul>

            <motion.ul className="flex flex-col space-y-[12px] text-[16px] font-semibold">
              <li>
                <a href="#SuccessStories">Success Stories</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#WhoSItFor">Who’s it for</a>
              </li>
            </motion.ul>

            <motion.ul className="flex flex-col space-y-[12px] text-[16px] font-semibold">
              <li>
                <a href="#Ecosystem">Ecosystem</a>
              </li>
              <li>
                <a href="#Founders">Founders</a>
              </li>
              <li>
                <a href="#FAQ">FAQ</a>
              </li>
            </motion.ul>
          </nav>
        </div>

        {/* Divider */}
        <motion.div className="w-full h-[1px] bg-grey my-[30px]" />

        <div className="md:w-4/5 space-y-4 mb-6">
          <h5 className="font-semibold">Compliance Note</h5>
          <p>
            We train ethical best practices, disclosures, and consumer‑first
            communication. REIS™ is a certification—not a license—and does not
            replace local laws, regulations, or brokerage supervision.
          </p>
          <p>
            First‑of‑its‑kind” claim based on our internal market scan of North
            American real estate education providers (Q1–Q3 2025). If you know
            of a comparable certification launched earlier, tell us—we’ll review
            and update.
          </p>
        </div>
        {/* Bottom text */}
        <motion.div className="flex flex-col sm:flex-row justify-between text-sm space-y-[24px] sm:space-y-0 text-muted-foreground">
          <p className="font-semibold">
            © 2025 Real Estate Investment Institute. All rights reserved.
          </p>
          <a href="/privacy-policy" className="hover:underline font-semibold">
            Privacy Policy
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}
