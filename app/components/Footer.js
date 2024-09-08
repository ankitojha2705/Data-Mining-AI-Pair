import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Plant Identifier. All rights reserved.</p>
        <div className="mt-2">
          <a href="/privacy" className="hover:underline mr-4">Privacy Policy</a>
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;