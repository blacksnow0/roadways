import {
  faRightLeft,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="fixed top-0 w-full p-2 md:p-4 backdrop-blur-md bg-white/30 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-2xl text-purple-950 font-semibold font-dmSerifText tracking-widest">
          <a href="/">
            ROAD
            <FontAwesomeIcon className="mx-2" icon={faRightLeft} />
            WAYS
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={handleToggle}
          className="md:hidden flex flex-col items-center justify-center space-y-1"
        >
          <span
            className={`w-6 h-1 bg-purple-900 transition-all duration-300 ease-in-out transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-purple-900 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-purple-900 transition-all duration-300 ease-in-out transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8 items-center">
          <Link
            className="relative text-purple-900 font-semibold text-lg drop-shadow-sm group"
            to="/workouts"
          >
            Workouts
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-purple-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            className="relative text-purple-900 font-semibold text-lg drop-shadow-sm group"
            to="/profile"
          >
            Profile
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-purple-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link
            className="relative text-purple-900 font-semibold text-lg drop-shadow-sm group"
            to="/passenger-dashboard"
          >
            Dashboard
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-purple-900 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          {/* Logout Button */}
          {user && (
            <button
              onClick={handleLogout}
              className="text-purple-900 font-semibold px-4 py-2 border border-purple-900 rounded-lg hover:bg-purple-900 hover:text-white transition duration-300"
            >
              <FontAwesomeIcon icon={faRightToBracket} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu (Visible when isOpen is true) */}
      <div
        className={`md:hidden space-y-4 mt-1 md:mt-0 transition-all duration-500 ease-in-out overflow-hidden bg-white bg-opacity-100 p-2 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to="/"
          className="block text-purple-900 drop-shadow-lg font-semibold"
        >
          Dashboard
        </Link>
        <Link
          to="/workouts"
          className="block text-purple-900 drop-shadow-lg font-semibold"
        >
          Workouts
        </Link>
        <Link
          to="/profile"
          className="block text-purple-900 drop-shadow-lg font-semibold"
        >
          Profile
        </Link>
        {/* Logout Button in Mobile Menu */}
        {user && (
          <button
            onClick={handleLogout}
            className="block w-full text-left text-purple-900 font-semibold  hover:bg-purple-900 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
