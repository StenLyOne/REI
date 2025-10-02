import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "#Home" },
  { label: "Directory", href: "#Directory" },
  { label: "Serve", href: "#Serve" },
  { label: "Stats", href: "#Stats" },
  { label: "Certification", href: "#Certification" },
  { label: "Formula", href: "#Formula" },
  { label: "Founders", href: "#Founders" },
];

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12">
      <motion.div
        className="rounded-t-[20px] px-[20px] py-[48px] sm:p-[48px] text-left shadow-classic border border-border"
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
            <div className="flex gap-4 mt-[24px]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[48px] h-[48px] bg-primary rounded-full flex items-center justify-center"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 16.875H20.625L21.875 11.875H17.5V9.375C17.5 8.0875 17.5 6.875 20 6.875H21.875V2.675C21.4675 2.62125 19.9287 2.5 18.3037 2.5C14.91 2.5 12.5 4.57125 12.5 8.375V11.875H8.75V16.875H12.5V27.5H17.5V16.875Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[48px] h-[48px] bg-primary rounded-full flex items-center justify-center"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.67578 6.25125C8.67545 6.91429 8.41174 7.55004 7.94266 8.01865C7.47359 8.48726 6.83757 8.75033 6.17453 8.75C5.51149 8.74967 4.87574 8.48596 4.40713 8.01688C3.93852 7.54781 3.67545 6.91179 3.67578 6.24875C3.67611 5.58571 3.93982 4.94996 4.4089 4.48135C4.87797 4.01274 5.51399 3.74967 6.17703 3.75C6.84007 3.75033 7.47583 4.01404 7.94443 4.48312C8.41304 4.95219 8.67611 5.58821 8.67578 6.25125ZM8.75078 10.6012H3.75078V26.2512H8.75078V10.6012ZM16.6508 10.6012H11.6758V26.2512H16.6008V18.0388C16.6008 13.4638 22.5633 13.0388 22.5633 18.0388V26.2512H27.5008V16.3388C27.5008 8.62625 18.6758 8.91375 16.6008 12.7013L16.6508 10.6012Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Навигация */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-[24px]">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[16px] font-semibold hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <motion.div className="w-full h-[1px] bg-grey my-[30px]" />

        <div className="md:w-4/5 space-y-4 mb-6">
          <h5 className="font-semibold">Compliance Note</h5>
          <p>
            We train ethical best practices, disclosures, and consumer-first
            communication. REIS™ is a certification—not a license—and does not
            replace local laws, regulations, or brokerage supervision.
          </p>
          <p>
            “First-of-its-kind” claim based on our internal market scan of North
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
