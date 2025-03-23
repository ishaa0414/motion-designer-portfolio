import React from 'react'
import CheckVideo from '../../assets/Perfios/perf-1.mp4'
import CheckThumb from "../../assets/Perfios/thumbnail/thumb-check.mov"


const Check = () => {
  return (
    <div className='bg-black'>
   <video controls className='z-50 opacity-100' width="500px" height="auto" autoPlay loop muted>
  <source src={CheckThumb} type="video/quicktime" />
  Your browser does not support the video tag.
</video>
    </div>
  )
}

export default Check