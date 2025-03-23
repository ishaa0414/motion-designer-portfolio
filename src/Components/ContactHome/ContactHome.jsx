import React, { useState } from "react";
import { Clipboard, Check } from "lucide-react"; // Import icons
import { useNavigate } from "react-router-dom"; // Import for navigation

const ContactHome = () => {
  const [copied, setCopied] = useState(false);
  const email = "shiwang.work@gmail.com";
  const navigate = useNavigate(); // Hook for navigation

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };

  const handleGetInTouch = () => {
    navigate("/contact"); // Navigate to contact page
  };

  return (
    <div className="text-white mb-8 px-4">
      <p className="text-center text-2xl sm:text-3xl md:text-4xl mt-5 font-semibold">
        "Ready to create an impactful Video?"
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 md:mt-10">
        <button 
          onClick={handleGetInTouch}
          className="text-xl sm:text-2xl md:text-3xl px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 gradient w-full sm:w-auto"
        >
          Get in Touch
        </button>
        
        <div className="flex items-center gap-2 border px-3 py-1 rounded gradient mt-3 sm:mt-0 w-full sm:w-auto justify-between sm:justify-start">
          <p className="text-sm text-center md:text-base overflow-hidden text-ellipsis ">{email}</p>
          <button 
            onClick={handleCopy} 
            className="text-gray-200 hover:text-white ml-2 flex-shrink-0"
            aria-label={copied ? "Copied" : "Copy to clipboard"}
          >
            {copied ? <Check size={18} /> : <Clipboard size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;