import { useState } from "react";
import { Link } from "react-router-dom";
import homeimg from "../Assests/group-business-people-discussing-white-background-41200395 1.png";
import nirfimg from "../Assests/webinar-3 1.png";
import startupimg from "../Assests/wp7098396 1.png";
import incubationimg from "../Assests/ai--1024x576 1.png";
import ceoimg from "../Assests/round-photo-1 1.png";
const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      image: nirfimg,
      text: "InsightHub Solution helped our institution on NIRF ranking analysis and improvements. Their team of experts provided us with effective strategies and scalable solutions that were tailored to our unique needs. We are grateful for their guidance and support.",
      name: "Dr. G. Balamurugan",
      title: "CEO, ABC Pvt Ltd",
    },
    {
      id: 2,
      image: startupimg,
      text: "InsightHub Solution provided us with invaluable advice and resources to help our startup grow. Their team was incredibly supportive and knowledgeable, guiding us through each step of the process.",
      name: "Ms. A. Priya",
      title: "CEO, ABC Pvt Ltd",
    },
    {
      id: 3,
      image: incubationimg,
      text: "Working with InsightHub Solution has been a game-changer for our incubation program. Their tailored solutions and expert guidance have significantly boosted our operational efficiency.",
      name: "Mr. K. Rajesh",
      title: "CEO, ABC Pvt Ltd",
    },
  ];
  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to send email goes here
    alert("Form submitted!"); // Placeholder alert, implement actual submission logic
  };
  return (
    <>
      <div className="flex">
        <div className="flex flex-col ml-0">
          <h2 className="text-xl md:text-4xl font-sans text-purpleBlue  mt-10 mr-10 ml-0  md:mt-20 md:mr-52 md:ml-0 md:top-0">
            Expert Consulting Services
          </h2>
          <h1 className="text-3xl md:text-8xl text-customBlue mt-5 ml-0 mr-24 font-sans md:mt-10 md:mr-16 leading-none">
            INSIGHTHUB
          </h1>
          <h1 className="text-3xl md:text-8xl text-customBlue ml-0 mr-[108px] font-sans md:ml-0 md:mr-28 leading-none font-thin">
            SOLUTIONS
          </h1>
          <a
            href="#"
            className="text-blue-700 hover:underline mt-3 md:ml-0 md:mr-[555px]  hover:text-blue-800 md:mt-4 mr-44"
          >
            Learn More →
          </a>
        </div>
        <div className="flex flex-col md:mr-20 ml-0">
          <img
            src={homeimg}
            className="md:mt-10 md:mb-3 md:ml-0 md:w-[4500px] md:h-[300px] mt-0 w-72 h-48"
          />
          <p className="font-sans text-[8px]  md:text-sm md:text-md md:ml-4 text-justify">
            Insighthub Solutions is a trusted consulting firm that offers a wide
            range of services to help your business grow. Our team of experts
            will partner with you every step of the way, providing effective
            strategies and scalable solutions that are tailored to your unique
            needs. Contact us today to learn more.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-2">
        <div className="flex w-full mb-2">
          <div className="w-1/2 p-2">
            <h1 className="text-customBlue font-sans text-md mt-2 mr-[105px]  md:text-3xl md:mr-[266px] md:ml-0 md:mt-24">
              NIRF CONSULTATION
            </h1>
            <p className="mt-3 text-justify md:ml-2 md:text-sm text-[8px]">
              Our NIRF consultation service offers specialized expertise to
              educational institutions striving for excellence in the National
              Institutional Ranking Framework. We provide tailored guidance and
              strategies to enhance institutional performance across various
              parameters, ensuring alignment with NIRF criteria. From optimizing
              academic excellence to fostering research culture, our experienced
              consultants empower institutions to elevate their rankings and
              showcase their strengths effectively.From optimizing academic
              excellence to fostering research culture, our experienced
              consultants empower institutions to elevate their rankings and
              showcase their strengths effectively.
            </p>
            <Link
              to="/nirf"
              className="text-blue-700 hover:underline hover:text-blue-800 mt-10 ml-0 mr-[155px] md:mr-[466px]"
            >
              Explore More →
            </Link>
          </div>
          <div className="w-1/2 p-2">
            <img
              src={nirfimg}
              className="md:w-[500px] md:h-[250px] md:mt-20 md:ml-24 mt-8"
              alt="NIRF Consultation Image"
            />
          </div>
        </div>

        <div className="flex w-full mb-2">
          <div className="w-1/2 p-2 order-2 md:order-1">
            <img
              src={startupimg}
              className="md:w-[500px] md:h-[220px] md:mt-8 md:ml-0 mt-0"
              alt="Startup Consultation Image"
            />
          </div>
          <div className="w-1/2 p-2 order-1 md:order-2">
            <h1 className="text-customBlue font-sans mr-16 text-md md:mr-52  md:text-3xl md:mt-6">
              STARTUP CONSULTATION
            </h1>
            <p className="mt-3 text-justify  md:ml-2 md:text-sm text-[8px]">
              Our startup consultation service is the cornerstone for aspiring
              entrepreneurs seeking to navigate the complexities of launching
              and scaling their ventures. We provide tailored guidance and
              strategic insights to refine business ideas, develop robust plans,
              and overcome obstacles on the path to success. With a team of
              seasoned consultants versed in market analysis, strategic
              planning, and industry trends, we offer comprehensive support at
              every stage of the entrepreneurial journey. versed in market
              analysis, strategic planning, and industry trends, we offer
              comprehensive support at every stage of the entrepreneurial
              journey.
            </p>
            <Link
              to="/startup"
              className="text-blue-700 hover:underline hover:text-blue-800 mt-10 ml-0 mr-[155px] md:mr-[466px]"
            >
              Explore More →
            </Link>
          </div>
        </div>

        <div className="flex w-full mb-2">
          <div className="w-1/2 p-2">
            <h1 className="text-customBlue font-sans text-md mt-2 mr-11  md:text-3xl md:mr-[150px] md:ml-0 md:mt-3">
              INCUBATION CONSULTATION
            </h1>
            <p className="mt-3 text-justify md:ml-2 md:text-sm text-[8px]">
              Our Incubation Consultation service provides tailored support to
              startups and early-stage companies, helping them accelerate growth
              and achieve sustainable success. We offer mentoring, networking
              opportunities, and access to resources that are crucial for
              business development. Whether you need help with product
              development, fundraising, or scaling operations, our incubation
              consultants are here to guide you every step of the way. From
              defining program objectives to designing infrastructure and
              mentorship networks, our experienced consultants provide
              comprehensive support at every stage of the setup process. With
              our expertise, aspiring incubators can create dynamic ecosystems
              that foster creativity, collaboration, and sustainable growth.
            </p>
            <Link
              to="/incubation"
              className="text-blue-700 hover:underline hover:text-blue-800 mt-10 ml-0 mr-[155px] md:mr-[466px]"
            >
              Explore More →
            </Link>
          </div>
          <div className="w-1/2 p-2">
            <img
              src={incubationimg}
              className="md:w-[500px] md:h-[250px] md:mt-3 md:ml-24 mt-8"
              alt="Incubation Consultation Image"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col ml-0">
          <img
            src={ceoimg}
            className=" mt-14 md:mt-10 ml-5 w-full h-32 md:ml-14 md:w-[2050px] md:h-[250px]"
            alt="CEO Image"
          />
          <h3 className="md:mt-4 md:ml-28 md:mr-0 font-sans text-sm ml-9 mt-1 mr-0 md:text-xl">
            Mr.JOHNSMITH{" "}
          </h3>
          <p className="md:mt-1 md:ml-[105px] mt-1 ml-9 font sans text-[7px] md:text-sm">
            CEO,Insighthub Solutions
          </p>
        </div>
        <div className="flex flex-col mr-0">
          <h2 className="font-sans text-md md:text-3xl ml-16 mr-56 md:ml-0 md:mr-[470px] mt-10 text-customBlue">
            MEET OUR CEO
          </h2>
          <p className="font-sans text-[8px] ml-20 md:text-sm text-justify md:mt-3 md:ml-32 md:mr-20">
            Meet our esteemed CEO, John Smith, a visionary leader with a passion
            for innovation and driving positive change. With over two decades of
            experience in the industry, John has steered our company to
            remarkable success through his strategic acumen and commitment to
            excellence. His dynamic leadership style fosters a culture of
            collaboration and empowers our team to exceed expectations. Johns
            dedication to customer satisfaction and employee development sets
            the standard for our organization, ensuring we remain at the
            forefront of our industry. Johns journey to leadership began with a
            deep-rooted belief in the power of perseverance and continuous
            learning. Throughout his career, he has demonstrated a remarkable
            ability to navigate complex challenges and capitalize on emerging
            opportunities, earning him the respect of peers and industry experts
            alike. Under Johns guidance, our company has achieved significant
            milestones, from pioneering innovative technologies to expanding our
            global footprint. Beyond his professional accomplishments, John is
            also a champion of philanthropy, actively supporting initiatives
            that make a meaningful impact in our communities
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <div className="w-1/2">
          <div className="text-center">
            <h1 className="text-xl  md:text-4xl text-left  text-customBlue font-sans mt-16 leading-none md:ml-48 md:mr-20">
              WHAT OUR
              <br />
              CUSTOMER SAY
            </h1>
          </div>
        </div>
        <div className="w-1/2 mr-64">
          {/* Testimonial Image and Text */}
          <div className="mt-8 flex items-start space-x-4">
            <div className="flex flex-col mt-16">
              <img
                src={testimonials[activeTestimonial].image}
                alt={`Testimonial ${activeTestimonial + 1}`}
                className="rounded-full w-24 h-24"
              />
              <p className="font-sans mt-2 mr-0 ">
                {" "}
                {testimonials[activeTestimonial].name}
              </p>
              <p className="text-gray-500  text-[8px] text-center mr-0 ml-0">
                {" "}
                {testimonials[activeTestimonial].title}
              </p>
            </div>
            <p className="text-sm text-gray-700 mt-24">
              {testimonials[activeTestimonial].text}
            </p>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-0 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`h-2 w-2 rounded-full focus:outline-none ${
                  index === activeTestimonial ? "bg-blue-500" : "bg-gray-300"
                }`}
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="max-w-4xl ml-0 ">
          {/* Main Section */}
          <div className="flex flex-wrap">
            {/* Contact Us Section */}
            <div className="w-full md:w-2/4 p-4 ml-0 ">
              <form onSubmit={handleSubmit}>
                <h2 className="text-xl md:text-4xl font-sans text-purpleBlue mt-10 md:mt-0">
                  CONTACT US
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 ml-0 mr-80">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 ml-0">
                    Your Phone Number
                  </label>
                  <input
                    type="text"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2 ml-0">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-6 ">
                  <label className="block text-gray-700 text-sm font-bold mb-2 ml-0">
                    Your Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none focus:shadow-outline w-full md:w-auto"
                >
                  Submit
                </button>
              </form>
            </div>
            {/* About Us Section */}
            <div className="w-full md:w-2/4 md:h-24  md:mr-0">
              <div className="text-left">
                <h2 className="text-xl md:text-4xl font-sans ml-32  text-purpleBlue mt-10 md:mt-0">
                  ABOUT US
                </h2>
                <p className="text-justify text-black mt-4 ml-24">
                  Discover your institution true standing in the National
                  Institutional Ranking Framework (NIRF) with our expert
                  consultancy services. We specialize in providing comprehensive
                  analyses and insights into NIRF data, helping educational
                  institutions gain a clear understanding of their current
                  position and areas for improvement. Utilizing advanced data
                  analytics techniques, we delve deep into the intricacies of
                  NIRF metrics, offering valuable recommendations tailored to
                  enhance performance across various parameters. Our consultancy
                  services extend beyond mere analysis; we guide institutions
                  through strategic initiatives aimed at elevating their NIRF
                  rankings. From identifying key strengths to addressing
                  potential weaknesses, we empower institutions to optimize
                  their practices and policies, fostering continuous improvement
                  and excellence in education. With our NIRF consultancy,
                  institutions can embark on a data-driven journey toward
                  achieving higher rankings and greater recognition on the
                  national stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
