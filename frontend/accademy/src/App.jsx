import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import AdvancedCourses from "./components/AdvancedCourses";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css';
function App() {
  return (
    <div className="bg-cyber-bg text-white">
      <Navbar />
      <Hero />
      <Courses />
      <AdvancedCourses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
