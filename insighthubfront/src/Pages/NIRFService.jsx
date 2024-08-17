import { useEffect, useState } from "react";
import axios from "../api/axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";
const NIRFService = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    studentStrength: "",
    facultyMetric: "",
    financialResources: "",
    facultyStudentRatio: "",
  });

  const [nirfScore, setNirfScore] = useState(null);
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/nirf");
        setItems(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
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
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await calculateNIRF();
  };

  const calculateNIRF = async () => {
    try {
      const response = await axios.post("/calculate-nirf", formData);
      setNirfScore(response.data.score);
    } catch (error) {
      console.error("Error calculating NIRF score:", error);
    }
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
    <>
      <div className="bg-white flex flex-row justify-center ">
        <div className="bg-white w-[1440px] md:h-[1501px] h-[2351px] relative">
          <div className="absolute w-[644px] h-[655px] top-[143px] left-[42px]">
            <h1 className=" md:-ml-427  -mt-32  [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] md:text-4xl text-[20px] tracking-[0] leading-[90px] whitespace-nowrap -ml-[530px]">
              NIRF CONSULTATION
            </h1>
            <p className="[font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-black  text-[12px] md:text-[16px] leading-0 text-justify md:-ml-[75px] -ml-10 md:w-auto w-[300px]">
              Our NIRF consultation service offers specialized expertise to
              educational institutions striving for excellence in the National
              Institutional Ranking Framework. We provide tailored guidance and
              strategies to enhance institutional performance across various
              parameters, ensuring alignment with NIRF criteria. From optimizing
              academic excellence to fostering research culture, our experienced
              consultants empower institutions to elevate their rankings and
              showcase their strengths effectively. Our NIRF consultation
              service offers specialized expertise to educational institutions
              striving for excellence in the National Institutional Ranking
              Framework. We provide tailored guidance and strategies to enhance
              institutional performance across various parameters, ensuring
              alignment with NIRF criteria. From optimizing academic excellence
              to fostering research culture, our experienced consultants empower
              institutions to elevate their rankings and showcase their
              strengths effectively. We provide tailored guidance and strategies
              to enhance institutional performance across various parameters,
              ensuring alignment with NIRF criteria.With a comprehensive
              approach, we analyze your institution current standing, identify
              areas for improvement, and offer actionable insights to help you
              achieve your NIRF goals. Our services also include quarterly data
              analysis, comparative studies, and personalized advice on research
              improvement, graduate outcomes, and social media presence. By
              partnering with us, your institution will be well-equipped to
              navigate the complexities of the NIRF ranking process and achieve
              sustained success.We also offer patent commercialization support
              to maximize the value of your intellectual property and provide
              ongoing guidance through regular visits and review meetings.
              Together, we ensure your institution not only meets but exceeds
              NIRF expectations, driving continuous improvement and excellence.
            </p>
          </div>
          <div className="absolute h-24 top-[1330px] md:top-[609px] md:left-[527px] -left-[4px] [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-[18px] md:text-4xl tracking-[0] leading-[96px] whitespace-nowrap">
            CONTACT US
          </div>
          <div className="flex flex-wrap top-[1410px] md:top-[679px] w-[732px] h-[597px] items-start gap-[var(--variable-collection-spacing-SM)] absolute left-0 md:left-[342px]">
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
          <h1 className="[font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] md:text-4xl text-[16px] md:ml-[650px] md:mt-4 -ml-32 mt-[790px]">
            CALCULATE YOUR NIRF
          </h1>
          <form onSubmit={handleSubmit} className="p-4 md:ml-[700px] md:-mt-2">
            <div className="flex flex-col w-full max-w-md mx-auto space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="collegeName"
                  className="text-sm font-semibold text-black"
                >
                  Choose your college name
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="ABC College"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="studentStrength"
                  className="text-sm font-semibold text-black"
                >
                  Student strength (1000-1500)
                </label>
                <input
                  type="number"
                  id="studentStrength"
                  name="studentStrength"
                  value={formData.studentStrength}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Enter value"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="facultyMetric"
                  className="text-sm font-semibold text-black"
                >
                  Faculty metric (10-20)
                </label>
                <input
                  type="number"
                  id="facultyMetric"
                  name="facultyMetric"
                  value={formData.facultyMetric}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Enter value"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="financialResources"
                  className="text-sm font-semibold text-black"
                >
                  Financial resources (in lakhs)
                </label>
                <input
                  type="number"
                  id="financialResources"
                  name="financialResources"
                  value={formData.financialResources}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Enter value"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="facultyStudentRatio"
                  className="text-sm font-semibold text-black"
                >
                  Faculty-student ratio (1-20)
                </label>
                <input
                  type="number"
                  id="facultyStudentRatio"
                  name="facultyStudentRatio"
                  value={formData.facultyStudentRatio}
                  onChange={handleChange}
                  className="mt-1 p-3 border border-gray-300 rounded-lg w-full"
                  placeholder="Enter value"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg w-full mt-4 shadow-lg hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
          {nirfScore !== null && (
            <div className="absolute top-[598px] left-[733px] text-black">
              <h2>Your NIRF Score: {nirfScore}</h2>
            </div>
          )}
        </div>
      </div>
      <div className="absolute md:top-[1300px]  top-[2000px]  md:mb-10 -ml-[140px] md:w-[1500px] h-[10px]">
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
                    onClick={() => handleReadMore(item._id, "nirf")}
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
    </>
  );
};

export default NIRFService;