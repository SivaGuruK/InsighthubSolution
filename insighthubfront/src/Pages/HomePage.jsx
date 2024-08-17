import { useState } from "react";
import { Link } from "react-router-dom";
import homeimg from "../Assests/group-business-people-discussing-white-background-41200395 1.png";
import nirfimg from "../Assests/webinar-3 1.png";
import startupimg from "../Assests/wp7098396 1.png";
import incubationimg from "../Assests/ai--1024x576 1.png";
import ceoimg from "../Assests/round-photo-1 1.png";
import balamurugan from "../Assests/Balamuruganjpg.jpg"
import mala from "../Assests/R.Mala_.jpg"
import shivendra from "../Assests/Shivendra.jpg"
import Sharanya from "../Assests/Sharanya.jpg"
const HomePage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      image: balamurugan,
      text: "Insighthub Solution and their team members significantly aided our institution with NIRF ranking analysis and improvements. Their team of experts delivered effective strategies and scalable solutions tailored to our unique needs. We are immensely grateful for their guidance and support, which have been instrumental in our progress.",
      name: "Dr. G. Balamurugan",
      title:
        "IQAC Director, Mepco Schlenk Engineering College, Sivakashi, Madurai, India",
    },
    {
      id: 2,
      image: mala,
      text: "Insighthub Solution is the best consulting firm we've ever partnered with. Their team of experts is exceptionally knowledgeable, professional, and consistently responsive. Their insights and recommendations have been invaluable to our success. I highly recommend their services.",
      name: "Dr.R.Mala",
      title: "Prof. In-Charge, Mepco Incubation Center",
    },
    {
      id: 3,
      image: ceoimg,
      text: "Insighthub Solution's mentorship was instrumental in validating our startup idea. Their team helped us refine our concept and align it with market demands. The insights we gained were invaluable, ensuring we built a strong foundation from the start. We are truly grateful for their expertise and support.",
      name: "Mr. A. K. Patra",
      title: "Founder, WPsuperiors",
    },
    {
      id: 4,
      image: shivendra,
      text: "Insighthub Solution provided unparalleled guidance during our research and development phase. Their team of experts offered tailored solutions that addressed our specific challenges, enhancing our innovation process. The result was a well-researched, competitive product that stands out in the market. We highly recommend their services.",
      name: "Mr. Shivendra Singh Chauhan",
      title: "Founder & CEO, BHRAMOS TECHNOLOGIES PVT. LTD",
    },
    {
      id: 5,
      image: ceoimg,
      text: "Insighthub Solution has been pivotal in our startup's growth journey. Their team provided us with tailored strategies that not only accelerated our market entry but also sustained our growth trajectory. The comprehensive plan they developed addressed our unique challenges and opportunities, leading to remarkable business expansion. We are immensely grateful for their exceptional support and expertise.",
      name: "Srividya (Vidya) Venkatraman",
      title: "Founder, Sukra Infotek",
    },
    {
      id: 6,
      image: Sharanya,
      text: "Insighthub Solution helped us navigate a challenging business landscape and achieve our goals. Their strategic planning and in-depth analysis provided us with a unique plan that addressed our company's strengths, weaknesses, and opportunities. The results have been phenomenal, and we couldn't be happier with their support.",
      name: "Sharanya Eshwaran",
      title: "Founder, Pentad Education Pvt. Ltd",
    },
  ];
  const handleDotClick = (index) => {
    setActiveTestimonial(index);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };
  return (
    <>
      <div className="flex">
        <div className="flex flex-col ml-0">
          <h2 className="text-md md:text-4xl font-sans text-purpleBlue  mt-10 mr-16  md:mt-20 md:mr-52 md:ml-0 md:top-0">
            Expert Consulting Services
          </h2>
          <h1 className="text-2xl md:text-8xl text-customBlue mt-5 ml-0 mr-28 font-sans md:mt-10 md:mr-16 leading-none">
            INSIGHTHUB
          </h1>
          <h1 className="text-2xl md:text-8xl text-customBlue ml-0 mr-[123px] font-sans md:ml-0 md:mr-28 leading-none font-thin">
            SOLUTIONS
          </h1>
          <a
            href="#"
            className="text-blue-700 hover:underline mt-56 md:ml-0 md:mr-[500px] md:text-xl text-[9px] hover:text-blue-800 md:mt-4 mr-52"
          >
            Learn More →
          </a>
        </div>
        <div className="flex flex-col md:mr-20 md:ml-0 mt-24 -ml-[280px] md:mt-0 mix-blend-multiply">
          <img
            src={homeimg}
            className="md:-mt- md:mb-3 md:ml-0 md:w-[9000px] md:h-[400px]  w-64 h-48"
          />
          <p className="font-sans text-[8px] ml-4  md:text-[15px] md:-ml-4 w-56 md:w-[680px] text-justify">
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
            <h1 className="text-customBlue font-sans text-[13px] mt-2 mr-[0px]  -ml-6 md:text-3xl md:mr-[266px] md:ml-0 md:mt-20">
              NIRF CONSULTATION
            </h1>
            <p className="md:mt-3 text-justify md:ml-2 md:text-sm mt-32 md:w-auto w-60 text-[8px]">
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
              className="text-blue-700 hover:underline md:text-[16px] text-[10px] hover:text-blue-800 mt-10 md:-ml-52 -ml-16 mr-[2px] md:mr-[250px]"
            >
              Explore More →
            </Link>
          </div>
          <div className=" p-2">
            <img
              src={nirfimg}
              className="md:w-[500px] md:h-[250px] md:mt-20 md:ml-24 mt-10 -ml-32 max-w-7xl h-24"
              alt="NIRF Consultation Image"
            />
          </div>
        </div>

        <div className="flex w-full mb-2">
          <div className=" p-2 ">
            <img
              src={startupimg}
              className="md:w-[500px] md:h-[220px] md:mt-8 md:ml-0 mt-10 ml-10 max-w-7xl h-24"
              alt="Startup Consultation Image"
            />
          </div>
          <div className="w-1/2 p-2 md:ml-20">
            <h1 className="text-customBlue font-sans mr-96 md:mr-52 text-[13px] md:text-3xl md:mt-6 mt-2 whitespace-nowrap md:ml-auto -ml-52">
              STARTUP CONSULTATION
            </h1>
            <p className="md:mt-3 mt-32 -ml-52 text-justify  md:ml-2 md:text-sm text-[8px] md:w-auto w-60">
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
              className="text-blue-700 hover:underline hover:text-blue-800 mt-10 -ml-80 md:ml-0 mr-[155px] md:mr-[466px] md:text-[16px] text-[10px]"
            >
              Explore More →
            </Link>
          </div>
        </div>

        <div className="flex w-full mb-2">
          <div className="w-1/2 p-2">
            <h1 className="text-customBlue font-sans text-[13px] whitespace-nowrap mt-2 mr-11  md:text-3xl md:mr-[150px] md:ml-0 md:mt-3">
              INCUBATION CONSULTATION
            </h1>
            <p className="md:mt-3 mt-32 text-justify md:ml-2 md:text-sm text-[8px] md:w-auto w-60">
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
              className="text-blue-700 hover:underline hover:text-blue-800 mt-10 -ml-16 mr-[1px] md:mr-[466px] md:text-[16px] text-[10px]"
            >
              Explore More →
            </Link>
          </div>
          <div className="md:w-1/2 p-2">
            <img
              src={incubationimg}
              className="md:w-[500px] md:h-[250px] md:mt-3 md:ml-24 mt-10 -ml-28 max-w-7xl h-24"
              alt="Incubation Consultation Image"
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col md:ml-0 ml-16">
          <img
            src={ceoimg}
            className=" mt-8 md:mt-10  w-60 h-28 md:ml-14 md:w-[2050px] md:h-[250px]"
            alt="CEO Image"
          />
          <h3 className="md:mt-4 md:ml-28 md:mr-0 font-sans text-sm  mt-1 mr-0 md:text-xl">
            Mr.JOHNSMITH{" "}
          </h3>
          <p className="md:mt-1 md:ml-[105px] mt-1  font sans text-[7px] md:text-sm">
            CEO,Insighthub Solution
          </p>
        </div>
        <div className="flex flex-col mr-0">
          <h2 className="font-sans text-[13px] whitespace-nowrap mt-2  md:text-3xl  -ml-[390px]  md:ml-0 md:mr-[470px] md:mt-10 text-customBlue">
            MEET OUR CEO
          </h2>
          <p className="font-sans text-[8px] -ml-40 md:text-sm text-justify md:mt-3 md:ml-32 md:mr-20 mt-44 md:w-auto w-60 mr-24">
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
      <div className="flex md:items-center md:justify-center md:space-x-4 mt-4">
        <div className="w-1/2">
          <div className="text-center">
            <h1 className="text-[13px] whitespace-nowrap  md:text-4xl text-left  text-customBlue font-sans mt-0 leading-none md:ml-10 md:mr-20">
              WHAT OUR
              <br />
              CUSTOMER SAY
            </h1>
          </div>
        </div>
        <div className="w-[500px] mr-64 md:mt-auto ">
          {/* Testimonial Image and Text */}
          <div className="mt-8 flex items-start md:space-x-4">
            <div className="flex flex-col mt-5 md:mt-auto -ml-5 md:-ml-32">
              <img
                src={testimonials[activeTestimonial].image}
                alt={`Testimonial ${activeTestimonial + 1}`}
                className="rounded-full w-24 h-24 -ml-7"
              />
              <p className="font-sans mt-2 md:mr-0 whitespace-nowrap -ml-10 ">
                {" "}
                {testimonials[activeTestimonial].name}
              </p>
              <p className="text-gray-500  text-[8px] text-center mr-0 md:-ml-12 -ml-16">
                {" "}
                {testimonials[activeTestimonial].title}
              </p>
            </div>
            <p className="md:text-sm text-black text-justify text-[10px] md:mt-4 mt-44 -ml-44 md:w-[800px] w-60 md:-ml-0">
              {testimonials[activeTestimonial].text}
            </p>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-3 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                className={`h-2 w-2 rounded-full focus:outline-none ${
                  index === activeTestimonial ? "bg-blue-500" : "bg-gray-300"
                }`}
                style={{ lineHeight: "0.5rem" }} 
                onClick={() => handleDotClick(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 mb-0">
        <div className="flex flex-wrap">
          {/* Contact Us Section */}
          <div className="w-full md:w-1/2 p-4">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <h2 className="text-[16px] md:text-4xl font-sans text-customBlue mt-2 md:-ml-auto -ml-48 mb-4 md:mt-0">
                CONTACT US
              </h2>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 -ml-52 md:-ml-[430px]">
                  Your Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  placeholder="Enter your name"
                  style={{ placeholderColor: "rgba(0, 0, 0, 0.4)" }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 -ml-[160px] md:-ml-[370px]">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  placeholder="Enter your phone number"
                  style={{ placeholderColor: "rgba(0, 0, 0, 0.4)" }}
                />
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm font-bold mb-2 -ml-40 md:-ml-[370px]">
                  Your Email Address
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
                  placeholder="Enter your email address"
                  style={{ placeholderColor: "rgba(0, 0, 0, 0.4)" }}
                />
              </div>
              <div className="mb-6">
                <label className="block text-black text-sm font-bold mb-2 -ml-48 md:-ml-[410px]">
                  Your Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline-xl focus:border-blue-500 h-32 resize-none"
                  placeholder="Enter your message"
                  style={{ placeholderColor: "rgba(0, 0, 0, 0.4)" }}
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
          <div className="w-full md:w-1/2 p-4">
            <div className="text-left">
              <h2 className="text-[16px] md:text-4xl font-sans text-customBlue mt-3 -ml-4 md:ml-44 md:mt-0">
                ABOUT US
              </h2>
              <p className="text-justify text-gray-700 md:mt-6 mt-3 md:ml-10 -ml-4 md:w-[650px] w-60 md:text-xl text-[10px] md:mb-0 -mb-24">
                Discover your institution true standing in the National
                Institutional Ranking Framework (NIRF) with our expert
                consultancy services. We specialize in providing comprehensive
                analyses and insights into NIRF data, helping educational
                institutions gain a clear understanding of their current
                position and areas for improvement. Utilizing advanced data
                analytics techniques, we delve deep into the intricacies of NIRF
                metrics, offering valuable recommendations tailored to enhance
                performance across various parameters. Our consultancy services
                extend beyond mere analysis; we guide institutions through
                strategic initiatives aimed at elevating their NIRF rankings.
                From identifying key strengths to addressing potential
                weaknesses, we empower institutions to optimize their practices
                and policies, fostering continuous improvement and excellence in
                education. With our NIRF consultancy, institutions can embark on
                a data-driven journey toward achieving higher rankings and
                greater recognition on the national stage.With our NIRF
                consultancy, institutions can embark on a data-driven journey
                toward achieving higher rankings and greater recognition on the
                national stage.higher rankings and greater recognition on the
                national stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
