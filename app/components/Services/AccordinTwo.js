"use client";
import Image from "next/image";
import React, { useState } from "react";
import Collapse from "react-collapse";

const AccordionTwoData = [
  {
    title: "Construction Defect Investigation and Analysis",
    content:
      "Defects in construction are a specialty of Goodman Consulting.  Our team of experts come from all different fields of construction and are able to identify defective and improperly executed work across a variety of project types.",
  },

  {
    title: "Property Damage Assessments",
    content:
      "We have decades of experience in handling and consulting on insurance claims related to property damage resulting from water, fire, storms, and more.  We have licensed insurance adjusters on our team who assist in making sure claims are fairly handled for all parties involved.",
  },

  {
    title: "Insurance claim Appraisals and Umpire service",
    content:
      "Our Experts serve as insurance Appraisers and Umpires for insurance claim disputes between insurance carriers and insureds/property owners.",
  },

  {
    title: "Ongoing Documentation and Reporting",
    content:
      "Our team is available for job site documentation and reporting, and can tailor these services to meet the needs and requirements of any project.",
  },

  {
    title: "Roof System Design-Assist",
    content:
      "One of our core competencies is roofing and waterproofing.  We regularly consult for architects in designing and specifying the right products and details for roofing and waterproofing. ",
  },

  {
    title: "Quality Control, Quality Assurance supervision",
    content:
      "Our team is available for QC/QA supervision, and can assist in developing protocols to follow that will help ensure nothing falls through the cracks throughout the execution of your project.",
  },

  {
    title: "Contracts and Written Legal Agreement consulting",
    content:
      "Our Experts have decades of experience with the pitfalls of legal agreements in the construction industry.  We can audit your existing legal agreements and protocols and advise on areas of weakness so you can have peace of mind when things don’t go according to plan.",
  },
];

const AccordinTwo = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 sm:mt-14">
      {/* Accordion Image  */}
      <div>
        <img
          src="/assets/public-adjuster-oklahoma-city.webp"
          alt="public adjuster oklahoma city"
          className="w-full"
          loading="lazy"
        />
      </div>

      {/* Accordions Faqs */}
      <div className="flex flex-col gap-3 sm:gap-1">
        {AccordionTwoData.map((faq, index) => (
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
    </div>
  );
};

export default AccordinTwo;
