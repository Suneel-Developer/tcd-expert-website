"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMiniBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";

const MobileHeader = () => {
  const [navbar, setnavbar] = useState(false);
  const [faqDropdown, setFaqDropdown] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => path === pathname;

  // Location Dropdown
  const toggleFaqDropdown = () => {
    setFaqDropdown(!faqDropdown);
  };
  return (
    <div className="base:hidden bg-white w-full py-2">
      <nav>
        <div className="flex flex-col items-center justify-between mx-auto">
          <div className="w-full flex relative justify-center items-center">
            {/* Logo  */}
            <Link href="/">
              <img
                src="/assets/mobilelogo.webp"
                alt="logo"
                className="w-[205px] xs:w-[308px] h-16 xs:h-24"
                loading="lazy"
              />
            </Link>

            {/* Toggle Btns  */}
            <button
              onClick={() => setnavbar(!navbar)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center justify-center absolute left-2 xs:left-3"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {navbar ? (
                <RxCross2 className="text-2xl text-dark-gray" />
              ) : (
                <HiMiniBars3 className="text-2xl text-dark-gray" />
              )}
            </button>
          </div>

          {/* Links  */}

          <div
            className={` ${navbar ? " block" : "hidden"} w-full p-4`}
            id="navbar-default"
          >
            <ul className="flex flex-col">
              {/* Home  */}
              <li className="border-b border-gray-400 pb-2 ">
                <Link
                  href="/"
                  aria-current="page"
                  className={`text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] ${
                    isActive("/") ? "text-gray-500" : "text-dark-gray"
                  } `}
                >
                  Home
                </Link>
              </li>

              {/* Team   */}
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="/team"
                  aria-current="page"
                  className={`text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] ${
                    isActive("/team") ? "text-gray-500" : "text-dark-gray"
                  } `}
                >
                  Meet the Team
                </Link>
              </li>

              {/* Services  */}
              <li className="border-b border-gray-400 py-2">
                <Link
                  href="/services"
                  aria-current="page"
                  className={`text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] ${
                    isActive("/services") ? "text-gray-500" : "text-dark-gray"
                  } `}
                >
                  Services
                </Link>
              </li>

              {/* Locations  */}
              <div className="relative w-full">
                <li
                  className="border-b border-gray-400 py-3 flex justify-between items-center"
                  onClick={toggleFaqDropdown}
                >
                  <Link
                    href="/"
                    aria-current="page"
                    className={`text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] ${
                      isActive("/") ? "text-gray-500" : "text-dark-gray"
                    } `}
                  >
                    Locations
                  </Link>
                  {faqDropdown ? (
                    <FaAngleDown className="text-dark-gray text-xs" />
                  ) : (
                    <FaAngleRight className="text-dark-gray text-xs" />
                  )}
                </li>

                {faqDropdown && (
                  <div className="pl-3 w-full border-b border-gray-400 flex flex-col">
                    <Link
                      href="/"
                      className={` inline-block text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] border-b border-gray-400 py-3 ${
                        isActive("/") ? "text-gray-500" : "text-dark-gray"
                      } `}
                    >
                      Oklahoma City
                    </Link>

                    <Link
                      href="/tulsa"
                      className={` inline-block text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] border-b border-gray-400 py-3 ${
                        isActive("/tulsa") ? "text-gray-500" : "text-dark-gray"
                      } `}
                    >
                      Tulsa
                    </Link>

                    <Link
                      href="/colorado-springs"
                      className={` inline-block text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] py-3 ${
                        isActive("/") ? "text-gray-500" : "text-dark-gray"
                      } `}
                    >
                      Colorado Springs
                    </Link>
                  </div>
                )}

                {/* here add faq dropdown  */}
              </div>

              {/* Contact */}
              <li className="pt-2">
                <Link
                  href="/contact"
                  aria-current="page"
                  className={`text-xs font-raleway-Bold font-bold uppercase tracking-[1.5px] ${
                    isActive("/contact") ? "text-gray-500" : "text-dark-gray"
                  } `}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileHeader;
