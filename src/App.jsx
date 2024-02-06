import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Pies from "./pages/Pies";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Pie from "./pages/Pie";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/allpies" element={<Pies />} />
          <Route path="/chesecakes" element={<Pies />} />
          <Route path="/fruitpies" element={<Pies />} />
          <Route path="/seasonalpies" element={<Pies />} />
          <Route path="/pies" element={<Pies />} />
          <Route path="/pie" element={<Pie />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
