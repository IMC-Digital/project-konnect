import React from "react";
import SectionTwo from "../components/homeComponents/SectionTwo";
import SectionThree from "../components/homeComponents/SectionThree";
import SectionFour from "../components/homeComponents/SectionFour";
import HealthPackages from "../components/homeComponents/HealthPackages";
import PatExpCarousel from "../components/homeComponents/PatExpCarousel";

const Home = ({handleClick}) => {
  return (
    <>
      <div>
        <HeroSection />
        <SectionTwo handleClick={handleClick}/>
        <SectionThree />
        <SectionFour handleClick={handleClick} />
        <HealthPackages handleClick={handleClick}/> 
        <PatExpCarousel />
      </div>
    </>
  );
};

export default Home;
