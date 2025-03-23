import { useRef, useMemo } from 'react'; 
import { useNavigate } from 'react-router-dom';
import PerfiosLogo from '../../assets/Perfios_logo.png';
import Footer from '../../Components/Footer/Footer';
import { useVideoContext } from '../../VideoContext';
import Navbar from '../../Components/Navbar/Navbar';
import { motion } from "framer-motion";

const WorkSection = () => {
  const navigate = useNavigate();
  const { videos } = useVideoContext();

  // Memoizing filteredVideos to prevent unnecessary recalculations
  const filteredVideos = useMemo(() => 
    videos.filter(video => [9, 10, 11].includes(video.id)), 
    [videos]
  );

  const videoRefs = useRef({});

  const handleVideoClick = (id) => navigate(`/perfios-show/${id}`);

  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <div className="absolute left-0 top-20 w-full p-4 flex justify-start z-30">
          <button 
            onClick={() => navigate(-1)} 
            className="bg-gray-300 text-black font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-md shadow-md hover:bg-gray-200 active:bg-gray-400 transition text-sm sm:text-base"
          >
            ← Go Back
          </button>
        </div>
      <div className="flex justify-center items-center shadow-[inset_12px_-50px_87px_36px_rgba(0,_0,_0,_0.8)] mt-6 md:mt-10">
        <img 
          src={PerfiosLogo} 
          className="w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 max-w-md" 
          alt="Perfios Logo" 
          loading="lazy" 
        />
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center w-full gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-9 mt-6 md:mt-8">
        {filteredVideos.map((video) => (
          <div 
            key={video.id} 
            className="relative w-full md:w-1/3 overflow-hidden group cursor-pointer mb-4 md:mb-0" 
            onClick={() => handleVideoClick(video.id)}
            onMouseEnter={() => videoRefs.current[video.id]?.play()}
            onMouseLeave={() => {
              videoRefs.current[video.id]?.pause();
              videoRefs.current[video.id].currentTime = 0;
            }}
          >
            {/* Black Overlay */}
            <span className="absolute inset-0 bg-black opacity-55 transition-opacity duration-300 group-hover:opacity-0"></span>

            {/* Video */}
            <video
              ref={(el) => (videoRefs.current[video.id] = el)}
              src={video.preview}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-md object-cover"
              muted
              preload="metadata"
              loading="lazy"
            />

            {/* Thumbnail */}
            <img
              src={video.thumbnail}
              alt={`Thumbnail ${video.id}`}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-md object-cover absolute top-0 left-0 transition-opacity duration-300 group-hover:opacity-0"
              loading="lazy"
            />

            {/* Video Number */}
            <motion.p 
              className="text-white absolute font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl -bottom-4 -right-2 open-sans"
              initial={{ opacity: 0, y: 50 }}  
              animate={{ opacity: 1, y: 0 }}   
              transition={{ duration: 0.8, ease: "easeOut" }}  
            >
              {video.number}
            </motion.p>

            {/* Video Title */}
            <motion.p 
              className="text-white absolute text-base sm:text-lg left-2 top-4 open-sans max-w-[80%]"
              initial={{ opacity: 0, x: -30 }}  
              animate={{ opacity: 1, x: 0 }}   
              transition={{ duration: 0.8, ease: "easeOut" }}  
            >
              {video.title}
            </motion.p>
          </div>
        ))}
      </div>

      {/* More Work Section */}
      <div 
        className="text-white relative h-24 sm:h-32 md:h-40 bg-zinc-300 backdrop-blur-md bg-opacity-10 flex justify-between items-center w-full mt-6 md:mt-10 cursor-pointer" 
        onClick={() => navigate(`/work-tile`)}
      >
        <p className="font-sans pl-4 md:pl-8 text-lg md:text-xl">More Work</p>
        <p className="font-sans text-[clamp(2rem,5vw,20rem)] font-bold text-gray-400 absolute right-5 -bottom-1 md:-bottom-3 leading-none">More Work</p>
      </div>

      <Footer className="mt-auto" />
    </div>
  );
};

export default WorkSection;