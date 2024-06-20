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
      <div className="container ml-0 mr-2 border-t-2 border-purpleBlue pt-5">
        <div className="flex flex-wrap ">
          <div>
            <h4 className="text-28px ml-8 font-sans text-purpleBlue">
              Insighthub Solutions
            </h4>
            <div className="flex space-x-1 mt-2 ml-8">
              <a href="https://facebook.com">
                <FaFacebook className="text-blue-600 cursor-pointer" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className="text-blue-400 cursor-pointer" />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin className="text-blue-800 cursor-pointer" />
              </a>
              <a href="https://instagram.com">
                <FaInstagram className="text-pink-600 cursor-pointer" />
              </a>
              <a href="https://youtube.com">
                <FaYoutube className="text-red-600 cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex flex-col  space-y-0 text-purpleBlue">
            <h4 className="text-24px font-sans ml-52">Email:</h4>
            <p className="mt-0 ml-96 mr-0 text-24px">Insighthubsolutions@gmail.com</p>
              <h4 className="text-24px font-sans mt-1 mr-0.5 ml-60">Phone no:</h4>
              <p className="mt-0 ml-72 mr-3 text-24px">+91 9789685094</p>
          </div>

          <div className="ml-56">
            <h4 className="text-24px font-sans text-purpleBlue">Our Corporate Address:</h4>
            <p className="mt-3 text-purpleBlue text-24px">
              A-1807 SF, Green Field<br></br> Colony, Faridabad, Delhi<br></br>
              NCR, India,Pin-121010
            </p>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="font-sans text-purpleBlue text-1px ml-36">
            © Insighthub Solutions - {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
