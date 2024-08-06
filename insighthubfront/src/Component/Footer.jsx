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
      <div className="container ml-0 mr-0 mt-24 border-t-2 border-purpleBlue pt-5">
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
            <h4 className="md:text-2xl text-[12px] font-sans ml-0 mr-16 md:mr-0 md:-ml-20">
              Email:
            </h4>
            <p className="mt-0 text-[12px] ml-[73px] md:ml-36 md:mr-0 md:text-xl">
              Insighthubsolutions@gmail.com
            </p>
            <h4 className="md:text-2xl text-[12px] ml-0 mr-10 font-sans mt-1 md:mr-0.5 md:-ml-10">
              Phone no:
            </h4>
            <p className="mt-0 text-[12px] ml-0 mr-3 md:ml-5 md:mr-3 md:text-xl">
              +91 9789685094
            </p>
          </div>

          <div className="md:ml-56 ml-16">
            <h4 className="md:text-2xl text-[12px] font-sans text-purpleBlue">
              Our Corporate Address:
            </h4>
            <p className="mt-3 text-[12px] text-purpleBlue md:text-xl">
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
