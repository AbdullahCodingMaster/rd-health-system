import { useState } from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for props validation
import { FaBars, FaTimes } from 'react-icons/fa';

// NavigationLink component for link styling and path definition
const NavigationLink = ({ href, children }) => (
  <a href={href} className="hover:text-gray-950 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
    {children}
  </a>
);

NavigationLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  // Mobile menu structure
  const MobileMenu = () => (
    <div className="sm:hidden space-y-2 mt-2 px-2 pb-3">
      <NavigationLink href="/">Home</NavigationLink>
      <NavigationLink href="/about">About Us</NavigationLink>
      <NavigationLink href="/services">Services</NavigationLink>
      <NavigationLink href="/testimonials">Testimonials</NavigationLink>
      <NavigationLink href="/contact">Contact Us</NavigationLink>
      <div className="text-white py-2 px-6 rounded-lg hover:text-black hover:bg-white bg-primary transition-colors duration-300">
        <a href="/appointment" className="px-4 py-2 rounded-md text-base font-medium">Make An Appointment</a>
      </div>
    </div>
  );

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">Logo</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-600 focus:outline-none"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center space-x-4 text-gray-600 font-openSans">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/about">About Us</NavigationLink>
            <NavigationLink href="/services">Services</NavigationLink>
            <NavigationLink href="/testimonials">Testimonials</NavigationLink>
            <NavigationLink href="/contact">Contact Us</NavigationLink>
          </div>

          {/* Desktop Button */}
          <div className="hidden sm:block flex-shrink-0 text-white py-2 px-6 rounded-lg hover:text-black hover:bg-white bg-primary transition-colors duration-300">
            <a href="/appointment" className="px-4 py-2 rounded-md text-sm font-medium">Make An Appointment</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Header;
