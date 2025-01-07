import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import DriverDashboard from "./components/DriverDashboard";
import PassengerDashboard from "./components/PassengerDashboard";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className="mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/passenger-dashboard" element={<PassengerDashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
