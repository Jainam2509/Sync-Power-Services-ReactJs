import React from "react";
import ServicesContent from "./ServicesContent";

const images = [
  {
    url: "https://www.sync-power.com/jpg/switchgear_a.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/switchgear_b.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/switchgear_c.jpg",
  },
];

const lines = [
  "Controls Inspection, clean interior and exterior of the system.",
  "Visual inspection of PLC’s, controls, meters and annunciators for proper operation.",
  "Verify communication status of PLC system, devices, meters and annunciators.",
  "Verify PLC battery voltage and replace if necessary.",
  "Verify PLC system redundancy and logic equality",
  "Verify DC control system or control voltage.",
  "Clear fault tables and clean build folders from PLC and synchronize time and date.",
  "Verify communication with BMS.",
  "Verify all Generator Alarms and Shutdowns.",
  "Verify operation of remote annunciators.",
  "Complete system test in Auto and Manual Mode.",
  "Verify Load add/shed sequence.",
  "Verify Automatic synchronizer and synchronized circuits.",
  "Verify Load sharing controls.",
  "Verify Automatic generator loading control.",
];

const title = "Switchgear";

const subLine =
  "Switchgear Repair, Maintenance and Retrofit Services. Sync-Power Services offers the most reliable and professional services for any make and model of Breaker retrofit, repair, maintenance and load bank testing.";

const imageURl = "https://www.sync-power.com/jpg/switchgear.png";

const mainParagraph =
  "Our team is available 24/7.We follow most ANSI, NFPA and NEMA standards.";

const sliderParagraph =
  "We do provide evaluation and cost-effective solutions to your existing equipment/system and plants for safe and reliable performance with modern technology.";

const bottomParagraph =
  "We do offer: Switchgear Startup. Commissioning, Acceptance and performance testing. Retrofit and control upgrades (PLC and Protection). System integration with existing emergency power plant. Switchgear preventive maintenance contract. Switchgear time and material repair solutions. Protective Relay Systems analysis, upgradation and testing. Upgrade to your existing switchgear with System Control and Data Acquisition (SCADA) capability. System Modifications, construction drawing upgrades, commissioning script, functional and load bank testing. Power System Studies Fault and Coordination Studies Arc-Flash Studies Harmonics Studies Load Flow Studies";

const SwitchGear = () => {
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

export default SwitchGear;
