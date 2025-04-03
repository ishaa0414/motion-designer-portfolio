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
      <div className='h-auto aspect-video md:h-96 relative text-left group overflow-hidden cursor-pointer mt-10 ml-5 mr-5 mb-5 rounded-lg pt-3' onClick={() => navigate(`/work`)}>
        <div className='bg-gray-950 opacity-15 absolute top-0 left-0 h-full w-full z-50 group-hover:opacity-0'></div>
        
        {/* Video Background */}
        <video src={PerfiosVideo} autoPlay loop muted className='absolute inset-0 w-full h-full object-cover opacity-100 -z-10 glass-border' />
        
        {/* Logo */}
        <div className='pl-10 relative z-50'>
          <img src={PerfiosLogo} className='w-32' alt="Perfios Logo" />
          <p 
            className='text-white text-sm flex items-center cursor-pointer relative z-10 open-sans font-bold mt-3 pl-2' 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/show-work`);
            }}
          >
            Show More <LuChevronRight />
          </p>
        </div>
        
        {/* Background Image (Hidden on Hover) */}
        <img 
          src={PerfBanner} 
          className='absolute top-0 left-0 w-full h-80 md:h-full object-cover transition-opacity duration-300 group-hover:opacity-0 z-40 glass-border' 
          alt="Perfios Banner" 
        />
        <div className='absolute top-0 left-0 bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125 h-80 md:h-full object-cover z-5 w-full'></div>
      </div>

      {/* Bitdefender Section */}
      <div className='h-auto aspect-video md:h-96 relative text-left group overflow-hidden cursor-pointer rounded-lg pt-3 mt-2 ml-5 mr-5 mb-5' onClick={() => navigate(`/sample-work`)}>
        <div className='bg-gray-950 opacity-15 absolute top-0 left-0 h-full w-full z-50 group-hover:opacity-0'></div>
        
        {/* Video Background */}
        <video src={BitVideo} autoPlay loop muted className='absolute inset-0 w-full h-full object-cover opacity-100 -z-10 glass-border' />
        
        {/* Logo */}
        <div className='text-xl md:text-3xl lg:text-4xl text-white pl-10 relative z-50 uppercase'>
          Sample Work
          <p 
            className='text-white text-sm flex items-center cursor-pointer relative z-10 open-sans font-bold mt-3 pl-2' 
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/show-work`);
            }}
          >
            Show More <LuChevronRight />
          </p>
        </div>
        
        {/* Background Image (Hidden on Hover) */}
        <img 
          src={BitBanner} 
          className='absolute top-0 left-0 w-full h-80 md:h-full object-cover transition-opacity duration-300 group-hover:opacity-0 z-40 glass-border' 
          alt="Bitdefender Banner" 
        />
        <div className='absolute top-0 left-0 bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125 h-80 md:h-full object-cover z-5 w-full'></div>
      </div>

      <Footer/>
    </div>
  );
};

export default Work;