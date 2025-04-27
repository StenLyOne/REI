"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import {
  containerVariants,
  itemVariants,
} from "@/components/variantsAnimation";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { label: "Home", href: "#Home" },
    { label: "How REI Works", href: "#HowReiWorks" },
    { label: "Benefits", href: "#Benefits" },
    { label: "Success Stories", href: "#SuccessStories" },
    { label: "Who’s it for", href: "#WhoSItFor" },
    { label: "Testimonials", href: "#Testimonials" },
    { label: "Ecosystem", href: "#Ecosystem" },
    { label: "Founders", href: "#Founders" },
    { label: "What You Learn", href: "#WhatYouLearn" },
    { label: "Start Here", href: "#StartHere" },
    { label: "FAQ", href: "#FAQ" },
  ];

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="fixed top-0 left-0 w-full z-50 bg-background border-b-1 border-gray-400"
    >
      <div className="max-w-[1380px] w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-12 py-5">
        <motion.a
          href="#Home"
          className="text-2xl font-bold text-primary z-[100]"
          variants={itemVariants}
        >
          REI INSTITUTE
        </motion.a>

        <div className="flex items-center gap-6">
          <motion.div
            className="z-[100] flex justify-center items-center cursor-pointer"
            variants={itemVariants}
          >
            <ThemeToggle />
          </motion.div>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            variants={itemVariants}
            aria-label="Toggle menu"
            className="w-8 h-8 flex items-center justify-center p-1 z-[100] cursor-pointer"
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
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
