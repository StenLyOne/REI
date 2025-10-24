import Hero from "@/mainPageSections/Hero/Hero";
import Stats from "@/mainPageSections/Stats/Stats";
import Serve from "@/mainPageSections/Serve/Serve";
import Ecosystem from "@/mainPageSections/Ecosystem/Ecosystem";
import Founders from "@/mainPageSections/Founders/Founders";
// import CTA from "@/sections/CTA/CTA";
import RightImage from "@/mainPageSections/RightImage/RightImage";
import LeftImage from "@/mainPageSections/LeftImage/LeftImage";
import Brands from "@/mainPageSections/Brands/Brands";
import Trends from "@/mainPageSections/Trends/Trends";
import BlueOcean from "@/mainPageSections/BlueOcean/BlueOcean";
import Gap from "@/mainPageSections/Gap/Gap";
import Quote from "@/mainPageSections/Quote/Quote";
import Testimonials from "@/mainPageSections/Testimonials/Testimonials";
import Certification from "@/mainPageSections/Certification/Certification";
import { Formula } from "@/mainPageSections/Formula/Formula";
import Retirement from "@/mainPageSections/Retirement/Retirement";
import BackgroundGradients from "./ui/BackgroundGradients";

export default function LandingPage() {
  return (
    <div className="relative">
   
      <Hero />
      <RightImage />
      <Brands />
      <LeftImage />
      <Serve />
      <Stats />
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
      
      <BackgroundGradients />
    </div>
  );
}
