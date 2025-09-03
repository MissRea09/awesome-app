import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white fixed top-0 left-0 right-0 z-50">
      <div className="text-xl font-bold">Knit</div>

      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li><a href="#home" className="hover:text-black">Home</a></li>
        <li><a href="#how-it-works" className="hover:text-black">How It Works for Parents</a></li>
        {/* <li><a href="#how-it-works-for-schools" className="hover:text-black">How It Works For Schools</a></li> */}
        <li><a href="#testimonials" className="hover:text-black">Testimonials</a></li>
      </ul>

      <div className="space-x-4">
        <a
          href="#home"
          className="bg-gray-900 text-white px-4 py-2 rounded-md"
        >
          Pre-qualify Now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
