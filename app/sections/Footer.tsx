import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-12">
      <div className="rounded-t-[20px] px-[20px] py-[48px] sm:p-[48px] text-left border-1 border-border"
              style={{ background: "var(--secondary)" }}>
        <div className="w-full flex justify-between min-[800px]:flex-row flex-col gap-[48px]">
          <div className="space-y-[24px]">
            <Image src="/logo.png" alt="logo" width={214} height={23} />
            <div className="flex gap-[24px]">
              <span className="w-[48px] h-[48px] bg-primary rounded-full"></span>
              <span className="w-[48px] h-[48px] bg-primary rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-col space-y-[12px] text-[16px] font-semibold">
            <a href="">Home</a>
            <a href="">How REI Works</a>
            <a href="">Benefits</a>
          </div>
          <div className="flex flex-col space-y-[12px] text-[16px] font-semibold">
            <a href="">Success Stories</a>
            <a href="">Testimonials</a>
            <a href="">Who’s it for</a>
          </div>
          <div className="flex flex-col space-y-[12px] text-[16px] font-semibold">
            <a href="">Ecosystem</a>
            <a href="">Founders</a>
            <a href="">FAQ</a>
          </div>
        </div>
        <div className="w-full h-[1px] bg-grey my-[30px]" />
        <div className="sm:flex justify-between space-y-[24px] sm:space-y-[0px]">
          <p>Copyright © 2025 by Real Estate Investment Institute</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
