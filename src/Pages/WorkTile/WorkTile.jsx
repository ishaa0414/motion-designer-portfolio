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
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    videoRefs.current.forEach(video => video && observer.observe(video));
    return () => observer.disconnect();
  }, [videos]);

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
          {videos.filter(v => v.id >= 1 && v.id <= 8).map((video, index) => (
            <div key={video.id} 
                 className="relative group cursor-pointer overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300 glass-border" 
                 onClick={() => handleVideoClick(video.id)} 
                 tabIndex={0}>
              
              {/* Video Container */}
              <div className="relative w-full h-full">
                
                {/* Video Element (Always Visible) */}
                <video 
                  ref={el => videoRefs.current[index] = el}
                  className="PerfiosWidth rounded-lg shadow-lg"
                  loop 
                  muted 
                  data-src={video.url}
                  preload="auto"
                  onMouseEnter={(e) => {
                    e.target.play();
                  }}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                >
                  <source src="" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Thumbnail (Hidden on Hover) */}
                <img 
                  src={video.thumbnail} 
                  className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 opacity-100 group-hover:opacity-0 pointer-events-none glass-border" 
                  alt="Video Thumbnail" 
                />

                {/* Black Overlay (Hidden on Hover) */}
                <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none"></div>
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