import  { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import incubation from "../Assests/ai--1024x576 1.png";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
const images = [incubation, incubation, incubation];

const Incubation = () => {
  const [items, setItems] = useState([]);
   const navigate = useNavigate();
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
 };
 
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/incubation");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return description;
  };
const handleReadMore = (id, type) => {
  if (!localStorage.getItem("token")) {
    localStorage.setItem("intendedPath", `/${type}/${id}`);
    navigate("/signin");
  } else {
    navigate(`/${type}/${id}`);
  }
};
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1400px] md:h-[1379px] h-[1800px] relative">
        <div className="absolute h-24 top-[870px] md:top-[509px] md:left-[527px] -left-[4px] [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-[18px] md:text-4xl tracking-[0] leading-[96px] whitespace-nowrap">
          CONTACT US
        </div>
        <div className="flex flex-wrap top-[950px] md:top-[569px] w-[732px] h-[597px] items-start gap-[var(--variable-collection-spacing-SM)] absolute left-0 md:left-[342px]">
          <div className="flex flex-col w-[300px] md:w-[732px] items-start gap-2 relative">
            <div className="relative -ml-56 md:-ml-[655px] self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
              Full Name
            </div>
            <div className="flex h-12 items-start gap-2 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow">
              <input
                type="text"
                className="relative flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
                placeholder="Jane"
              />
            </div>
          </div>
          <div className="h-20 flex flex-col  md:ml-auto -ml-72 mt-20 md:mt-0 w-[300px] md:w-[732px] items-start gap-2 relative">
            <div className="relative -ml-52 md:-ml-[630px]  self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
              Phone Number
            </div>
            <div className="flex-1 self-stretch w-full grow flex items-start gap-2 px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow">
              <input
                type="text"
                className="relative flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
                placeholder="7867564531"
              />
            </div>
          </div>
          <div className="flex flex-col w-[300px] md:mt-auto mt-40 md:w-[732px] items-start gap-2 relative">
            <div className="relative -ml-[800px] md:-ml-[655px]  self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
              Your Email
            </div>
            <input
              className="h-12 px-4 py-3 md:-ml-0 -ml-[300px] relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
              placeholder="email@janesfakedomain.net"
              type="email"
            />
          </div>
          <div className="h-[194px] flex flex-col w-[320px] md:mt-auto -mt-10 md:w-[732px] items-start gap-2 relative">
            <div className="relative -ml-48 md:-ml-[635px]  self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
              Your message
            </div>
            <input
              className="self-stretch w-full grow px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
              placeholder="Enter your question or message"
              type="number"
            />
          </div>
          <button className="all-[unset] box-border flex -ml-[300px] md:ml-auto mt-44 md:mt-auto w-[300px] md:w-[732px] items-center justify-center gap-2 px-8 py-4 relative bg-[#3c38cd] rounded-lg shadow-button-shadow">
            <div className="relative w-fit mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
              Submit
            </div>
          </button>
        </div>
        <h1 className="md:mt-[20px] mt-7 -ml-28 md:-ml-[1000px] text-customBlue md:text-4xl text-[18px]">INCUBATION SETUP</h1>
        <div className="absolute md:w-[722px] w-[300px] h-[468px] top-[300px] md:top-[93px] left-0 md:-left-[65px] text-justify  [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-black text-md">
          <p className="text-[13px] md:text-[17px]">
            Our incubation program is designed to foster innovation and support
            early-stage startups through mentorship, access to networks, funding
            opportunities, and infrastructure. We provide comprehensive support
            to turn entrepreneurial ideas into successful ventures. Our
            incubation program is designed to foster innovation and support
            early-stage startups through mentorship, access to networks, funding
            opportunities, and infrastructure. We provide comprehensive support
            to turn entrepreneurial ideas into successful ventures. Our
            incubation program is designed to foster innovation and support
            early-stage startups through mentorship, access to networks, funding
            opportunities, and infrastructure. Our incubation program is
            designed to foster innovation and support early-stage startups
            through mentorship, access to networks, funding opportunities, and
            infrastructure. We provide comprehensive support to turn
            entrepreneurial ideas into successful ventures. Our incubation
            program is designed to foster innovation and support early-stage
            startups through mentorship, access to networks, funding
            opportunities, and infrastructure. We provide comprehensive support
            to turn entrepreneurial ideas into successful ventures. Our
            incubation program is designed to foster innovation and support
            early-stage startups through mentorship, access to networks, funding
            opportunities, and infrastructure.
          </p>
        </div>
        <div className="absolute top-[93px] right-[0px] left-[10px] md:left-[790px] md:w-[500px] w-[250px] md:h-[568px] h-[280px]">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute md:top-[1110px]  top-[1470px]  md:mb-10 -ml-[140px] md:w-[1500px] h-[10px]">
          <h2 className="md:text-4xl text-[18px] font-sans whitespace-nowrap  ml-[120px] md:-ml-[790px] text-customBlue mt-16 md:-mb-20">
            INTERESTING BUSINESS CASES
          </h2>
          <div className="flex items-center">
            <div className="flex gap-5 mt-0 md:ml-auto ml-32 md:mt-16 w-full">
              <Carousel breakPoints={breakPoints}>
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="w-[300px] h-[200px] bg-[#EFEFEF] border border-[#e0e0e0] rounded-lg shadow-button-shadow p-4 mt-10"
                  >
                    <h3 className="text-md font-sans text-left mt-0 mb-2 text-black">
                      {item.title}
                    </h3>
                    <img
                      src={`http://localhost:3000/uploads/${item.image}`}
                      alt={`Item ${item.title}`}
                      className="w-24 h-24 object-cover -ml-3"
                    />
                    <p className="text-black ml-24 -mt-24 text-left text-sm">
                      {truncateDescription(item.description, 18)}
                    </p>
                    <button
                      onClick={() => handleReadMore(item._id, "incubation")}
                      className="text-blue-500 mb-0"
                    >
                      Read More
                    </button>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incubation;
