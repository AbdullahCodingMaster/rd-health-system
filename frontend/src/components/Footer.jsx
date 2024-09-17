const Footer = () => {
  return (
    <footer className="bg-white text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Description */}
          <div>
            <h3 className="text-lg font-bold mb-4">Diagnostics Lab</h3>
            <p className="text-sm text-gray-600">
              Urna aliquet feugiat odio enim ut pharetra pretium velit viverra elementum pulvinar viverra diam urna rhoncus eu.
            </p>
          </div>

          {/* Our Main Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Main Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Sample Preparations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Healthcare Labs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Advanced Microscopy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Chemical Research</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Pathology Testing</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">About Our Lab</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Customer Insight</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Free Consultation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Meet Our Team</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Our Services</a></li>
            </ul>
          </div>

          {/* Scientific Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Scientific</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Chemistry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Gemological</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors duration-300">Testimonials</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
          <p>&copy; 2024 Diagnostics Lab | Powered by Diagnostics Lab</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
