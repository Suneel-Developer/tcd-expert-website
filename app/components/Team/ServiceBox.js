"use client";
import { BsDot } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const ServiceBox = () => {
  const router = useRouter();

  const HandleNavigate = () => {
    router.push('/services');
  };
  return (
    <section className="py-10">
      {/* Box 1  */}
      <div className="px-3 bg-gray-200 py-10">
        <div className="w-full max-w-xxl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Lists  */}
          <div className="flex flex-col gap-5">
            <h1 className="text-dark-gray font-raleway-Bold font-bold text-2xl md:text-[32px] uppercase leading-[40px] tracking-[3px]">
              Why Are We The Best?
            </h1>

            <ul className="flex flex-col gap-1 pl-1">
              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  Multi-generation roofing and construction company still active
                  today
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  We have over 60 years’ combined practical experience in
                  building both run-of-the-mill AND one-of-a-kind projects
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  We have a very energetic approach
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  Our reports are, on average, 3-5x longer (and more detailed)
                  than anyone else’s
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  We take time to include photos, drawings, and cited references
                  in our reports
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  We have an amazing group of sub consultants to use when needed
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  We are very well networked
                </span>
              </li>
            </ul>

            <button onClick={HandleNavigate} className="w-fit bg-transparent border border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white h-11 sm:h-14 rounded-sm px-4 sm:px-6 font-bold font-raleway-Bold text-sm uppercase tracking-[2.5px] transition-colors duration-200">
              Our Services
            </button>
          </div>

          {/* Image  */}
          <div>
            <img src="/assets/Roofing.webp" alt="roofing" className="w-full" />
          </div>
        </div>
      </div>

      {/* Box 2  */}
      <div className="px-3 py-10">
        <div className="w-full max-w-xxl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Image  */}
          <div>
            <img src="/assets/Office.webp" alt="Office" className="w-full" />
          </div>

          {/* Lists  */}
          <div className="flex flex-col gap-5">
            <h1 className="text-dark-gray font-raleway-Bold font-bold text-2xl md:text-[32px] uppercase leading-[40px] tracking-[3px]">
              WHY SHOULD WE BE HIRED?
            </h1>

            <ul className="flex flex-col gap-1 pl-1">
              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  Our thoroughness ensures we are less expensive in the long run
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  Increased chance of settlement on Summary Judgement
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  We have our own active, licensed insurance adjuster on staff
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  You only get one shot when hiring an Expert; Feel safe knowing
                  you’ve hired us
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  Extremely professional presentation throughout entire process
                </span>
              </li>

              <li className="flex items-center gap-2">
                <BsDot className="text-black-700 text-2xl" />
                <span className="flex-1 text-black-700 text-sm font-raleway-Regular font-normal leading-[26px]">
                  We know when less is more
                </span>
              </li>
            </ul>

            <button onClick={HandleNavigate} className="w-fit bg-transparent border border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white h-11 sm:h-14 rounded-sm px-4 sm:px-6 font-bold font-raleway-Bold text-sm uppercase tracking-[2.5px] transition-colors duration-200">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBox;
