import React from "react";
import ServicesContent from "./ServicesContent";

const images = [
  {
    url: "https://www.sync-power.com/jpg/ats_c.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/ats_a.jpg",
  },
];

const lines = [
  "ATS Inspection and Clean Interior of the System.",
  "Record, Measure and Calibration of Voltages and Current. Measure mV Drop Across Contact.",
  "Exercise ATS for Proper Sequence of Operation. Verify Contacts and Contact Pads.",
  "ATS Mechanism Check, Manual Operation Validation of Mechanism, Validate no gumming Issue.",
  "Thermal Imaging and Torque Power Connection. Load Banking to Validate Capacity Test.",
  "Startup and commissioning service.",
  "Acceptance and performance testing.",
  "Preventive maintenance contract and repair by trained technicians.",
  "Functional and load bank testing.",
  "Infrared Thermography.",
  "Retrofit, control upgrades, communication or integration with SCADA / BAMS.",
  "Time and Material Repair Solutions",
];

const title = "ATS";

const subLine =
  "Automatic Transfer Switch Startup, Commissioning, Repair and Maintenance Services.Sync-Power Services offers the most reliable and professional services for any make and model of ATS startup, commissioning, repair, maintenance and load bank testing.";

const imageURl = "https://www.sync-power.com/jpg/ats_icon.png";

const mainParagraph =
  "Our team is available 24/7.We follow most ANSI, NFPA and NEMA standards.";

const sliderParagraph =
  "Auto Transfer Switch Services from Sync-Power will evaluate the condition of your equipment and determine the most cost-effective and manageable solution to guarantee its overall performance, safety and reliability.";

const bottomParagraph =
  "The most common cause of transfer switch failure is lack of regular maintenance and proper or periodic exercises of the equipment or the system. As Sync-Power can provide the care you need to ensure proper operation and greatly reduce the potential for unexpected problems.";

const Ats = () => {
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

export default Ats;
