import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Profile";
import Logo from "../Assests/LOGO.png";
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isItemDetailPage = /^\/[^/]+\/[^/]+$/.test(location.pathname);

  const user = {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center font-sans">
        <div>
          <img
            src={Logo}
            alt="Logo"
            className="md:w-40 md:h-16 md:-mt-3 md:-ml-7 w-24 h-10 -mt-4 -ml-1"
          />
        </div>
        <div className="hidden md:flex space-x-4 md:-mt-5">
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
          {isItemDetailPage && (
            <FaUser
              className="text-customBlue -mt-2 w-10 h-8 hover:text-indigo-700 cursor-pointer"
              onClick={() => setIsSidebarOpen(true)}
            />
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="text-customBlue text-3xl hover:text-indigo-700 -ml-28 -mt-6"
          >
            {isMobile ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isMobile && (
        <div className="md:hidden bg-white absolute top-0 -ml-20 w-full h-70% flex flex-col items-center justify-center space-y-4 font-sans">
          <button
            onClick={() => setIsMobile(false)}
            className="text-customBlue text-3xl absolute top-4 right-4 hover:text-indigo-700"
          >
            <FaTimes />
          </button>
          <a
            href="/"
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
                  href="/nirf"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-300 hover:text-indigo-700 text-32px"
                  onClick={() => setIsMobile(false)}
                >
                  NIRF Consultation
                </a>
                <a
                  href="/startup"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-300 hover:text-indigo-700 text-32px"
                  onClick={() => setIsMobile(false)}
                >
                  Startup Consultation
                </a>
                <a
                  href="/incubation"
                  className="block px-4 py-2 text-customBlue hover:bg-gray-300 hover:text-indigo-700 text-32px"
                  onClick={() => setIsMobile(false)}
                >
                  Incubation Setup
                </a>
              </div>
            )}
          </div>
          <a
            href=""
            className="text-customBlue text-lg hover:text-indigo-700 text-32px"
            onClick={() => setIsMobile(false)}
          >
            Research & Insights
          </a>
        </div>
      )}
      {isSidebarOpen && (
        <Sidebar onClose={() => setIsSidebarOpen(false)} user={user} />
      )}
    </nav>
  );
};

export default Header;
