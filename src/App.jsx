import "./App.css";
import Home from "./Components/Home";
import CateringSection from "./Pages/CateringSection";
import Navbar from "./Pages/NavBar";
import CorporateCatering from "./Pages/Service";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <CateringSection />
      <CorporateCatering />
      <Testimonials />
    </>
  );
}

export default App;
