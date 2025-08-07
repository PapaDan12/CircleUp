import React from 'react';

const Features = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Features</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Feature title="Connect" desc="Meet and collaborate with others in real-time." />
        <Feature title="Create" desc="Use AR tools to design your own experiences." />
        <Feature title="Augment Reality" desc="Enhance your world with immersive tech." />
        <Feature title="Circles" desc="Join communities based on shared interests." />
      </div>
    </div>
  );
};

const Feature = ({ title, desc }) => (
  <div className="bg-gray-100 rounded-xl p-6 shadow">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="mt-2 text-gray-700">{desc}</p>
  </div>
);

export default Features;
