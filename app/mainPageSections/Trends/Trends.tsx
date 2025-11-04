import { motion } from "framer-motion";
import CardHorizontal from "./CardHorizontal";
import { container, item } from "@/lib/variantsAnimation";

const data = [
  {
    stat: "20.1%",
    text: "Of all MLS transactions are investor driven",
    color: "bg-[#F7F7F9]",
    imageUrl: "/img/trend.20.png",
  },
  {
    stat: "1 in 4",
    text: "People plan to buy an investment property in the next 5 years",
    color: "bg-[#F6F6FA]",
    imageUrl: "/img/trend.canadian.png",
  },
  {
    stat: "87%",
    text: "Of north americans prefer real estate over stock investing",
    color: "bg-[#F5F4FC]",
    imageUrl: "/img/trend.87.png",
  },
];

export default function Trends() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="section-default "
    >
      <motion.h2 variants={item} className="h2-default mb-16 text-center">
        These trends mean{" "}
        <span className="gradient-text font-bold">prospecting smarter—not</span>{" "}
        harder—wins. The agents who can{" "}
        <span className="gradient-text font-bold">explain numbers</span>,{" "}
        <span className="gradient-text font-bold">manage risk</span>, and map a
        <span className="gradient-text font-bold"> path to wealth</span> will
        own the next decade.
      </motion.h2>

      {/* ОБЩИЙ контейнер для всех карточек */}
      <motion.div variants={item} className="relative h-[300vh]">
        {data.map((item, i) => (
          <div
            key={i}
            className="sticky top-0 md:top-[15vh]"
            style={{ zIndex: i + 1 }}
          >
            <CardHorizontal {...item} />
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
