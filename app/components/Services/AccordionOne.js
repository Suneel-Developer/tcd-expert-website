"use client";
import Image from "next/image";
import React, { useState } from "react";
import Collapse from "react-collapse";

const AccordionOneData = [
  {
    title: "Professional Consulting Services",
    content:
      "Our Experts are positive and professional throughout their engagement by our clients",
  },

  {
    title: "Building Envelope Construction Inspections",
    content:
      "We render expert opinions on interior and exterior components of walls, flooring, roofs, windows, and doors, as well as licensed trades like plumbing, electrical, and HVAC.",
  },

  {
    title: "Moisture Intrusion and Leak Detection",
    content:
      "We render expert opinions on interior and exterior components of walls, flooring, roofs, windows, and doors, as well as licensed trades like plumbing, electrical, and HVAC.",
  },

  {
    title: "Materials Failure Analysis and Investigation",
    content:
      "Our experts are well versed in detecting failure of building materials due to improper application/installation as well as warranty claimable building material failures.  We are able to assist in pursuing warranty claims where needed.",
  },

  {
    title: "Construction Claims and Litigation Support",
    content:
      "We have years of experience with liability claims for both plaintiffs and defendants, and provide supportive documentation throughout the process.",
  },

  {
    title: "Building Code Research & Analysis",
    content:
      "Goodman Consulting has actively operated in compliance with local, regional, and national building code for decades.  We bring this experience to your project to ensure there are no surprises along the way.",
  },

  {
    title: "Expert Witness Testimony and Forensic Consulting",
    content:
      "Our experts specialize in giving Expert Witness  testimony.  We are able to clearly piece together all available and discovered information to demonstrate the big picture and all the relevant details therein.",
  },
];

const AccordionOne = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
      {/* Accordions Faqs */}
      <div className="flex flex-col gap-3 sm:gap-1">
        {AccordionOneData.map((faq, index) => (
          <div key={index} className="max-w-xxl m-auto w-full">
            <div
              className="flex items-center cursor-pointer transition-colors"
              onClick={() => toggleAccordion(index)}
            >
              <div
                className={`h-9 sm:h-11 w-9 sm:w-11 mr-5 border-2 border-sky-blue flex justify-center items-center rounded-[3px] ${
                  openIndex === index ? "bg-sky-blue" : "bg-transparent"
                } transition-colors`}
              >
                <Image
                  src={`/assets/${openIndex === index ? "minus" : "plus"}.webp`}
                  alt={openIndex === index ? "minus" : "plus"}
                  width={10}
                  height={10}
                />
              </div>
              <h5 className="text-sky-blue font-raleway-SemiBold font-semibold text-xs sm:text-sm uppercase flex-1">
                {faq.title}
              </h5>
            </div>
            <Collapse isOpened={openIndex === index}>
              <div className="ml-16 mt-3">
                <p className="text-dark-gray font-raleway-Medium font-normal text-sm pb-5">
                  {faq.content}
                </p>
              </div>
            </Collapse>
          </div>
        ))}
      </div>

      {/* Accordion Image  */}
      <div>
        <img
          src="/assets/commercial-roofing-consultation.webp"
          alt="commercial roofing consultation"
          className="w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AccordionOne;
