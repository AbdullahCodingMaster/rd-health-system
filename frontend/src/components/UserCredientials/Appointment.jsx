import React from 'react';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
    const navigate = useNavigate();

    // Handle navigation to Login
    const handleLogin = () => {
        navigate('/login');
    };

    // Handle navigation to Signup
    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className='flex flex-col items-center'>
                {/* Login button */}
                <button 
                    onClick={handleLogin}
                    className='bg-primary px-[150px] py-3 text-xl font-Rubik font-extrabold rounded-lg text-white hover:bg-secondary duration-300 mb-3'
                >
                    Login
                </button>

                {/* Signup button */}
                <button 
                    onClick={handleSignup}
                    className='bg-primary px-[150px] py-3 text-xl font-Rubik font-extrabold rounded-lg text-white hover:bg-secondary duration-300 mt-[60px]'
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Appointment;
