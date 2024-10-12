import React from 'react';
import heroimage from "../../assets/HeroImage.jpg"
const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5">
          {/* Text Section - Left */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className='text-secondary font-openSans mb-5 font-bold '>Welcome to PointLab</p>
            <h1 className="font-rubik text-[80px] font-bold text-gray-900 mb-4">
            We’ll Ensure You Always Get The Best Result.
            </h1>
            <p className="text-gray-600 mb-8 text">
            Lacinia in netus vel a, scelerisque mauris quis et, purus blandit sapien, pharetra, viverra volutpat risus non tortor, cras egestas et maecenas facilisi imperdiet quam fringilla dui mauris enim, nec arcu, interdum sit nisi est facilisi sodales viverra proin et
            </p>
            <div className="flex flex-col sm:flex-row items-start ">
  {/* Make An Appointment Button */}
  <div className="bg-primary text-white py-2 px-4 m-2 text-center rounded-lg hover:text-black hover:bg-white transition-colors duration-300 w-full sm:w-auto">
    <a href="#" className="text-sm font-medium">
      Make An Appointment
    </a>
  </div>

  {/* Learn More Button */}
  <div className="bg-transparent text-secondary border-[2px] border-secondary py-2 px-4 m-2 text-center rounded-lg hover:bg-secondary hover:text-white transition-colors duration-300 w-full sm:w-auto">
    <a href="#" className="text-sm font-medium">
      Learn More
    </a>
  </div>
</div>


          </div>

          {/* Image Section - Right */}
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <img
              src={heroimage}
              alt="Hero Image"
              className="mx-[100px] w-[500px] h-[700px] rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;