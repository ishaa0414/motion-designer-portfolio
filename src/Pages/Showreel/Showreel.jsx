import React from 'react'
import ShowreelVideo from "../../assets/Showreel (New).mp4";
import { useNavigate } from "react-router-dom";

const Showreel = () => {
   const navigate = useNavigate();
  return (
    
    <div>
       <button onClick={() => navigate(-1)} className="absolute top-4 left-4 bg-gray-300 text-black font-semibold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 active:bg-gray-400 transition z-30 text-base xs:text-sm sm:text-sm lg:text-lg">
        ← Go Back
      </button>
        <video src={ShowreelVideo} className='h-screen object-cover w-full' autoPlay loop controls muted ></video>
    </div>
  )
}

export default Showreel