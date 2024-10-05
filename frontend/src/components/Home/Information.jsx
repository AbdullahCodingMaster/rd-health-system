import React from 'react';
import infoimage from "../../assets/infoimage.jpg";
import { FaArrowRight } from 'react-icons/fa';
import { FaPhoneSquareAlt } from "react-icons/fa";

const InfoComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row  h-auto p-4 px-[100px] mx-auto mt-[80px] ">
      {/* Left Side - Image */}
      <div className="relative lg:w-1/2">
        <img  
          src={infoimage}
          alt="Placeholder" 
          className="w-full h-[600px] object-cover" 
        />
        {/* Information on the right bottom of the image */}
        <div className="absolute bottom-0 right-0 bg-secondary py-[50px] mb-11  text-white p-4 px-5">
          <h4 className="font-Rubik text-xl font-bold">Our Main Service</h4>
          <p className="mt-2">
            Lorem mauris tincidunt lacus, id rhoncus <br /> 
            erat facilisis purus sed consectetur in.
          </p>
          <div className="flex items-center mt-[100px] space-x-2">
            <p>Learn More</p>
            <FaArrowRight />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex flex-col justify-start ">
        {/* Top Two Equal Divisions */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Division */}
          <div className="bg-white p-4">
            <h4 className="font-Rubik text-xl font-bold">Our Facilities</h4>
            <p className="mt-2">
              Lorem mauris tincidunt lacus, id rhoncus erat facilisis purus sed consectetur in.
            </p>
            <div className="flex items-center mt-[100px] space-x-2 text-secondary hover:text-primary cursor-pointer">
              <p >Learn More</p>
              <FaArrowRight  />
            </div>
          </div>

          {/* Second Division */}
          <div className="bg-secondary p-4 text-white  rounded-tr-2xl">
            <h4 className="font-Rubik text-xl font-bold">Our Location</h4>
            <p className="mt-2 text-lg font-openSans font-semibold">
            Midtown Manhattan <br />
            123 5th Ave, New York,<br />
            NY 1021, US.
            </p>
            <div className="flex items-center mt-[100px] space-x-2 cursor-pointer">
              <p>Get Location</p>
              <FaArrowRight />
            </div>
          </div>
        </div>

        {/* Bottom Full-width Division */}
        <div className="bg-primary p-4 text-white py-[40px] px-6 rounded-br-2xl">
          <h3 className='font-Rubik text-xl font-bold'>Make An Appointment</h3>
          <p className='mt-1  font-openSans '>Urna aliquet feugiat odio enim ut pharetra pretium velit <br /> viverra elementum pulvinar viverra diam urna rhoncus eu, et, <br />malesuada luctus neque mollis morbi placerat</p>
        <div className='flex lg:flex-row flex-col gap-16 mt-11'><button className=' border px-4 py-1 rounded-md hover:text-primary hover:bg-white duration-300 mt-4 text-lg  border-white cursor-pointer '>Start </button>
        <div className="hidden lg:block h-[30px] mt-5 w-[2px] bg-secondary items-center"></div>
        <div className='flex gap-1'><FaPhoneSquareAlt className='text-4xl text-white  mt-4'/ ><p className='mt-4 text-2xl font-bold'>+1 123 444 5678</p> </div>
        </div>
       

        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
