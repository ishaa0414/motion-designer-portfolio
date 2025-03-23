import React, { useRef, useEffect, useState } from 'react';
import Demo from '../../assets/Services/Demo Video.png';
import Explainer from '../../assets/Services/Explainer Video.png';
import Promo from '../../assets/Services/Promo Video.png';
import Tutorial from '../../assets/Services/Tutorial Video.png';
import UI from '../../assets/Services/UI Animation .png';


const Services = () => {
  const images = [
    { 
      src: Demo, 
      title: 'Demo Video',
      message: `Practical demonstration of a product's capabilities.`
    },
    { 
      src: Explainer, 
      title: 'Explainer Video',
      message: 'Conceptual understanding of a complex topic, often using visuals and storytelling.'
    },
    { 
      src: Promo, 
      title: 'Promo Video',
      message: 'Creating hype and interest around a product or service.'
    },
    { 
      src: Tutorial, 
      title: 'Tutorial Video',
      message: ' Detailed, step-by-step instructions for completing a task.'
    },
    { 
      src: UI, 
      title: 'UI Animation',
      message: 'Bring your interface to life with smooth, intuitive animations'
    }
  ];

  // Create a ref for the slider
  const sliderRef = useRef(null);
  
  // State to track which image is being hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Use useEffect to handle cleanup and ensure smooth animation
  useEffect(() => {
    // Reset the animation when component mounts to prevent glitching
    const slider = sliderRef.current;
    if (slider) {
      slider.classList.remove('slider-animate');
      // Trigger reflow
      void slider.offsetWidth;
      slider.classList.add('slider-animate');
    }

    return () => {
      // Cleanup animation when component unmounts
      if (slider) {
        slider.classList.remove('slider-animate');
      }
    };
  }, []);

  // Function to render an image with hover effect
  const renderImage = (image, index, isDuplicate = false) => {
    const uniqueKey = isDuplicate ? `img-dup-${index}` : `img-${index}`;
    
    return (
      <div 
        key={uniqueKey} 
        className="w-32 sm:w-48 md:w-56 lg:w-64 h-24 sm:h-32 md:h-40 lg:h-48 m-1 sm:m-2 flex flex-col items-center justify-center rounded-lg shadow-md overflow-hidden relative group"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="relative w-full h-full">
          <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
          
          {/* Title bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-1 md:py-2 transition-all duration-300">
            <span className="text-xs sm:text-sm md:text-base open-sans">{image.title}</span>
          </div>
          
          {/* Hover message overlay - shown only when hovered */}
          <div className={`absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="text-white text-center p-2 sm:p-4">
              <p className="text-xs sm:text-sm md:text-base open-sans">{image.message}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8 text-white">Our Services</h2>
          
          {/* Responsive Infinite Image Slider */}
          <div className="relative w-full overflow-hidden slider-container">
            <div 
              ref={sliderRef} 
              className="slider-track flex slider-animate"
            >
              {/* First set of images */}
              <div className="flex shrink-0 items-center">
                {images.map((image, index) => renderImage(image, index))}
              </div>
              
              {/* Duplicate set of images for the infinite effect */}
              <div className="flex shrink-0 items-center">
                {images.map((image, index) => renderImage(image, index, true))}
              </div>
            </div>
          </div>
          
        
        </div>
      </section>
    </>
  );
};

export default Services;