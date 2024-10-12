import React from 'react';

const InfoComponent = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen p-4 px-[100px] mx-auto">
      {/* Left Side */}
      <div className="relative">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Placeholder" 
          className="w-full h-auto" 
        />
        {/* Information on the right bottom of the image */}
        <div className="absolute bottom-0 right-0 bg-gray-800 bg-opacity-75 text-white p-4">
          <p>Some information displayed here</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col space-y-4">
        {/* Top Two Equal Divisions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-200 p-4 text-center">
            Top Left Division
          </div>
          <div className="bg-blue-200 p-4 text-center">
            Top Right Division
          </div>
        </div>

        {/* Bottom Full-width Division */}
        <div className="bg-green-200 p-4 text-center">
          Full-width Division below
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
