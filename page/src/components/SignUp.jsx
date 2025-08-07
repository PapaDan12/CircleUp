import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <Link to="/seventh">
        <p className="text-sm text-center mt-4">
          Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log in</a>  
        </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
