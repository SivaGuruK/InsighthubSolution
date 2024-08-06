import { BrowserRouter as Router, Route, Routes ,useLocation} from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import HomePage from "./Pages/HomePage";
import NIRFService from "./Pages/NIRFService";
import StartupConsult from "./Pages/StartupService";
import IncubationService from "./Pages/IncubationService";
import Signup from "./Pages/SignupPage";
import Signin from "./Pages/SigninPage";
import ReslnsPage from "./Pages/ResInsPage";
import AdminPage from "./Pages/AdminPage";

function MainLayout() {
  const location = useLocation();
  const noHeaderFooterPaths = ["/signin", "/signup"];

  return (
    <>
      {!noHeaderFooterPaths.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nirf" element={<NIRFService />} />
        <Route path="/startup" element={<StartupConsult />} />
        <Route path="/incubation" element={<IncubationService />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/research" element={<ReslnsPage />}></Route>
        <Route path="/admin" element={<AdminPage/>}></Route>
      </Routes>
      {!noHeaderFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
