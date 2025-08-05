import Image from "next/image";
import * as m from "motion/react-m";
import { LazyMotion, domAnimation } from "motion/react";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12">
      {" "}
      <LazyMotion features={domAnimation} strict>
        <m.div
          className="rounded-t-[20px] px-[20px] py-[48px] sm:p-[48px] text-left shadow-classic border-1 border-border"
          style={{ background: "var(--secondary)" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex flex-col min-[800px]:flex-row justify-between gap-[48px]">
            {/* Logo + Social */}
            <m.div variants={itemVariants}>
              <Link href="/" aria-label="Home">
                <Image
                  src="/logo.png"
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
            </m.div>

            {/* Navigation Columns */}
            <nav className="flex gap-[48px] flex-col md:flex-row">
              <m.ul
                className="flex flex-col space-y-[12px] text-[16px] font-semibold"
                variants={itemVariants}
              >
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#HowReiWorks">How REI Works</a>
                </li>
                <li>
                  <a href="#Benefits">Benefits</a>
                </li>
              </m.ul>

              <m.ul
                className="flex flex-col space-y-[12px] text-[16px] font-semibold"
                variants={itemVariants}
              >
                <li>
                  <a href="#SuccessStories">Success Stories</a>
                </li>
                <li>
                  <a href="#Testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#WhoSItFor">Who’s it for</a>
                </li>
              </m.ul>

              <m.ul
                className="flex flex-col space-y-[12px] text-[16px] font-semibold"
                variants={itemVariants}
              >
                <li>
                  <a href="#Ecosystem">Ecosystem</a>
                </li>
                <li>
                  <a href="#Founders">Founders</a>
                </li>
                <li>
                  <a href="#FAQ">FAQ</a>
                </li>
              </m.ul>
            </nav>
          </div>

          {/* Divider */}
          <m.div
            className="w-full h-[1px] bg-grey my-[30px]"
            variants={itemVariants}
          />

          {/* Bottom text */}
          <m.div
            className="flex flex-col sm:flex-row justify-between text-sm space-y-[24px] sm:space-y-0 text-muted-foreground"
            variants={itemVariants}
          >
            <p>© 2025 Real Estate Investment Institute. All rights reserved.</p>
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </m.div>
        </m.div>
      </LazyMotion>
    </footer>
  );
}
