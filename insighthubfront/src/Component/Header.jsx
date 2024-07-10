import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center font-sans">
        <div className="text-customBlue text-32px font-bold">Logo</div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-customBlue hover:text-indigo-700 text-32px"
          >
            Home
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-customBlue hover:text-indigo-700 text-32px"
            >
              Services ▼
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 font-sans">
                <Link
                  to="/nirf"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-100 hover:text-indigo-700 text-32px"
                >
                  NIRF Consultation
                </Link>
                <Link
                  to="/startup"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-100 hover:text-indigo-700 text-32px"
                >
                  Startup Consultation
                </Link>
                <Link
                  to="/incubation"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-100 hover:text-indigo-700 text-32px"
                >
                  Incubation Setup
                </Link>
              </div>
            )}
          </div>
          <a
            href="/research"
            className="text-customBlue hover:text-indigo-700 text-32px"
          >
            Research & Insights
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="text-customBlue text-3xl  hover:text-indigo-700"
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden bg-white absolute top-0 left-0 w-full h-70% flex flex-col items-center justify-center space-y-4 font-sans">
          <button
            onClick={() => setIsMobile(false)}
            className="text-customBlue text-3xl absolute top-4 right-4 hover:text-indigo-700"
          >
            <FaTimes />
          </button>
          <a
            href="#home"
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            >
              Services ▼
            </button>
            {isDropdownOpen && (
              <div className="mt-2 w-48 bg-white rounded-md shadow-lg font-sans">
                <a
                  href="#service1"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-300 hover:text-indigo-700 text-32px"
                  onClick={() => setIsMobile(false)}
                >
                  NIRF Consultation
                </a>
                <a
                  href="#service2"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-300 hover:text-indigo-700 text-32px"
                  onClick={() => setIsMobile(false)}
                >
                  Startup Consultation
                </a>
                <a
                  href="#service3"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-300 hover:text-indigo-700 text-32px"
                  onClick={() => setIsMobile(false)}
                >
                  Incubation Setup
                </a>
              </div>
            )}
          </div>
          <a
            href="#about"
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
