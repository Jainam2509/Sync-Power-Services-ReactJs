import React from "react";
import TextHeader from "../Components/utils/TextHeader";
import ServicesContact from "../Components/utils/ServicesContact";
import ServicesSidebar from "../Components/Services/ServicesSidebar";
import { Outlet } from "react-router-dom";

const data = [
  { name: "Overview", link: "/services" },
  { name: "UPS", link: "/services/ups" },
  { name: "ATS", link: "/services/ats" },
  { name: "Circuit Breakers", link: "/services/circuit-breaker" },
  { name: "Switchgear", link: "/services/switchgear" },
];

const Services = () => {
  return (
    <div className="w-full h-min pt-28 ">
      <TextHeader text={"Services"} />
      <div className="max-w-screen-xl px-4 m-auto h-full flex lg:flex-row flex-col items-start gap-8  md:gap-16">
        <div className="w-full lg:w-[20%] h-min pt-8 z-10 mb-4">
          <ServicesSidebar data={data} />
          <ServicesContact
            title={"Contact US"}
            paragraph={
              "Contact us or give us a call to discover how we can help."
            }
          />
        </div>
        <div className="w-full lg:w-[80%] ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Services;
