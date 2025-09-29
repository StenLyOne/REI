import { useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { container, item } from "@/lib/variantsAnimation";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marilyn S",
    role: "REIS Graduate (Royal LePage)",
    text: "“Before REIS, I was working twice as hard for half the return. Now I attract clients who buy 3–4 homes a year. GCI up 27% and I’m finally building something that lasts.”",
    avatar: "/icons/realtors.png",
  },
  {
    name: "GTA Agent",
    role: "REIS Graduate",
    text: "“First Investor Night with your kit: 38 attendees → 11 consults → 3 offers in 14 days.”",
    avatar: "/icons/realtors1.png",
  },
  {
    name: "Calgary Agent",
    role: "Team Lead",
    text: "“Re‑engaged 7 past buyers with an investor review. 5 transactions in 90 days.”",
    avatar: "/icons/realtors2.png",
  },
  {
    name: "Vancouver Island Agent",
    text: "“Added 18% qualified investors to my database in 60 days. Calls feel like strategy, not sales.”",
    avatar: "/icons/realtors3.png",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth * 1; // Scroll by 80% of container width
    if (dir === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="section-default "
    >
      <div className=" text-center space-y-6">
        <motion.h2
          variants={item}
          className="text-left w-full text-[24px] leading-[36px] md:text-[32px] md:leading-[44px] font-semibold"
        >
          <span className="gradient-text font-bold">
            Realtors are not the enemy
          </span>
          they are simply not trained to have{" "}
          <span className="gradient-text font-bold">
            {" "}
            wealth building conversations.{" "}
          </span>
          Once agents lead with{" "}
          <span className="gradient-text font-bold"> numbers </span> and a{" "}
          <span className="gradient-text font-bold"> plan, </span> clients get{" "}
          <span className="gradient-text font-bold">
            {" "}
            excited about investing{" "}
          </span>{" "}
          and turn into your most{" "}
          <span className="gradient-text font-bold">
            {" "}
            loyal & repeat buyers.{" "}
          </span>
        </motion.h2>
        <div className="w-full flex justify-between">
          <motion.div variants={item}>
            <Button label="Book Your Prospect‑Smarter Call"></Button>
          </motion.div>

          {/* стрелки */}
          <div className="hidden md:flex w-max h-max  p-1 gap-1 bg-[#F0F0F0] rounded-full">
            <motion.button
              variants={item}
              onClick={() => handleScroll("left")}
              className="w-10 h-10 flex items-center justify-center  bg-white shadow rounded-full p-2 cursor-pointer"
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.397603 8.00016L8.07979 0L10 1.99969L3.27791 9L10 16.0003L8.07979 18L0.397603 9.99984C0.143018 9.73464 0 9.375 0 9C0 8.625 0.143018 8.26536 0.397603 8.00016Z"
                  fill="#333333"
                />
              </svg>
            </motion.button>
            <motion.button
              variants={item}
              onClick={() => handleScroll("right")}
              className="w-10 h-10 flex items-center justify-center  bg-white shadow rounded-full p-2 rotate-180 cursor-pointer"
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.397603 8.00016L8.07979 0L10 1.99969L3.27791 9L10 16.0003L8.07979 18L0.397603 9.99984C0.143018 9.73464 0 9.375 0 9C0 8.625 0.143018 8.26536 0.397603 8.00016Z"
                  fill="#333333"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* {CARD} */}
      <div className="relative -mx-5">
        <div
          ref={scrollRef}
          className="flex  justify-start overflow-x-auto no-scrollbar scroll-smooth py-10 px-2"
        >
          {testimonials.map((t, i) => (
            <motion.div
              variants={item}
              key={i}
              className="bg-white rounded-xl shadow-classic p-6 text-left flex flex-col justify-between gap-6 flex-shrink-0 basis-3/3 max-w-[70%] md:basis-2/3 md:max-w-[48%] lg:basis-1/3 lg:max-w-[32%] mx-3"
            >
              <div className="space-y-5">
                <div className="flex  text-yellow-400">★ ★ ★ ★ ★</div>
                <p className="text-gray-700 ">{t.text}</p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full w-full h-full max-w-[50px] max-h-[50px]"
                />
                <div>
                  <h5 className="font-semibold">{t.name}</h5>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.p variants={item}>
        Outcomes are graduate‑reported and vary by market and effort.
      </motion.p>
    </motion.section>
  );
}
