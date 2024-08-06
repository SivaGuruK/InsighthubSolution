import PropTypes from "prop-types";

const Alert = ({ message, onClose, type = "error" }) => {
  const alertClasses = {
    error: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
  };

  return (
    message && (
      <div
        className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${alertClasses[type]}`}
      >
        <div className="flex justify-between items-center">
          <p>{message}</p>
          <button onClick={onClose} className="ml-4 text-lg font-bold">
            &times;
          </button>
        </div>
      </div>
    )
  );
};

// Adding PropTypes to validate props
Alert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["error", "success"]),
};

export default Alert;
