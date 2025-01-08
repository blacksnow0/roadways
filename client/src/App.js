import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./RoutesConfig";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-10">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
