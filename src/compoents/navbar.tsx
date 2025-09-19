import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import knitLogo from "../img/Logoknit.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll helper for "For Parents" link
  const handleScrollToParents = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = "/#home"; // redirect to homepage first
    } else {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
<<<<<<< HEAD
 {/* Logo */}
<Link to="/" className="flex items-center space-x-2">
  <img
    src={knitLogo}
    alt="Knit Logo"
    className="h-28 w-40 rounded-md object-contain max-h-28"
  />
</Link>


=======
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={knitLogo} alt="Knit Logo" className="h-12 w-auto rounded-md" />
        </Link>
>>>>>>> origin/main

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="/#home" className="hover:text-black">Home</a></li>
<<<<<<< HEAD
          {/* <li><a href="/#how-it-works" className="hover:text-black">How It Works</a></li> */}
=======
          <li><a href="/#how-it-works" className="hover:text-black">How It Works</a></li>
>>>>>>> origin/main
          <li><Link to="/schools" className="hover:text-black">For Schools</Link></li>
          <li><a href="/#home" onClick={handleScrollToParents} className="hover:text-black"> For Parents</a></li>
          <li><a href="/#testimonials" className="hover:text-black">Testimonials</a></li>
          {/* <li><Link to="/faq" className="hover:text-black">FAQ</Link></li>
          <li><Link to="/about" className="hover:text-black">About Us</Link></li> */}
        </ul>

<<<<<<< HEAD
        {/* Pre-qualify CTA (desktop)
=======
        {/* Pre-qualify CTA (desktop) */}
>>>>>>> origin/main
        <div className="hidden md:block">
          <a
            href="/#home"
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Pre-qualify
          </a>
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> origin/main

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col space-y-4 py-6 px-6 text-gray-700 font-medium">
            <li><a href="/#home" onClick={() => setIsOpen(false)}>Home</a></li>
<<<<<<< HEAD
            {/* <li><a href="/#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a></li> */}
            <li><Link to="/schools" onClick={() => setIsOpen(false)}>For Schools</Link></li>
            <li><a href="/#home" onClick={handleScrollToParents}>For Parents</a></li>
            <li><a href="/#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
            {/* <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li> */}
            <li>
              {/* <a
=======
            <li><a href="/#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a></li>
            <li><Link to="/schools" onClick={() => setIsOpen(false)}>For Schools</Link></li>
            <li><a href="/#home" onClick={handleScrollToParents}>For Parents</a></li>
            <li><a href="/#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
            <li><Link to="/faq" onClick={() => setIsOpen(false)}>FAQ</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li>
              <a
>>>>>>> origin/main
                href="/#home"
                className="bg-gray-900 text-white px-4 py-2 rounded-md block text-center"
                onClick={() => setIsOpen(false)}
              >
                Pre-qualify
<<<<<<< HEAD
              </a> */}
=======
              </a>
>>>>>>> origin/main
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
