import { useNavigate, useParams } from 'react-router-dom'; 
import { useVideoContext } from '../../VideoContext';
import { useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ArrowUp } from 'lucide-react';

const PerfiosShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { videos } = useVideoContext();
  const detailsRef = useRef(null);

  const video = videos.find((v) => v.id === parseInt(id));

  if (!video) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl mb-4">Video not found.</h2>
        <button 
          onClick={() => navigate("/")}
          className="bg-gray-300 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  const scrollToDetails = () => {
    detailsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className='text-white relative'>
      <Navbar />
      
      {/* Back Button - Repositioned for better mobile experience */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-20 sm:top-24 left-4 sm:left-6 lg:left-8 bg-gray-300 text-black font-semibold px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md shadow-md hover:bg-gray-200 transition duration-300 z-40"
      >
        ← Go Back
      </button>
      
      {/* Video Container */}
      <div className="relative w-full h-screen">
        <video 
          className='w-full h-screen object-cover' 
          muted 
          controls 
          loop 
          autoPlay
        >
          <source src={video.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Video Info Overlay - Positioned to avoid video controls */}
      <div className='absolute top-32 sm:top-36 md:top-36 lg:top-40 left-4 sm:left-6 md:left-8 lg:left-10 text-white z-30 flex flex-col box-border max-w-full'>
        <div className='bg-zinc-500 bg-opacity-10 backdrop-blur-sm backdrop-contrast-125 w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 rounded-md p-3 mr-4'>
          <p className='text-lg sm:text-xl md:text-2xl'>{video.number}</p>
          <p className='text-xl sm:text-2xl md:text-3xl mt-2'>{video.title}</p>
          <p className='w-full sm:w-11/12 md:w-4/5 text-xs sm:text-sm mt-2 open-sans'>{video.description}</p>
        </div>
        
        <div className='mt-4 pl-2'>
          <p>
            Creation Process :...
            <button 
              className='bg-white text-black p-1 m-2 text-sm rounded-md font-bold' 
              onClick={scrollToDetails}
            >
              View Details
            </button>
          </p>
        </div>
      </div>

      {/* Details Section */}
      <div id='details' ref={detailsRef} className='mt-10 sm:mt-16 p-4 sm:p-6 md:p-8 lg:p-10  flex flex-col w-full'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center'>{video.title}</h1>
        
        <div className='mt-6 space-y-3 sm:space-y-4 open-sans'>
          <p className='text-sm sm:text-base'><strong>Brief:</strong> {video.brief}</p>
          <p className='text-sm sm:text-base'><strong>Goal:</strong> {video.goal}</p>
          <p className='text-sm sm:text-base'><strong>Messaging:</strong> {video.messaging}</p>
          <p className='text-sm sm:text-base'>Results(Revenue,Views,Impact)</p>
        </div>
        
        <div className='mt-6 space-y-1 sm:space-y-2 text-sm sm:text-base open-sans'>
          <p><strong>Credits:</strong></p>
          <p>Shiwang Nath |  Asset creation, Sound, Motion Graphics </p>
          <p>Perfios  |  Script </p>
          <p>Play.ht  |  Voice Over</p>
          <p>Pixabay  |  {video.credits}</p>
        </div>
        
        <hr className="w-full h-[1px] bg-gray-500 mt-5" />
        
        <h1 className='text-xl sm:text-2xl font-bold mt-6 text-center'>Inspiration & Ideation</h1>
        <div className='flex items-center justify-center'>
          <img 
            src={video.ideation} 
            alt="Ideation" 
            className='my-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2' 
          />
        </div>
        
        <hr className="w-full h-[1px] bg-gray-500 mt-5" />
        
        <h1 className='text-xl sm:text-2xl font-bold mt-6 text-center'>Story and Storyboarding</h1>
        <p className='mt-4 text-sm sm:text-base open-sans'><strong>User Journey:</strong> {video.StoryUserJourney}</p>
        <div className='flex items-center justify-center'>
          <img 
            src={video.storyboard} 
            alt="Storyboard" 
            className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 my-4' 
          />
        </div>
        
        <hr className="w-full h-[1px] bg-gray-500 mt-5" />
        
        <h1 className='text-xl sm:text-2xl font-bold mt-6 text-center'>Visual Stages</h1>
        <div className='flex justify-center items-center'>
          <video 
            src={video.VisualStages} 
            autoPlay 
            playsInline 
            loop 
            className='w-full sm:w-3/4 md:w-2/3 lg:w-1/2 my-4'
            controls
          ></video>
        </div>
      </div>

      {/* Scroll to Top Button - Responsive positioning */}
      <button 
        onClick={scrollToTop} 
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-gray-600 z-50"
        title="Scroll to Top"
      >
        <ArrowUp size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      <Footer />
    </div>
  );
};

export default PerfiosShow;