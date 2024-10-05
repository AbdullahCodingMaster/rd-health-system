import React, { useState } from 'react';
import MapComponent from '../components/Map/Map';
import { FaPhone, FaEnvelope,  FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation function
  const validate = () => {
    let tempErrors = {};
    let RegexName = /^[A-Za-z]+$/;
    let RegexEmail = /^\S+@\S+\.\S+$/;

    if (!formData.firstName) tempErrors.firstName = "First name is required";
    else if (!RegexName.test(formData.firstName)) tempErrors.firstName = "Invalid first name";

    if (!formData.lastName) tempErrors.lastName = "Last name is required";
    else if (!RegexName.test(formData.lastName)) tempErrors.lastName = "Invalid last name";

    if (!formData.email) tempErrors.email = "Email is required";
    else if (!RegexEmail.test(formData.email)) tempErrors.email = "Invalid email address";

    if (!formData.subject) tempErrors.subject = "Subject is required";
    if (!formData.message) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);

    // Returns boolean indicating if there are errors
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate before submission
    if (validate()) {
      console.log('Form data:', formData);

      // You can replace the following with actual API submission logic
      alert('Form submitted successfully!');

      // Clear the form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <div className='bg-[#F7FDFB]'>
      <div className="p-8 w-full md:w-1/2 p-4">  
        <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>  
        <p className="mt-4 text-lg text-gray-600">  
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>  
      </div>

      <div className="flex flex-col md:flex-row  p-8 bg-white rounded-lg p-4 shadow-md">  
        <div className="w-full md:w-1/2 p-4">  
          <h1 className="text-3xl font-bold text-gray-800">Send Us a Message</h1>  
          <p className="mt-2 text-gray-600">
            Urna congue faucibus rhoncus a ultrices nec at pulvinar convallis ac vitae amet condimentum risus pharetra rhoncus pretium.
          </p>  

          {/* Form start */}
          <form className="mt-4" onSubmit={handleSubmit}>  
            <div className="grid grid-cols-1 gap-4">  
              <div className="grid grid-cols-2 gap-4">
                <div>  
                  <label className="block text-gray-700">First Name *</label>  
                  <input 
                    type="text" 
                    className="mt-1 p-2 border border-gray-300 rounded w-full" 
                    placeholder="First" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />  
                  {errors.firstName && <span className="text-red-600">{errors.firstName}</span>}
                </div>  

                <div>  
                  <label className="block text-gray-700">Last Name *</label>  
                  <input 
                    type="text" 
                    className="mt-1 p-2 border border-gray-300 rounded w-full" 
                    placeholder="Last" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />  
                  {errors.lastName && <span className="text-red-600">{errors.lastName}</span>}
                </div>  
              </div>

              <div>  
                <label className="block text-gray-700">Email *</label>  
                <input 
                  type="email" 
                  className="mt-1 p-2 border border-gray-300 rounded w-full" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />  
                {errors.email && <span className="text-red-600">{errors.email}</span>}
              </div>  

              <div>  
                <label className="block text-gray-700">Subject *</label>  
                <input 
                  type="text" 
                  className="mt-1 p-2 border border-gray-300 rounded w-full" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />  
                {errors.subject && <span className="text-red-600">{errors.subject}</span>}
              </div>  

              <div>  
                <label className="block text-gray-700">Message *</label>  
                <textarea 
                  className="mt-1 p-2 border border-gray-300 rounded w-full" 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>  
                {errors.message && <span className="text-red-600">{errors.message}</span>}
              </div>  

              <button type="submit" className="mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
                Send Message
              </button>  
            </div>  
          </form>  
        </div>

       
     <div className="w-full md:w-1/2 p-4">  
        <div className="mt-4 flex  flex-row justify-between mb-3.5">  
    <div className="flex items-center flex-col">  
      <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">  
        <FaPhone className='hover:text-gray-600'/>  
      </span>  
      <h3 className="text-lg font-bold ml-2">Call Us</h3>  
    <p className="text-gray-600">+1 123 456 7890</p>  
    </div>  

    <div className="flex items-center mt-2 flex-col">  
      <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full">  
        <FaEnvelope className='hover:text-gray-600'/>  
      </span>  
      <h3 className="text-lg font-bold ml-2">Email Us</h3>  
    <p className="text-gray-600">info@example.com</p>  
    </div>  
  </div>  

  <div className="bg-blue-600 text-white p-6  shadow-md">   
    <div className="flex items-center">  
      <span className="flex items-center justify-center w-10 h-10 bg-white text-blue-600 rounded-full">  
        <FaMapMarkerAlt className='hover:text-gray-600'/>   
      </span>  
      <h2 className="text-xl font-bold ml-2">Our Location</h2>  
    </div>  
    <p className="mt-2">Midtown Manhattan 123 5th Ave, New York, NY 1021, US.</p>  
    <button className="bg-blue-600 mt-4 bg-white text-white-100 border-2 border-gray-300 py-2 px-4 rounded hover:bg-white hover:text-blue-700">Get Directions</button>  
  </div>  

  <div>  
    <img src="https://websitedemos.net/diagnostics-lab-02/wp-content/uploads/sites/662/elementor/thumbs/diagnostic-lab-interior-ouh5xv62ahvghlq8h49tj3l7xap54by8s3gf8z99q8.jpg" alt="" />  
  </div>                                                                                          
</div>
      </div>

      <div className="flex justify-center items-center h-screen">  
        <MapComponent />  
      </div> 
    </div>
  );
};

export default ContactUs;
