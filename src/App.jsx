import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import CateringSection from "./Pages/CateringSection";
import ContactForm from "./Pages/ContactForm";
import Navbar from "./Pages/NavBar";
import CorporateCatering from "./Pages/Service";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catering" element={<CateringSection />} />
        <Route path="/services" element={<CorporateCatering />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
}

export default App;
