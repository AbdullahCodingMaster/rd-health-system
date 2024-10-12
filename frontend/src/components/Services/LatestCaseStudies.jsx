import diagnosticlabcasegallery1 from "../../assets/diagnostic-lab-case-gallery-1.jpg";
import diagnosticlabcasegallery2 from "../../assets/diagnostic-lab-case-gallery-2.jpg";
import diagnosticlabcasegallery3 from "../../assets/diagnostic-lab-case-gallery-3.jpg";
import diagnosticlabcasegallery4 from "../../assets/diagnostic-lab-case-gallery-4.jpg";
import diagnosticlabcasegallery5 from "../../assets/diagnostic-lab-case-gallery-5.jpg";
import diagnosticlabcasegallery6 from "../../assets/diagnostic-lab-case-gallery-6.jpg";

const LatestCaseStudies = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Latest Case Studies
        </h2>
        <p className="text-gray-700 mb-8">
          Imperdiet aliquet est vel nulla turpis eu consequat ullamcorper a egestas suspendisse faucibus eu velit, phasellus pulvinar lorem et libero et tortor, sapien nulla.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={diagnosticlabcasegallery1}
              alt="Case Study 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={diagnosticlabcasegallery2}
              alt="Case Study 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={diagnosticlabcasegallery3}
              alt="Case Study 3"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={diagnosticlabcasegallery4}
              alt="Case Study 4"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={diagnosticlabcasegallery5}
              alt="Case Study 5"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={diagnosticlabcasegallery6}
              alt="Case Study 6"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestCaseStudies;
