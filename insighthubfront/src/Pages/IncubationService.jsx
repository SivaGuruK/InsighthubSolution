import  { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import incubation from "../Assests/ai--1024x576 1.png";

const images = [incubation, incubation, incubation];

const Incubation = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setImageIndex(current),
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1400px] h-[1579px] relative">
        <div className="absolute h-[90px] top-[12px] -left-[68px] [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-4xl tracking-[0] leading-[90px] whitespace-nowrap">
          INCUBATION SETUP
        </div>

        {/* Contact Us Section */}
        <div className="absolute h-24 top-[459px] left-[527px] [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-4xl tracking-[0] leading-[96px] whitespace-nowrap">
          CONTACT US
        </div>
        <div className="flex flex-wrap top-[539px] w-[732px] h-[597px] items-start gap-[var(--variable-collection-spacing-SM)] absolute left-[342px]">
          <div className="flex flex-col w-[732px] items-start gap-2 relative">
            <div className="relative -ml-[655px] self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
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
          <div className="h-20 flex flex-col w-[732px] items-start gap-2 relative">
            <div className="relative -ml-[630px]  self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
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
          <div className="flex flex-col w-[732px] items-start gap-2 relative">
            <div className="relative -ml-[655px]  self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
              Your Email
            </div>
            <input
              className="h-12 px-4 py-3 relative self-stretch w-full bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
              placeholder="email@janesfakedomain.net"
              type="email"
            />
          </div>
          <div className="h-[194px] flex flex-col w-[732px] items-start gap-2 relative">
            <div className="relative -ml-[635px]  self-stretch mt-[-1.00px] [font-family:'IBM_Plex_Sans-Medium',Helvetica] font-medium text-black text-base tracking-[0] leading-6">
              Your message
            </div>
            <input
              className="self-stretch w-full grow px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow flex-1 mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[#828282] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
              placeholder="Enter your question or message"
              type="number"
            />
          </div>
          <button className="all-[unset] box-border flex w-[732px] items-center justify-center gap-2 px-8 py-4 relative bg-[#3c38cd] rounded-lg shadow-button-shadow">
            <div className="relative w-fit mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
              Submit
            </div>
          </button>
        </div>
        <div className="absolute w-[722px] h-[468px] top-[93px] -left-[65px] text-justify  [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-black text-md">
          <p>
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
        <div className="absolute top-[93px] right-[0px] left-[790px] w-[500px] h-[568px]">
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

        {/* New Horizontal Scrollable Section */}
        <div className="absolute top-[1200px] w-full h-full">
          <div className="flex items-center">
            <button className="text-5xl w-96 h-96 text-black font-bold">
              {"<"}
            </button>
            <div className="flex overflow-x-auto space-x-4 ml-8 mr-8">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-gray-200 p-4 flex items-center space-x-4"
                >
                  <img
                    src={image}
                    alt={`Item ${index}`}
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold mt-0">TITLEh</h3>
                    <p className="text-sm">
                      One line content here line content here line content here
                      line content here.
                    </p>
                    <button className="text-blue-500">Read More</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-5xl w-96 h-96 text-black font-bold">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Incubation;
