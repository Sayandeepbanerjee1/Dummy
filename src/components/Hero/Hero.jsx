import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model.jsx';

const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
        {/* Left Column */}
        <div className="md:w-1/2 mb-6 md:mb-0 ml-5">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Spatial Graphics International
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            We specialize in providing top-tier spatial data solutions, transforming your complex spatial data needs into actionable insights with precision and reliability.<br/>Our team of experts ensures that our services are tailored to meet your specific requirements, empowering businesses to make informed decisions.
          </p>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 h-[350px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} intensity={1} />
            <OrbitControls />
            <Model modelPath="/scene.gltf" />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
