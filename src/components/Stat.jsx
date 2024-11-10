import React from 'react';

const Stat = () => {
  return (
    <section className="bg-cyan-400 py-2">
      <div className="container mx-auto flex justify-around text-white text-center">
        <div>
          <h2 className="text-4xl font-bold">300+</h2>
          <p className="text-lg mt-1.5">Views</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">50+</h2>
          <p className="text-lg mt-1.5">Total Projects</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">62+</h2>
          <p className="text-lg mt-1.5">Happy Clients</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-lg mt-1.5">Demo</p>
        </div>
      </div>
    </section>
  );
}

export default Stat;
