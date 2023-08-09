import React from "react";
import SectionTwo from "../components/homeComponents/SectionTwo";
import SectionThree from "../components/homeComponents/SectionThree";
import SectionFour from "../components/homeComponents/SectionFour";
import HealthPackages from "../components/homeComponents/HealthPackages";
// import PatExpCarousel from "../components/homeComponents/PatExpCarousel";
import HeroSlider from "../components/homeComponents/HeroSlider";
import PatientExperience from "../components/homeComponents/PatientExperience";

const Home = () => {
  return (
    <>
      <div>
        <HeroSlider />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <HealthPackages />
        <PatientExperience />
      </div>
    </>
  );
};

export default Home;
