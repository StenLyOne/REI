import Hero from "@/sections/Hero/Hero";
import Header from "@/components/layout/Header";
import HowReiWorks from "@/sections/HowReiWorks/HowReiWorks";
import Benefits from "@/sections/Benefits/Benefits";
import Ecosystem from "@/sections/Ecosystem/Ecosystem";
import Founders from "@/sections/Founders/Founders";
// import CTA from "@/sections/CTA/CTA";
import Footer from "@/components/layout/Footer";
import RightImage from "@/sections/RightImage/RightImage";
import LeftImage from "@/sections/LeftImage/LeftImage";
import Brands from "@/sections/Brands/Brands";
import Trends from "@/sections/Trends/Trends";
import BlueOcean from "@/sections/BlueOcean/BlueOcean";
import Gap from "@/sections/Gap/Gap";
import Quote from "@/sections/Quote/Quote";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Certification from "@/sections/Certification/Certification";
import { Formula } from "@/sections/Formula/Formula";
import Retirement from "@/sections/Retirement/Retirement";
import BackgroundGradients from "./ui/BackgroundGradients";

export default function LandingPage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <RightImage />
      <Brands />
      <LeftImage />
      <Benefits />
      <HowReiWorks />
      <Trends />
      <BlueOcean />
      <Gap />
      <Quote />
      <Testimonials />
      <Certification />
      <Ecosystem />
      <Formula />
      <Retirement />
      <Founders />
      {/* <CTA /> */}
      <Footer />

      <BackgroundGradients />
    </div>
  );
}
