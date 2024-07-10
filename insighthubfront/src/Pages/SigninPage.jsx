import { FaGoogle, FaFacebook, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="absolute top-4 left-4 text-black text-3xl z-10"
        onClick={() => navigate("/")}
      >
        <FaArrowLeft />
      </button>
      <div className="relative flex flex-col md:flex-row min-h-screen bg-[#2487ce]">
        <div className="flex flex-col items-center justify-center bg-[#ffffff] w-full md:w-1/2 p-8 shadow-2xl">
          <div className="text-2xl font-medium text-customBlue mb-6">
            Welcome Back! Login Here
          </div>
          <div className="text-[16px] text-black mb-6">Login using</div>
          <div className="flex gap-4 mb-6">
            <FaGoogle className="w-[40px] h-[40px] text-blue-600 cursor-pointer" />
            <FaFacebook className="w-[40px] h-[40px] text-blue-900 cursor-pointer" />
            <FaLinkedin className="w-[40px] h-[40px] text-blue-800 cursor-pointer" />
          </div>
          <div className="text-[16px] text-black mb-6">or use your Account</div>
          <div className="mb-4 w-[500px]">
            <label
              htmlFor="email"
              className="text-[16px] text-black mb-2 block -ml-96"
            >
              Enter your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="abc@gmail.com"
              className="w-full bg-[#f5f5f5] rounded-[8px] py-2 px-4 text-[#333333] outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4 w-[500px]">
            <label
              htmlFor="password"
              className="text-[16px] text-black mb-2 block -ml-96"
            >
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="............"
              className="w-full bg-[#f5f5f5] rounded-[8px] py-2 px-4 text-[#333333] outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <p className="text-customBlue text-sm cursor-pointer -ml-96 mt-2">
            Forgot Password?
          </p>
          <button className="bg-purpleBlue w-[90%] mt-6 text-white rounded-[8px] py-2 px-6 hover:bg-blue-600 transition-colors duration-300">
            Login
          </button>
        </div>
        {/* Left Side */}
        <div className="hidden md:flex flex-col items-center justify-center bg-[#2487ce] w-1/2 shadow-2xl">
          <div className="text-white text-[44px] font-medium mb-4">
            Welcome back!
          </div>
          <p className="text-white text-[24px] font-medium mb-8 text-center">
            We are so happy to have you here. Its great to see you back and we
            hope you have an enjoyable time away.
          </p>
          <button
            className="bg-[#eeeeee] w-[80%] text-black rounded-[20px] py-2 px-4 pointer-cursor"
            onClick={() => navigate("/signup")}
          >
            No Account Yet? Sign Up!
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
