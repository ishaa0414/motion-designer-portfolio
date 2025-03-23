import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";

import Behance from '../../assets/icons/Be Icon.png';
import Ig from '../../assets/icons/Ig Icon.png';
import LinkedIn from '../../assets/icons/LinkedIn Icon.png';
import X from '../../assets/icons/X Icon.png';

const Contact = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const socialLinks = {
    behance: "https://www.behance.net/shiwangnath",
    instagram: "https://www.instagram.com/e_moshion/",
    linkedin: " https://www.linkedin.com/in/shiwangn5",
    twitter: "https://x.com/Shiwang_Motion"
  };
  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      services: selectedOptions.join(", "),
      otherMessage: selectedOptions.includes("Others") ? e.target.otherMessage?.value : "",
    };

    console.log("Form Data Submitted:", formData);

    const scriptURL = "https://script.google.com/macros/s/AKfycby1WCYUUKF5diEAoWYBmfuCgiua1h3keinMFJrNm_kvTNjuDjsUk3qqzp39qu9Ewg1f/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSuccessMessage("Message Sent Successfully! ✅"); // Update success message
      e.target.reset(); // Clear form fields
      setSelectedOptions([]); // Clear selected options
    } catch (error) {
      console.error("Error!", error);
      setSuccessMessage("Something went wrong. Please try again. ❌"); // Error message
    }
  };

  return (
    <>
    <Navbar/>
    <div className="w-full flex justify-center items-center p-4 mt-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-10">
        <div className="bg-white p-6 sm:p-10 shadow-lg rounded-lg w-full">
          <h1 className="text-3xl sm:text-4xl font-semibold uppercase text-center sm:text-left">Contact</h1>
          <hr className="w-28 h-1 bg-black my-4" />

          <form className="w-full space-y-5" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" className="w-full border-b-2 py-2 focus:outline-none" required />
            <input type="email" name="email" placeholder="Your Email" className="w-full border-b-2 py-2 focus:outline-none" required />
            <textarea name="message" placeholder="Your Message" rows="4" className="w-full border-b-2 py-2 focus:outline-none" required></textarea>

            <div>
              <p className="font-semibold">What do you need?</p>
              <div className="flex flex-wrap gap-2">
                {["Demo Video", "Explainer Video", "App/UI Video", "Tutorial Video", "Promo Video", "Others"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`px-4 py-2 border rounded transition-colors ${
                      selectedOptions.includes(option) ? "bg-gray-900 text-white" : "hover:bg-gray-200"
                    }`}
                    onClick={() => toggleOption(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {selectedOptions.includes("Others") && (
              <textarea name="otherMessage" placeholder="Please specify..." rows="3" className="w-full border-b-2 p-2 mt-4" required></textarea>
            )}

            <button type="submit" className="w-full bg-black text-white py-3 rounded-md transition hover:bg-gray-800 disabled:bg-gray-400">
              Submit
            </button>
          </form>

          {/* Success Message Display */}
          {successMessage && <p className="text-green-600 font-semibold mt-4">{successMessage}</p>}

          <div className="flex flex-wrap justify-between items-center mt-6">
            <div className="flex items-center gap-4">
             <a 
                         href={socialLinks.behance} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className=" bg-black transition-transform hover:scale-110"
                       >
                         <img src={Behance} className="w-7" alt="Behance" />
                       </a>
             
                       <a 
                         href={socialLinks.instagram} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className=" bg-black transition-transform hover:scale-110"
                       >
                         <img src={Ig} className="w-7" alt="Instagram" />
                       </a>
             
                       <a 
                         href={socialLinks.linkedin} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className=" bg-black transition-transform hover:scale-110"
                       >
                         <img src={LinkedIn} className="w-7" alt="LinkedIn" />
                       </a>
             
                       <a 
                         href={socialLinks.twitter} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className=" bg-black transition-transform hover:scale-110"
                       >
                         <img src={X} className="w-7" alt="Twitter/X" />
                       </a>
            </div>
            <p className="font-bold text-sm sm:text-base">shiwang.work@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col sm:w-full md:w-1/2  items-center justify-center text-center lg:text-left  p-6 space-y-4 xl:w-1/2 2xl:w-1/2 contact-collage h-full z-4 ">
        <div className="absolute w-full bg-slate-950 top-0 left-0 "></div>
          <div className="absolute top-0 left-0 z-6 bg-gray-950 h-full"></div>
          <p className="text-2xl font-semibold open-sans text-white opacity-100 text-center">Let's Create Something Impactful</p>
          <p className="gradient text-white p-1 rounded-lg text-xl">Together</p>
          <div>
            <p className="text-lg font-semibold gradient rounded-lg text-white p-3 text-center">
              Email:<br />shiwang.work@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
