import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full p-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className=" text-2xl text-purple-950 font-semibold font-dmSerifText tracking-widest">
          <a href="/">ROADWAYS</a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={handleToggle}
          className=" md:hidden flex flex-col items-center justify-center space-y-1"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ease-in-out transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 ">
          <Link to="/">Dashboard</Link>
          <Link to="/workouts">Workouts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/passenger-dashboard">Dashboard</Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      <div
        className={`md:flex space-x-4  mt-4 md:mt-0 transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className=" space-y-4 mt-4">
          <Link to="/" className="block hover:text-gray-300">
            Dashboard
          </Link>
          <Link to="/workouts" className="block hover:text-gray-300">
            Workouts
          </Link>
          <Link to="/profile" className="block hover:text-gray-300">
            Profile
          </Link>
          <Link to="/settings" className="block hover:text-gray-300">
            Settings
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
