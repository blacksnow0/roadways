import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignUp } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await googleSignUp();
      navigate("/");
    } catch (err) {
      console.error("Error with Google Sign-In:", err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-sm w-full p-6 bg-white shadow-lg rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Log In with Google
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Access your account using your Google credentials.
        </p>
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Icon"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
