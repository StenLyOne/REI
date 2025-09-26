import Card from "./Card";

const data = [
  {
    title: "Your 90‑day on‑ramp:",
    cards: [
      {
        title: "Define your Buy Box",
        text: "Price, cash-flow target, risk guardrails, financing path",
      },
      {
        title: "Run the Numbers",
        text: "Deal Analyzer + Wealth Map to shortlist real options fast",
      },
      {
        title: "Execute with Accountability",
        text: "Сoaching, pro-team intros, and weekly cadence until you’re under contract",
      },
    ],
  },
  {
    title: "Outcomes we coach to:",
    cards: [
      {
        title: "First contract in 90 days",
        text: "Put your first/next door under contract",
      },
      {
        title: "Monthly passive income",
        text: "Add income + clear path to scale",
      },
      {
        title: "Personal playbook client magnet",
        text: "Turn your own portfolio into a client attraction tool",
      },
    ],
  },
];

export default function Retirement() {
  return (
    <section className="section-default space-y-15 md:space-y-25">
      <div className="space-y-6 text-center max-w-[720px] mx-auto">
        <h2 className="h2-large">
          Your <span className="gradient-text"> Retirement Starts Now</span>:
          Get In the Game
        </h2>
        <h4>
          <span className="gradient-text"> REALTORS® don’t get pensions. </span>{" "}
          Commission cheques aren’t a retirement plan.{" "}
          <span className="gradient-text"> The Agent Freedom Formula™ </span>{" "}
          helps you build your own portfolio—so you can{" "}
          <span className="gradient-text"> lead clients by example</span>
        </h4>
      </div>
      {data.map((ele, index) => (
        <div key={index} className="space-y-10">
          <h2 className="h2-default text-center" >{ele.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ele.cards.map((ele, i) => (
              <Card key={i} index={i} title={ele.title} text={ele.text}></Card>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
