import { FaGoogle, FaFacebook, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";
import Alert from "../Component/Alert"; // Import the Alert component

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Add state for success messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth", formData);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          navigate(response.data.redirectUrl); // Redirect based on the response
        }, 2000); // Delay for user to see the success message
      }
    } catch (error) {
      console.error("There was an error signing in!", error);
      setError(
        error.response?.data?.message || "An unexpected error occurred."
      );
    }
  };

  const handleOAuth = async (provider) => {
    try {
      const response = await axios.get(`/auth/${provider}`);
      window.location.href = response.data;
    } catch (error) {
      console.error(`Error authenticating with ${provider}:`, error);
      setError(`Error authenticating with ${provider}.`);
    }
  };

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
            <FaGoogle
              className="w-[40px] h-[40px] text-blue-600 cursor-pointer"
              onClick={() => handleOAuth("google")}
            />
            <FaFacebook
              className="w-[40px] h-[40px] text-blue-900 cursor-pointer"
              onClick={() => handleOAuth("facebook")}
            />
            <FaLinkedin
              className="w-[40px] h-[40px] text-blue-800 cursor-pointer"
              onClick={() => handleOAuth("linkedin")}
            />
          </div>
          <div className="text-[16px] text-black mb-6">or use your Account</div>
          <form className="w-[500px]" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-[16px] text-black mb-2 block"
              >
                Enter your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                className="w-full bg-[#f5f5f5] rounded-[8px] py-2 px-4 text-[#333333] outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-[16px] text-black mb-2 block"
              >
                Enter Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="**********"
                className="w-full bg-[#f5f5f5] rounded-[8px] py-2 px-4 text-[#333333] outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customBlue text-white rounded-[8px] py-2 px-4 hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 text-white text-center p-8 bg-[#2487ce]">
          <h1 className="text-5xl mb-8 font-sans">Come Join Us!</h1>
          <p className="text-2xl mb-8">
            We are so excited to have you here. If you haven’t already, create
            an account to get access to our content.
          </p>
          <button
            className="bg-white text-black rounded-full w-80 h-10"
            onClick={() => navigate("/signup")}
          >
            Don’t have an Account? Sign Up!
          </button>
        </div>
      </div>

      {/* Include Alert component here */}
      <Alert
        message={error || success}
        onClose={() => {
          setError("");
          setSuccess("");
        }}
        type={error ? "error" : "success"}
      />
    </>
  );
};

export default Signin;
