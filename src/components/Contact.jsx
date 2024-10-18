import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="rounded">
      <h2 className="text-center font-bold text-2xl mt-6 mb-0">Contact Us</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 px-10 py-5">
          {/* Left Section */}
          <section className="gap-10 bg-red-300 py-4 px-5">
            <div>
              <div className="grid grid-rows justify-center">
                <p className="mb-4 text-wrap">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="mr-2 text-gray-600"
                  />
                  NO. 27, WEST AVENUE ROAD, WEST PUNJABI BAGH, NEW DELHI – 110026, INDIA.
                </p>
                <p className="mb-4">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mr-2 text-gray-600"
                  />
                  +91 999-888-7777
                </p>
                <p className="mb-5">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mr-2 text-gray-600"
                  />
                  spatialgraphics@gmail.com
                </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.5071586568797!2d77.13010921343916!3d28.670264732914045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03a36f162d25%3A0x59b0b9985bbc81c7!2s27%2C%20W%20Ave%20Rd%2C%20West%20Punjabi%20Bagh%2C%20Punjabi%20Bagh%2C%20New%20Delhi%2C%20Delhi%2C%20110026!5e1!3m2!1sen!2sin!4v1729279243012!5m2!1sen!2sin" width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </section>

          {/* Right Section */}
          <section className="bg-blue-300">
            <form onSubmit={handleSubmit}>
              <div className="max-w-md mx-auto p-4 rounded">
                {/* Name and Phone */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-600 font-bold">Name:</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 font-bold">Phone:</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label className=" font-bold block text-gray-600">Email:</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-4">
                  <label className="font-bold block text-gray-600">Message:</label>
                  <textarea
                    name="message"
                    rows={6}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your message"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pb-4">
                <button
                  type="submit"
                  className=" bg-green-600 px-6 py-2 rounded hover:text-pink-500 text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
