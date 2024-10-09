import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handlelogin = () => {
    alert("User Logged-in")
  }


  const navigate = useNavigate();
  const handlenavigation = () => {
    navigate("/userDashboard")
  }

  if (!isOpen) return null; // If modal is closed, return nothing.

  return (
    <div>
      <div className="fixed inset-0 bg-blue-300 bg-opacity-60  flex justify-center items-center z-50">
        <div className="relative bg-white p-8 rounded-lg w-[90%] max-w-md">
          {/* Close button */}
          <button
            className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
            onClick={handleClose}
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center  font-Rubik ">Login</h2>
          <form className='font-openSans'>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
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
              />
            </div>

            <button onClick={handlenavigation} 
              type="submit"
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:text-black hover:bg-white font-Rubik font-bold duration-300 "
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
