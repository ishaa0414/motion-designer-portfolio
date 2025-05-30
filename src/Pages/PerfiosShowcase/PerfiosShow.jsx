import { useNavigate, useParams } from 'react-router-dom'; 
import { useVideoContext } from '../../VideoContext';
import { useRef, useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { ArrowUp } from 'lucide-react';

const PerfiosShow = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { videos } = useVideoContext();
  const detailsRef = useRef(null);
  const [youtubeEmbedUrl, setYoutubeEmbedUrl] = useState('');

  const video = videos.find((v) => v.id === parseInt(id));

  useEffect(() => {
    if (video && video.Yvideo) {
      // Convert YouTube link to embed URL
      const embedUrl = convertYoutubeToEmbed(video.Yvideo);
      setYoutubeEmbedUrl(embedUrl);
    }
  }, [video]);

  // Function to convert YouTube URL to embed format
  const convertYoutubeToEmbed = (youtubeUrl) => {
    if (!youtubeUrl || youtubeUrl.trim() === '') return '';
    
    // Handle different YouTube URL formats
    let videoId = '';
    
    // Regular YouTube URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID)
    const regularMatch = youtubeUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (regularMatch) {
      videoId = regularMatch[1];
    }

    // YouTube Shorts URL (e.g., https://youtube.com/shorts/VIDEO_ID)
    const shortsMatch = youtubeUrl.match(/youtube\.com\/shorts\/([^?\s]+)/);
    if (shortsMatch) {
      videoId = shortsMatch[1];
    }

    // Short URL (e.g., https://youtu.be/VIDEO_ID)
    const shortMatch = youtubeUrl.match(/youtu\.be\/([^?\s]+)/);
    if (shortMatch && !videoId) {
      videoId = shortMatch[1];
    }

    // Return the embed URL if we found a video ID
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=1`;
    }
    
    // If we couldn't parse the URL, return empty string
    return '';
  };

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
    <div className='text-white relative '>
      <Navbar />
      
      {/* Back Button - Repositioned for better mobile experience */}
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-20 sm:top-24 left-4 sm:left-6 lg:left-8 bg-gray-300 text-black font-semibold px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md shadow-md hover:bg-gray-200 transition duration-300 z-40"
      >
        ← Go Back
      </button>
      
      {/* YouTube Video Container */}
      <div className="relative w-full h-screen">
        {youtubeEmbedUrl ? (
          <iframe 
            className="w-full h-screen object-cover"
            src={youtubeEmbedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-screen flex items-center text-center justify-center bg-black">
            <p>YouTube video not available for this content</p>
          </div>
        )}
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

      {/* Details Section - Improved Layout */}
      <div id='details' ref={detailsRef} className=' text-white py-16 px-4'>
        <div className='max-w-4xl mx-auto'>
          {/* Title Section */}
          <div className='text-center mb-12'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>{video.title}</h1>
            <div className='w-24 h-1 bg-white mx-auto'></div>
          </div>
          
          {/* Project Details Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
            <div className='space-y-6'>
              <div className='bg-gray-900 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold mb-3 text-white'>Brief</h3>
                <p className='text-gray-300 leading-relaxed open-sans'>{video.brief}</p>
              </div>
              
              <div className='bg-gray-900 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold mb-3 text-white'>Goal</h3>
                <p className='text-gray-300 leading-relaxed open-sans'>{video.goal}</p>
              </div>
            </div>
            
            <div className='space-y-6'>
              <div className='bg-gray-900 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold mb-3 text-white'>Messaging</h3>
                <p className='text-gray-300 leading-relaxed open-sans'>{video.messaging}</p>
              </div>
              
              <div className='bg-gray-900 p-6 rounded-lg'>
                <h3 className='text-xl font-semibold mb-3 text-white'>Results</h3>
                <p className='text-gray-300 leading-relaxed open-sans'>Revenue, Views, Impact</p>
              </div>
            </div>
          </div>
          
          {/* Credits Section */}
          <div className='bg-gray-900 p-8 rounded-lg mb-16 text-center'>
            <h3 className='text-2xl font-semibold mb-6 text-white'>Credits</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300 open-sans'>
              <div>
                <p className='font-semibold text-white'>Motion & Sound</p>
                <p>Shiwang Nath</p>
              </div>
              <div>
                <p className='font-semibold text-white'>Script</p>
                <p>Perfios</p>
              </div>
              <div>
                <p className='font-semibold text-white'>Voice</p>
                <p>{video.play} | {video.voice}</p>
              </div>
              <div>
                <p className='font-semibold text-white'>Assets</p>
                <p>Pixabay | {video.credits}</p>
              </div>
            </div>
          </div>
          
          {/* Process Sections */}
          <div className='space-y-16'>
            {/* Inspiration & Ideation */}
            <section className='text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-8'>Inspiration & Ideation</h2>
              <div className='bg-gray-900 p-4 rounded-lg'>
                <img 
                  src={video.ideation} 
                  alt="Ideation Process" 
                  className='w-full rounded-lg shadow-lg' 
                />
              </div>
            </section>
            
            <div className='w-full h-px bg-gray-700'></div>
            
            {/* Story and Storyboarding */}
            <section className='text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-8'>Story & Storyboarding</h2>
              <div className='bg-gray-900 p-6 rounded-lg mb-8'>
                <h3 className='text-xl font-semibold mb-4 text-white'>User Journey</h3>
                <p className='text-gray-300 leading-relaxed open-sans'>{video.StoryUserJourney}</p>
              </div>
              <div className='bg-gray-900 p-4 rounded-lg'>
                <img 
                  src={video.storyboard} 
                  alt="Storyboard" 
                  className='w-full rounded-lg shadow-lg' 
                />
              </div>
            </section>
            
            <div className='w-full h-px bg-gray-700'></div>
            
            {/* Visual Stages */}
            <section className='text-center'>
              <h2 className='text-3xl sm:text-4xl font-bold mb-8'>Visual Stages</h2>
              <div className='bg-gray-900 p-4 rounded-lg'>
                <video 
                  src={video.VisualStages} 
                  autoPlay 
                  playsInline 
                  loop 
                  className='w-full rounded-lg shadow-lg'
                  controls
                ></video>
              </div>
            </section>
          </div>
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