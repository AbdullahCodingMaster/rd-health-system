 import { FaPen, FaUser } from "react-icons/fa";  
import img1 from "../assets/img11.webp";  
import img2 from "../assets/img2.webp";  

const AboutUs = () => {  
  return (  
    <div className="flex pb-24 px-10 bg-white">  
      <div className="flex flex-col gap-5 justify-start items-start w-full max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">  
        <h1 className="text-left font-medium text-5xl text-gray-800 leading-tight">  
          About Us  
        </h1>  
        <p className="text-gray-600">  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  
        </p>  

        <div>  
          <h1 className="text-3xl font-bold mt-4">  
            We Employ Latest Research Technology & Company  
          </h1>  
          <h2 className="text-xl font-semibold mt-2 text-gray-700">  
            Urna congue faucibus rhoncus a ultrices nec at pulvinar convallis ac vitae amet condimentum risus pharetra rhoncus pretium consequat cras feugiat lorem nam non.  
          </h2>  
          <p className="mt-2 text-gray-600">  
            Pulvinar proin sit neque pellentesque elementum purus faucibus nunc tincidunt lorem sed posuere velit condimentum scelerisque varius tempor in amet cum pharetra malesuada nisl, urna congue faucibus rhoncus a ultrices nec at pulvinar convallis ac vitae amet condimentum risus pharetra rhoncus pretium consequat cras feugiat lorem nam non.  
          </p>  
        </div>  

        <div className="flex space-x-8 mt-4">  
          <div className="flex items-center">  
            <FaPen className="text-teal-500 h-6 w-6" />  
            <div className="ml-2">  
              <span className="text-2xl font-bold">400+</span>  
              <div className="text-gray-700">Complete Cases</div>  
            </div>  
          </div>  
          <div className="flex items-center">  
            <FaUser className="text-teal-500 h-6 w-6" />  
            <div className="ml-2">  
              <span className="text-2xl font-bold">20</span>  
              <div className="text-gray-700">Expert Staff</div>  
            </div>  
          </div>  
        </div>  
      </div>  

      <div className="md:w-1/2 p-4 flex flex-col items-center">  
      <div className="bg-gray-300 w-full h-48 mb-4">
      
      <img src={img1} alt="Research Image" className="w-full h-auto rounded-lg shadow-md mb-4" />  
      </div>  
      <div className="bg-gray-300 w-full h-48">
      <img src={img2} alt="Research Image" className="w-full h-auto max-w-4xl mx-auto"/>  
        
        </div>  
      </div>  
    </div>  
  );  
};  

export default AboutUs;  
