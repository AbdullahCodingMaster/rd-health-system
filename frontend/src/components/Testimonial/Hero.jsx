import {
  FaStar,
  FaStarHalfAlt,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa"; // Import required icons

const Hero = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 max-w-6xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Testimonial</h1>
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="max-w-7xl mx-auto border border-gray-900 bg-white rounded-tl-xl rounded-tr-xl rounded-br-xl">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0 sm:space-x-6">
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 w-full">
            <div className="flex flex-col space-x-4 rounded-tl-xl rounded-tr-xl rounded-br-xl p-4 bg-blue-600 w-full max-w-xs">
              <div className="text-center">
                <div className="text-4xl font-semibold text-white">4.7</div>
              </div>
              <div className="text-yellow-500 flex space-x-1">
                <div className="text-lg text-gray-600">of 5</div>
                <FaStar className="text-3xl" />
                <FaStar className="text-3xl" />
                <FaStar className="text-3xl" />
                <FaStar className="text-3xl" />
                <FaStarHalfAlt className="text-3xl" />
              </div>
            </div>
            <div className="flex items-center p-4 w-full max-w-xs">
              <FaGoogle className="text-blue-500 text-3xl mr-4" />
              <div>
                <p className="text-lg font-medium text-gray-900">4.8/5</p>
                <p className="text-sm text-gray-600">1860 Reviews</p>
              </div>
            </div>
            <div className="flex items-center p-4 w-full max-w-xs">
              <FaFacebookF className="text-gray-500 text-3xl mr-4" />
              <div>
                <p className="text-lg font-medium text-gray-900">4.6/5</p>
                <p className="text-sm text-gray-600">1630 Reviews</p>
              </div>
            </div>
            <div className="flex items-center p-4 w-full max-w-xs">
              <FaTwitter className="text-gray-500 text-3xl mr-4" />
              <div>
                <p className="text-lg font-medium text-gray-900">4.7/5</p>
                <p className="text-sm text-gray-600">2100 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
