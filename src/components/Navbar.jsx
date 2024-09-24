import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto p-4 flex justify-center items-center space-x-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#work" className="hover:text-blue-400">My Work</a>
        <a href="#experience" className="hover:text-blue-400">My Experience</a>
        <a href="#contact" className="hover:text-blue-400">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;
