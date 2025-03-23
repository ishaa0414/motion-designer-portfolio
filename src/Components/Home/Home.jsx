import React, { useRef, useState } from "react";
import { X, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Work from "../Work/Work";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Showreel from "../../assets/Showreel (New).mp4";
import logo from "../../assets/Logo.png";
import Showcase from "../Showcase/Showcase";
import MotionPower from "../MotionPower/MotionPower";
import ContactHome from "../ContactHome/ContactHome";
import Services from "../Services/Services";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Create refs for each section
  const workRef = useRef(null);
  const contactRef = useRef(null);

  // Close menu when a navigation action is taken
  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  // Function to navigate to a page
  const navigateTo = (path) => {
    navigate(path);
    closeMenu();
  };

  return (
    <>
      {/* Navbar */}
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
          <li className="cursor-pointer p-2 hover:text-gray-300" onClick={() => navigateTo('/work')}>Work</li>
          <li className="cursor-pointer p-2 hover:text-gray-300 gradient rounded-md" onClick={() => navigateTo('/contact')}>Get In Touch</li>
        </ul>
      </nav>

      {/* Background Video - Controls Are Clickable */}
      <div className="relative h-screen">
        <video
          src={Showreel}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        ></video>

        {/* Showreel Button */}
        <button 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white back-gradient focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-xl px-5 py-2.5 text-center me-2 mb-2 rounded-lg shadow-[inset_-50px_14px_59px_-41px_#ffffff]"
          onClick={() => navigate(`/showreel`)}
        >
          Showreel
        </button>
      </div>
      <hr className="w-3/6 h-[2px] bg-gray-500 float-right" />

      {/* Sections with Refs */}
      <section ref={workRef}><Showcase/></section>
      <section><About /></section>
      <hr className="w-3/6 h-[2px] bg-gray-500 float-right" />
      <Services/>
      <hr className="w-3/6 h-[2px] bg-gray-500" />
      <MotionPower/>
      <hr className="w-3/6 h-[2px] bg-gray-500" />
      <section ref={contactRef}><ContactHome/></section>
      
      {/* Footer with modified contact link */}
      <Footer navigateToContact={() => navigate('/contact')} />
    </>
  );
};

export default Home;