import React from 'react';
import myPicture from '../../assets/my-pic.png';
import Gradient from '../../assets/Gradient Button.png';
import GFF from '../../assets/About GFF.jpg';

const About = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('shiwang.work@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <div className="text-white px-3 max-w-6xl mx-auto">
      {/* Header */}
      <div className="glass-border mb-4">
        <p className="text-white gradient p-3 text-2xl sm:text-xl md:text-3xl lg:text-3xl xl:text-4xl">
          About
        </p>
      </div>

      {/* Introduction */}
      <div className="mt-2 p-4 rounded-sm bg-zinc-300 bg-opacity-10 backdrop-blur-lg backdrop-contrast-125 mb-6">
        <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl text-center sm:text-left leading-relaxed open-sans">
          <strong>Hi, I'm Shiwang!</strong> I help SaaS brands achieve their marketing goals with high-quality, engaging videos that simplify complex ideas—without the hassle of technical complexities or endless revisions. Using visual storytelling with 2D/3D animation, I craft content that strengthens brand identity and drives leads.
        </p>
      </div>

      {/* Middle section with three columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Left column */}
        <div className="flex flex-col space-y-4">
          <div className="bg-zinc-300 bg-opacity-10 backdrop-blur-lg backdrop-contrast-125 h-full p-4 rounded-sm">
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed open-sans">
              When I'm not designing, I admire music videos for their ability to seamlessly blend visuals and sound, geek out over anime, and sharpen my Valorant skills—because creativity thrives on a mix of inspiration, passion, and fun!
            </p>
          </div>
          <div className="text-white gradient p-3 text-xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl rounded-sm">
            Achievement I am Proud Of
          </div>
        </div>

        {/* Middle column - Image */}
        <div className="flex justify-center items-center">
          <img 
            className="w-full max-w-xs object-contain" 
            src={myPicture} 
            alt="Shiwang's portrait" 
          />
        </div>

        {/* Right column */}
        <div className="flex flex-col space-y-4">
          <div className="bg-zinc-300 bg-opacity-10 backdrop-blur-lg backdrop-contrast-125 h-full p-4 rounded-sm">
            <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed open-sans">
              Let's work together to bring your vision to life and make your brand unforgettable.
            </p>
          </div>
          <div className="text-white gradient p-3 text-xl sm:text-lg md:text-2xl lg:text-2xl xl:text-3xl rounded-sm">
            Get in Touch
          </div>
          <div className="text-white gradient-image p-3 rounded-sm text-center">
            <p className="text-lg md:text-xl lg:text-2xl">shiwang.work@gmail.com</p>
            <hr className="my-2" />
            <button 
              onClick={copyEmail}
              className="text-base md:text-lg hover:text-gray-300 transition-colors cursor-pointer"
            >
              copy email
            </button>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Left column - Text */}
        <div className="bg-zinc-300 bg-opacity-10 backdrop-blur-lg backdrop-contrast-125 p-4 rounded-sm">
          <p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed open-sans">
            I had the honor of having my work featured at the Global Fintech Fest, attended by PM Narendra Modi and Mr. Piyush Goyal, contributing to Perfios's success.
            <br /><br />
            Being part of "The Era of 0" by Perfios was an exciting challenge—visualizing the fight against fraud and banking mishaps. Grateful to Perfios for this opportunity and support.
            <br /><br />
            This experience reinforced my passion for motion design in brand storytelling. Let's connect and create something impactful!
          </p>
        </div>

        {/* Right columns - Image (spans 2 columns) */}
        <div className="md:col-span-2">
          <img 
            className="w-full h-60 sm:h-80 md:h-full object-cover rounded-sm" 
            src={GFF} 
            alt="Global Fintech Fest showcase" 
          />
        </div>
      </div>
    </div>
  );
};

export default About;