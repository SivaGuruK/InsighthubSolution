import { useEffect, useState } from "react";
import axios from "../api/axios";

const NIRFService = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    studentStrength: "",
    facultyMetric: "",
    financialResources: "",
    facultyStudentRatio: "",
  });

  const [nirfScore, setNirfScore] = useState(null);


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
      const response = await axios.post("/calculate-nirf", formData); // Adjust endpoint accordingly
      setNirfScore(response.data.score);
    } catch (error) {
      console.error("Error calculating NIRF score:", error);
    }
  };
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
  return (
    <>
      <div className="bg-white flex flex-row justify-center ">
        <div className="bg-white w-[1440px] h-[1501px] relative">
          <div className="absolute w-[644px] h-[655px] top-[143px] left-[42px]">
            <h1 className=" -ml-427 -mt-32 [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-4xl tracking-[0] leading-[90px] whitespace-nowrap">
              NIRF CONSULTATION
            </h1>
            <p className="[font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-black  leading-0 text-justify -ml-[75px]">
              Our NIRF consultation service offers specialized expertise to
              educational institutions striving for excellence in the National
              Institutional Ranking Framework. We provide tailored guidance and
              strategies to enhance institutional performance across various
              parameters, ensuring alignment with NIRF criteria. From optimizing
              academic excellence to fostering research culture, our experienced
              consultants empower institutions to elevate their rankings and
              showcase their strengths effectively. We provide tailored guidance
              and strategies to enhance institutional performance across various
              parameters, ensuring alignment with NIRF criteria We provide
              tailored guidance and strategies to enhance institutional
              performance across various parameters, ensuring alignment with
              NIRF criteriarmance across various parameters, ensuring alignment
              with NIRF criteria. Our NIRF consultation service offers
              specialized expertise to educational institutions striving for
              excellence in the National Institutional Ranking Framework. We
              provide tailored guidance and strategies to enhance institutional
              performance across various parameters, ensuring alignment with
              NIRF criteria. From optimizing academic excellence to fostering
              research culture, our experienced consultants empower institutions
              to elevate their rankings and showcase their strengths
              effectively. We provide tailored guidance and strategies to
              enhance institutional performance across various parameters,
              ensuring alignment with NIRF criteria We provide tailored guidance
              and strategies to enhance institutional performance across various
              parameters, ensuring alignment with NIRF criteriarmance across
              various parameters, ensuring alignment with NIRF criteriaWe
              provide tailored guidance and strategies to enhance institutional
              performance across various parameters, ensuring alignment with
              NIRF criteriarmance across various parameters, ensuring alignment
              with NIRF criteria
            </p>
          </div>
          <div className="absolute h-24 top-[609px] left-[527px] [font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-4xl tracking-[0] leading-[96px] whitespace-nowrap">
            CONTACT US
          </div>
          <div className="flex flex-wrap top-[679px] w-[732px] h-[597px] items-start gap-[var(--variable-collection-spacing-SM)] absolute left-[342px]">
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
          <h1 className="[font-family:'IBM_Plex_Sans-Regular',Helvetica] font-normal text-[#2487ce] text-4xl ml-[650px] mt-9">
            CALCULATE YOUR NIRF
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-[597px] h-[100px] items-start gap-2 absolute top-[81px] left-[733px]">
              <div className="relative self-stretch -left-[203px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                Choose your college name
              </div>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="w-[588px] flex-[0_0_auto] flex items-start gap-2 px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow"
                placeholder="ABC College"
              />
            </div>
            <div className="flex flex-col w-[597px] h-[120px] items-start gap-2 absolute top-[167px] left-[733px]">
              <div className="relative -left-[199px] self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                Student strength (1000-1500)
              </div>
              <input
                type="number"
                name="studentStrength"
                value={formData.studentStrength}
                onChange={handleChange}
                className="w-[588px] flex-[0_0_auto] flex items-start gap-2 px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow"
                placeholder="Enter value"
              />
            </div>
            <div className="flex flex-col w-[597px] h-[120px] items-start gap-2 absolute top-[257px] left-[733px]">
              <div className="relative -left-[223px] self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                Faculty metric (10-20)
              </div>
              <input
                type="number"
                name="facultyMetric"
                value={formData.facultyMetric}
                onChange={handleChange}
                className="w-[588px] flex-[0_0_auto] flex items-start gap-2 px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow"
                placeholder="Enter value"
              />
            </div>
            <div className="flex flex-col w-[597px] h-[120px] items-start gap-2 absolute top-[345px] left-[733px]">
              <div className="relative -left-[198px] self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                Financial resources (in lakhs)
              </div>
              <input
                type="number"
                name="financialResources"
                value={formData.financialResources}
                onChange={handleChange}
                className="w-[588px] flex-[0_0_auto] flex items-start gap-2 px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow"
                placeholder="Enter value"
              />
            </div>
            <div className="flex flex-col w-[597px] h-[120px] items-start gap-2 absolute top-[435px] left-[733px]">
              <div className="relative -left-[203px] self-stretch mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-black text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                Faculty-student ratio (1-20)
              </div>
              <input
                type="number"
                name="facultyStudentRatio"
                value={formData.facultyStudentRatio}
                onChange={handleChange}
                className="w-[588px] flex-[0_0_auto] flex items-start gap-2 px-4 py-3 relative bg-white rounded-lg border border-solid border-[#e0e0e0] shadow-button-shadow"
                placeholder="Enter value"
              />
            </div>
            <button
              type="submit"
              className="all-[unset] box-border flex w-[597px]  items-center justify-center gap-2 px-8 py-4 relative bg-[#3c38cd] rounded-lg shadow-button-shadow top-[458px] left-[733px]"
            >
              <div className="relative w-fit mt-[-1.00px] font-body-text font-[number:var(--body-text-font-weight)] text-white text-[length:var(--body-text-font-size)] tracking-[var(--body-text-letter-spacing)] leading-[var(--body-text-line-height)] whitespace-nowrap [font-style:var(--body-text-font-style)]">
                Submit
              </div>
            </button>
          </form>
          {nirfScore !== null && (
            <div className="absolute top-[598px] left-[733px] text-black">
              <h2>Your NIRF Score: {nirfScore}</h2>
            </div>
          )}
        </div>
      </div>
      <div className="absolute top-[1290px] left-[342px] w-[1500px] mb-20">
        <h2 className="text-4xl font-sans text-customBlue mt-10 mb-10">
          INTERESTING BUSINESS CASES
        </h2>
        <div className="flex flex-wrap gap-4">
          <button className="text-5xl ml-2 w-96 h-96 text-black font-bold">
            &#9664;
          </button>
          <div className="flex overflow-x-auto space-x-4 ml-8 mr-8">
            {items &&
              items.map((item) => (
                <div
                  key={item._id}
                  className="w-[250px] h-[100px] bg-white border border-[#e0e0e0] rounded-lg shadow-button-shadow p-4"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title ? `Item ${item.title}` : "Item Image"}
                      className="w-24 h-24 object-cover"
                    />
                  )}
                  <h3 className="text-xl font-semibold text-black">
                    {item.title ? item.title : "No title available"}
                  </h3>
                  <p className="text-base text-gray-700">
                    {item.description
                      ? item.description
                      : "No description available"}
                  </p>
                </div>
              ))}
          </div>
          <button className="text-5xl ml-2 w-96 h-96 text-black font-bold">
            &#9654;
          </button>
        </div>
      </div>
    </>
  );
};

export default NIRFService;
