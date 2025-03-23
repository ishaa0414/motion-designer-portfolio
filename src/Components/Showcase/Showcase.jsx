import React from 'react'
import { LuChevronRight } from "react-icons/lu";
import { useNavigate } from  'react-router-dom';
import PerfiosVideo from     '../../assets/Preview Showcase Reel.mp4';
import PerfiosLogo  from     '../../assets/Perfios_logo.png';
import PerfBanner   from     '../../assets/Preview Strip (Showcase).png';
import TileBorder   from     '../../assets/Tile Border.png'

const Showcase = () => {
  const navigate = useNavigate();
  return (
    <>
 <div className='h-80 relative text-left group overflow-hidden cursor-pointer m-10 rounded-lg  pt-3'  onClick={() => navigate(`/show-work`)}>
  
<div className='bg-gray-950 opacity-15 absolute top-0 left-0 h-80 w-full z-50 group-hover:opacity-0'></div>
        {/* Video Background */}
        <video src={PerfiosVideo} autoPlay loop muted className='absolute inset-0 w-full h-full object-cover opacity-100 -z-10 glass-border' />

        {/* Overlay */}
        {/* <div className='absolute inset-0 bg-black opacity-50 -z-10'></div> */}

        {/* Logo */}
        <div className='text-xl md:text-3xl lg:text-4xl text-white pl-10 relative z-50  uppercase '  > Showcase
        <hr className="w-[4rem] md:w-[7rem] lg:w-[9rem] h-[2px] bg-white ml-16 " />
        <p className='text-white text-sm flex items-center  cursor-pointer relative z-10 open-sans font-bold mt-3 pl-2' onClick={() => navigate(`/show-work`)}>
          Show More <LuChevronRight />
        </p>
        </div>
        

        {/* Background Image (Hidden on Hover) */}
       
        <img 
          src={PerfBanner} 
          className='absolute top-0 left-0 w-full h-80 object-cover transition-opacity duration-300 group-hover:opacity-0 z-40 glass-border ' 
          alt="Perfios Banner" 
        />
        <div className=' absolute top-0 left-0 bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125 h-80 object-cover z-5 w-full'></div>
        {/* <div className='absolute top-0 left-0 z-60 h-80 w-full bg-black bg-opacity-50'></div> */}

        {/* Show More */}
       
      </div>
    </>
  )
}

export default Showcase