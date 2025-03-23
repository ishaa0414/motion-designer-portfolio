import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import CopyEmail from "../../assets/icons/Copy Email.png";
import ContactButton from "../../assets/icons/Contact.png";

const FloatingIcons = () => {
  const [copied, setCopied] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null); // Track hovered button
  const navigate = useNavigate();
  const email = "your-email@example.com"; 

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };

  const goToContact = () => {
    navigate("/contact"); 
  };

  return (
    <div className="fixed right-3 top-1/2 flex flex-col gap-3 z-50">
      {/* Copy Email Button */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setHoveredButton("copy")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === "copy" && (
          <div className="absolute right-12 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
            Copy Email
          </div>
        )}
        <button
          onClick={copyToClipboard}
          className="bg-gray-950 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition"
        >
          <img src={CopyEmail} className="w-7" alt="Copy Email" />
        </button>
      </div>

      {/* Go to Contact Button */}
      <div 
        className="relative flex items-center"
        onMouseEnter={() => setHoveredButton("contact")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {hoveredButton === "contact" && (
          <div className="absolute right-12 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
            Contact
          </div>
        )}
        <button
          onClick={goToContact}
          className="bg-gray-950 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition"
        >
          <img src={ContactButton} className="w-7" alt="Contact" />
        </button>
      </div>

      {/* Tooltip for Copy Confirmation */}
      {copied && (
        <div className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
          Email Copied!
        </div>
      )}
    </div>
  );
};

export default FloatingIcons;
