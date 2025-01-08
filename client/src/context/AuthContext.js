import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, googleSignIn } from "../firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen for user state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Logout method
  const logout = () => {
    return signOut(auth);
  };

  const googleSignUp = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.error("Error with Google sign-in", err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, googleSignUp }}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
