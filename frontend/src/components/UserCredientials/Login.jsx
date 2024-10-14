// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
    setErrorMessage(""); // Reset error message on close
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      navigate("/userDashboard"); // Navigate after successful login
    } catch (error) {
      setErrorMessage("Username or password is invalid"); // Set error message
      setUsername(""); // Clear username input
      setPassword(""); // Clear password input
    }
  };

  if (!isOpen) return null; // If modal is closed, return nothing.

  return (
    <div>
      <div className="fixed inset-0 bg-blue-300 bg-opacity-60 flex justify-center items-center z-50">
        <div className="relative bg-white p-8 rounded-lg w-[90%] max-w-md">
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
            onClick={handleClose}
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center font-Rubik">Login</h2>
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">
              {errorMessage} {/* Display error message */}
            </div>
          )}
          <form onSubmit={handleSubmit} className="font-openSans">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:text-black hover:bg-white font-Rubik font-bold duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
