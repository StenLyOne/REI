import GlowIcon from "@/components/GlowIcon"
import ReiLabel from "@/components/ReiLabel"
import Image from "next/image"

export default function HowReiWorks () {
    return(
        <section className="py-[100px]">
            <GlowIcon text="How Rei Works"/>
            <div className="mx-auto space-y-[24px] text-center">
                <h2>What is included in the program</h2>
                <p>In 12 weeks, you will be fully certified as a Real  Estate Investment Specialist.</p>
            </div>
                <ReiLabel/>
            <div className="relative w-full h-full">
                <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 max-w-[400px] w-full h-[600px]">
                    {/* Central line */}
                    <div className="absolute left-1/2 top-[-35px] -translate-x-1/2 flex pointer-events-none z-0">
                        {/* Left group */}
                        <div className="flex flex-col gap-4 items-end">
                            <div className="absolute">
                                <svg width="131" height="110" viewBox="0 0 131 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.24707 109.5C0.24707 109.5 82.2471 109.5 85.7471 109.5C89.2471 109.5 113.247 109.5 121.747 101C130.247 92.5 129.747 67.5 129.747 67.5V0" stroke="#BDBDBD"/>
                                </svg>
                            </div>
                            <div className="absolute">
                                <svg width="130" height="313" viewBox="0 0 130 313" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 312.5C0 312.5 82 312.5 85.5 312.5C89 312.5 113 312.5 121.5 304C130 295.5 129.5 270.5 129.5 270.5V0" stroke="#BDBDBD"/>
                                </svg>
                            </div>
                            <div>
                                <svg width="130" height="514" viewBox="0 0 130 514" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 513.5C0 513.5 82 513.5 85.5 513.5C89 513.5 113 513.5 121.5 505C130 496.5 129.5 471.5 129.5 471.5V0" stroke="#BDBDBD"/>
                                </svg>
                            </div>
                        </div>

                        {/* Right group */}
                        <div className="flex flex-col gap-4 items-start scale-x-[-1]">
                            <div className="absolute">
                                <svg width="131" height="110" viewBox="0 0 131 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.24707 109.5C0.24707 109.5 82.2471 109.5 85.7471 109.5C89.2471 109.5 113.247 109.5 121.747 101C130.247 92.5 129.747 67.5 129.747 67.5V0" stroke="#BDBDBD"/>
                                </svg>
                            </div>
                            <div className="absolute">
                                <svg width="130" height="313" viewBox="0 0 130 313" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 312.5C0 312.5 82 312.5 85.5 312.5C89 312.5 113 312.5 121.5 304C130 295.5 129.5 270.5 129.5 270.5V0" stroke="#BDBDBD"/>
                                </svg>
                            </div>
                            <div>
                                <svg width="130" height="514" viewBox="0 0 130 514" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 513.5C0 513.5 82 513.5 85.5 513.5C89 513.5 113 513.5 121.5 505C130 496.5 129.5 471.5 129.5 471.5V0" stroke="#BDBDBD"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-max h-max rounded-[20px] p-[12px] bg-primary">
                <Image  src='/calls.svg' alt="REI Logo" width={36} height={36} />
            </div>
        </section>
    )
}