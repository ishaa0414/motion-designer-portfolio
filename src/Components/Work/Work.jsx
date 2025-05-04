import React from 'react';
import { LuChevronRight } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import PerfiosVideo from '../../assets/Perfios Strip Video.mp4';
import BitVideo from '../../assets/Bitdefender Strip Video.mp4';
import PerfiosLogo from '../../assets/Perfios_logo.png';
import PerfBanner from '../../assets/Perfios_banner.png';
import BitBanner from '../../assets/Bit_banner.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Work = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col w-full min-h-screen relative mt-20'>
      <Navbar/>
      
      {/* Perfios Section */}
      <div 
        className='relative text-left group overflow-hidden cursor-pointer mt-10 mx-5 mb-5 rounded-lg border-[0.5px] border-white'
        style={{ height: '500px' }} // Fixed height for consistency
        onClick={() => navigate(`/work`)}
      >
        <div className='absolute inset-0 bg-gray-950 opacity-15 z-20 group-hover:opacity-0 transition-opacity duration-300'></div>
        
        {/* Video Background - positioned absolutely with object-cover to maintain aspect ratio */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <video 
            src={PerfiosVideo} 
            autoPlay 
            loop 
            muted 
            className='absolute inset-0 w-full h-full object-cover -z-10' 
          />
        </div>
        
        {/* Logo */}
        <div className='absolute top-0 left-0 pl-10 pt-5 z-30'>
          <img src={PerfiosLogo} className='w-32' alt="Perfios Logo" />
          <p 
            className='text-white text-sm flex items-center cursor-pointer open-sans font-bold mt-3 pl-2' 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/show-work`);
            }}
          >
            Show More <LuChevronRight />
          </p>
        </div>
        
        {/* Background Image (Hidden on Hover) - sized to fill the entire container */}
        <div className='absolute inset-0 z-10 group-hover:opacity-0 transition-opacity duration-300'>
          <img 
            src={PerfBanner} 
            className='w-full h-full object-cover' 
            alt="Perfios Banner" 
          />
          <div className='absolute inset-0 bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125'></div>
        </div>
      </div>

      {/* Bitdefender Section */}
      <div 
        className='relative text-left group overflow-hidden cursor-pointer mx-5 mb-5 rounded-lg border-[0.5px] border-white'
        style={{ height: '500px' }} // Fixed height for consistency
        onClick={() => navigate(`/sample-work`)}
      >
        <div className='absolute inset-0 bg-gray-950 opacity-15 z-20 group-hover:opacity-0 transition-opacity duration-300'></div>
        
        {/* Video Background - positioned absolutely with object-cover to maintain aspect ratio */}
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
          <video 
            src={BitVideo} 
            autoPlay 
            loop 
            muted 
            className='absolute inset-0 w-full h-full object-cover -z-10' 
          />
        </div>
        
        {/* Logo */}
        <div className='absolute top-0 left-0 pl-10 pt-5 z-30'>
          <h2 className='text-xl md:text-3xl lg:text-4xl text-white uppercase'>
            Sample Work
          </h2>
          <p 
            className='text-white text-sm flex items-center cursor-pointer open-sans font-bold mt-3 pl-2' 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/show-work`);
            }}
          >
            Show More <LuChevronRight />
          </p>
        </div>
        
        {/* Background Image (Hidden on Hover) - sized to fill the entire container */}
        <div className='absolute inset-0 z-10 group-hover:opacity-0 transition-opacity duration-300'>
          <img 
            src={BitBanner} 
            className='w-full h-full object-cover' 
            alt="Bitdefender Banner" 
          />
          <div className='absolute inset-0 bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125'></div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Work;