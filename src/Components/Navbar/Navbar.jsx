import React, {useRef, useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.png";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
    closeMenu();
  };

  // Create refs for each section


  // Function to scroll to a section smoothly
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false); // Close menu on selection
  };



  return (
  <>
       <nav className="pr-5 pl-5 fixed top-0 left-0 w-full bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125 flex justify-between items-center z-50 text-white open-sans">
        {/* Logo */}
        <Link to="/">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} className="w-16 cursor-pointer text-center" alt="Logo" />
            <div className="text-center pl-2">Shiwang Nath</div>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 mr-5" />}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex gap-6 text-center font-semibold bg-zinc-500 bg-opacity-100 text-white font-sans md:bg-transparent transition-all duration-300 text-lg
          ${mobileMenuOpen ? "block absolute top-10 rounded-lg text-gray-800 text-lg right-0 w-1/3 bg-[#919191e0] p-4" : "hidden"} md:block`}>
          <li className="cursor-pointer p-2 hover:text-gray-300" onClick={() => navigateTo('/show-work')}>Work</li>
          <li className="cursor-pointer p-2 hover:text-gray-300 gradient rounded-md" onClick={() => navigateTo('/contact')}>Get In Touch</li>
        </ul>
      </nav>
  
  </>
  );
};

export default Navbar;
