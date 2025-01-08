import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import DriverDashboard from "./components/DriverDashboard";
import PassengerDashboard from "./components/PassengerDashboard";
import Contact from "./components/Contact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useAuth } from "./context/AuthContext";

// PrivateRoute component to handle protected routes
const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Get the user from AuthContext
  return user ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/signup"
        element={!user ? <SignUp /> : <Navigate to="/" />}
      />

      {/* Protected Routes */}
      <Route
        path="/driver-dashboard"
        element={
          <PrivateRoute>
            <DriverDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/passenger-dashboard"
        element={
          <PrivateRoute>
            <PassengerDashboard />
          </PrivateRoute>
        }
      />

      {/* Common Route */}
      <Route path="/contact" element={<Contact />} />

      {/* Fallback for Unknown Routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
