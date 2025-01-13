import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faUser, faRightLeft } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center">
        {/* Branding Section */}
        <h1 className="text-2xl md:text-4xl font-bold text-purple-900 tracking-wide md:drop-shadow-lg mb-5">
          Welcome to
          <span className="text-2xl md:text-4xl text-purple-950 font-semibold font-dmSerifText tracking-widest ml-2">
            ROAD
            <FontAwesomeIcon
              className="mx-2 text-purple-950"
              icon={faRightLeft}
            />
            WAYS
          </span>
        </h1>

        <p className="text-lg  mb-8">
          Your ultimate travel companion for seamless journeys. Whether you are
          a driver or a passenger, Road Ways has you covered.
        </p>

        {/* Navigation Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Passenger Option */}
          <Link
            to="/passenger-dashboard"
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col items-center justify-center text-center border border-gray-200 hover:border-purple-500"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-4xl text-purple-600 mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Passenger
            </h2>
            <p className="">
              Plan your journey, find drivers, and travel with ease.
            </p>
          </Link>

          {/* Driver Option */}
          <Link
            to="/driver-dashboard"
            className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6 flex flex-col items-center justify-center text-center border border-gray-200 hover:border-purple-500"
          >
            <FontAwesomeIcon
              icon={faCar}
              className="text-4xl text-purple-600 mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Driver
            </h2>
            <p className="">
              Share your routes, find passengers, and simplify your travel.
            </p>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center">
        <p className=" text-sm">
          &copy; {new Date().getFullYear()} Road Ways. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
