import Contact from "./Components/Contact/Contact"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Testimonials from "./Components/Testimonials/Testimonials"
import Work from "./Components/Work/Work"
import profilePicture from '../src/assets/background-video.mp4'
import { Route,Routes,BrowserRouter } from "react-router-dom"
import WorkSection from "./Pages/Work/WorkSection"
import PerfiosShow from "./Pages/PerfiosShowcase/PerfiosShow"
import VideoPage from "./Pages/WorkShow/WorkShow"
import VideoList from "./Pages/WorkTile/WorkTile"
import { VideoProvider } from "./VideoContext"
import SampleWork from "./Pages/Sample Work/SampleWork"
import { useRef } from "react"
import Showreel from "./Pages/Showreel/Showreel"
import FloatingButtons from "./Components/Floating Icons/FloatingIcons"

import Check from "./Pages/Check/Check"

function App() {

  return (
   <div className=" mt-0 box-border absolute w-full ">
    <FloatingButtons/>
        <video src={profilePicture} autoPlay loop muted className='-z-10 absolute top-0 left-0 w-full h-full object-cover'></video>
    
        <VideoProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkSection/>} />
          <Route path="/work-showcase/:id" element={<VideoPage/>}/>
          <Route path="/work-tile" element={<VideoList/>}/>
          <Route path="/sample-work" element={<SampleWork/>}/>
          <Route path="/perfios-show/:id" element={<PerfiosShow/>}/>
          <Route path="/showreel" element={<Showreel/>}/>
          <Route path="/check" element={<Check/>}/>
          <Route path="/show-work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>

        </Routes>
        </VideoProvider>
        
   
   </div>
  )
}

export default App
