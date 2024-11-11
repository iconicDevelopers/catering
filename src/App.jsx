import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home.jsx";
import Navbar from "./Pages/NavBar.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import Contact from "./Pages/Contact.jsx";
import CorporateCatering from "./Pages/Corporate_Service/CorporateCatering.jsx";
import Footer from "./Pages/Footer/Footer.jsx";
import AboutHome from "./Pages/AboutUS/AboutHome.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsApp from "./Components/WhatsApp.jsx";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutHome />} />
        <Route path="/services" element={<CorporateCatering />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <Footer />
      <WhatsApp />
    </>
  );
}

export default App;
