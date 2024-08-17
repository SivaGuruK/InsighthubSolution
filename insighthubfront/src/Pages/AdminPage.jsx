import { useState } from "react";
import axios from "../api/axios";
import Alert from "../Component/Alert";

const AdminPage = () => {
  const [nirfFile, setNirfFile] = useState(null);
  const [nirfTitle, setNirfTitle] = useState("");
  const [nirfDescription, setNirfDescription] = useState("");

  const [incubationFile, setIncubationFile] = useState(null);
  const [incubationTitle, setIncubationTitle] = useState("");
  const [incubationDescription, setIncubationDescription] = useState("");

  const [startupFile, setStartupFile] = useState(null);
  const [startupTitle, setStartupTitle] = useState("");
  const [startupDescription, setStartupDescription] = useState("");

  const [mediaCoverageFile, setMediaCoverageFile] = useState(null);
  const [mediaCoverageTitle, setMediaCoverageTitle] = useState("");
  const [mediaCoverageDescription, setMediaCoverageDescription] = useState("");

  const [expertOpinionFile, setExpertOpinionFile] = useState(null);
  const [expertOpinionTitle, setExpertOpinionTitle] = useState("");
  const [expertOpinionDescription, setExpertOpinionDescription] = useState("");

  const [rndAnalysisFile, setRndAnalysisFile] = useState(null);
  const [rndAnalysisTitle, setRndAnalysisTitle] = useState("");
  const [rndAnalysisDescription, setRndAnalysisDescription] = useState("");

  const [alert, setAlert] = useState(null);

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const handleTextChange = (e, setter) => {
    setter(e.target.value);
  };

  const validateFields = (file, title, description) => {
    return file && title.trim() && description.trim();
  };

  const resetForm = (prefix) => {
    switch (prefix) {
      case "nirf":
        setNirfFile(null);
        setNirfTitle("");
        setNirfDescription("");
        break;
      case "incubation":
        setIncubationFile(null);
        setIncubationTitle("");
        setIncubationDescription("");
        break;
      case "startup":
        setStartupFile(null);
        setStartupTitle("");
        setStartupDescription("");
        break;
      case "mediaCoverage":
        setMediaCoverageFile(null);
        setMediaCoverageTitle("");
        setMediaCoverageDescription("");
        break;
      case "expertOpinion":
        setExpertOpinionFile(null);
        setExpertOpinionTitle("");
        setExpertOpinionDescription("");
        break;
      case "rndAnalysis":
        setRndAnalysisFile(null);
        setRndAnalysisTitle("");
        setRndAnalysisDescription("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e, prefix) => {
    e.preventDefault();

    let file, title, description, endpoint;

    switch (prefix) {
      case "nirf":
        file = nirfFile;
        title = nirfTitle;
        description = nirfDescription;
        endpoint = "/nirf";
        break;
      case "incubation":
        file = incubationFile;
        title = incubationTitle;
        description = incubationDescription;
        endpoint = "/incubation";
        break;
      case "startup":
        file = startupFile;
        title = startupTitle;
        description = startupDescription;
        endpoint = "/startup";
        break;
      case "mediaCoverage":
        file = mediaCoverageFile;
        title = mediaCoverageTitle;
        description = mediaCoverageDescription;
        endpoint = "/media-coverage";
        break;
      case "expertOpinion":
        file = expertOpinionFile;
        title = expertOpinionTitle;
        description = expertOpinionDescription;
        endpoint = "/expert-opinion";
        break;
      case "rndAnalysis":
        file = rndAnalysisFile;
        title = rndAnalysisTitle;
        description = rndAnalysisDescription;
        endpoint = "/rnd-analysis";
        break;
      default:
        return;
    }

    if (!validateFields(file, title, description)) {
      setAlert({
        type: "error",
        message: "Please fill in all fields before submitting.",
      });
      return;
    }

    const formData = new FormData();
    formData.append(`${prefix}File`, file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      const res = await axios.post(endpoint, formData);
      setAlert({ type: "success", message: "File uploaded successfully!" });
      console.log(res.data);
      resetForm(prefix); // Reset form fields after successful submission
    } catch (err) {
      console.error(err);
      setAlert({
        type: "error",
        message:
          "Error uploading file: " +
          (err.response?.data?.message || err.message),
      });
    }
  };

  const renderFormSection = (
    title,
    file,
    setFile,
    textValue,
    setTextValue,
    description,
    setDescription,
    prefix
  ) => (
    <div className="mb-4">
      <label htmlFor={`${prefix}File`} className="block text-gray-700">
        {title}
      </label>
      <input
        type="file"
        id={`${prefix}File`}
        name={`${prefix}File`}
        onChange={(e) => handleFileChange(e, setFile)}
        className="mt-2"
      />
      <label htmlFor={`${prefix}Title`} className="block text-gray-700 mt-2">
        Title
      </label>
      <input
        type="text"
        id={`${prefix}Title`}
        name={`${prefix}Title`}
        value={textValue}
        onChange={(e) => handleTextChange(e, setTextValue)}
        placeholder="Title"
        className="mt-2 p-2 border rounded w-full"
      />
      <label
        htmlFor={`${prefix}Description`}
        className="block text-gray-700 mt-2"
      >
        Description
      </label>
      <textarea
        id={`${prefix}Description`}
        name={`${prefix}Description`}
        value={description}
        onChange={(e) => handleTextChange(e, setDescription)}
        placeholder="Description"
        className="mt-2 p-2 border rounded w-full"
      />
      <button
        onClick={(e) => handleSubmit(e, prefix)}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Submit
      </button>
    </div>
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-6">Admin Page</h1>
      {alert && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(null)}
        />
      )}
      {renderFormSection(
        "NIRF Blog",
        nirfFile,
        setNirfFile,
        nirfTitle,
        setNirfTitle,
        nirfDescription,
        setNirfDescription,
        "nirf"
      )}
      {renderFormSection(
        "Incubation Blog",
        incubationFile,
        setIncubationFile,
        incubationTitle,
        setIncubationTitle,
        incubationDescription,
        setIncubationDescription,
        "incubation"
      )}
      {renderFormSection(
        "Startup Blog",
        startupFile,
        setStartupFile,
        startupTitle,
        setStartupTitle,
        startupDescription,
        setStartupDescription,
        "startup"
      )}
      {renderFormSection(
        "Media Coverage",
        mediaCoverageFile,
        setMediaCoverageFile,
        mediaCoverageTitle,
        setMediaCoverageTitle,
        mediaCoverageDescription,
        setMediaCoverageDescription,
        "mediaCoverage"
      )}
      {renderFormSection(
        "Expert Opinion",
        expertOpinionFile,
        setExpertOpinionFile,
        expertOpinionTitle,
        setExpertOpinionTitle,
        expertOpinionDescription,
        setExpertOpinionDescription,
        "expertOpinion"
      )}
      {renderFormSection(
        "R&D Analysis",
        rndAnalysisFile,
        setRndAnalysisFile,
        rndAnalysisTitle,
        setRndAnalysisTitle,
        rndAnalysisDescription,
        setRndAnalysisDescription,
        "rndAnalysis"
      )}
    </div>
  );
};

export default AdminPage;
