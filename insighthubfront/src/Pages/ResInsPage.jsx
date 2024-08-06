import { useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaStar,
  FaEye,
} from "react-icons/fa";
import incubationimg from "../Assests/ai--1024x576 1.png";

const ResearchAndInsights = () => {
  const scrollRefs = {
    media: useRef(null),
    expert: useRef(null),
    rnd: useRef(null),
  };

  const items = [
    {
      img: incubationimg,
      title: "Sampleiouiyf",
      content: "Sample content goes here...",
    },
    {
      img: incubationimg,
      title: "Sampjfg",
      content: "Sample content goes here...",
    },
    {
      img: incubationimg,
      title: "Samphjgh",
      content: "Sample content goes here...",
    },
    {
      img: incubationimg,
      title: "Sajghfg",
      content: "Sample content goes here...",
    },
    {
      img: incubationimg,
      title: "Sapjh",
      content: "Sample content goes here...",
    },
    {
      img: incubationimg,
      title: "Incubayui",
      content: "Sample content goes here...",
    },
  ];

  const handleScroll = (section, direction) => {
    const scrollRef = scrollRefs[section].current;
    const scrollAmount =
      direction === "left" ? -scrollRef.clientWidth : scrollRef.clientWidth;
    scrollRef.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const renderSection = (title, section) => (
    <div className="mb-8">
      <h2 className="text-2xl mt-9 -ml-[1000px] text-customBlue font-sans mb-4">{title}</h2>
      <div className="relative flex items-center">
        <button
          className="absolute left-0 z-10 p-2 bg-white border rounded-full shadow"
          onClick={() => handleScroll(section, "left")}
        >
          <FaArrowLeft />
        </button>
        <div
          ref={scrollRefs[section]}
          className="flex overflow-x-auto space-x-4 mx-10 scrollbar-hide"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] p-4 border rounded shadow flex-shrink-0"
              style={{ scrollSnapAlign: "start" }}
            >
              <img src={item.img} alt={item.title} className="w-[250px] mt-2 mb-2" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="mb-2">{item.content}</p>
              <a href="#" className="text-blue-500 mb-2 block">
                Read more
              </a>
              <div className="flex justify-between items-center mb-2">
                <div className="flex space-x-2">
                  <FaThumbsUp className="cursor-pointer" />
                  <FaComment className="cursor-pointer" />
                  <FaShare className="cursor-pointer" />
                </div>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-gray-300" />
                </div>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <div className="flex items-center">
                  <FaEye className="mr-1" /> 1234 views
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-white border rounded-full shadow"
          onClick={() => handleScroll(section, "right")}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4">
      {renderSection("MEDIA COVERAGE", "media")}
      {renderSection("EXPERT OPINION", "expert")}
      {renderSection("OUR R&D ANALYSIS", "rnd")}
    </div>
  );
};

export default ResearchAndInsights;
