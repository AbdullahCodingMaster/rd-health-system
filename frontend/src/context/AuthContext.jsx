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
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setUser({ username, email });
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/auth/login/", {
        username,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setUser({ username });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/auth/logout/", {}, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      setToken(null);
      setUser(null);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
