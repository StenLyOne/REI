import HeroSection from "@/sections/HeroSection";
import Header from "./sections/Header";
import HowReiWorks from "./sections/HowReiWorks";
import Benefits from "./sections/Benefits";
import SuccessStories from "./sections/SuccessStories";
import Testimonials from "./sections/Testimonials";
import WhoSItFor from "./sections/WhoSItFor";
import Ecosystem from "./sections/Ecosystem";
import Founders from "./sections/Founders";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <HowReiWorks />
      <Benefits />
      <SuccessStories />
      <WhoSItFor />
      <Testimonials />
      <Ecosystem />
      <Founders />
    </div>
  );
}
