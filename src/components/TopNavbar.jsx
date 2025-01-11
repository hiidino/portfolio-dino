import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const TopNavbar = () => {
  return (
    <>
      <nav className="bg-[#121212] text-[#E9DCC9] font-medium shadow-sm">
        <div className="flex flex-col md:flex-row justify-center md:justify-end text-[0.52rem] md:text-lg px-1 md:px-8 py-2 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Portfolio Link */}
            <div className="flex items-center  hover:text-white">
              <Link to="/#portfolio" className="p-2">Portfolio</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-3 md:w-6 md:h-4 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <div className="hidden md:block border-l-2 h-6 border-[#FFFFF0]"></div>
            </div>

            {/* Email Link */}
            <div className="flex items-center hover:text-white">
              <Link to="mailto:raj245098@gmail.com" className="p-2">raj245098@gmail.com</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-3 md:w-6 md:h-4 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <div className="hidden md:block border-l-2 h-6 border-[#FFFFF0]"></div>
            </div>

            {/* Phone Link */}
            <div className="flex items-center hover:text-white">
              <Link to="tel:+917667216432" className="p-2">7667216432</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-3 md:w-6 md:h-4 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <hr className="border-t mx-5 border-gray-600" />
    </>
  );
};

export default TopNavbar;
