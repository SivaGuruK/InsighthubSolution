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
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
const images = [
  startupimg ,
  startupimg ,
  startupimg,
];

const StartupConsult = () => {
  const navigate = useNavigate();
 const breakPoints = [
   { width: 1, itemsToShow: 1 },
   { width: 550, itemsToShow: 2 },
   { width: 768, itemsToShow: 3 },
   { width: 1200, itemsToShow: 4 },
 ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("/startup");
      setItems(response.data);
    };
    fetchdata();
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
      <div className="bg-white w-[1400px] h-[2700px] md:h-[1270px] relative">
        <div className="absolute h-[90px] top-[12px] -left-[10px] md:-left-[68px] [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] md:text-4xl text-[18px] tracking-[0] leading-[90px] whitespace-nowrap">
          STARTUP CONSULTATION
        </div>

        {/* Our Offerings Section */}
        <div className="relative w-full mb-0 mt-[1180px] md:mt-[500px]">
          <div className="mb-8">
            <h2 className="md:text-4xl text-[18px] font-sans text-customBlue mb-4">
              OUR OFFERINGS
            </h2>
            <p className="text-lg text-black mb-4 mt-3">
              The list of services available are:
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 mb-8">
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
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Register Now
            </button>
          </div>
        </div>

        <div className="absolute md:w-[722px] w-[300px] md:h-[468px] top-[300px] md:top-[93px] -left-1 md:-left-[65px] text-justify  [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-black text-md">
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
        <div className="absolute top-[93px] right-[0px] left-0 md:left-[790px] md:w-[500px] w-[250px] md:h-[568px] h-[280px]">
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
        <div className="absolute md:top-[970px]  top-[2260px]  md:mb-10 -ml-[140px] w-[460px] md:w-[1500px] h-[10px]">
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
                      onClick={() => handleReadMore(item._id, "startup")}
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

export default StartupConsult;
