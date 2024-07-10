import { FaGoogle, FaFacebook, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        className="absolute top-4 left-4 text-black text-3xl z-10"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
      </button>
      <div className="bg-[#2487ce] flex flex-row justify-center w-full h-screen">
        {/* Left Side (formerly Right Side) */}
        <div className="flex flex-col items-center justify-center w-[50%] h-full text-white">
          <div className="text-5xl font-sans mb-8">Come Join Us!</div>
          <p className="text-2xl text-center mb-8">
            We are so excited to have you here. If you havent already, create an
            account to get access to our content.
          </p>
          <button
            className="bg-white text-black w-[80%] h-10 rounded-full mb-4"
            onClick={() => navigate("/signin")}
          >
            Already have an Account? Sign In!
          </button>
        </div>

        {/* Right Side (formerly Left Side) */}
        <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:w-[50%] md:bg-white shadow-2xl">
          <h1 className="text-[#0077B5] text-2xl mt-6">
            Welcome Back! Register Here
          </h1>
          <h4 className="text-black mt-6">Register using</h4>
          <div className="flex flex-row mt-6">
            <FaGoogle className="w-16 h-8 text-[#4285F4] bg-white gap-0 cursor-pointer ml-0" />
            <FaFacebook className="w-16 h-8 text-[#3b5998] bg-white gap-0  cursor-pointer -ml-4 " />
            <FaLinkedin className="w-16 h-8 text-[#0077B5] bg-white cursor-pointer -ml-4" />
          </div>

          <div className="text-black mt-8 mb-4 text-xl">
            or register details manually
          </div>
          <label
            htmlFor="name"
            className="text-[16px] text-black -ml-[350px] mb-2 mt-4 block"
          >
            Enter Your Name
          </label>
          <input
            type="text"
            placeholder="Dave Gray"
            className="w-[80%] bg-[#eeeeee] rounded-lg px-4 py-2 mt-2 text-black"
          />
          <label
            htmlFor="email"
            className="text-[16px] text-black -ml-[350px] mb-2 mt-4 block"
          >
            Enter Your Email
          </label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            className="w-[80%] bg-[#eeeeee] rounded-lg px-4 py-2 mt-2 text-black"
          />
          <label
            htmlFor="password"
            className="text-[16px] text-black -ml-[350px] mb-2 mt-4 block"
          >
            Enter Password
          </label>
          <input
            type="password"
            placeholder="................"
            className="w-[80%] bg-[#eeeeee] rounded-lg px-4 py-2 mt-2 text-black"
          />
          <label
            htmlFor="password"
            className="text-[16px] text-black -ml-[350px] mb-2 mt-4 block"
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="................."
            className="w-[80%] bg-[#eeeeee] rounded-lg px-4 py-2 mt-2 text-black"
          />
          <button className="bg-purpleBlue text-white w-[80%] h-10 rounded-lg mt-4">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
