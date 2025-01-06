import React, { useState } from "react";
import map from "../Assets/landing.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faLocationDot,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const PassengerDashboard = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle getting the current location when the icon is clicked
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchLocationByCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error fetching location: ", error);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  // Reverse geocode the coordinates to an address using Nominatim API
  const fetchLocationByCoordinates = async (latitude, longitude) => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const address = data?.display_name || "Unknown Location";
      setCurrentLocation(address);
      setLoading(false); // Stop loading after receiving the location
    } catch (error) {
      console.error("Error fetching location from Nominatim:", error);
      setLoading(false);
    }
  };

  // Handle input changes
  const handlePickupLocationChange = (e) => {
    setPickupLocation(e.target.value);
  };

  const handleDropOffLocationChange = (e) => {
    setDropOffLocation(e.target.value);
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
              value={pickupLocation || currentLocation || ""}
              onChange={handlePickupLocationChange}
              className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-300"
              placeholder="Enter pickup location"
              disabled={loading} // Disable input while loading
            />
            <button onClick={getCurrentLocation}>
              <FontAwesomeIcon
                className="text-2xl text-purple-900 cursor-pointer"
                icon={faLocationArrow}
              />
            </button>
            {loading && (
              <span>
                <FontAwesomeIcon icon={faSpinner}></FontAwesomeIcon>
              </span>
            )}{" "}
            {/* Show loading state */}
          </div>
        </div>

        {/* Drop-Off Location */}
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
              value={dropOffLocation}
              onChange={handleDropOffLocationChange}
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
