import meetingImage from "../../assets/meeting.jpg"; // Use your image path

const Meeting = () => {
  return (
    <div className="px-[100px] mx-auto py-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row  gap-10">
        {/* Left side - Image */}
        <div className="lg:w-1/2">
          <img
            src={meetingImage}
            alt="Meeting"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right side - Text */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-6xl font-bold text-gray-800">We Employ Latest Research Technology & Company</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
          Pulvinar proin sit neque pellentesque elementum purus faucibus nunc tincidunt lorem sed 
          posuere velit condimentum scelerisque varius tempor in amet cum pharetra malesuada nisl, urna congue faucibus rhoncus a ultrices nec at pulvinar convallis ac vitae amet
           condimentum risus pharetra rhoncus pretium consequat cras feugiat lorem nam non.
          </p>
          <div className="hidden lg:block w-[600px] h-[2px] bg-secondary items-center"></div>
          <p className="text-xl font-semibold text-black  leading-relaxed">
          “Viverra nec consectetur dictum at pulvinar ac ornare sed a fringilla integer varius metus ac, 
          cras purus vulputate ultrices amet, sit porta hac mattis.”
          </p>
          <div className='mt-5 py-7'><p className='text-black font-bold text-lg mt-[30px]'>Alex Hobbs
            <br />
            <p className='text-gray-600 font-thin'>Founder, CEO of PointLab</p>
          </p></div>
         
        </div>
      </div>
    </div>
  );
};

export default Meeting;
