import { FaStar, FaTwitter, FaGoogle, FaFacebookF } from "react-icons/fa"; // Import required icons
import labcustomertestimonial0 from "../../assets/lab-customer-testimonial-0.jpg";
import labcustomertestimonial1 from "../../assets/lab-customer-testimonial-1.jpg";
import labcustomertestimonial2 from "../../assets/lab-customer-testimonial-2.jpg";
import labcustomertestimonial3 from "../../assets/lab-customer-testimonial-3.jpg";
import labcustomertestimonial4 from "../../assets/lab-customer-testimonial-4.jpg";
import labcustomertestimonial5 from "../../assets/lab-customer-testimonial-5.jpg";

const reviews = [
  {
    name: "Ethan Shaw",
    profession: "Engineer",
    text: "Metus venenatis cursus ipsum egestas blandit accumsan est feugiat tempus dignissim ante nunc viverra nulla condimentum nunc in sit massa pulvinar tempor mi tortor sapien vel egestas odio bibendum sem ultrices tellus.",
    image: labcustomertestimonial0,
    rating: 5,
    company: <FaGoogle />, // Google icon for this review
  },
  {
    name: "Maria Eve",
    profession: "Lawyer",
    text: "Nisl ac massa porttitor adipiscing pretium nec sit turpis in adipiscing faucibus quam consectetur pellentesque et mi molestie amet, et, platea facilisi malesuada vitae in scelerisque elementum vestibulum accumsan at etiam vitae.",
    image: labcustomertestimonial1,
    rating: 5,
    company: <FaFacebookF />, // Facebook icon for this review
  },
  {
    name: "Liam Bower",
    profession: "Mechanic",
    text: "Tristique sed odio nunc ut morbi sit urna, vitae, sed pellentesque massa, pellentesque lacinia sapien tempor enim netus euismod tincidunt varius malesuada ornare morbi lorem suspendisse non posuere penatibus tincidunt aliquam lorem.",
    image: labcustomertestimonial2,
    rating: 5,
    company: <FaTwitter />, // Twitter icon for this review
  },
  {
    name: "Nicky",
    profession: "Dancer",
    text: "Sit cursus quam sagittis pellentesque iaculis mauris purus tincidunt urna ullamcorper viverra aliquet aliquet aliquet donec non molestie egestas cursus amet eu facilisi varius libero diam pharetra odio pharetra at cras aliquam.",
    image: labcustomertestimonial3,
    rating: 5,
    company: <FaTwitter />, // Twitter icon for this review
  },
  {
    name: "Dan Anderson",
    profession: "Architect",
    text: "Nisl ac massa porttitor adipiscing pretium nec sit turpis in adipiscing faucibus quam consectetur pellentesque et mi molestie amet, et, platea facilisi malesuada vitae in scelerisque elementum vestibulum accumsan at etiam vitae.",
    image: labcustomertestimonial4,
    rating: 5,
    company: <FaFacebookF />, // Facebook icon for this review
  },
  {
    name: "Diana Moore",
    profession: "Designer",
    text: "Tristique sed odio nunc ut morbi sit urna, vitae, sed pellentesque massa, pellentesque lacinia sapien tempor enim netus euismod tincidunt varius malesuada ornare morbi lorem suspendisse non posuere penatibus tincidunt aliquam lorem.",
    image: labcustomertestimonial5,
    rating: 5,
    company: <FaGoogle />, // Google icon for this review
  },
];

const ReviewComponent = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 max-w-6xl mx-auto">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Render stars based on the rating */}
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
              </div>
              {/* Company icon, if available */}
              {review.company && (
                <div className="text-2xl text-gray-500">{review.company}</div>
              )}
            </div>

            <p className="mt-4 text-gray-600">&ldquo;{review.text}&ldquo;</p>

            <div className="flex items-center mb-4">
              {/* Render the rounded profile image */}
              {review.image && (
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              )}
              <div>
                {/* Reviewer's name */}
                <h3 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h3>
                {/* Reviewer's profession */}
                {review.profession && (
                  <p className="text-sm text-gray-500">{review.profession}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewComponent;
