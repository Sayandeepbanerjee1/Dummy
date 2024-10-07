import React from "react";

const services = [
  {
    image: "/WebDevelopement.jpeg",
    title: "Web Development",
    description:
      "Web development involves creating and maintaining websites, focusing on both frontend (user interface) and backend (server and database) aspects. It utilizes technologies like HTML, CSS, JavaScript, and various backend frameworks. Web development is essential for building responsive and interactive websites and web applications.",
  },
  {
    image: "/AndroidDevelopement.jpeg",
    title: "Android Development",
    description:
      "Android development involves creating applications for devices running the Android operating system. It's a versatile and widely used platform, powering billions of smartphones, tablets, and other devices globally. Android apps are primarily developed using Java or Kotlin, supported by Android Studio, the official integrated development environment (IDE).",
  },
  {
    image: "/SoftwareDevelopement.jpg",
    title: "Software Developement",
    description:
      "A software application is a program or group of programs designed to perform specific tasks for users, such as word processing, data management, or communication. It can be standalone or part of a larger system and is developed using various programming languages and tools. Software applications enhance productivity and streamline workflows across different platforms.",
  },
  {
    image: "/WebGis.jpeg",
    title: "Web GIS",
    description:
      "Web GIS (Geographic Information Systems) refers to the use of web-based tools and technologies to access, analyze, and share geographic data and maps. It allows users to visualize spatial information, perform geographic analysis, and make data-driven decisions in a browser environment.",
  },
];

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-2 bg-white transform transition-transform duration-300 hover:scale-105">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-52 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold text-gray-700 bg-gray-200 text-center py-2 rounded-md mb-1">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-8 lg:px-16 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
