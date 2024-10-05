import React from 'react';
import { FaStar } from 'react-icons/fa'; // React icons for rating stars

const Rating = () => {
  return (
    <div className="px-4 md:px-[50px] lg:px-[150px] mx-auto py-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        {/* First Rating Block */}
        <div className="flex flex-col items-start p-6 mb-4 lg:mb-0 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl shadow-lg bg-primary w-full lg:w-1/4">
          <h3 className="text-4xl font-semibold mb-2">4.5/5</h3>
          <div className="flex space-x-1 text-secondary text-2xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="mt-2 text-black">5.0 (150 reviews)</p>
        </div>

        {/* Wrapper for the last three divs with a gap */}
        <div className="flex flex-col lg:flex-row w-full lg:w-3/4 gap-4">
          {/* Second Rating Block */}
          <div className="flex flex-col items-center p-6 shadow-lg w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Response Time</h3>
            <div className="flex space-x-1 text-secondary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="mt-2 text-gray-600">4.8 (200 reviews)</p>
          </div>

          {/* Third Rating Block */}
          <div className="flex flex-col items-center p-6 shadow-lg w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Overall Experience</h3>
            <div className="flex space-x-1 text-secondary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="mt-2 text-gray-600">4.9 (180 reviews)</p>
          </div>

          {/* Fourth Rating Block */}
          <div className="flex flex-col items-center p-6 shadow-lg w-full lg:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Satisfaction</h3>
            <div className="flex space-x-1 text-secondary">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="mt-2 text-gray-600">4.7 (170 reviews)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
