import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import driver from "../Assets/driver.webp";
import {
  faLocationArrow,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "../context/AuthContext";

const DriverDashboard = () => {
  const [startingLocation, setStartingLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [dateOfTravel, setDateOfTravel] = useState("");
  const [locationSuggestions, setLocationSuggestions] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    logout();
  };

  const fetchLocationSuggestions = async (query, setLocation) => {
    if (!query) {
      setLocationSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
      );
      const data = await response.json();
      const suggestions = data.map((item) => ({
        displayName: item.display_name,
        lat: item.lat,
        lon: item.lon,
      }));
      setLocationSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  const handleLocationChange = (e, setLocation) => {
    const value = e.target.value;
    setLocation(value);
    fetchLocationSuggestions(value, setLocation);
  };

  const toggleAvailability = () => {
    setIsAvailable((prev) => !prev);
  };

  const handleSaveEvent = () => {
    if (!startingLocation || !destination || !dateOfTravel) {
      alert("Please fill in all fields before saving the event.");
      return;
    }

    const travelEvent = {
      startingLocation,
      destination,
      dateOfTravel,
      availability: isAvailable,
    };

    console.log("Travel Event Saved:", travelEvent);
    alert("Travel event saved successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-purple-400 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2 flex items-center justify-center p-6 bg-gradient-to-br from-gray-500 to-gray-800">
          <img
            src={driver}
            alt="Driver"
            className="rounded-lg shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="font-inter font-semibold text-lg text-gray-700 tracking-wide text-center">
            {user.displayName}
          </h2>

          {/* Starting Location */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
              Starting Location
            </label>
            <div className="relative">
              <input
                type="text"
                value={startingLocation}
                onChange={(e) => handleLocationChange(e, setStartingLocation)}
                placeholder="Enter starting location"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <FontAwesomeIcon
                icon={faLocationArrow}
                className="absolute right-3 top-3 text-purple-600 hover:text-purple-800 cursor-pointer"
              />
            </div>
          </div>

          {/* Destination */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
              Destination
            </label>
            <div className="relative">
              <input
                type="text"
                value={destination}
                onChange={(e) => handleLocationChange(e, setDestination)}
                placeholder="Enter destination"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <FontAwesomeIcon
                icon={faLocationArrow}
                className="absolute right-3 top-3 text-purple-600 hover:text-purple-800 cursor-pointer"
              />
            </div>
          </div>

          {/* Date of Travel */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
              Date of Travel
            </label>
            <div className="relative">
              <input
                type="date"
                value={dateOfTravel}
                onChange={(e) => setDateOfTravel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm"
              />
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="absolute right-3 top-3 text-purple-600"
              />
            </div>
          </div>

          {/* Availability Toggle */}
          <div className="mb-6">
            <label className="block text-gray-600 font-medium mb-2">
              Availability
            </label>
            <button
              onClick={toggleAvailability}
              className={`w-full py-3 rounded-lg text-lg font-semibold text-white shadow-md transition duration-300 ${
                isAvailable
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              {isAvailable ? "Available" : "Unavailable"}
            </button>
          </div>

          {/* Save Event Button */}
          <button
            onClick={handleSaveEvent}
            className="w-full py-3 bg-purple-600 rounded-lg text-white text-lg font-semibold tracking-wide hover:bg-purple-700 shadow-md transition duration-300"
          >
            Save Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
