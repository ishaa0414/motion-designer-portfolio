import React from 'react';
import { Copyright } from 'lucide-react';
import logo from '../../assets/logo.png';
import Behance from '../../assets/icons/Be Icon.png';
import Ig from '../../assets/icons/Ig Icon.png';
import LinkedIn from '../../assets/icons/LinkedIn Icon.png';
import X from '../../assets/icons/X Icon.png';

const Footer = () => {
  // Social media URLs
  const socialLinks = {
    behance: "https://www.behance.net/shiwangnath",
    instagram: "https://www.instagram.com/e_moshion/",
    linkedin: " https://www.linkedin.com/in/shiwangn5",
    twitter: "https://x.com/Shiwang_Motion"
  };

  return (
    <div className="w-full bg-black text-white py-6 relative font-sans">
      <hr className="w-3/6 h-[2px] bg-gray-500 absolute right-0 top-0" />

      {/* Footer Content */}
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto p-5 gap-6">
        
        {/* Logo & Copyright */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-14" alt="Logo" />
          <Copyright className="w-5 h-5" />
          <p>2025</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <a 
            href={socialLinks.behance} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={Behance} className="w-7" alt="Behance" />
          </a>

          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={Ig} className="w-7" alt="Instagram" />
          </a>

          <a 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={LinkedIn} className="w-7" alt="LinkedIn" />
          </a>

          <a 
            href={socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <img src={X} className="w-7" alt="Twitter/X" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;