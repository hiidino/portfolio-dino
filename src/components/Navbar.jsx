import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({ about: false, services: false });

  const toggleDropdown = (key) => {
    setDropdowns((prevDropdowns) => {
      const newDropdowns = { ...prevDropdowns, [key]: !prevDropdowns[key] };
      Object.keys(newDropdowns).forEach((k) => {
        if (k !== key) newDropdowns[k] = false;
      });
      return newDropdowns;
    });
  };

  return (
    <nav className="bg-[#121212] text-[#E9DCC9] font-medium text-xl px-8 md:px-24 py-2 ">
      <div className="flex justify-between items-center">
        {/* <div className="text-lg font-bold">
          <Link to="/" className="p-2">
            Dino Raj
          </Link>
        </div> */}

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
        </div>

        <div
          className={`md:flex ${isOpen ? "block" : "hidden"} w-full md:w-auto`}
        >
          <ul className="space-y-2 md:space-y-0 md:flex md:space-x-4">
            <li className="relative">
              <button
                onClick={() => toggleDropdown("about")}
                className="p-2 flex items-center"
                aria-expanded={dropdowns.about ? "true" : "false"}
                aria-haspopup="true"
              >
                About Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ml-2 ${
                    dropdowns.about ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdowns.about && (
                <ul className="bg-[#0f0f0f] p-2 space-y-1 md:absolute md:left-0 md:top-full md:w-[450px] md:grid md:grid-cols-3 md:gap-1 md:z-20">
                  <li>
                    <Link to="/#about" className="p-2 block">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to="/#skills" className="p-2 block">
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link to="/#about" className="p-2 block">
                      Certification
                    </Link>
                  </li>
                  <li>
                    <Link to="/#about" className="p-2 block">
                      Achievements
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="p-2 flex items-center"
                aria-expanded={dropdowns.services ? "true" : "false"}
                aria-haspopup="true"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 ml-2 ${
                    dropdowns.services ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdowns.services && (
                <ul className="bg-[#0f0f0f] p-2 space-y-1 md:absolute md:left-0 md:top-full md:w-[450px] md:grid md:grid-cols-3 md:gap-1 md:z-20">
                  <li>
                    <Link to="/#services" className="p-2 block">
                      Frontend Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/#services" className="p-2 block">
                      Backend Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/#services" className="p-2 block">
                      FullStack Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/#services" className="p-2 block">
                      UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link to="/#services" className="p-2 block">
                      SEO
                    </Link>
                  </li>
                  <li>
                    <Link to="/#services" className="p-2 block">
                      Google Ads
                    </Link>
                  </li>
                  <li>
                    <Link to="/#services" className="p-2 block">
                      Google Analytics
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="relative p-2 flex items-center cursor-pointer">
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex space-x-4">
          <button className="p-2 bg-blue-600 hover:bg-blue-900 text-white rounded-md flex">
            <span className="mx-2">
              <Link to="/#contact">Contact Me</Link>
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
          <a
            href={resume}
            download="Resume -Dipu kumar singh.pdf"
            className="p-2 bg-blue-600 hover:bg-blue-900 text-white rounded-md flex"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            <span className="mx-2">Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
