'use client';

import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed left-0 right-0 bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Plant Identifier</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" onClick={() => scrollToSection('home')} className="hover:text-green-200">Home</a></li>
            <li><a href="#" onClick={() => scrollToSection('about')} className="hover:text-green-200">About</a></li>
            <li><a href="#" onClick={() => scrollToSection('contact')} className="hover:text-green-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;