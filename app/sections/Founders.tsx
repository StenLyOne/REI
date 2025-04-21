import GlowIcon from "@/components/GlowIcon";
import Image from "next/image";

const data = [
  {
    name: "David Gorski",
    job: "Co-Founder of REI Institute",
    img: "/img/man.jpg",
    description:
      "Lorem ipsum cursus egestas libero sed pulvinar purus nullam phasellus in a aliquet enim id odio ultrices viverra aliquam adipiscing velit justo aliquam vel non euismod pulvinar nisl neque sed et mi accumsan sodales ut ",
  },
  {
    name: "David Gorski",
    job: "Co-Founder of REI Institute",
    img: "/img/man.jpg",
    description:
      "Lorem ipsum cursus egestas libero sed pulvinar purus nullam phasellus in a aliquet enim id odio ultrices viverra aliquam adipiscing velit justo aliquam vel non euismod pulvinar nisl neque sed et mi accumsan sodales ut ",
  },
];

export default function Founders() {
  return (
    <section className="relative max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <GlowIcon text="Founders" />
      <div className="space-y-[48px]">
        <div className="text-center">
          <h2>Meet The Founders of REI Institute</h2>
          <p className="pt-[24px] mx-auto">
            Over 50 Years of Combined Results, Experience and Investment Wisdom
          </p>
        </div>
        <div className="flex gap-[24px] flex-col sm:flex-row">
          {data.map((item, i) => (
            <div
              key={i}
              className="space-y-[24px] bg-secondary w-full sm:max-w-[400] rounded-[20px]"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={650}
                height={650}
                className="rounded-[20px] w-full"
              />
              <div className="space-y-[20px] pb-[36px] px-[24px]">
                <div className="space-y-[3px]">
                  <h4>{item.name}</h4>
                  <p>{item.job}</p>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-[0px] right-[-50%] z-[-1] hidden sm:block">
        <Image
          className="w-[1004px] h-[1004px] spin-slow"
          src="/icons/Ellipse 1.svg"
          alt="elipse"
          width={1004}
          height={1004}
        />
        <Image
          className="w-[744px] h-[744px] absolute top-[13%] right-[12%] spin-reverse-slow"
          src="/icons/Ellipse 2.svg"
          alt="elipse"
          width={744}
          height={744}
        />
        <Image
          className="w-[500px] h-[500px] absolute top-[25%] right-[22%] spin-slow"
          src="/icons/Ellipse 3.svg"
          alt="elipse"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}
