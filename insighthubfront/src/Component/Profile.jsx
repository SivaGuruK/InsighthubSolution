import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimes, FaSignOutAlt } from "react-icons/fa";
import axios from "../api/axios"; 

const Sidebar = ({ onClose }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const userId = localStorage.getItem("userId"); 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/auth/users/${userId}`);
        setUser({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          email: data.user.email,
        });
      } catch (error) {
        setError("Error fetching user data: " + error.message);
      }
    };
    fetchUser();
  }, [userId]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  return (
    <div className="fixed top-0 right-0 w-80 bg-white shadow-lg h-full p-6 z-50 flex flex-col">
      <button className="text-xl text-gray-600 self-end" onClick={onClose}>
        <FaTimes />
      </button>
      <div className="flex flex-col items-center mt-4">
        <div className="text-center mt-4 mb-4">
          <h2 className="text-xl font-bold">
            {`${user.firstName} ${user.lastName}`}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <button
          onClick={handleSignOut}
          className="w-full bg-red-500 text-white px-4 py-2 rounded mt-4"
        >
          <FaSignOutAlt className="inline mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
};

export default Sidebar;
