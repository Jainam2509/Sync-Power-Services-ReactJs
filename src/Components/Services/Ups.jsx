import React from "react";
import ServicesContent from "./ServicesContent";

const images = [
  {
    url: "https://www.sync-power.com/jpg/ups-a2.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/ups-b1.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/ups-b.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/ups-d.jpg",
  },
];

const lines = [
  "Acceptance and Performance Testing",
  "UPS Maintenance contact and Repair",
  "UPS functional testing",
  "Evaluation of alarm, status, history and upgrades",
  "Preventive maintenance Contract",
  "Load banking",
  "24/7 On-Call Service",
  "Battery maintenance / assessment",
  "Battery monitoring system",
  "UPS monitoring system",
  "Battery Replacement",
  "Capacitor Replacement",
  "Fan and other parts replacement",
  "Recycling of parts and old UPS",
  "Data Center UPS System Design",
  "Infrared Thermography",
  "Time and Material Repair Solutions",
  "On-Site Power Analysis",
];

const title = "UPS";

const subLine =
  "UPS, Battery Startup, Commissioning, Repair and Maintenance Services.";

const imageURl = "https://www.sync-power.com/jpg/ups_icon.png";

const mainParagraph =
  "Sync-Power Services offers the most reliable and professional services for any make and model of UPS and DC system startup, commissioning, repair, maintenance and load bank testing. Our team is available 24/7. We follow most ANSI, NFPA and NEMA standards.Routine Preventative Maintenance Agreements We offer single to multiyear Service Agreements with 4-hour on-site response time for Emergency Service. We also offer Quarterly, Semi-Annual and Annual Preventative Maintenance Agreements. We also provide system or module level load banking test. UPS and Battery Maintenance: Quarterly: Battery Impedance Measuring and Voltage Reading. Ripple Voltage Measuring, Gravity Check and other Maintenance. UPS Display Value Reading. Check and Inspect Battery Post for Crack, Leak or Oxidation. Annual: Quarterly + Semiannual + Clean Interior of the System. Replace Air Filter. Check torque for internal connections. Verify DC BUS, Inverter Section and Static Switch for Component Checks, Wiring Checks and Electrical Operations. Check Filter Circuits and Measure Ripple Voltage is within Tolerance. Verify Load Sharing.";

const sliderParagraph =
  "Semiannual: Quarterly + UPS inspection for capacitors and other Power Component. Alarm History Checks. Actual Reading Validation. ";

const bottomParagraph =
  "Uninterruptible Power Supply Services from Sync-Power will evaluate the condition of your equipment and determine the most cost-effective and manageable solution to guarantee its overall performance, safety and reliability.";

const Ups = () => {
  return (
    <>
      <ServicesContent
        images={images}
        lines={lines}
        title={title}
        subLine={subLine}
        imageURl={imageURl}
        mainParagraph={mainParagraph}
        sliderParagraph={sliderParagraph}
        bottomParagraph={bottomParagraph}
      />
    </>
  );
};

export default Ups;
