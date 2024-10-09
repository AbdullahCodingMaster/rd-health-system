import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    // State to control modal visibility
    const [showModal, setShowModal] = useState(true);

    // Initialize useForm hook
    const { register, handleSubmit, formState: { errors } } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);  // Process form data
        alert("Sign-Up Successful!");
        setShowModal(false);  // Close modal on successful submission
    };

    // Function to close the modal
    const handleClose = () => {
        setShowModal(false);
    };

    // Only render modal if showModal is true
    return (
        showModal && (
            <div className="fixed inset-0 bg-blue-300 bg-opacity-50 flex justify-center items-center z-50">
                <div className="relative bg-white p-8 rounded-lg shadow-lg w-[90%] max-w-md">
                    {/* Close button */}
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
                        onClick={handleClose}
                    >
                        &times;
                    </button>
                    <h2 className="text-2xl font-bold mb-6 text-center font-Rubik">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div className="mb-4 font-openSans">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter your name"
                                {...register('name', { required: 'Name is required' })}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter your email"
                                {...register('email', { required: 'Email is required', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Invalid email address' } })}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Phone Number Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">Phone Number:</label>
                            <input
                                type="text"
                                id="phone"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter your phone number"
                                {...register('phone', { required: 'Phone number is required', pattern: { value: /^\d{10}$/, message: 'Invalid phone number' } })}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>

                        {/* Address Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Enter your address"
                                {...register('address', { required: 'Address is required' })}
                            />
                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                        </div>

                        {/* Blood Group Field */}
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bloodGroup">Blood Group:</label>
                            <select
                                id="bloodGroup"
                                className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${errors.bloodGroup ? 'border-red-500' : 'border-gray-300'}`}
                                {...register('bloodGroup', { required: 'Blood group is required' })}
                            >
                                <option value="">Select your blood group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                            {errors.bloodGroup && <p className="text-red-500 text-sm mt-1">{errors.bloodGroup.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            
              className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:text-black hover:bg-white font-Rubik font-bold duration-300 "
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        )
    );
};

export default SignUp;
