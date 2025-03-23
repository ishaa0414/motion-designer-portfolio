import React, { useState } from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import bitdefender from '../../assets/Bitdefender/bitdefender.mp4'
import storyboard from '../../assets/Bitdefender/Storyboard.png'
import aesthetic_ideation from '../../assets/Bitdefender/Aesthetic Ideations.png'
import visual_stages from '../../assets/Bitdefender/Bitdefender Visual Stages.mp4'
import color_testing from '../../assets/Bitdefender/Color Testing.mp4'
import compiled from '../../assets/Bitdefender/Compiled.png'
import icon_compilation from '../../assets/Bitdefender/Icon Compilation.mp4'
import { ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';

import inspiration from '../../assets/Bitdefender/Inspiration.png'
import { useNavigate } from 'react-router-dom'


const SampleWork = () => {
  const [isScriptOpen, setIsScriptOpen] = useState(false);
  
  const toggleScript = () => {
    setIsScriptOpen(!isScriptOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const navigate = useNavigate();
  
  const scrollToDetails = () => {
    const element = document.getElementById('sample-show');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className=''>
      
      <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-gray-300 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300 z-40">← Go Back</button>
       <div>
    
        <video src={bitdefender} autoPlay loop muted  controls className='-z-7 opacity-90  w-full h-screen object-cover relative'></video>
 
        <div className='flex absolute top-0 left-0 justify-between  items-center h-screen '>
        <div className='pl-4 '>
          <h5 className='text-white text-3xl bolder'>Bitdefender Secure Paas</h5>
          <div className='text-white w-full sm:w-2/3 md:w-1/2 lg:w-1/3 bg-zinc-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-saturate-100 backdrop-contrast-125 rounded-md open-sans'>
          <p>Disclaimer:
Timestamp 00:00->00:06 is made by Bitdefender and the rest of the video is sample work created by me.
</p><br/>
          Bitdefender SecurePass is a password manager that lets you create, save, manage, and share passwords securely with end-to-end encryption. Available on browsers and mobile, it generates strong passwords, stores them in an encrypted vault, and organizes credentials with ease. Share securely with expiration dates and protected links, enhance safety with two-factor authentication, and import passwords seamlessly.</div>


        </div>
        <div className='pr-4 w-1/3'>
        
          
          <p className='text-white mb-2 open-sans'>Creation Process...</p>
          <button className=' bg-white pl-2 pr-2 bolder text-xl open-sans' onClick={scrollToDetails}>View Details</button>
        </div>
        </div>
        
       </div>
       <div className='text-white flex flex-col items-center justify-center  pl-5 pr-5' id="sample-show">
        <br/><h2 className='text-4xl underline text-center'>Bitdefender Secure Paas</h2><br/>
        <div className="max-w-3xl mx-auto p-4 sm:p-6">
          {/* Script Dropdown */}
          <div className="mb-8 border border-gray-700 rounded-lg overflow-hidden">
            <div 
              className="flex justify-between items-center p-4 bg-gray-800 cursor-pointer"
              onClick={toggleScript}
            >
              <h1 className="text-2xl sm:text-3xl font-bold">Script</h1>
              {isScriptOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>
            
            {isScriptOpen && (
              <div className="p-4 bg-gray-900">
                {/* Structure Section */}
                <div className="mb-8 open-sans">
                  <h2 className="text-xl font-semibold mb-3">Structure</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Problem</li>
                    <li>Secure Pass introduction</li>
                    <li>Features
                      <ul className="list-disc pl-5 mt-1 space-y-1">
                        <li>Extension</li>
                        <li>Easy generation, storing and organising of credentials</li>
                        <li>Credentials sharing</li>
                        <li>Secured accounts: Credit cards or notes with limited usage, expiration date, protected link</li>
                        <li>Built in 2FA</li>
                        <li>Importing passwords from other password managers in few clicks</li>
                      </ul>
                    </li>
                    <li>CTA</li>
                  </ul>
                </div>
                
                <hr className="my-6 border-gray-700" />
                
                {/* Script Section */}
                <div className='open-sans'>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Script for Bitdefender Ad Explainer Video</h2>
                  
                  <p className="text-center text-gray-400 italic mb-6">- Logo Animation -</p>
                  
                  {/* Opening Scene */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Opening Scene: The Problem</h3>
                    <p>
                      "Tired of juggling countless passwords, forgetting them, risking your security, and wasting valuable time?"
                    </p>
                  </div>
                  
                  {/* Transition Scene */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Transition Scene: Introduction</h3>
                    <p>
                      "Introducing Bitdefender SecurePass – your ultimate solution for secure and effortless password management."
                    </p>
                  </div>
                  
                  {/* Main Scene */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">Main Scene: Features</h3>
                    <p className="mb-3">
                      "SecurePass simplifies your digital life with secure, effortless password management, built with end-to-end encryption."
                    </p>
                    <p>
                      Install it on Chrome, Firefox, Edge, Safari, or download the app for Android and iOS.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <p className='text-3xl'>Inspiration</p>
        <img src={inspiration} className=' my-4 w-1/2  ' alt="" />
        <p className='text-3xl'>Ideation</p>
        
        <p className='text-2xl'>Color Ideation</p>
        <video src={color_testing} autoPlay playsInline loop muted className='my-4 w-1/2'></video>
        <p className='text-2xl'>Icon Ideation</p>
        <img src={compiled} className=' my-4 w-1/2  ' alt="" />
        <video src={icon_compilation} autoPlay playsInline loop muted className='my-4 w-1/2'></video>
        <p className='text-3xl'>Storyboard</p>
        <img src={storyboard} className=' my-4 w-1/2  ' alt="" />
        <p className='text-3xl'>Visual Stages</p>
        <video src={visual_stages} autoPlay playsInline loop muted className=' my-4 w-1/2'></video>
     

       </div>
       <button 
        onClick={scrollToTop} 
        className="fixed bottom-10 right-10 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600"
        title="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>
        <Footer/>
    </div>
  )
}

export default SampleWork