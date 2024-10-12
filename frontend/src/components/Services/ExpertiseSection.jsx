import diagnosticabhandholdingtools from "../../assets/diagnosticabhandholdingtools.jpg";

const ExpertiseSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container flex flex-col lg:flex-row items-center max-w-6xl mx-auto">
        {/* Image Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
          <img
            src={diagnosticabhandholdingtools}
            alt="Expertise Image"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Text Column */}
        <div className="lg:w-1/2 lg:pl-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Expertise
          </h2>
          <p className="text-gray-700 mb-6">
            Id elit mauris neque, purus dui turpis gravida id viverra nunc sit
            risus quam ornare et massa viverra porta risus justo lectus morbi
            pulvinar non bibendum nisl quisque donec nunc facilisis fermentum.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                01. Blood Bank & Chemistry
              </h3>
              <p className="text-gray-600 border-l-2 border-green-500 pl-4">
                Nulla viverra egestas sapien mollis a molestie ullamcorper
                aenean.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                02. Coagulation & Cytology
              </h3>
              <p className="text-gray-600 border-l-2 border-green-500 pl-4">
                Magna non in suspendisse arcu, lacus ut euismod arcu velit amet
                lacinia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600">
                03. Hematology & Histology
              </h3>
              <p className="text-gray-600 border-l-2 border-green-500 pl-4">
                Est velit cursus eu in amet tortor, in egestas tortor euismod
                diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
