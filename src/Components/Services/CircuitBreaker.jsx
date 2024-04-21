import React from "react";
import ServicesContent from "./ServicesContent";

const images = [
  {
    url: "https://www.sync-power.com/jpg/braker_2d.jpg",
  },
  {
    url: "https://www.sync-power.com/jpg/braker_2e.jpg",
  },
];

const lines = [
  "Verification and correction for primary contact deterioration.",
  "Verification of gum free operation by applying proper grease and oiling moving parts.",
  "Electrical operation of breaker for proper sequence of operation. Verify Contacts and Contact gaps.",
  "Thermal Imaging and Torque Power Connection. Load Banking to Validate Capacity Test.",
];

const title = "Circuit Breakers ";

const subLine =
  "Breaker Repair, Maintenance and Retrofit Services. Sync-Power Services offers the most reliable and professional services for any make and model of Breaker retrofit, repair, maintenance and load bank testing.";

const imageURl = "https://www.sync-power.com/jpg/circuit_breakers1.png";

const mainParagraph =
  "Our team is available 24/7.We follow most ANSI, NFPA and NEMA standards.";

const sliderParagraph =
  "Record, Measure and Calibration of spring tension/mechanism through manual operation of breaker charge, open and close, Verification of trip free operations.";

const bottomParagraph =
  "Inspection of close spring gag, Inspection of breaker and breaker cell for clean and debris free.";

const CircuitBreaker = () => {
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

export default CircuitBreaker;
