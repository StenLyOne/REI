import { motion } from "framer-motion";
import GlowIcon from "@/components/ui/GlowIcon";
import { container, item } from "@/lib/variantsAnimation";

export default function Serve() {
  const data = [
    {
      gif: "/icons/profit.mp4",
      title: "REALTORS®",
      color: "text-soft-violet",
      // url: "/realtors",
      description:
        "Help everyday clients become multi-deal investors, build your own portfolio, and create a repeatable business (and a real retirement plan).",
    },
    {
      gif: "/icons/handshake.mp4",
      title: "Brokerages",
      color: "text-soft-blue",
      url: "/brokers",
      description:
        "Increase GCI through smarter, repeatable investor transactions. Equip agents with prospecting tools that attract loyal, empowered clients. Use REIS™ for recruiting, retention, and brand lift.",
    },
    {
      gif: "/icons/database.mp4",
      title: "Boards & Associations",
      color: "text-soft-indigo",
      url: "/boards",
      description:
        "Raise competency with investment literacy that strengthens member value and consumer outcomes.",
    },
    {
      gif: "/icons/allocation.mp4",
      title: "Affiliates & Partners",
      color: "text-soft-teal",
      url: "/affiliates",
      description:
        "Add value to your network with trusted training and a marketing-ready partnership model.",
    },
    {
      gif: "/icons/choosing-custome.mp4",
      title: "Investors",
      color: "text-soft-fuchsia",
      url: "/investors",
      description:
        "Connect with certified REALTORS® who speak your language, reduce risk, and help you scale.",
    },
    {
      gif: "/icons/choosing-custome.mp4",
      title: "Home Owners",
      color: "text-primary",
      // url: "/home-owners",
      description:
        "Learn the language of real estate investing and create your own retirement plan.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <motion.div
        id="Serve"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default  "
      >
        <div className="flex flex-col items-center text-center space-y-[48px]">
          <div>
            <div className=" text-center space-y-[24px]">
              <motion.h2 variants={item} className="h2-large">
                Who We Serve And How Each Group Wins
              </motion.h2>

              <motion.h4
                variants={item}
                className="max-w-[900px] mx-auto text-center "
              >
                Gain the{" "}
                <span className="gradient-text font-bold"> skills</span>,
                <span className="gradient-text font-bold"> systems</span> , and
                <span className="gradient-text font-bold"> confidence</span> to
                grow your real estate business, secure investor deals, and build
                long-term income.
              </motion.h4>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map((benefit, i) => (
              <motion.article
                key={i}
                variants={item}
                className="p-4 space-y-3 rounded-[20px] text-left border-1 border-border shadow-classic"
                style={{ background: "var(--secondary)" }}
              >
                <div className="w-[50px] h-[50px] ml-2 mt-2">
                  <GlowIcon text={benefit.gif} video={true} />
                </div>
                <div className="space-y-[12px]">
                  <a href={benefit.url}>
                    <h5 className={`${benefit.color} font-bold`}>
                      {benefit.title}
                    </h5>
                  </a>
                  <p>{benefit.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
