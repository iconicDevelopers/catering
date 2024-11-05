import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import CateringSection from "./Pages/CateringSection";
import Navbar from "./Pages/NavBar";
import CorporateCatering from "./Pages/Service";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catering" element={<CateringSection />} />
        <Route path="/services" element={<CorporateCatering />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
}

export default App;
