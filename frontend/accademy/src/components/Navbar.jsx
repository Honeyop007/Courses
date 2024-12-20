import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-cyber-bg/90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-neon-blue flex items-center heading-font">
          <i className="fas fa-graduation-cap mr-2"></i>
          <span className="font-orbitron">CodeCraft Academy</span>
        </div>
        
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
        
        {/* Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex absolute md:static top-full left-0 w-full md:w-auto bg-cyber-bg md:bg-transparent z-40`}
        >
          <div className="flex font-orbitron flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 p-4 md:p-0">
            <a href="#home" className="hover:text-neon-purple transition-colors">Home</a>
            <a href="#courses" className="hover:text-neon-purple transition-colors">Courses</a>
            <a href="#pricing" className="hover:text-neon-purple transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-neon-purple transition-colors">Enrollment</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
