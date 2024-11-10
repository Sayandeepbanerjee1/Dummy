import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-5 w-full z-10">
      <nav className=" mx-auto flex justify-between items-center p-3 md:p-4 rounded-full bg-white shadow-lg transform transition-all duration-300">       
        {/* Left side */}
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-10 w-10 rounded-full"
          />
          <span className="text-lg md:text-md font-bold text-gray-800 whitespace-normal leading-tight sm:whitespace-nowrap">
            Spatial Graphics International pvt ltd
          </span>
        </div>

        {/* Mobile icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link>
          </li>
          <li>
            <Link to="/clients" className="hover:text-blue-500 transition-colors">Clients</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-500 transition-colors">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact</Link>
          </li>
          <li>
            <Link to="/internship" className="hover:text-blue-500 transition-colors">Internship</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg p-4 rounded-lg absolute w-full left-0 top-16 z-10">
          <ul className="text-gray-700">
            <li className="mb-3">
              <Link to="/" className="block hover:text-blue-500 transition-colors">Home</Link>
            </li>
            <li className="mb-3">
              <Link to="/about" className="block hover:text-blue-500 transition-colors">About Us</Link>
            </li>
            <li className="mb-3">
              <Link to="/services" className="block hover:text-blue-500 transition-colors">Services</Link>
            </li>
            <li className="mb-3">
              <Link to="/clients" className="block hover:text-blue-500 transition-colors">Clients</Link>
            </li>
            <li className="mb-3">
              <Link to="/portfolio" className="block hover:text-blue-500 transition-colors">Portfolio</Link>
            </li>
            <li className="mb-3">
              <Link to="/contact" className="block hover:text-blue-500 transition-colors">Contact</Link>
            </li>
            <li className="mb-3">
              <Link to="/internship" className="block hover:text-blue-500 transition-colors">Internship</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
