import Button from "@/components/ui/Button";
import CardSimple from "@/components/ui/CardSimple";

const data = [
  {
    title: "Attract",
    text: "Blue‑Ocean outreach, Investor Nights, and numbers‑first content that filters for serious clients.",
    imageUrl: "/img/attract.png",
  },
  {
    title: "Diagnose",
    text: "Wealth Review → Deal Criteria → Financing Path in one tight consult.",
    imageUrl: "/img/diagnose.png",
  },
  {
    title: "Prescribe",
    text: "Strategy‑matched Property Packs within 48 hours (Deal Analyzer snapshot + risk notes).",
    imageUrl: "/img/prescribe.png",
  },
  {
    title: "Execute",
    text: "Power Team aliances (mortgage, legal, PM, construction, lenders) to move quickly and cleanly.",
    imageUrl: "/img/execute.png",
  },
  {
    title: "Compound",
    text: "Post‑close cadence: review, refi, redeploy → multi‑deal clients.",
    imageUrl: "/img/compound.png",
  },
];

export function Formula() {
  return (
    <section className="section-default flex flex-col md:flex-row justify-between gap-20 md:gap-8">
      <div className="relative w-full md:w-1/2">
        <div className="sticky top-[30vh] space-y-10">
          <div className="space-y-6">
            <h2 className="h2-default">
              The{" "}
              <span className="gradient-text"> Agent Freedom Formula™ </span>{" "}
              Your Prospecting System
            </h2>
            <p className="p-default">
              Stop competing in the same crowded silo. The Agent Freedom Formula
              turns education into a repeatable deal machine:
            </p>
          </div>
          <Button label="Get The Agent Freedom Formula Launch Kit" />
        </div>
      </div>
      <div className="space-y-15">
        {data.map((item, index) => (
          <CardSimple key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
