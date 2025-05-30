import React, { memo, useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useVideoContext } from '../../VideoContext';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { videos } = useVideoContext();
  const [embedUrl, setEmbedUrl] = useState('');
  const [isPlaying, setIsPlaying] = useState(true);
  const iframeRef = useRef(null);

  const video = videos.find((v) => v.id === parseInt(id));

  // Convert YouTube URL to embed URL with autoplay parameter
  useEffect(() => {
    if (video && video.Yvideo) {
      const convertToEmbedUrl = (youtubeUrl) => {
        if (!youtubeUrl) return '';
        
        let baseEmbedUrl = '';
        let videoId = '';
        
        // Handle regular YouTube videos
        if (youtubeUrl.includes('youtu.be/')) {
          videoId = youtubeUrl.split('youtu.be/')[1].split('?')[0].trim();
          baseEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
        // Handle YouTube shorts
        else if (youtubeUrl.includes('youtube.com/shorts/')) {
          videoId = youtubeUrl.split('shorts/')[1].split('?')[0].trim();
          baseEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
        // Handle standard YouTube links
        else if (youtubeUrl.includes('youtube.com/watch?v=')) {
          videoId = youtubeUrl.split('v=')[1].split('&')[0].trim();
          baseEmbedUrl = `https://www.youtube.com/embed/${videoId}`;
        }
        
        // Add parameters to control playback and prevent suggestions
        return baseEmbedUrl ? 
          `${baseEmbedUrl}?autoplay=1&mute=1&enablejsapi=1&rel=0&playlist=${videoId}&modestbranding=1&controls=1` : '';
      };
      
      setEmbedUrl(convertToEmbedUrl(video.Yvideo));
    }
  }, [video]);

  // Handle messages from YouTube iframe (for auto-loop)
  useEffect(() => {
    // Create event listener for messages from YouTube iframe
    const handleMessage = (event) => {
      // Only process messages from YouTube
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        
        // If this is a video state change and the video ended (state=0)
        if (data.event === 'onStateChange' && data.info === 0) {
          // Video ended, loop it by restarting
          if (iframeRef.current) {
            iframeRef.current.contentWindow.postMessage(
              '{"event":"command","func":"seekTo","args":[0, true]}', 
              '*'
            );
            iframeRef.current.contentWindow.postMessage(
              '{"event":"command","func":"playVideo","args":""}', 
              '*'
            );
          }
        }
      } catch (e) {
        // Ignore parsing errors
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Clean up
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  // Function to control the YouTube player
  const togglePlayPause = () => {
    if (!iframeRef.current) return;
    
    try {
      const player = iframeRef.current.contentWindow;
      
      if (isPlaying) {
        // Send pause command to YouTube iframe
        player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        // Send play command to YouTube iframe
        player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error controlling YouTube player:", error);
    }
  };

  if (!video) {
    return (
      <h2 className="text-center mt-10 text-xl">
        Video not found. 
        <button 
          onClick={() => navigate("/")} 
          className="ml-2 text-blue-500 underline"
        >
          Go Back
        </button>
      </h2>
    );
  }

  return (
    <>
      <Navbar/>
      <div className='text-white min-h-screen flex flex-col'>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-20 left-4 md:top-20 md:left-6 lg:top-20 lg:left-8 bg-gray-300 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 active:bg-gray-400 transition duration-300 text-sm md:text-base lg:text-lg z-30"
        >
          Back To List
        </button>
        
        {embedUrl ? (
          <div className="w-full h-[calc(100vh-80px)] bg-black relative">
            <iframe
              ref={iframeRef}
              src={embedUrl}
              title={video.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
              {/* <button
                onClick={togglePlayPause}
                className="bg-white text-black font-bold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
              >
                {isPlaying ? 'Pause' : 'Play'}
              </button> */}
            </div>
          </div>
        ) : (
          <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center bg-black">
            <p className="text-xl text-gray-400">Video unavailable</p>
          </div>
        )}
        
        <div className='absolute top-1/3 left-4 sm:left-6 md:left-8 bg-black/60 p-4 rounded-lg max-w-[90%] md:max-w-[50%]'>
          <h1 className='text-2xl sm:text-3xl font-bold'>{video.number}</h1>
          <h2 className='text-white text-xl sm:text-2xl mt-2'>{video.title}</h2>
          {/* <p className='mt-2 text-sm sm:text-base open-sans'>{video.description}</p> */}
        </div>
        
        <Footer/>
      </div>
    </>
  );
};

export default memo(VideoPage);