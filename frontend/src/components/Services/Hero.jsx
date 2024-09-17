import pathologycamtesting from "../../assets/pathologycamtesting.jpg";
import mineralassay from "../../assets/mineralassay.jpg";
import pharmaceuticalResearch from "../../assets/pharmaceuticalResearch.jpg";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={pathologycamtesting}
            alt="Pathology Testing"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-6 border-t border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pathology Testing
            </h2>
            <p className="text-gray-600">
              Nulla viverra egestas sapien mollis a molestie ullamcorper aenean.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={mineralassay}
            alt="Mineral Assay"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-6 border-t border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Mineral Assay
            </h2>
            <p className="text-gray-600">
              Magna non in suspendisse arcu, lacus ut euismod arcu velit amet
              lacinia.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={pharmaceuticalResearch}
            alt="Pharmaceutical Research"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-6 border-t border-gray-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Pharmaceutical Research
            </h2>
            <p className="text-gray-600">
              Est velit cursus eu in amet tortor, in egestas tortor euismod
              diam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
