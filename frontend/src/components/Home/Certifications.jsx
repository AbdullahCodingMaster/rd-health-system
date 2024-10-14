import React from 'react';
import c1 from "../../assets/c1.png";
import C2 from "../../assets/C2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";

const Certifications = () => {
  return (
    <div className="px-4 lg:px-[100px] lg:mx-auto py-8">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-10 mb-8">
        {/* "Certifications" text */}
        <h2 className="text-xl font-semibold font-openSans ">Certifications</h2>

        {/* Vertical Line */}
        <div className="hidden lg:block w-[60px] h-[2px] bg-secondary items-center"></div>

        {/* Certifications Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-4 lg:gap-10">
          <div><img src={c1} alt="Certification 1" className="w-24 sm:w-28 lg:w-32 h-auto" /></div>
          <div><img src={C2} alt="Certification 2" className="w-24 sm:w-28 lg:w-32 h-auto" /></div>
          <div><img src={c3} alt="Certification 3" className="w-24 sm:w-28 lg:w-32 h-auto" /></div>
          <div><img src={c4} alt="Certification 4" className="w-24 sm:w-28 lg:w-32 h-auto" /></div>
          <div><img src={c5} alt="Certification 5" className="w-24 sm:w-28 lg:w-32 h-auto" /></div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
