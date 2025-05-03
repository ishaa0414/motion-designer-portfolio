import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useVideoContext } from "../../VideoContext";
import Footer from "../../Components/Footer/Footer";
import PerfiosLogo from "../../assets/Perfios_logo.png";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";

const WorkTile = () => {
  const { videos } = useVideoContext();
  const navigate = useNavigate();
  const [watchedVideos, setWatchedVideos] = useState(() => JSON.parse(localStorage.getItem("watchedVideos")) || {});
  const [hoveredTile, setHoveredTile] = useState(null);

  const handleVideoClick = (id) => {
    navigate(`/work-showcase/${id}`);
    setWatchedVideos((prev) => {
      const updated = { ...prev, [id]: true };
      localStorage.setItem("watchedVideos", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-center items-center shadow-inset relative pt-20">
        {/* Repositioned Go Back Button - placed inside logo section with responsive positioning */}
        <div className="absolute left-0 top-20 w-full p-4 flex justify-start z-30">
          <button 
            onClick={() => navigate(-1)} 
            className="bg-gray-300 text-black font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-md shadow-md hover:bg-gray-200 active:bg-gray-400 transition text-sm sm:text-base"
          >
            ← Go Back
          </button>
        </div>
        <img src={PerfiosLogo} className="image-size z-0" alt="Perfios Logo" />
      </div>

      {/* Video Grid */}
      <div className="p-3 flex justify-center items-center w-full">
        <div className="flex gap-10 flex-wrap w-full justify-center items-center">
          {videos.filter(v => v.id >= 1 && v.id <= 8).map((video) => (
            <div 
              key={video.id} 
              className="relative group cursor-pointer overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300 glass-border" 
              onClick={() => handleVideoClick(video.id)}
              onMouseEnter={() => setHoveredTile(video.id)}
              onMouseLeave={() => setHoveredTile(null)}
              tabIndex={0}
            >
              
              {/* Thumbnail Container */}
              <div className="relative w-full h-full">
                {/* Thumbnail Image (Always Visible) */}
                <img 
                  src={video.thumbnail} 
                  className="PerfiosWidth rounded-lg shadow-lg glass-border" 
                  alt={`${video.title} Thumbnail`} 
                />

                {/* Black Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* View Project Message (Only visible on hover) */}
                {hoveredTile === video.id && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-black bg-opacity-70 px-6 py-3 rounded-lg text-white font-semibold flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      View Project
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Animated Number on Bottom */}
              <motion.p 
                className="text-white absolute open-sans bottom-4 right-4 z-40 text-5xl font-bold"
                initial={{ opacity: 0, y: 100 }}  
                animate={{ opacity: 1, y: 0 }}   
                transition={{ duration: 0.8, ease: "easeOut" }}  
              >
                {video.number}
              </motion.p>

              {/* Animated Video Title on Top */}
              <motion.p 
                className="text-white absolute open-sans top-4 left-4 z-40 text-lg font-semibold"
                initial={{ opacity: 0, x: -100 }}  
                animate={{ opacity: 1, x: 0 }}   
                transition={{ duration: 0.8, ease: "easeOut" }}  
              >
                {video.title}
              </motion.p>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
};

export default React.memo(WorkTile);