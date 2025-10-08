import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { container, item } from "@/lib/variantsAnimation";

import CardSimple from "@/components/ui/CardSimple";

const data98Homes = [
  {
    title: "Convert curiosity → conversations",
    color: "text-blue",
    text: "Offer a 15‑minute Homeowner Wealth Review (equity, net worth, cash‑flow potential, financing paths). No listing needed.",
    imageUrl: "/img/convertCuriosity.png",
  },
  {
    title: "Make the primary home a strategy hub",
    color: "text-blue",
    text: "HELOC/refi scenarios, house‑hack, second‑door plan, rent‑to‑own options.",
    imageUrl: "/img/primaryHome.png",
  },
  {
    title: "Create a monthly cadence",
    color: "text-blue",
    text: "OInvestor Nights, Wealth Workshops, and quarterly portfolio check‑ins that generate repeatable deal flow.",
    imageUrl: "/img/monthlyCadence.png",
  },
];

const blueOcean = [
  {
    title: "Scripts",
    color: "text-blue",
    text: "“Equity‑to‑Income” opener; “Investment‑Ready in 90 Days” follow‑up.",
    imageUrl: "/img/scripts.png",
  },
  {
    title: "Tools",
    color: "text-blue",
    text: "Deal Analyzer + Wealth Map one‑pager investors can read in 60 seconds.",
    imageUrl: "/img/tools.png",
  },
  {
    title: "Offers",
    color: "text-blue",
    text: "Investor Night‑in‑a‑Box + Blue Ocean Playbook to launch within 14 days.",
    imageUrl: "/img/offers.png",
  },
];

export default function BlueOcean() {
  const refSection = useRef(null);

  const { scrollYProgress } = useScroll({
    target: refSection,
    offset: ["start end", "end end"],
  });
  const imageWidth = useTransform(scrollYProgress, [0.3, 1], ["40%", "100%"]);
  const wavesY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const wavesOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <section className="relative pt-100">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ y: wavesY, opacity: wavesOpacity }}
          className="sticky top-0 w-full h-max z-0"
        >
          <svg
            id="svg"
            viewBox="0 0 1440 690"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[500px] md:h-[700px] transition duration-300 ease-in-out delay-150"
            preserveAspectRatio="none"
          >
            <style></style>
            <path
              d="M 0,700 L 0,105 C 42.26368658965343,81.10842211002142 84.52737317930686,57.21684422004283 140,53 C 195.47262682069314,48.78315577995717 264.15419387242594,64.24104522985012 310,77 C 355.84580612757406,89.75895477014988 378.8558513309895,99.81897486055672 420,106 C 461.1441486690105,112.18102513944328 520.4224008036163,114.48305532792301 577,122 C 633.5775991963837,129.516944672077 687.4545454545455,142.2488038277512 730,145 C 772.5454545454545,147.7511961722488 803.7594173782019,140.5217293610722 844,135 C 884.2405826217981,129.4782706389278 933.507785032647,125.66427872796004 986,110 C 1038.492214967353,94.33572127203996 1094.2094424912104,66.82115572708769 1152,75 C 1209.7905575087896,83.17884427291231 1269.6544450025112,127.05109836368925 1318,138 C 1366.3455549974888,148.94890163631075 1403.1727774987444,126.97445081815538 1440,105 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="0.265"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
            <style></style>
            <path
              d="M 0,700 L 0,245 C 62.76110920193503,250.98836871183482 125.52221840387006,256.97673742366965 169,254 C 212.47778159612994,251.02326257633032 236.6722355864548,239.08141901715612 276,232 C 315.3277644135452,224.91858098284388 369.7888392503107,222.69758650770575 421,226 C 472.2111607496893,229.30241349229425 520.1724074123027,238.12823495202093 565,225 C 609.8275925876973,211.87176504797907 651.5215311004786,176.78947368421055 707,192 C 762.4784688995214,207.21052631578945 831.7414681857832,272.71387031113693 881,285 C 930.2585318142168,297.28612968886307 959.5125961563879,256.35504507124165 995,227 C 1030.4874038436121,197.64495492875835 1072.2081471886647,179.86594940389648 1126,199 C 1179.7918528113353,218.13405059610352 1245.654815088953,274.18115731317243 1300,288 C 1354.345184911047,301.81884268682757 1397.1725924555235,273.4094213434138 1440,245 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
            <style></style>
            <path
              d="M 0,700 L 0,385 C 32.244481746808006,399.72262021200663 64.48896349361601,414.4452404240133 120,409 C 175.511036506384,403.5547595759867 254.288627772344,377.9416585159533 305,357 C 355.711372227656,336.0583414840467 378.3565254170081,319.7881255121732 425,340 C 471.6434745829919,360.2118744878268 542.2852705596237,416.90583943535376 589,431 C 635.7147294403763,445.09416056464624 658.5023923444976,416.5885167464115 700,409 C 741.4976076555024,401.4114832535885 801.705160062386,414.7400935790002 858,413 C 914.294839937614,411.2599064209998 966.6769674059583,394.4511089375876 1011,390 C 1055.3230325940417,385.5488910624124 1091.5869703137803,393.4554706706495 1135,401 C 1178.4130296862197,408.5445293293505 1228.97515133892,415.7270083798144 1281,413 C 1333.02484866108,410.2729916201856 1386.51242433054,397.6364958100928 1440,385 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
            ></path>
            <style></style>
            <path
              d="M 0,700 L 0,525 C 51.03353247508525,518.5794496285919 102.0670649501705,512.1588992571837 148,508 C 193.9329350498295,503.8411007428163 234.76527267440326,501.9438525998572 280,517 C 325.23472732559674,532.0561474001428 374.87184435221656,564.0656903433874 422,559 C 469.12815564778344,553.9343096566126 513.7473499167305,511.79338602659334 560,495 C 606.2526500832695,478.20661397340666 654.1387559808613,486.76076555023917 709,488 C 763.8612440191387,489.23923444976083 825.6976261598243,483.16355177244975 879,498 C 932.3023738401757,512.8364482275502 977.0707393798409,548.5850273599619 1023,552 C 1068.929260620159,555.4149726400381 1116.019416320812,526.4963387877026 1155,523 C 1193.980583679188,519.5036612122974 1224.8515953369108,541.4296174892279 1271,546 C 1317.1484046630892,550.5703825107721 1378.5742023315447,537.785191255386 1440,525 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-3"
            ></path>
          </svg>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 690"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full  h-[500px] md:h-[700px] transition rotate-180 duration-300 ease-in-out delay-150"
            preserveAspectRatio="none"
          >
            <style></style>
            <path
              d="M 0,700 L 0,105 C 42.26368658965343,81.10842211002142 84.52737317930686,57.21684422004283 140,53 C 195.47262682069314,48.78315577995717 264.15419387242594,64.24104522985012 310,77 C 355.84580612757406,89.75895477014988 378.8558513309895,99.81897486055672 420,106 C 461.1441486690105,112.18102513944328 520.4224008036163,114.48305532792301 577,122 C 633.5775991963837,129.516944672077 687.4545454545455,142.2488038277512 730,145 C 772.5454545454545,147.7511961722488 803.7594173782019,140.5217293610722 844,135 C 884.2405826217981,129.4782706389278 933.507785032647,125.66427872796004 986,110 C 1038.492214967353,94.33572127203996 1094.2094424912104,66.82115572708769 1152,75 C 1209.7905575087896,83.17884427291231 1269.6544450025112,127.05109836368925 1318,138 C 1366.3455549974888,148.94890163631075 1403.1727774987444,126.97445081815538 1440,105 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="0.265"
              className="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
            <style></style>
            <path
              d="M 0,700 L 0,245 C 62.76110920193503,250.98836871183482 125.52221840387006,256.97673742366965 169,254 C 212.47778159612994,251.02326257633032 236.6722355864548,239.08141901715612 276,232 C 315.3277644135452,224.91858098284388 369.7888392503107,222.69758650770575 421,226 C 472.2111607496893,229.30241349229425 520.1724074123027,238.12823495202093 565,225 C 609.8275925876973,211.87176504797907 651.5215311004786,176.78947368421055 707,192 C 762.4784688995214,207.21052631578945 831.7414681857832,272.71387031113693 881,285 C 930.2585318142168,297.28612968886307 959.5125961563879,256.35504507124165 995,227 C 1030.4874038436121,197.64495492875835 1072.2081471886647,179.86594940389648 1126,199 C 1179.7918528113353,218.13405059610352 1245.654815088953,274.18115731317243 1300,288 C 1354.345184911047,301.81884268682757 1397.1725924555235,273.4094213434138 1440,245 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="0.4"
              className="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
            <style></style>
            <path
              d="M 0,700 L 0,385 C 32.244481746808006,399.72262021200663 64.48896349361601,414.4452404240133 120,409 C 175.511036506384,403.5547595759867 254.288627772344,377.9416585159533 305,357 C 355.711372227656,336.0583414840467 378.3565254170081,319.7881255121732 425,340 C 471.6434745829919,360.2118744878268 542.2852705596237,416.90583943535376 589,431 C 635.7147294403763,445.09416056464624 658.5023923444976,416.5885167464115 700,409 C 741.4976076555024,401.4114832535885 801.705160062386,414.7400935790002 858,413 C 914.294839937614,411.2599064209998 966.6769674059583,394.4511089375876 1011,390 C 1055.3230325940417,385.5488910624124 1091.5869703137803,393.4554706706495 1135,401 C 1178.4130296862197,408.5445293293505 1228.97515133892,415.7270083798144 1281,413 C 1333.02484866108,410.2729916201856 1386.51242433054,397.6364958100928 1440,385 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="0.53"
              className="transition-all duration-300 ease-in-out delay-150 path-2"
            ></path>
            <style></style>
            <path
              d="M 0,700 L 0,525 C 51.03353247508525,518.5794496285919 102.0670649501705,512.1588992571837 148,508 C 193.9329350498295,503.8411007428163 234.76527267440326,501.9438525998572 280,517 C 325.23472732559674,532.0561474001428 374.87184435221656,564.0656903433874 422,559 C 469.12815564778344,553.9343096566126 513.7473499167305,511.79338602659334 560,495 C 606.2526500832695,478.20661397340666 654.1387559808613,486.76076555023917 709,488 C 763.8612440191387,489.23923444976083 825.6976261598243,483.16355177244975 879,498 C 932.3023738401757,512.8364482275502 977.0707393798409,548.5850273599619 1023,552 C 1068.929260620159,555.4149726400381 1116.019416320812,526.4963387877026 1155,523 C 1193.980583679188,519.5036612122974 1224.8515953369108,541.4296174892279 1271,546 C 1317.1484046630892,550.5703825107721 1378.5742023315447,537.785191255386 1440,525 L 1440,700 L 0,700 Z"
              stroke="none"
              strokeWidth="0"
              fill="#0693e3"
              fillOpacity="1"
              className="transition-all duration-300 ease-in-out delay-150 path-3"
            ></path>
          </svg>
        </motion.div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="section-default  space-y-25 "
      >
        <div ref={refSection} className="space-y-15">
          <div className="space-y-6">
            <motion.h2
              variants={item}
              className="h2-large mx-auto w-max text-center !text-white"
            >
              Your Blue Ocean: <br className="block md:hidden" /> The{" "}
              <span className="text-[#1830E4]"> 98% </span>
            </motion.h2>
            <motion.h4
              variants={item}
              className="max-w-[926px] mx-auto text-center !text-white font-bold"
            >
              Most homeowners aren’t
              <span className="text-[#1830E4]"> “in the market” </span>{" "}
              today—but they are interested in{" "}
              <span className="text-[#1830E4]"> building wealth </span>. Be the
              pro who brings the plan, not the pitch.
            </motion.h4>
          </div>
          <motion.img
            style={{ width: imageWidth }}
            variants={item}
            src="/img/blueOcean.png"
            className="w-full h-[50vh] md:h-auto rounded-[20px] mx-auto object-cover"
            width={1240}
            height={400}
            alt=" Your Blue Ocean: The 98%"
          ></motion.img>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-15"
        >
          <motion.h2
            variants={item}
            className="h2-default text-center !text-white"
          >
            Turn the <span className="">98% of homes</span> not
            listing into a pipeline
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between">
            {data98Homes.map((homes, i) => (
              <motion.div variants={item} key={i}>
                  <CardSimple {...homes} colorText="text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-15"
        >
          <motion.h2
            variants={item}
            className="h2-default text-center !text-white"
          >
            How REIS™ operationalizes the{" "}
            <span className="">Blue Ocean</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 justify-between pb-100">
            {blueOcean.map((homes, i) => (
              <motion.div variants={item} key={i}>
                <CardSimple {...homes} colorText="text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
