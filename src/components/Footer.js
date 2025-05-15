import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-80 text-gray-400 text-sm px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <p className="mb-6">Questions? Call <a href="tel:000-800-919-1694" className="underline">000-800-919-1694</a></p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Help Centre</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Corporate Information</a>
        </div>

        <div>
          <select
            className="bg-transparent border border-gray-600 px-3 py-2 rounded text-white"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
