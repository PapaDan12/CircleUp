import React from 'react';

const Privacy = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">What We Collect</h2>
        <p>Email, name, location, usage data, and content you create.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">How We Use It</h2>
        <p>To personalize your experience and improve CircleUp.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Your Rights</h2>
        <p>View, edit, or delete your data anytime. Contact us at privacy@circleup.app.</p>
      </section>
    </div>
  );
};

export default Privacy;
