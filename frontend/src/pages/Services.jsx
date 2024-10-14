import React from "react";
import { FaPlay } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-[#F7FDFB] w-full flex justify-center flex-col px-[200px] pt-0 pb-[104px]">
      <div>
        <div>
          <div className="flex flex-col gap-5 justify-start items-start w-full max-w-2xl w-full md:w-1/3 p-4 mb-14">
            <h2 className="text-4xl font-bold text-center">Services</h2>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative bg-white border border-black rounded-tl-md rounded-br-md shadow-lg p-5 h-72">
              <div className="absolute -top-6 -left-0 w-full">
                <img
                  src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/pathologycam-testing-300x225.jpg"
                  alt="Pathologycam Testing"
                  className="rounded-t-lg w-72 h-40 object-cover shadow-[20px_20px_30px_rgba(0,0,0,0.2)] drop-shadow-[15px_5px_15px_rgba(0,0,0,0.15)]"
                />
              </div>
              <div className="mt-40">
                <h3 className="text-xl font-semibold mt-4">Pathologycam Testing</h3>
                <p className="text-xs text-gray-600 mt-2">
                  Nulla viverra egestas sapien mollis a molestie ullamcorper
                  aenean.
                </p>
              </div>
            </div>

            <div className="relative bg-white border border-black rounded-tl-md rounded-br-md shadow-lg p-5 h-72 mb-20">
              <div className="absolute -top-6 -left-0 w-full">
                <img
                  src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/mineral-assay.jpg"
                  alt="Mineral Assay"
                  className="rounded-t-lg w-72 h-40 object-cover shadow-[20px_20px_30px_rgba(0,0,0,0.2)] drop-shadow-[15px_5px_15px_rgba(0,0,0,0.15)]"
                />
              </div>
              <div className="mt-40">
                <h3 className="text-xl font-semibold mt-4">Mineral Assay</h3>
                <p className="text-xs text-gray-600 mt-2">
                  Magna non in suspendisse arcu, lacus euismod arcu velit amet
                  lacinia.
                </p>
              </div>
            </div>

            <div className="relative bg-white border border-black rounded-tl-md rounded-br-md shadow-lg p-5 h-72">
              <div className="absolute -top-6 -left-0 w-full">
                <img
                  src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/parmaceutical-reserach.jpg"
                  alt="Pharmaceutical Research"
                  className="rounded-t-lg w-72 h-40 object-cover shadow-[20px_20px_30px_rgba(0,0,0,0.2)] drop-shadow-[15px_5px_15px_rgba(0,0,0,0.15)]"
                />
              </div>
              <div className="mt-40">
                <h3 className="text-xl font-semibold mt-4">Pharmaceutical Research</h3>
                <p className="text-xs text-gray-600 mt-2">
                  Est velit cursus eu in amet tortor, in egestas tortor euismod
                  diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-hand-holding-tools-300x300.jpg"
            alt="Laboratory Work"
            className="rounded-lg w-full h-auto"
          />
          <button className="flex items-center justify-center gap-x-2 mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg border-2 border-gray-300 hover:bg-white hover:text-blue-700">
            <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">
              <FaPlay />
            </span>
            Play the Video
          </button>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
          <p className="text-xs text-gray-700 mb-6">
            Id elit mauris neque, purus dui turpis gravida id viverra nunc sit
            risus quam ornare et massa viverra porta risus justo lectus morbi
            pulvinar non bibendum nisl quisque donec nunc facilisis fermentum.
          </p>
          <div className="space-y-4">
            <div className="relative mb-5">
              <h3 className="text-[#28BD86] relative inline-block pb-1 text-xl font-semibold">
                01. Blood Bank & Chemistry
              </h3>
              <div className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00bcd4]">
                <p className="text-xs text-gray-600">
                  Nulla viverra egestas sapien mollis a molestie ullamcorper
                  aenean.
                </p>
              </div>
            </div>
            <div className="relative mb-5">
              <h3 className="text-[#28BD86] relative inline-block pb-1 text-xl font-semibold">
                02. Coagulation & Cytology
              </h3>
              <div className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00bcd4]">
                <p className="text-xs text-gray-600">
                  Magna non in suspendisse arcu, lacus ut euismod arcu velit
                  amet lacinia.
                </p>
              </div>
            </div>
            <div className="relative mb-5">
              <h3 className="text-[#28BD86] relative inline-block pb-1 text-xl font-semibold">
                03. Hematology & Histology
              </h3>
              <div className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#00bcd4]">
                <p className="text-xs text-gray-600">
                  Est velit cursus eu in amet tortor, in egestas tortor euismod
                  diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10">
        <div className="flex flex-col gap-5 justify-center items-center w-full max-w-2xl mx-auto p-4 mb-14">
          <h2 className="text-4xl font-bold mb-4">Latest Case Studies</h2>
          <p className="text-gray-700 mb-8 text-center">
            Imperdiet aliquot est vel nulla turpis eu consequat ullamcorper a
            egestas suspendisse faucibus eu velit, phasellus pulvinar lorem et
            libero et tortor, sapien nulla.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-6.jpg"
            alt="Case Study 1"
            className="rounded-lg w-full h-auto object-cover"
          />
          <img
            src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-3.jpg"
            alt="Case Study 2"
            className="rounded-lg w-full h-auto object-cover"
          />
          <img
            src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/2020/08/diagnostic-lab-case-gallery-5.jpg"
            alt="Case Study 3"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
