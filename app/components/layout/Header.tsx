import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const navigation = [
    { label: "Home", href: "#Home" },
    { label: "Directory", href: "#Directory" },
    { label: "Serve", href: "#Serve" },
    { label: "Stats", href: "#Stats" },
    { label: "Certification", href: "#Certification" },
    { label: "Formula", href: "#Formula" },
    { label: "Founders", href: "#Founders" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="fixed top-0 left-0 w-full z-50 
           bg-white/10 backdrop-blur-md border-b border-white/20 
           shadow-[0_0px_ 0px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-[1380px] w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-5">
          {/* Логотип */}
          <motion.a
            href="#Home"
            className="text-2xl font-bold text-primary z-[100]"
          >
            REI INSTITUTE
          </motion.a>

          {/* Навигация на десктопе */}
          <nav className="hidden min-[1000px]:flex items-center gap-8">
            {navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[16px] font-semibold transition-colors ${
                  isTop
                    ? "text-white hover:text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Кнопка (только на >=1000px) */}
          <a
            href="https://calendar.rei.institute/#/discoverycall"
            className="hidden min-[1000px]:flex bg-primary py-2 px-6 text-white rounded-full font-bold 
            transition-colors duration-300 hover:bg-primary/70 "
          >
            Get Certified
          </a>

          {/* Иконки справа (бургер только <1000px) */}
          <div className="flex max-[1000px]:flex min-[1000px]:hidden items-center gap-6">
            {/* ThemeToggle можно вернуть сюда */}
            <motion.div className="z-[100] flex justify-center items-center cursor-pointer"></motion.div>

            {/* Бургер */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="w-8 h-8 items-center justify-center p-1 z-[100] cursor-pointer"
            >
              {isOpen ? (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col gap-[12px] text-2xl text-foreground text-center">
            {navigation.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transform transition-all duration-300 text-[24px] font-semibold hover:text-primary ${
                  isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6">
              <Button label="Get Certified" link="#Certification" primary />
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
}
