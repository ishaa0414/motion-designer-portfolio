import React, {useRef, useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
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
    <nav className="z-50 pr-5 pl-5 fixed top-0 left-0 w-full bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125 flex justify-between items-center  text-white  ">
          {/* Logo */}
          <Link to="/">
            <img src={logo} className="w-16 cursor-pointer" alt="Logo" />
          </Link>
  
          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6 mr-5 z-50" />}
          </button>
  
          {/* Navigation Links */}
          <ul className={`md:flex gap-6 text-center font-semibold bg-zinc-500 bg-opacity-100 text-white font-sans md:bg-transparent transition-all duration-300 
            ${mobileMenuOpen ? "block absolute top-10 rounded-lg text-gray-800 text-lg right-0 w-1/3 bg-[#919191e0] p-4" : "hidden"} md:block`}>
            <li className="cursor-pointer p-2 hover:text-gray-300" onClick={() => navigateTo('/work')}>Work</li>
            
            
            <li className="cursor-pointer p-2 hover:text-gray-300" onClick={() => navigateTo('/contact')}>Get in Touch</li>
          </ul>
        </nav>
  
  </>
  );
};

export default Navbar;
