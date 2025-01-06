import React, { useState } from "react";
import map from "../Assets/landing.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const PassengerDashboard = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [error, setError] = useState(null);

  // Handle current location click
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setPickupLocation(`Lat: ${latitude}, Lon: ${longitude}`);
        },
        (err) => {
          setError("Unable to retrieve location.");
          console.error(err);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.", error);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-r from-purple-300 to-purple-400 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 space-y-6">
        {/* Pickup Location */}
        <div className="flex flex-col space-y-2">
          <label className="font-inter font-semibold text-lg text-gray-700 tracking-wide">
            Pick-Up Location
          </label>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              className="text-2xl text-purple-900"
              icon={faLocationDot}
            />
            <input
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-300"
              placeholder="Enter pickup location"
            />
            <button
              onClick={handleCurrentLocation}
              className="text-2xl  "
              title="Use current location"
            >
              <FontAwesomeIcon
                className="text-purple-900"
                icon={faLocationArrow}
              />
            </button>
          </div>
        </div>

        {/* DropOff Location */}
        <div className="flex flex-col space-y-2">
          <label className="font-inter font-semibold text-lg text-gray-700 tracking-wide">
            Drop-Off Location
          </label>
          <div className="flex items-center space-x-4">
            <FontAwesomeIcon
              className="text-2xl text-purple-900"
              icon={faLocationDot}
            />
            <input
              type="text"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-300"
              placeholder="Enter dropoff location"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full py-2 bg-purple-800 rounded-full text-white text-lg font-inter font-semibold tracking-wider hover:bg-purple-900 transition duration-300">
          Find Ride
        </button>
      </div>

      {/* Map Image */}
      <div className="hidden lg:block ml-10">
        <img src={map} alt="Map" className="w-96 h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default PassengerDashboard;
