import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      <div className="container md:ml-0 -ml-4 mr-0 mt-28 md:mt-24 border-t-2 border-purpleBlue pt-5">
        <div className="flex flex-wrap ">
          <div>
            <h4 className="md:text-2xl text-[12px] ml-0 mr-5 md:ml-8 font-sans text-purpleBlue">
              Insighthub Solutions
            </h4>
            <div className="flex space-x-1 mt-2 ml-0 mr-5 md:ml-8">
              <a href="https://facebook.com">
                <FaFacebook className="text-blue-600 cursor-pointer text-xl md:text-2xl" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className="text-blue-400 cursor-pointer text-xl md:text-2xl" />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin className="text-blue-800 cursor-pointer text-xl md:text-2xl" />
              </a>
              <a href="https://instagram.com">
                <FaInstagram className="text-pink-600 cursor-pointer text-xl md:text-2xl" />
              </a>
              <a href="https://youtube.com">
                <FaYoutube className="text-red-600 cursor-pointer text-xl md:text-2xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col  space-y-0 text-purpleBlue">
            <h4 className="md:text-2xl text-[12px] font-sans -ml-16 mt-3 md:mt-auto mr-16 md:mr-0 md:-ml-20">
              Email:
            </h4>
            <p className="mt-0 text-[12px] ml-[7px] md:ml-[136px] md:mr-0 md:text-xl">
              Insighthubsolutions@gmail.com
            </p>
            <h4 className="md:text-2xl text-[12px] -ml-16 mr-10 font-sans md:mt-5 md:mr-0.5 md:-ml-10">
              Phone no:
            </h4>
            <p className="mt-0 text-[12px] -ml-14 mr-3 md:ml-1 md:mr-3 md:text-xl">
              +91 9789685094
            </p>
          </div>

          <div className="md:ml-56 ml-[6px]">
            <h4 className="md:text-2xl text-[12px] font-sans text-purpleBlue">
              Our Corporate Address:
            </h4>
            <p className="md:mt-3 mt-1 text-[12px] text-purpleBlue md:text-xl text-justify">
              A-1807 SF, Green Field<br></br> Colony, Faridabad, Delhi<br></br>
              NCR, India,Pin-121010
            </p>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="font-sans text-purpleBlue text-[9px] md:text-[15px] md:ml-0 md:mr-16">
            © Insighthub Solutions - {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
