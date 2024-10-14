import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from "../context/AuthContext"; // Import AuthContext

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
  const { user, logout } = useAuth(); // Access user and logout function

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const handleLogout = async () => {
    await logout(); // Call logout function
    window.location.href = "/"; // Redirect to home page
  };

  const MobileMenu = () => (
    <div className="sm:hidden space-y-2 mt-2 px-2 pb-3">
    <NavigationLink href="/">Home</NavigationLink>
    <NavigationLink href="/about">About Us</NavigationLink>
    <NavigationLink href="/services">Services</NavigationLink>
    <NavigationLink href="/testimonials">Testimonials</NavigationLink>
    <NavigationLink href="/contact">Contact Us</NavigationLink>
  <div className="text-white py-2 px-8 rounded-lg hover:text-black hover:bg-white bg-primary transition-colors duration-300 mt-2">
        <a href="/appointment" className="px-4 py-2 rounded-md text-base font-medium">Make An Appointment</a>
      </div>
  </div>
  
  );

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">Logo</a>
          </div>
          <div className="sm:hidden">
          {user && // Show Logout button if user is logged in
              <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
                Logout
              </button>
            }
          </div>
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
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center space-x-4 text-gray-600 font-openSans">
            <NavigationLink href="/">Home</NavigationLink>
            <NavigationLink href="/about">About Us</NavigationLink>
            <NavigationLink href="/services">Services</NavigationLink>
            <NavigationLink href="/testimonials">Testimonials</NavigationLink>
            <NavigationLink href="/contact">Contact Us</NavigationLink>
            {user ? ( // Show Logout button if user is logged in
              <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded">
                Logout
              </button>
            ) : (
              <div className="text-white py-2 px-6 rounded-lg hover:text-black hover:bg-white bg-primary transition-colors duration-300">
                <a href="/appointment" className="px-4 py-2 rounded-md text-sm font-medium">Make An Appointment</a>
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && <MobileMenu />}
    </nav>
  );
};

export default Header;
