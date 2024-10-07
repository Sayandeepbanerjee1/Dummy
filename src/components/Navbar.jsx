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
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-12 w-12"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-800">Spatial Graphics International Private Limited</span>
          </div>
        </div>

        {/* Mobile view button*/}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Desktop view Right */}
        <ul className="hidden md:flex gap-12 text-gray-700 font-medium">
          <li>
            <Link to="./" className="hover:text-blue-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="./about" className="hover:text-blue-500 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="./services" className="hover:text-blue-500 transition-colors">Services</Link>
          </li>
          <li>
            <Link to="./clients" className="hover:text-blue-500 transition-colors">Clients</Link>
          </li>
          <li>
            <Link to="./portfolio" className="hover:text-blue-500 transition-colors">Portfolio</Link>
          </li>
          <li>
            <Link to="./dummy" className="hover:text-blue-500 transition-colors">Dummy</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Right */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="bg-white text-gray-700 p-4">
            <li className="mb-3">
              <Link to="./" className="block hover:text-blue-500 transition-colors">Home</Link>
            </li>
            <li className="mb-3">
              <Link to="./about" className="block hover:text-blue-500 transition-colors">About Us</Link>
            </li>
            <li className="mb-3">
              <Link to="./services" className="block hover:text-blue-500 transition-colors">Services</Link>
            </li>
            <li className="mb-3">
              <Link to="./clients" className="block hover:text-blue-500 transition-colors">Clients</Link>
            </li>
            <li className="mb-3">
              <Link to="./portfolio" className="block hover:text-blue-500 transition-colors">Portfolio</Link>
            </li>
            <li className="mb-3">
              <Link to="./dummy" className="block hover:text-blue-500 transition-colors">Dummy</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
