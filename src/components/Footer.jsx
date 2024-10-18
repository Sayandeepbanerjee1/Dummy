import { faFacebook, faInstagram, faLinkedin, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 text-gray-750 pt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
                {/* About and Social */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Why Us?</h3>
                    <p className="text-gray-600">
                        At Spatial Graphics International, we specialize in transforming complex spatial data into actionable insights that empower informed decision-making...
                        <a href="./about" className="text-blue-500">Read More</a>
                    </p>
                    <div className=" flex gap-8 mt-4">
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="#" className="text-gray-600 hover:text-blue-500">
                            <FontAwesomeIcon icon={faSkype} />
                        </a>
                    </div>
                </div>
                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="./contact" className="hover:text-blue-500">Enquire Us</a></li>
                        <li><a href="./client" className="hover:text-blue-500">Our Clients</a></li>
                        <li><a href="./portfolio" className="hover:text-blue-500">Our Portfolio</a></li>
                    </ul>
                </div>

                {/* Our Service */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Our Services</h3>
                    <ul className="text-gray-600 space-y-2">
                        <li><a href="" className="hover:text-blue-500">Website Developement</a></li>
                        <li><a href="" className="hover:text-blue-500">Android Developement</a></li>
                        <li><a href="" className="hover:text-blue-500">Software Developement</a></li>
                        <li><a href="" className="hover:text-blue-500">Web GIS</a></li>
                        <li><a href="" className="hover:text-blue-500">Mobile Application</a></li>
                        <li><a href="" className="hover:text-blue-500">Graphics Design</a></li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Contact Us</h3>
                    <div className="space-y-2">
                        <p>
                            <FontAwesomeIcon icon={faGlobe} className="mr-2 text-gray-600" />
                            NO. 27, WEST AVENUE ROAD, WEST PUNJABI BAGH, NEW DELHI – 110026, INDIA.
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-600" />
                            +91 999-888-7777
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-gray-600" />
                            spatialgraphics@gmail.com
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-cyan-900 text-center text-white mt-2 py-2">
                <p>© 2024 All rights reserved</p>
                <p>Designed & Developed by S & S</p>
            </div>
        </footer>
    )
}

export default Footer;