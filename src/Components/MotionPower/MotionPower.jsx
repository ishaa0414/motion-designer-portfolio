import React from 'react'
import star from '../../assets/Perfios/star-icon.png';

const MotionPower = () => {
  return (
    <div className='text-white py-10'>
      <div className='container mx-auto px-4'>
        {/* Header section */}
        {/* <div className=' mb-8 '>
          <h2 className='text-3xl sm:text-4xl uppercase font-bold'>Motion Power!</h2>
          <hr className="w-32 h-[2px] bg-white mx-auto mt-3 float-left" />
        </div> */}
         <div className='text-2xl md:text-3xl lg:text-4xl text-white pl-10 relative z-50  uppercase mb-10 '  > Motion Power
                <hr className="w-[4rem] md:w-[7rem] lg:w-[9rem] h-[2px] bg-white ml-28 " />
               
                </div>
        {/* Main content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 open-sans justify-items-center'>
          
          {/* Left Column */}
          <div className='flex flex-col items-center'>
            <StatBlock 
              title="Drive More Revenue"
              text="72% higher conversion rates reported by companies when using video marketing strategies, with 89% of video marketers experiencing good ROI from their content."
              source="Wyzowl Video Marketing Statistics"
              url="https://www.wyzowl.com/video-marketing-statistics/"
            />
            
            <StatBlock 
              title="Swift Value Communication"
              text="94% of marketers report videos improve customer understanding of products/services. Motion graphics explain complex concepts in 90 seconds or less while maintaining attention, where quick engagement determines success."
              source="Wistia Marketing Statistics"
              url="https://wistia.com/learn/marketing/video-marketing-statistics"
            />
            
            <StatBlock 
              title="Conversion Rates"
              text="84% of consumers have purchased products after watching brand videos. Email campaigns including video see 200-300% higher click-through rates, dramatically improving marketing effectiveness. Video on landing pages increases conversions by up to 80%."
              source="Forbes YEC Video Marketing Trends"
              url="https://www.forbes.com/councils/theyec/2023/03/24/video-marketing-trends-that-you-cannot-ignore-in-2023/"
            />
          </div>
          
          {/* Right Column */}
          <div className='flex flex-col items-center'>
            <StatBlock 
              title="Retention and Engagement"
              text="95% of message is retained by viewers from video versus just 10% from text. Motion graphics content generates 1200% more shares than text and images combined with users spending 88% more time on websites, increasing brand messaging opportunities."
              source="Animoto Business Video Trends"
              url="https://animoto.com/blog/news/2024-business-video-trends-infographic"
            />
            
            <StatBlock 
              title="Increased ROI"
              text="88% of marketers report positive ROI from video marketing. Companies using motion graphics generate 66% more qualified leads annually compared to those who don't."
              source="Wyzowl Video Marketing Statistics"
              url="https://www.wyzowl.com/video-marketing-statistics/"
            />
            
            <StatBlock 
              title="Cost Effective Marketing"
              text="37% more budget-friendly video producing method versus traditional video production with similar effectiveness. Assets are easily repurposed across platforms, maximizing value."
              source="Motion Graphics Research Paper"
              url="https://www.scitepress.org/PublishedPapers/2020/103547/103547.pdf"
            />
          </div>
          
        </div>
      </div>
    </div>
  )
}

// Reusable stat block component
const StatBlock = ({ title, text, source, url }) => (
  <div className='mb-8 relative max-w-md'>
    <img src={star} className='absolute w-10 sm:w-14 -top-4 -left-2' alt="Star icon" />
    <div className='pl-10'>
      <p className='text-xl sm:text-2xl font-semibold mb-2'>{title}</p>
      <p className='mb-2'>{text}</p>
      <a 
        href={url}
        className='gradient p-1 mt-1 rounded-md text-white text-xs sm:text-sm inline-block'
        target="_blank"
        rel="noopener noreferrer"
      >
         {source}
      </a>
    </div>
  </div>
);

export default MotionPower