import { FaGoogle, FaFacebook, FaLinkedin, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../api/axios";
import Alert from "../Component/Alert"; // Import the Alert component

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" }); // State for alerts
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setAlert({ message: "Please fill out all fields.", type: "error" });
      return;
    }

    if (password !== confirmPassword) {
      setAlert({ message: "Passwords do not match.", type: "error" });
      return;
    }

    try {
      const response = await axios.post("/users", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 201) {
        setAlert({ message: "User registered successfully.", type: "success" });
        setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds to show the alert
      }
    } catch (error) {
      console.error("There was an error signing up!", error);
      setAlert({
        message:
          "Error signing up: " +
          (error.response?.data?.message || error.message),
        type: "error",
      });
    }
  };

  const handleOAuth = async (provider) => {
    try {
      const response = await axios.get(`/auth/${provider}`);
      window.location.href = response.data;
    } catch (error) {
      console.error(`Error authenticating with ${provider}:`, error);
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
      <div className="bg-[#2487ce] flex flex-row justify-center w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full md:w-[50%] h-full text-white">
          <div className="text-5xl font-sans mb-8">Come Join Us!</div>
          <p className="text-2xl text-center mb-8">
            We are so excited to have you here. If you have not already, create
            an account to get access to our content.
          </p>
          <button
            className="bg-white text-black w-[80%] h-10 rounded-full mb-4"
            onClick={() => navigate("/signin")}
          >
            Already have an Account? Sign In!
          </button>
        </div>

        <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:w-[50%] md:bg-white shadow-2xl">
          <h1 className="text-[#0077B5] text-2xl mt-6">
            Welcome Back! Register Here
          </h1>
          <h4 className="text-black mt-6">Register using</h4>
          <div className="flex flex-row mt-6">
            <FaGoogle
              className="w-16 h-8 text-[#4285F4] bg-white gap-0 cursor-pointer ml-0"
              onClick={() => handleOAuth("google")}
            />
            <FaFacebook
              className="w-16 h-8 text-[#3b5998] bg-white gap-0 cursor-pointer -ml-4"
              onClick={() => handleOAuth("facebook")}
            />
            <FaLinkedin
              className="w-16 h-8 text-[#0077B5] bg-white cursor-pointer -ml-4"
              onClick={() => handleOAuth("linkedin")}
            />
          </div>
          <h4 className="text-black mt-6">or use your Email</h4>
          <form className="mt-6 w-4/5 md:w-[70%]" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="text-black mb-2 block -ml-6 mr-28"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="w-full rounded-[8px] py-2 px-4 outline-none border border-gray-300"
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="text-black mb-2 block">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="w-full rounded-[8px] py-2 px-4 outline-none border border-gray-300"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-black mb-2 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
                className="w-full rounded-[8px] py-2 px-4 outline-none border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-black mb-2 block">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="********"
                className="w-full rounded-[8px] py-2 px-4 outline-none border border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="text-black mb-2 block"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className="w-full rounded-[8px] py-2 px-4 outline-none border border-gray-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0077B5] text-white rounded-[8px] py-2 px-4 hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Alert Component */}
      {alert.message && (
        <Alert
          message={alert.message}
          onClose={() => setAlert({ message: "", type: "" })}
          type={alert.type}
        />
      )}
    </>
  );
};

export default Signup;
