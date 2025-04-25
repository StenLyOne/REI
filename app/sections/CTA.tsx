import Button from "@/components/Button";
import GlowIcon from "@/components/GlowIcon";

export default function () {
  return (
    <section className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12 mb-[100px] sm:mb-[200px]">
      <div className="px-[20px] py-[48px] sm:p-[48px] bg-[url('/img/ctaBg.jpg')] bg-cover bg-center rounded-[20px] ">
        <div className="max-w-[680px]">
          <div className="w-[191px]">
            <GlowIcon text="Ready to get started?" img={false} />
          </div>
          <h2 className="text-white">
            Take the First Step Toward Becoming a
            <span className="gradient-text"> Real Estate Investor </span>
          </h2>
          <p className="pb-[36px] pt-[24px] text-white">
            Join the REI Institute and start building real results in just 90
            days — no experience required.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
}
