import React from 'react';

const HelpCenter = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <input
        className="w-full p-2 border rounded mb-6"
        placeholder="Search for help..."
      />

      <div className="space-y-4">
        <Faq question="How do I create a Circle?" answer="Click on 'Start Circle' from your dashboard, set a topic, and invite users." />
        <Faq question="Is AR available offline?" answer="No, you'll need an internet connection for AR collaboration." />
        <Faq question="How do I report an issue?" answer="Use the contact support button or email help@circleup.app." />
      </div>
    </div>
  );
};

const Faq = ({ question, answer }) => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="font-medium">{question}</h3>
    <p className="text-sm text-gray-600">{answer}</p>
  </div>
);

export default HelpCenter;
