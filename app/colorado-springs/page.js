import Link from "next/link";
import Footer from "../components/Footer";
import { BsDot } from "react-icons/bs";
import Hero from "../components/Home/Hero";
import Head from "next/head";

export const metadata = {
  title: "Goodman Consulting | Colorado Springs",
};

const ColoradoSprings = () => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no"
        />
        <meta name="robots" content="max-image-preview:large" />
      </Head>

      <Hero />
      <section className="w-full max-w-xxl px-3 py-10 mx-auto">
        <h1 className="text-sky-blue text-2xl xs:text-3xl font-raleway-Bold font-bold leading-[1.25em]">
          Colorado Springs Roofing Insurance Expert Witness for Storm & Hail
          Damage
        </h1>

        <p className="text-black-700 text-sm font-raleway-Regular font-normal leading-[26px] my-4">
          Unfortunately, construction defects are common in
          <Link
            href="https://coloradosprings.gov/"
            className="text-sky-blue ml-1"
          >
            Colorado Springs
          </Link>
          …even if they aren’t visible initially. At Goodman Consulting, we see
          defects in roofs and behind walls; this means the extent of the defect
          isn’t able to be known until a construction expert investigates.
          <br /> <br />
          With this in mind, you will be best served by a
          <Link href="/team" className="text-sky-blue mx-1">
            qualified team of construction defect experts
          </Link>
          in Colorado Springs who have the experience, abilities, and tools to
          identify the root cause of your problem, all without trying to sell
          you the solution. We are a true, neutral third party that will
          identify all issues, specify the remedies needed, and assist you as
          needed with your search for a contractor with the right qualifications
          to complete the work needed. What we will do, at a minimum:
        </p>

        <ul className="flex flex-col gap-1 pl-1">
          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Listen to your story
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Document all damage to improve understanding and preserve evidence
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Advise on how best to cure defective work and/or materials, and
              what the cost should be
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Be available for ongoing questions or concerns you will have
              throughout the process
            </span>
          </li>
        </ul>

        <h2 className="text-dark-gray text-xl font-raleway-Bold font-bold leading-[1.25em] mt-5 mb-3">
          Why Choose Goodman Consulting?
        </h2>

        <p className="text-black-700 text-sm font-raleway-Regular font-normal leading-[26px] my-4">
          <img
            src="/assets/construction-defect-witness-colorado-springs.webp"
            alt="construction defect witness colorado springs"
            className="float-left mb-5 xs:pr-5 w-full xs:w-36 h-52"
          />
          Serving three locations, we’re a trusted roofing and construction
          defect expert. Over the years, we’ve been fortunate enough to assist
          contractors, attorneys, property owners, and insurance carriers in
          Oklahoma City,
          <Link href="/tulsa" className="text-sky-blue ml-1">
            Tulsa
          </Link>
          , and
          <Link
            href="https://goo.gl/maps/EnD8NLvkzTVeF43TA"
            className="text-sky-blue ml-1"
          >
            Colorado Springs
          </Link>
          . Whenever you need construction expert assistance, we’re here to
          ensure that all issues are identified, with proper courses of action,
          allocations of liability, and projected costs to remediate completed
          rigorously and thoroughly.
          <br />
          <br />
          If you are an attorney, you likely need a construction expert to
          properly document and analyze the project to successfully underpin
          your case; If you are an insurance adjustor, there will be times when
          you need an expert to report to you on repair vs. replacement cost
          analysis, to produce a remediation estimate, and to outline what the
          scope should be and why; If you’re a property owner or architect, you
          may need a design-advisor to ensure plans properly account for good
          waterproofing practices and are in compliance with building code and
          manufacturer’s specifications. Property owners and architects may also
          benefit from their own Quality Assurance supervisor to advocate for
          them and their project as it is being built.
        </p>

        <h2 className="text-dark-gray text-xl font-raleway-Bold font-bold leading-[1.25em] mt-5 mb-3">
          Our Services
        </h2>

        <p className="text-black-700 text-sm font-raleway-Regular font-normal leading-[26px] mt-1 mb-4">
          With an abundance of qualifications in the team, we can assist in any
          number of ways. For more information about
          <Link href="/services" className="text-sky-blue mx-1">
            any of these services
          </Link>
          we provide in Colorado Springs, feel free to
          <Link href="/contact" className="text-sky-blue ml-1">
            get in touch with our friendly team
          </Link>
          . In all three locations, we offer the following;
        </p>

        <ul className="flex flex-col gap-1 pl-1">
          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Expert witness for construction defect litigation and trials
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Initial and ongoing site documentation and reporting
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Insurance claim Appraisal and Umpire services
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Non-destructive thermal image scanning and moisture intrusion
              detection
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Roof system design assist
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Destructive Testing (DT)
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              General Inspections
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Design Assist
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Quality Control (QC)
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Construction Safety Consulting
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Drone aerial surveillance and imaging
            </span>
          </li>

          <li className="flex items-center gap-2">
            <BsDot className="text-black-700 text-2xl" />
            <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
              Be your own GC: Advise on subcontractor agreements, insurance,
              worker’s comp, pay requests, and licensing requirements to help
              you ensure your project stays in hand
            </span>
          </li>
        </ul>

        <p className="text-black-700 text-sm font-raleway-Regular font-normal leading-[26px] my-4">
          In terms of the services themselves, the best way to find out whether
          or not we can help is to get in touch for a consultation. Fortunately,
          our experience allows us to work with all sorts of buildings and their
          roofs; this includes
          <Link
            href="https://en.wikipedia.org/wiki/Roof_shingle"
            className="text-sky-blue ml-1"
          >
            composition shingles, slate, wood shakes, metal, shingles, solar
            tiles, clay and concrete tile, stone-coated steel, rubber and EPDM,
            built-up roofs, TPO roofs
          </Link>
          , and more! <br /> <br /> Whenever something as crucial as your home
          or building is on the line, you need a neutral third party you can
          trust…this is where Goodman Consulting comes in. With many successful
          cases behind us, we work hard every day to keep our positive
          reputation and make clients happy.
        </p>

        <h2 className="text-dark-gray text-xl font-raleway-Bold font-bold leading-[1.25em] mt-5 mb-3">
          A Construction Defect Expert Witness You Can Trust
        </h2>

        <p className="text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
          In Tulsa, Oklahoma City, and Colorado Springs, we are ready to assist.
          If you want to know precisely HOW we help you troubleshoot your needs,
          <Link href="/contact" className="text-sky-blue ml-1">
            reach out to us today!
          </Link>
        </p>

        <div className="max-w-3xl w-full mx-auto h-96 mt-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d397582.309660957!2d-104.758359!3d38.875684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713412ea1e6d22b%3A0x418eeb92f5e86b13!2sColorado%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v1708101354164!5m2!1sen!2sus"
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ColoradoSprings;
