import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Terms from "./pages/Terms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="bg-white overflow-hidden [background:linear-gradient(181deg,rgba(0,0,0,1)_0%,rgba(74,40,0,1)_100%)] min-h-screen">
      <ToastContainer />
      <Navbar />
      <div className="px-0 sm:px-[0vw] md:px-[0vw] lg:px-[0vw] pt-[80px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;