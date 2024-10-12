import { FaKeyboard, FaPen } from "react-icons/fa";
import { FaMicroscope } from "react-icons/fa";
import { FaUser, FaFileInvoice, FaUserNurse } from "react-icons/fa";
import img1 from "../assets/img11.webp";
import img2 from "../assets/img2.webp";

const AboutUs = () => {
  return (
    <div className=" bg-[#F7FDFB] px-[200px] pt-0 pb-[104px]">
      <div className="flex flex-col gap-5 justify-start items-start w-full max-w-2xl w-full md:w-1/3 p-4 mb-14">
        <h1 className="text-left font-medium text-5xl text-gray-800 leading-tight">
          About Us
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="flex flex-row">
        {/* Text and Info Section */}
        <div className="w-1/2">
          <div>
            <h1 className="text-3xl font-bold mt-4">
              We Employ Latest Research Technology & Company
            </h1>
            <h2 className="text-xl font-semibold mt-2 text-gray-700">
              Urna congue faucibus rhoncus a ultrices nec at pulvinar convallis
              ac vitae amet condimentum risus pharetra rhoncus pretium consequat
              cras feugiat lorem nam non.
            </h2>
            <p className="mt-2 text-gray-600">
              Pulvinar proin sit neque pellentesque elementum purus faucibus
              nunc tincidunt lorem sed posuere velit condimentum scelerisque
              varius tempor in amet cum pharetra malesuada nisl, urna congue
              faucibus rhoncus a ultrices nec at pulvinar convallis ac vitae
              amet condimentum risus pharetra rhoncus pretium consequat cras
              feugiat lorem nam non.
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

        {/* Image Section */}
        <div className="relative w-1/2 p-4">
          {/* First large image */}
          <div className="relative bg-gray-300 w-full h-96">
            <img
              src={img1}
              alt="Research Image"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Second smaller image */}
          <div className="absolute bottom-0 left-0 bg-white p-2">
            <img
              src={img2}
              alt="Research Image"
              className="w-32 h-32 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 py-10 order-b mt-20">
        <h2 class="text-3xl font-bold text-center mb-6">Why Choose Us</h2>
        <p class="text-center text-gray-600 mb-10">
          Imperdiet aliquet est vel nulla turpis eu consequat ullamcorper a
          egestas suspendisse faucibus eu velit, phasellus pulvinar lorem et
          libero et tortor, sapien nulla.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center p-4 border rounded-lg shadow-lg">
            <div class="bg-blue-500 text-white rounded-full p-4 mb-4 inline-block">
              <FaMicroscope className="hover:text-gray-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">High Quality Lab</h3>
            <p class="text-gray-600">
              In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin
              tincidunt.
            </p>
          </div>
          <div class="text-center p-4 border rounded-lg shadow-lg">
            <div class="bg-blue-500 text-white rounded-full p-4 mb-4 inline-block">
              <FaKeyboard className="hover:text-gray-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">Unmatched Expertise</h3>
            <p class="text-gray-600">
              In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin
              tincidunt.
            </p>
          </div>
          <div class="text-center p-4 border rounded-lg shadow-lg">
            <div class="bg-blue-500 text-white rounded-full p-4 mb-4 inline-block">
              <FaFileInvoice className="hover:text-gray-600" />
            </div>
            <h3 class="textlg font-semibold mb-2">Precise Result</h3>
            <p class="text-gray-600">
              In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin
              tincidunt.
            </p>
          </div>
          <div class="text-center p-4 border rounded-lg shadow-lg">
            <div class="bg-blue-500 text-white rounded-full p-4 mb-4 inline-block">
              <FaUserNurse className="hover:text-gray-600" />
            </div>
            <h3 class="textlg font-semibold mb-2">Qualified Staff</h3>
            <p class="text-gray-600">
              In iaculis nisi, a tempor diam luctus elit vulputate aliquet proin
              tincidunt.
            </p>
          </div>
        </div>
      </div>

      <div class="mb-5 p-6  ">
        <h2 class="text-xl font-semibold mb-4">Our Lab Certification</h2>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="text-blue-600">Approved</span>
            <span class="ml-1">Laboratory</span>
          </div>
          <a href="#">
            <img
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-certi-2.png"
              alt="ALU Accredited"
              class="h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-certi-3.png"
              alt="Clinical Laboratory Certification"
              class="h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-certi-4.png"
              alt="ABC Accredited"
              class="h-10"
            />
          </a>
          <img
            src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-certi-5.png"
            alt="OLAB"
            class="h-10"
          />
          <a href="#"></a>
        </div>
      </div>

      <div class="max-w-4x2 mx-auto p-6 ">
        <h1 class="text-3xl font-bold text-center mb-4">Our Expert Team</h1>
        <p class="text-center text-gray-600 mb-8">
          Imperdiet aliquet est vel nulla turpis eu consequat ullamcorper a
          egestas suspendisse faucibus eu velit, phasellus pulvinar lorem et
          libero et tortor, sapien nulla.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <img
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/lab-expert-team-member-1.jpg"
              alt="Margaret Anderson"
              class="w-full h-90 object-cover rounded-lg mb-2"
            />
            <h2 class="font-semibold">Margaret Anderson</h2>
            <p class="text-gray-500">Head of Laboratory Department</p>
          </div>
          <div class="text-center">
            <img
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/lab-expert-team-member-2-234x300.jpg"
              alt="Mark Anthony"
              class="w-full h-90 object-cover rounded-lg mb-2"
            />
            <h2 class="font-semibold">Mark Anthony</h2>
            <p class="text-gray-500">Senior Pathologist</p>
          </div>
          <div class="text-center">
            <img
              src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/lab-expert-team-member-3.jpg"
              alt="Samantha Wood"
              class="w-full h-90 object-cover rounded-lg mb-2"
            />
            <h2 class="font-semibold">Samantha Wood</h2>
            <p class="text-gray-500">Laboratory Technician</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
