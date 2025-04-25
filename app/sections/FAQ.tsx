import GlowIcon from "@/components/GlowIcon";
import Question from "@/components/Question";

export default function FAQ() {
  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]">
      <div className="md:w-[66px]">
        <GlowIcon text="FAQ" img={false}/>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-[48px]">
        <h2 className="text-center md:text-left">
          Things People <br /> Usually Ask
        </h2>
        <div className="space-y-[20px]">
          <Question
            q="Do I need prior real estate experience?"
            a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
          />
          <Question
            q="Do I need prior real estate experience?"
            a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
          />
          <Question
            q="Do I need prior real estate experience?"
            a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
          />
          <Question
            q="Do I need prior real estate experience?"
            a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
          />
          <Question
            q="Do I need prior real estate experience?"
            a="No. The program is designed for both complete beginners and real estate agents. We guide you step by step through everything."
          />
        </div>
      </div>
    </section>
  );
}
