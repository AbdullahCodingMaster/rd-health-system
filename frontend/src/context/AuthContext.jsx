// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  
  const signup = async (username, email, password, password2) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/signup/", {
        username,
        email,
        password,
        password2,
      });
      if (response.data.token) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
      }
      setUser({ username, email });
      return response.data; // Return the response for further handling
    } catch (error) {
      // If there are validation errors from the backend
      if (error.response && error.response.data.errors) {
        return error.response.data.errors; // Return errors to be shown in the UI
      } else {
        console.error("Signup error:", error);
        return ["Signup failed!"];
      }
    }
  };
  
  const login = async (username, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
        username,
        password,
      });
  
      // Check if response is successful
      if (response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setUser({ username });
      } else {
        // If response is not 200, throw an error
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Throw the error to be handled in the component
      throw error;
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/auth/logout/", {}, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


