import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="text-xl font-bold">Knit</div>

      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li className="cursor-pointer hover:text-black">Features</li>
        <li className="cursor-pointer hover:text-black">How It Works</li>
        <li className="cursor-pointer hover:text-black">For Schools</li>
        <li className="cursor-pointer hover:text-black">For Parents</li>
      </ul>

      <div className="space-x-4">
        <button className="text-gray-700">Log In</button>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-md">
          Pre-qualify Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
