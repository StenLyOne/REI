import Button from "@/components/Button";
import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";

export default function WhoSItFor() {
  return (
    <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 mb-[100px] lg:mb-[200px]">
      <GlowIcon text="Who’s it for" img={false} />

      <div className="space-y-[48px]">
        <div className="text-center max-w-[810px] mx-auto">
          <h2>
            This Program Fits If{" "}
            <span className="gradient-text"> You’re Ready to Grow</span>
          </h2>
          <p className="pb-[36px] pt-[24px]">
            If you want to earn through real estate but don’t know where to
            start or how to scale, this program gives you a clear system and
            full support. It’s designed for both beginners and working
            professionals.
          </p>
          <div className="w-max mx-auto">
            <Button />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-[24px]">
          {/* Card 1 */}
          <div
            className="rounded-[20px] px-[24px] py-[36px] space-y-[24px] shadow-classic text-left border-1 border-border"
            style={{ background: "var(--secondary)" }}
          >
            <div className="relative">
              <div className="w-full h-[313px] flex ">
                <div className="absolute insert-0 w-full h-full">
                  <span></span>
                </div>
                <div className="w-full h-full border-l-1 border-r-1 border-gray-200 ">
                  <div className="w-full h-full overflow-hidden ">
                    <span className="w-[120%] h-[1px] bg-primary block rotate-[-30deg] translate-y-[195px] translate-x-[-10px]"></span>
                  </div>
                  <span
                    className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full translate-x-[-7px] translate-y-[-90px]"
                    style={{ boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                  </span>
                  <span
                    className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[-7px] translate-y-[-200px] shadow-classic"
                    style={{ background: "var(--secondary)" }}
                  >
                    Step 1
                  </span>
                </div>
                <div className="w-full h-full">
                  <div className="w-full h-full overflow-hidden ">
                    <span className="w-[120%] h-[1px] bg-primary block rotate-[8deg] translate-y-[170px] translate-x-[-10px]"></span>
                  </div>
                  <span
                    className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full translate-x-[-7px] translate-y-[-157px]"
                    style={{ boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                  </span>
                  <span
                    className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[-32px] translate-y-[-250px] shadow-classic"
                    style={{ background: "var(--secondary)" }}
                  >
                    Step 2
                  </span>
                </div>
                <div className="w-full h-full border-l-1 border-r-1 border-gray-200">
                  <div className="w-full h-full overflow-hidden ">
                    <span className="w-[120%] h-[1px] bg-primary block rotate-[-25deg] translate-y-[149px] translate-x-[-10px]"></span>
                  </div>
                  <span
                    className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full translate-x-[-7px] translate-y-[-143px]"
                    style={{ boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                  </span>
                  <span
                    className="w-[15px] h-[15px] bg-white flex justify-center items-center rounded-full ml-auto translate-x-[7px] translate-y-[-212px]"
                    style={{ boxShadow: "0px 2px 21px 0px rgba(0, 0, 0, 0.3)" }}
                  >
                    <span className="w-[7px] h-[7px] bg-primary rounded-full"></span>
                  </span>
                  <span
                    className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[-32px] translate-y-[-250px] shadow-classic"
                    style={{ background: "var(--secondary)" }}
                  >
                    Step 3
                  </span>
                  <span
                    className="absolute px-[12px] py-[6px] border-1 border-border rounded-[20px] translate-x-[60px] translate-y-[-310px] shadow-classic"
                    style={{ background: "var(--secondary)" }}
                  >
                    Step 4
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-[12px]">
              <h4 className="font-semibold">Agents and Realtors</h4>
              <p className="">
                Already in real estate? Learn to work with investor clients and
                earn more from every connection.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-[20px] px-[24px] py-[36px] space-y-[24px] shadow-classic text-left border-1 border-border"
            style={{ background: "var(--secondary)" }}
          >
            <div className=" rounded-[20px] h-[313px] flex flex-col justify-between">
              <div
                className="w-full flex flex-col items-center p-[12px] rounded-[20px] space-y-[6px] shadow-classic border-1 border-border-two"
                style={{ background: "var(--secondary)" }}
              >
                <span className="text-[20px] font-bold flex gap-[10px]">
                  <Image
                    src="/icons/arrowGrow.svg"
                    alt="arrowGrow"
                    width={24}
                    height={24}
                  />
                  +121%
                </span>
                <p className="text-grey">Investor Deal</p>
              </div>
              <div
                className="w-full flex flex-col items-center p-[12px] rounded-[20px] space-y-[6px] bg-secondary shadow-classic border-1 border-border-two"
                style={{ background: "var(--secondary)" }}
              >
                <span className="text-[20px] font-bold flex gap-[10px]">
                  <Image
                    src="/icons/arrowGrow.svg"
                    alt="arrowGrow"
                    width={24}
                    height={24}
                  />
                  +89%
                </span>
                <p className="text-grey">Investor Deal</p>
              </div>
              <div
                className="w-full flex justify-center gap-[12px] rounded-[20px] bg-secondary shadow-classic py-[22px] border-1 border-border-two"
                style={{ background: "var(--secondary)" }}
              >
                <span className="text-[14px] text-primary font-bold border-1 border-primary py-[8px] px-[24px] rounded-[20px]">
                  Analize
                </span>
                <span className="text-[14px] text-white font-bold bg-primary py-[8px] px-[24px] rounded-[20px]">
                  Start
                </span>
              </div>
            </div>
            <div className="space-y-[12px]">
              <h4 className="font-semibold">Agents and Realtors</h4>
              <p className="">
                Already in real estate? Learn to work with investor clients and
                earn more from every connection.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-[20px] px-[24px] py-[36px] space-y-[24px] shadow-classic text-left border-1 border-border"
            style={{ background: "var(--secondary)" }}
          >
            <div
              className="rounded-[20px] shadow-classic text-left border-1 border-border"
              style={{ background: "var(--secondary)" }}
            >
              <div className="p-[10px] flex flex-start gap-[6px] border-b-1 border-gray-200">
                <span className="w-[6px] h-[6px] bg-gray-200 rounded-full"></span>
                <span className="w-[6px] h-[6px] bg-gray-200 rounded-full"></span>
                <span className="w-[6px] h-[6px] bg-gray-200 rounded-full"></span>
              </div>
              <div>
                <div className="space-y-[12px] py-[12px] px-[26px]">
                  <span
                    className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                    style={{ background: "var(--secondary)" }}
                  >
                    <p className="text-[14px]! ">😕</p>
                    <p className="text-[14px]! px-[12px] font-semibold">
                      Scattered focus
                    </p>
                    <p className="text-[14px]! text-red-500 font-semibold">
                      +5%
                    </p>
                  </span>
                  <span
                    className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                    style={{ background: "var(--secondary)" }}
                  >
                    <p className="text-[14px]! ">📉</p>
                    <p className="text-[14px]! px-[12px] font-semibold">
                      Scattered focus
                    </p>
                    <p className="text-[14px]! text-red-500 font-semibold">
                      –12%
                    </p>
                  </span>
                </div>
                <div className="flex w-full h-[4px]">
                  <div className="w-1/2 border-t-2 border-dashed border-red-500"></div>
                  <div className="w-1/2 border-t-2 border-dashed border-green-500"></div>
                </div>
                <div className="space-y-[10px] py-[12px] px-[26px]">
                  <span
                    className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                    style={{ background: "var(--secondary)" }}
                  >
                    <p className="text-[14px]! ">📈</p>
                    <p className="text-[14px]! font-semibold pl-[8px] text-primary">
                      REI
                    </p>
                    <p className="text-[14px]! pl-[12px] pr-[8px] font-semibold">
                      Clear plan
                    </p>
                    <p className="text-[14px]! text-green-500 font-semibold">
                      +55%
                    </p>
                  </span>
                  <span
                    className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                    style={{ background: "var(--secondary)" }}
                  >
                    <p className="text-[14px]! ">⚡</p>
                    <p className="text-[14px]! font-semibold pl-[8px] text-primary">
                      REI
                    </p>
                    <p className="text-[14px]! pl-[12px] pr-[8px] font-semibold">
                      Fast action
                    </p>
                    <p className="text-[14px]! text-green-500 font-semibold">
                      +90%
                    </p>
                  </span>
                  <span
                    className="flex items-center px-[12px] w-max py-[7px] rounded-[20px] shadow-classic border-1 border-border-two"
                    style={{ background: "var(--secondary)" }}
                  >
                    <p className="text-[14px]! ">🚀</p>
                    <p className="text-[14px]! font-semibold pl-[8px] text-primary">
                      REI
                    </p>
                    <p className="text-[14px]! pl-[12px] pr-[8px] font-semibold">
                      Full support
                    </p>
                    <p className="text-[14px]! text-green-500 font-semibold">
                      +120%
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-[12px]">
              <h4 className="font-semibold">Agents and Realtors</h4>
              <p className="">
                Already in real estate? Learn to work with investor clients and
                earn more from every connection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
