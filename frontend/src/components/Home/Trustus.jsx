import React from 'react';
import exampleImage from "../../assets/trustus.jpg";
import { FaMicroscope } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { FaIdCardAlt } from "react-icons/fa";
import  { useState, useRef } from 'react';
import { FaPlay, FaPause, FaTimes } from 'react-icons/fa';

const Trustus = () => {

  const [isPlaying, setIsPlaying] = useState(false);
   const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle state
  };




  return (
    <div className="flex flex-col lg:flex-row h-auto p-5 mt-[80px] px-[150px] justify-center items-center gap-[30px]">
      {/* Left Side - Image */}
      <div className="lg:w-1/3">
        <img
          src={exampleImage}
          alt="Example"
          className=" rounded-lg"
        />
<div className="flex flex-col justify-center">
      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="px-6 py-3 mb-4 rounded-full bg-primary text-white flex items-center 
        justify-center space-x-2 hover:bg-secondary duration-300 mt-7"
      >
        {isPlaying ? <FaPause className="text-2xl" /> : <FaPlay className="text-2xl" />}
        <span className="ml-2">{isPlaying ? 'Pause' : 'Play'}</span>
      </button>

      {/* Video Section */}
      {showVideo && (
        <div className="relative">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full max-w-md rounded-md shadow-lg"
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls={false} // Remove default controls
          ></video>

          {/* Close Button */}
          <button
            onClick={closeVideo}
            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>
      )}
    </div>


      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 flex flex-col ">
        {/* Top Full-width Division */}
        <div className="  p-6 mb-6 rounded-md">
          <h3 className="font-Rubik text-5xl font-bold">Why People Trust Us</h3>
          <p className="mt-2 font-thin">
            Id elit mauris neque, purus dui turpis gravida id viverra nunc sit risus quam ornare et massa viverra porta risus justo lectus morbi pulvinar non bibendum nisl quisque donec nunc facilisis fermentum.
          </p>
        </div>

        {/* Bottom 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Division */}
          <div className=" p-4 rounded-md space-y-4">
            <div><FaMicroscope className='text-4xl text-secondary'/></div>

            <h4 className="font-Rubik text-xl font-bold">High Quality Lab</h4>
            <p>In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt.</p>
          </div>

          {/* Second Division */}
          <div className=" p-4 rounded-md space-y-4">
          <div><FaUserDoctor className='text-4xl text-secondary'/></div>
            <h4 className="font-Rubik text-lg font-bold">Unmatched Expertise</h4>
            <p>In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt.</p>
          </div>

          {/* Third Division */}
          <div className=" p-4 space-y-4 rounded-md">
          <div><TbReportAnalytics className='text-4xl text-secondary'/></div>
            <h4 className="font-Rubik text-lg font-bold">Precise Result</h4>
            <p>In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt.</p>
          </div>

          {/* Fourth Division */}
          <div className=" p-4 space-y-4 rounded-md">
          <div>< FaIdCardAlt  className='text-4xl text-secondary'/></div>
            <h4 className="font-Rubik text-lg font-bold">Qualified Staff</h4>
            <p>In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin tincidunt.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustus;
