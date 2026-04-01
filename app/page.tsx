import AllFacilitation from "./components/AllFacilitation";
import Hero from "./components/common/Hero";
import { MarqueeDemo } from "./components/common/marquee";
import Plan from "./components/common/sectionsFacilitation/Plan";
import Reacap from "./components/common/sectionsFacilitation/Reacap";
import Run from "./components/common/sectionsFacilitation/Run";
import Collaborate from "./components/common/sectionsFacilitation/Collaborate";
import { LovedByFacilitators } from "./components/common/sectionsFacilitation/LovedByFacilitators";
import ReadyToRun from "./components/common/ReadyToRun";

export default function page() {
  return (
    <div>
      <Hero />
      <MarqueeDemo />
      <AllFacilitation />
      <div className=" container px-4 mx-auto md:mt-56 mt-20">
        <Plan />
        <Run />
        <Reacap />
        <Collaborate />
        <LovedByFacilitators />
      </div>
        {/* <ReadyToRun /> */}
    </div>
  );
}
