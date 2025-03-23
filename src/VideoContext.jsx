import React, { createContext, useContext, useState } from "react";
import PerfiosVideo1 from "./assets/Perfios/1. One Click Onboarding 2.mp4";
import PerfiosVideo2 from "./assets/Perfios/2. FINteraction 2024 Option 2.mp4";
import PerfiosVideo3 from "./assets/Perfios/3. V1 - eSign (Medium Pace).mp4";
import PerfiosVideo4 from "./assets/Perfios/4. OneVigil - Fast Pacing.mp4";
import PerfiosVideo5 from "./assets/Perfios/5. K-Lookup.mp4";
import PerfiosVideo6 from "./assets/Perfios/6. Data Tamper 2.mp4";
import PerfiosVideo7 from "./assets/Perfios/7. Perfios Acclaim.mp4";
import PerfiosVideo8 from "./assets/Perfios/8. Perfios IAdore.mp4";
import Perf1 from "./assets/Perfios/perf-1.mp4"
import Perf2 from "./assets/Perfios/perf-2.mp4"
import Perf3 from "./assets/Perfios/perf-3.mp4"
import Perf1t from "./assets/Perfios/thumbnail/perf-2t.png"
import Perf2t from "./assets/Perfios/thumbnail/perf-3t.png"
import Perf3t from "./assets/Perfios/thumbnail/perf-1t.png"

import Perf1p from "./assets/Perfios/perf-1p.mp4"
import Perf2p from "./assets/Perfios/perf-2p.mp4"
import Perf3p from "./assets/Perfios/perf-3p.mp4"

import Idea1 from "./assets/Perfios/Idea/Idea1.png"
import Idea2 from "./assets/Perfios/Idea/Idea2.png"
import Idea3 from "./assets/Perfios/Idea/Idea3.png"


import Story1 from "./assets/Perfios/Story/Story1.png"
import Story2 from "./assets/Perfios/Story/Story2.png"
import Story3 from "./assets/Perfios/Story/Story3.png"


import Vision1 from "./assets/Perfios/Vision/Vision1.mp4"
import Vision2 from "./assets/Perfios/Vision/Vision2.mp4"
import Vision3 from "./assets/Perfios/Vision/Vision3.mp4"



import thumb1 from "./assets/Perfios/thumbnail/1.png"
import thumb2 from "./assets/Perfios/thumbnail/2.png"
import thumb3 from "./assets/Perfios/thumbnail/3.png"
import thumb4 from "./assets/Perfios/thumbnail/4.png"
import thumb5 from "./assets/Perfios/thumbnail/5.png"
import thumb6 from "./assets/Perfios/thumbnail/6.png"
import thumb7 from "./assets/Perfios/thumbnail/7.png"
import thumb8 from "./assets/Perfios/thumbnail/8.png"




// Create Context
const VideoContext = createContext();

// Video Provider Component
export const VideoProvider = ({ children }) => {
  const [videos] = useState([
   
    { id: 1, title: "One Click Onboarding", url: PerfiosVideo1, description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt.",number:1,thumbnail:thumb1},
    { id: 2, title: "FINteraction 2024", url: PerfiosVideo2, description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt." ,number:2,thumbnail:thumb2},
    { id: 3, title: "e-Sign", url: PerfiosVideo3, description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt." ,number:3,thumbnail:thumb3},
    { id: 4, title: "OneVigil", url: PerfiosVideo4, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt.",number:4,thumbnail:thumb4 },
    { id: 5, title: "K-Lookup", url: PerfiosVideo5, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt.",number:5,thumbnail:thumb5 },
    { id: 6, title: "Data Tamper", url: PerfiosVideo6, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt.",number:6 ,thumbnail:thumb6},
    { id: 7, title: "Perfios Acclaim", url: PerfiosVideo7, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt." ,number:7,thumbnail:thumb7},
    { id: 8, title: "Perfios IAdore", url: PerfiosVideo8, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat? Consequuntur, fugiat quidem sapiente delectus aperiam, quae rem modi repudiandae nam eaque asperiores eius nesciunt.",number:8,thumbnail:thumb8 },
    { id: 9, title: "Reverse Penny Drop", url: Perf1p, description: "A visually distinct and polished explainer video was developed for Perfios, designed to educate and inform the target audience. The video highlights the product’s core feature of seamless financial validation, showcasing its practical applications through clear demonstrations and messaging. Tailored for marketing use, the video effectively communicates how Perfios simplifies financial validation, making it a valuable asset for audience engagement and product promotion.",number:1 ,thumbnail:Perf1t,brief:"To Define visual style of Perfios and create an educational explainer video highlighting the product's functionality for use in marketing, focusing on seamless financial validation.",goal:" Educative Explainer video with clear concept demonstration and messaging to be shared with TG ",messaging:" Experience seamless financial validation",ideation:Idea1,results:"(Revenue, Views, Impact)",IdeaThought:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat?",credits:"Background Music and SFX",storyboard:Story1,StoryThought:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat?",StoryUserJourney:"→ Ac verification need (To make transaction smooth for valid bank ID to automate the process) → API integrated Bank in system → Customer will be asked a unique number → Customer payment link for verification Sent → customer opens link (Figma Screen files) → Choosing the account to be verified → Transaction of Rs 1 sent and will be reverted back with 72 hours after account verification. ",VisualStages:Vision1,preview:Perf1},
    { id: 10, title: "Era of Zero", url: Perf2p, description: " The explainer video showcases The Era of 0 by Perfios, representing a relentless approach to eliminating fraud, scams, and digital mishaps in banking. It highlights the goal of reducing all financial risks to zero—zero fraud, risk, friction, false claims, churn, and touch, ultimately enhancing security and efficiency. Designed for marketing and event purposes, the video emphasizes how Perfios empowers banks to achieve a seamless, risk-free digital experience." ,number:2,thumbnail:Perf2t,brief:" To create an explainer video promoting The Era of 0 by Perfios, highlighting its mission to minimize all digital banking troubles—fraud, scams, and operational inefficiencies—to zero.",goal:" To demonstrate the power of The Era of 0 in reducing financial risks and promoting a secure, frictionless banking experience through a compelling explainer video for marketing and event use.",messaging:" Zero fraud, zero risk, zero friction, zero false claims, zero churn, zero touch, zero TAT.",ideation:Idea2,IdeaThought:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat?",storyboard:Story2,StoryThought:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat?",StoryUserJourney:"Filling Application Form with Business PAN and other details → Perfios gathering details using Business PAN → Documents gathered → Eligibility Check of the documents → Visit protocol for verification and signing",credits:"Background Music",VisualStages:Vision2,preview:Perf3},
    { id: 11, title: "Perfios Hub", url: Perf3p, description: "The explainer video highlights how Perfios Hub maximizes investments with 150+ APIs, 500+ free API calls, and no minimum commitment. Designed for product demonstration at events and marketing purposes, the video focuses on showcasing seamless API integration and its role in delivering value without barriers. The messaging emphasizes scalable growth and investment optimization, making it a powerful tool for businesses seeking efficient API solutions.",number:3,thumbnail:Perf3t,brief:"To create an explainer video for an event to promote Perfios hub and highlighting how it maximizes investments with 150+ APIs, 500+ free API calls and no minimum commitment.",goal:"Product demonstration at event and explainer video to for marketing purpose",messaging:" Maximize your investments with 150+ APIs, 500+ free calls, no commitment.",ideation:Idea3,IdeaThought:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat?",storyboard:Story3,StoryThought:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus fuga sunt officiis nobis repellat?",StoryUserJourney:"Onboarding | Profile page of the customer → Switching multiple screen for using multiple APIs → Perfios Hub introduction → Signup in Perfios Hub → Selecting API bunch → Following instruction and using the APIs without Hassle",credits:"Background Music and SFX" ,VisualStages:Vision3,preview:Perf2 }
   
  ]);

  return (
    <VideoContext.Provider value={{ videos }}>
      {children}
    </VideoContext.Provider>
  );
};

// Custom Hook to use Context
export const useVideoContext = () => useContext(VideoContext);
