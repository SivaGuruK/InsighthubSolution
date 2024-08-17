import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed
import axios from "../api/axios";
import {
  FaArrowLeft,
  FaArrowRight,
  FaThumbsUp,
  FaComment,
  FaShare,
  FaStar,
  FaEye,
} from "react-icons/fa";

const ResearchAndInsights = () => {
  const navigate = useNavigate();
  const scrollRefs = {
    media: useRef(null),
    expert: useRef(null),
    rnd: useRef(null),
  };

  const [mediaItems, setMediaItems] = useState([]);
  const [expertItems, setExpertItems] = useState([]);
  const [rndItems, setRndItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mediaResponse = await axios.get("/media-coverage");
        const expertResponse = await axios.get("/expert-opinion");
        const rndResponse = await axios.get("/rnd-analysis");

        setMediaItems(
          Array.isArray(mediaResponse.data) ? mediaResponse.data : []
        );
        setExpertItems(
          Array.isArray(expertResponse.data) ? expertResponse.data : []
        );
        setRndItems(Array.isArray(rndResponse.data) ? rndResponse.data : []);
      } catch (error) {
        console.error("Error fetching data", error);
        setMediaItems([]);
        setExpertItems([]);
        setRndItems([]);
      }
    };
    fetchData();
  }, []);

  const handleScroll = (section, direction) => {
    const scrollRef = scrollRefs[section].current;
    const scrollAmount =
      direction === "left" ? -scrollRef.clientWidth : scrollRef.clientWidth;
    scrollRef.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

 const handleReadMore = (id, type) => {
   if (!localStorage.getItem("token")) {
     localStorage.setItem("intendedPath", `/${type}/${id}`);
     navigate("/signin");
   } else {
     navigate(`/${type}/${id}`);
   }
 };
  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };

  const renderSection = (title, sectionItems, section) => (
    <div className="mb-8">
      <h2 className="text-2xl mt-9  ml-0 md:-ml-[1000px] text-customBlue font-sans mb-4">
        {title}
      </h2>
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
          {sectionItems.length > 0 ? (
            sectionItems.map((item) => (
              <div
                key={item._id}
                className="w-[300px] h-[200px] bg-[#EFEFEF] border border-[#e0e0e0] rounded-lg shadow-button-shadow p-4 mt-0 flex flex-col"
              >
                <h3 className="text-md font-sans text-left mt-0 mb-2 text-black">
                  {item.title}
                </h3>
                <img
                  src={`http://localhost:3000/uploads/${item.image}`}
                  alt={`Item ${item.title}`}
                  className="w-24 h-24 object-cover mb-2"
                />
                <p className="text-black text-left text-sm mb-2">
                  {truncateDescription(item.description, 18)}
                </p>
                <button
                  onClick={() => handleReadMore(item._id, section)}
                  className="text-blue-500 mb-2"
                >
                  Read More
                </button>
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
                <div className="flex items-center text-sm text-gray-600">
                  <FaEye className="mr-1" /> 1234 views
                </div>
              </div>
            ))
          ) : (
            <p>No items available</p>
          )}
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
        {renderSection("MEDIA COVERAGE", mediaItems, "media")}
        {renderSection("EXPERT OPINION", expertItems, "expert")}
        {renderSection("OUR R&D ANALYSIS", rndItems, "rnd")}
    </div>
  );
};

export default ResearchAndInsights;
