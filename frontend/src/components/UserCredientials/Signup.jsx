// src/components/Signup.js
import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext"; // Ensure this is correctly imported
import { useForm } from "react-hook-form";

const Signup = () => {
  const { signup } = useAuth();
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [timer, setTimer] = useState(null); // For controlling redirect timer
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signup(
        data.username,
        data.email,
        data.password,
        data.password2
      );
      if (response) {
        setShowModal(true); // Show modal
      } else {
        alert(response.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      const errorMessages = error || ["Sign-Up Failed!"];
      alert(errorMessages.join("\n")); // Display validation errors
    }
  };

  const handleClose = () => {
    setShowModal(false);
    clearTimeout(timer); // Clear timer if user clicks
    window.location.href = "/login"; // Redirect to login page
  };

  useEffect(() => {
    // Set a timer for redirecting to the home page after 4 seconds if modal is shown
    if (showModal) {
      setTimer(
        setTimeout(() => {
          window.location.href = "/"; // Redirect to home page
        }, 4000)
      );
    }

    // Cleanup timer on component unmount or when showModal changes
    return () => {
      clearTimeout(timer);
    };
  }, [showModal]);

  return (
    <div className="fixed inset-0 bg-blue-300 bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center font-Rubik">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.username ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password2"
            >
              Confirm Password:
            </label>
            <input
              type="password"
              id="password2"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                errors.password2 ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Confirm your password"
              {...register("password2", {
                required: "Please confirm your password",
              })}
            />
            {errors.password2 && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password2.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:text-black hover:bg-white font-Rubik font-bold duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-blue-300 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Successfully User is Created
              </h2>
              <p className="text-center mb-4">
                If you want to login, click the button below.
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:text-black hover:bg-white duration-300"
              >
                Go to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
