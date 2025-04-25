import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";

export default function Benefits() {
  const data = [
    {
      gif: "/icons/profit.gif",
      title: "Investor Ecosystem",
      description:
        "Learn to build your own Investor EFFECT Ecosystem to become the go-to real estate investment specialist and 4X your business in 12 months.",
    },
    {
      gif: "/icons/handshake.gif",
      title: "Fast Closures",
      description:
        "Secure two investment properties under contract within 30 days of completing the REIS Certification.",
    },
    {
      gif: "/icons/Database.gif",
      title: "Database Growth",
      description:
        "Increase your qualified investor database by 10%-20% within 30 days of completing your REIS Certification.",
    },
    {
      gif: "/icons/engagement.gif",
      title: "Client Acquisition",
      description:
        "Quickly find clients in a saturated market with proven strategies.",
    },
    {
      gif: "/icons/choosing-customer.gif",
      title: "Lead by Example",
      description:
        "Invest in real estate yourself and become a role model for clients, family, and colleagues.",
    },
    {
      gif: "/icons/growth.gif",
      title: "Wealth Building",
      description:
        "Build wealth passively while reducing the stress of chasing new clients.",
    },
  ];

  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]">
      <div className="flex flex-col items-center text-center space-y-[48px]">
        <div>
          <GlowIcon text="Benefits" img={false} />
          <div className="max-w-[780px] text-center space-y-[24px]">
            <h2>
              Transform <span className="gradient-text"> Your Real Estate Career </span> with the REI Specialist
              Certification
            </h2>
            <p className="max-w-[500px] mx-auto text-center">
              Gain the skills, systems, and confidence to grow your real estate
              business, secure investor deals, and build long-term income.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {data.map((item, i) => (
            <div
              key={i}
              className="p-[20px] space-y-[24px] rounded-[20px] text-left border-1 border-border"
              style={{ background: "var(--secondary)" }}
              
            >
              <div className="w-[78px] h-[78px]">
                <GlowIcon text={item.gif} img={true} />
              </div>
              <div className="space-y-[12px]">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
