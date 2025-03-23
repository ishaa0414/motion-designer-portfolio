import React, { memo } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useVideoContext } from '../../VideoContext';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const VideoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { videos } = useVideoContext();

  const video = videos.find((v) => v.id === parseInt(id));

  if (!video) {
    return <h2 className="text-center mt-10 text-xl">Video not found. <button onClick={() => navigate("/")} className="ml-2 text-blue-500 underline">Go Back</button></h2>;
  }

  return (
    <>
    <Navbar/>
    <div className='text-white min-h-screen flex flex-col'>
      <button 
        onClick={() => navigate(-1)} 
        className="absolute  top-20 left-4 md:top-20 md:left-6 lg:top-20 lg:left-8 bg-gray-300 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 active:bg-gray-400 transition duration-300 text-sm md:text-base lg:text-lg z-30"
      >
        Back To List
      </button>
      <video className='w-full h-[calc(100vh-80px)] object-cover' controls loop autoPlay playsInline muted preload="metadata">
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='absolute top-1/3 left-4 sm:left-6 md:left-8 bg-black/60 p-4 rounded-lg max-w-[90%] md:max-w-[50%]'>
        <h1 className='text-2xl sm:text-3xl font-bold'>{video.number}</h1>
        <h2 className='text-white text-xl sm:text-2xl mt-2 '>{video.title}</h2>
        <p className='mt-2 text-sm sm:text-base open-sans'>{video.description}</p>
      </div>
      
      <Footer/>
    </div>
    </>
  );
}

export default memo(VideoPage);




// const WorkShow = () => {
//   return (
//     <div>
//       <Navbar/>
//       <div className='h-screen'>

//       </div>
//     </div>
//   )
// }

// export default WorkShow