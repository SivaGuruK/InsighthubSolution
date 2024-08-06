import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import startupimg from "../Assests/wp7098396 1.png";
import mentorimg from "../Assests/mentor.jpg"
import techassist from "../Assests/techassist.jpeg"
import ip from "../Assests/ip.png";
import marketing from "../Assests/marketing.jpg";
import fa from "../Assests/F&a.webp";
import network from "../Assests/nw.jpeg";
import shared from "../Assests/shared.jpg";
import infra from "../Assests/infra.jpeg";
import seed from "../Assests/seed.jpeg";
import access from "../Assests/invest.jpeg"
import axios from "../api/axios";
const images = [
  startupimg ,
  startupimg ,
  startupimg,
];

const StartupConsult = () => {
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [items, setitems] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/startup");
      setitems(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1400px] h-[1270px] relative">
        <div className="absolute h-[90px] top-[12px] -left-[68px] [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-4xl tracking-[0] leading-[90px] whitespace-nowrap">
          STARTUP CONSULTATION
        </div>

        {/* Our Offerings Section */}
        <div className="absolute top-[500px] left-[100px] w-full mb-0">
          <div className="mb-8">
            <h2 className="text-4xl font-sans -ml-[1250px] text-customBlue mb-4">
              OUR OFFERINGS
            </h2>
            <p className="text-lg text-black mb-4 mt-3 -ml-[1280px]">
              The list of services available are:
            </p>
          </div>

          {/* First Row of Offerings */}
          <div className="flex gap-24 mb-8">
            <div className="flex flex-col items-center">
              <img src={mentorimg} alt="Mentoring" className="mb-2 w-32 h-24" />
              <span>Mentoring</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={techassist}
                alt="Technical Assistance"
                className="mb-2 w-24 h-24"
              />
              <span>Technical Assistance</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={ip} alt="IP Management" className="mb-2 w-32 h-24" />
              <span>IP Management</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={marketing}
                alt="Marketing Expertise"
                className="mb-2 w-32 h-24"
              />
              <span>Marketing Expertise</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={fa} alt="F&A Service" className="mb-2 w-32 h-24" />
              <span>F&A Service</span>
            </div>
          </div>

          {/* Second Row of Offerings */}
          <div className="flex gap-20">
            <div className="flex flex-col items-center">
              <img src={network} alt="Networking" className="mb-2 w-32 h-24" />
              <span>Networking</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={shared}
                alt="Shared Operational Cost"
                className="mb-2 w-32 h-24"
              />
              <span>Shared Operational Cost</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={infra}
                alt="Workplace Infrastructure"
                className="mb-2 w-32 h-24"
              />
              <span>Workplace Infrastructure</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={seed} alt="Seed Funding" className="mb-2 w-32 h-24" />
              <span>Seed Funding</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={access}
                alt="Access to Investors"
                className="mb-2 w-32 h-24"
              />
              <span>Access to Investors</span>
            </div>
          </div>

          {/* Register Now Button */}
          <div className="mt-8 ">
            <button className="px-6 py-3 ml-0 mr-36 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Register Now
            </button>
          </div>
        </div>
        <div className="absolute w-[722px] h-[468px] top-[93px] -left-[65px] text-justify  [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-black text-md">
          <p>
            Our startup consultation service is the cornerstone for aspiring
            entrepreneurs seeking to navigate the complexities of launching and
            scaling their ventures. We provide tailored guidance and strategic
            insights to refine business ideas, develop robust plans, and
            overcome obstacles on the path to success. With a team of seasoned
            consultants versed in market analysis, strategic planning, and
            industry trends, we offer comprehensive support at every stage of
            the entrepreneurial journey. Our startup consultation service is the
            cornerstone for aspiring entrepreneurs seeking to navigate the
            complexities of launching and scaling their ventures. We provide
            tailored guidance and strategic insights to refine business ideas,
            develop robust plans, and overcome obstacles on the path to success.
            Our startup consultation service is the cornerstone for aspiring
            entrepreneurs seeking to navigate the complexities of launching and
            scaling their ventures. We provide tailored guidance and strategic
            insights to refine business ideas, develop robust plans, and
            overcome obstacles on the path to success. Our startup consultation
            service is the cornerstone for aspiring entrepreneurs seeking to
            navigate the complexities of launching and scaling their ventures.
            strategic insights to refine business ideas, develop robust plans,
            and overcome obstacles on the path to success.
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
        {/* Horizontal Scrollable Section */}
        <div className="absolute top-[1090px] -ml-[140px] w-[1500px] h-[100px]">
          <h2 className="text-4xl font-sans -ml-[850px] text-customBlue -mt-10 -mb-20">
            INTERESTING BUSINESS CASES
          </h2>
          <div className="flex items-center">
            <button className="text-5xl w-96 h-96 text-black font-bold">
              {"<"}
            </button>
            <div className="flex overflow-x-auto space-x-4 ml-8 mr-8">
               {items &&
              items?.data.map((item) => (
                <div
                  key={item._id}
                  className="w-[250px] h-[100px] bg-white border border-[#e0e0e0] rounded-lg shadow-button-shadow p-4"
                >
                  <img
                    src={item.image}
                    alt={`Item ${item.title}`}
                    className="w-24 h-24 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-700">{item.description}</p>
                    <button className="text-blue-500">Read More</button>
                  </div>
              ))}
            </div>
            <button className="text-5xl ml-2 w-96 h-96 text-black font-bold">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupConsult;
