import React from "react";
import TextHeader from "../Components/utils/TextHeader";
import Sidebar from "../Components/utils/Sidebar";
import AboutMain from "../Components/About/AboutMain";

const aboutData = ["Who We Are", "Partners", "Capabilities Statement"];

const About = () => {
  return (
    <div className="w-full h-min pt-28 ">
      <TextHeader text={"About Us"} />
      <div className="max-w-screen-xl m-auto  sm:px-4 md:px-0  h-full flex lg:flex-row flex-col items-start gap-8 lg:gap-2">
        <div className="w-full lg:w-[20%] h-min z-10 static lg:sticky top-[18%] ">
          <Sidebar data={aboutData} />
        </div>
        <div className="w-full lg:w-[80%]">
          <AboutMain />
        </div>
      </div>
    </div>
  );
};

export default About;
