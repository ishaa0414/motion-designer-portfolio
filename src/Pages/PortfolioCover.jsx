import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Calendar, Send, ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { useVideoContext } from '../VideoContext';
import { useNavigate } from 'react-router-dom';
import profilePhoto from '../assets/profile-photo.jpg';
import HeroVideo from '../assets/cover-video/HeroSectionVideo.mp4';

const PortfolioCover = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    countries: 0,
    companies: 0,
    events: 0
  });

  // Use VideoContext to get real video data
  const { videos } = useVideoContext();
  const navigate = useNavigate();

  // Filter and order videos based on specified IDs: 11,10,1,3,4,5,9,12,8
  const selectedVideoIds = [11, 10, 1, 3, 4, 5, 9, 12, 8];
  
  // Create a map for quick lookup
  const videoMap = videos.reduce((map, video) => {
    map[video.id] = video;
    return map;
  }, {});
  
  // Get only the specified videos in the exact order
  const displayVideos = selectedVideoIds
    .map(id => videoMap[id])
    .filter(video => video !== undefined);

  // Debug logging
  console.log('Available videos:', videos.map(v => ({ id: v.id, title: v.title })));
  console.log('Selected video IDs:', selectedVideoIds);
  console.log('Found videos:', displayVideos.map(v => ({ id: v.id, title: v.title })));

  // Updated target stats values
  const targetStats = {
    projects: 20,
    countries: 100,
    companies: 7500,
    events: 9
  };

  // Handle video clicks
  const handleVideoClick = (video) => {
    navigate(`/work-showcase/${video.id}`);
  };

  // Handle view more button
  const handleViewMore = () => {
    navigate('/work');
  };

  // Handle contact navigation
  const handleContactClick = () => {
    navigate('/contact');
  };

  // Animate stats on component mount
  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 FPS
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3); // Ease out animation
        
        setAnimatedStats({
          projects: Math.floor(targetStats.projects * easeOut),
          countries: Math.floor(targetStats.countries * easeOut),
          companies: Math.floor(targetStats.companies * easeOut),
          events: Math.floor(targetStats.events * easeOut)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setStatsLoaded(true);
          setAnimatedStats(targetStats); // Ensure exact final values
        }
      }, stepDuration);
    };

    // Start animation after a brief delay
    const timeout = setTimeout(animateStats, 500);
    
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // Format numbers for display
  const formatNumber = (num, type) => {
    if (type === 'countries' && num >= 1) {
      return `${num}+`;
    }
    if (type === 'companies' && num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`;
    }
    return `${num}+`;
  };

  const testimonials = [
    {
      text: "Working with Shiwang was an absolute pleasure. His incredible agility and adaptability stood out. No matter what came up, he was quick to shift gears and deliver exactly what was needed, often going above and beyond. Whether last-minute changes or unexpected feedback, he handled everything with calm, creativity, and a great attitude. I would highly recommend him to anyone looking for someone reliable, flexible, and really talented in video work.",
      author: "Sneha Jain",
      position: "Sr Marketing Lead @ Perfios"
    },
    {
      text: "I worked with Shiwang when leading insurance marketing at Perfios. He converts loose briefs into winning marketing assets. His iAdore Insurance Risk Profiling video was lauded and used even after I left. He was our make-or-break designer for multiple campaigns and events, handling all video and brochure work for Global Fintech Fest. Extremely responsive and patient with inputs from multiple teams. Easy to work with, friendly, patient, and creative. I recommend him to any design team.",
      author: "Arjunraj Rajendran",
      position: "B2B Marketer and Consultant @ mavic.ai"
    },
    {
      text: "Shiwang was a big help especially when it came to last minute requirements. Having said that he understands the nitty gritties of product videos, his suggestions and fast TATs were the real help during my work with him.",
      author: "Vigil",
      position: "B2B Marketer"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section with Background Video */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ 
            filter: 'brightness(0.4)', // Darken video for better text readability
          }}
        >
          <source src={HeroVideo} type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-5"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center mb-8">
          <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border-4 border-white flex items-center justify-center mb-8 mx-auto overflow-hidden shadow-xl">
            <img 
              src={profilePhoto} 
              alt="Shiwang Nath" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-xl">Shiwang Nath</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8 drop-shadow-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Motion Designer crafting high-impact visuals for SaaS, Cybersecurity, and Tech brands worldwide.
          </p>
          
          {/* CTA Buttons - Smaller size */}
          <div className="flex gap-3 justify-center flex-wrap mb-12">
            <button 
              onClick={handleContactClick}
              className="bg-transparent border-2 border-gray-400 text-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Work With Me
            </button>
            <a
              href="https://drive.google.com/file/d/1LvNlOat0dH1Nbq727NXZ0V7oIC0Dr9eE/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Case Study
            </a>
            <a
              href="https://www.linkedin.com/in/shiwangn5/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              <Linkedin size={16} />
              View LinkedIn
            </a>
            <button 
              onClick={() => navigate('/')}
              className="bg-transparent border-2 border-blue-400 text-blue-400 px-5 py-2.5 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Website
            </button>
          </div>

          {/* Updated Stats - Bigger and below CTA */}
          <div className="max-w-4xl mx-auto mt-16 open-sans">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-all duration-300 drop-shadow-lg ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.projects, 'projects')}
                </div>
                <div className="text-gray-300 text-base md:text-lg font-medium">Projects Completed</div>
                {!statsLoaded && (
                  <div className="mt-2 h-1 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
              <div className="group">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-all duration-300 drop-shadow-lg ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.countries, 'countries')}
                </div>
                <div className="text-gray-300 text-base md:text-lg font-medium">Countries Reached</div>
                {!statsLoaded && (
                  <div className="mt-2 h-1 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
              <div className="group">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-all duration-300 drop-shadow-lg ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.companies, 'companies')}
                </div>
                <div className="text-gray-300 text-base md:text-lg font-medium">Companies Reached</div>
                {!statsLoaded && (
                  <div className="mt-2 h-1 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
              <div className="group">
                <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 transition-all duration-300 drop-shadow-lg ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.events, 'events')}
                </div>
                <div className="text-gray-300 text-base md:text-lg font-medium">Global Events Showcased</div>
                {!statsLoaded && (
                  <div className="mt-2 h-1 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section with Background */}
      <section className="relative py-16 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 "></div>
        <div className="absolute inset-0"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Selected Work</h2>
          
          {/* Balanced Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {displayVideos.map((video, index) => (
              <div 
                key={video.id} 
                className="aspect-video bg-gray-900 rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300 cursor-pointer group relative overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => handleVideoClick(video)}
              >
                {/* Use imported thumbnails from video context */}
                {video.thumb ? (
                  <img 
                    src={video.thumb} 
                    alt={video.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                ) : video.thumbnail || video.thumbnailUrl ? (
                  <img 
                    src={video.thumbnail || video.thumbnailUrl} 
                    alt={video.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                ) : video.videoUrl || video.Yvideo ? (
                  <div className="w-full h-full relative">
                    {/* Fallback to YouTube thumbnail if no imported thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${(video.videoUrl || video.Yvideo).split('/').pop().split('?')[0]}/maxresdefault.jpg`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      alt={video.title}
                      onError={(e) => {
                        // Fallback to medium quality if maxres doesn't exist
                        e.target.src = `https://img.youtube.com/vi/${(video.videoUrl || video.Yvideo).split('/').pop().split('?')[0]}/mqdefault.jpg`;
                      }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500 rounded-lg bg-gray-800">
                    {video.title || `Video ${video.id}`}
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                  <div className="text-center">
                    <Play className="mx-auto mb-2 text-white drop-shadow-lg" size={32} />
                    <p className="text-white text-sm font-medium px-3 drop-shadow-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>{video.title || `Video ${video.id}`}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          {/* View More Button */}
          <div className="text-center">
            <button
              onClick={handleViewMore}
              className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium text-base shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 mx-auto"
            >
              View More Work
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Balanced */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="bg-gray-900/50 rounded-xl p-6 md:p-8 border border-gray-800 relative backdrop-blur-sm shadow-xl">
            {/* Navigation arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              disabled={testimonials.length <= 1}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
              disabled={testimonials.length <= 1}
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial content */}
            <div className="px-8">
              <p className="text-gray-300 text-lg md:text-xl text-left mb-6 leading-relaxed font-light" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="text-left">
                <p className="font-semibold text-white text-lg mb-1">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                      index === currentTestimonial ? 'bg-white shadow-lg' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section - Balanced */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Ready to elevate your brand with stunning motion design? Let's create something extraordinary together.
          </p>
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <a 
              href="mailto:shiwang.work@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-400 transition-all duration-300 cursor-pointer group transform hover:scale-110"
            >
              <Mail size={20} className="text-blue-500 group-hover:text-blue-400" />
              <span className="text-base font-medium">Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shiwangn5/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-all duration-300 cursor-pointer group transform hover:scale-110"
            >
              <Linkedin size={20} className="text-blue-500 group-hover:text-blue-400" />
              <span className="text-base font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://calendly.com/shiwang-work"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-all duration-300 cursor-pointer group transform hover:scale-110"
            >
              <Calendar size={20} className="text-blue-500 group-hover:text-blue-400" />
              <span className="text-base font-medium">Book Discovery Call</span>
            </a>
            <a 
              href="/contact"
              className="flex items-center space-x-2 hover:text-blue-400 transition-all duration-300 cursor-pointer group transform hover:scale-110"
            >
              <Send size={20} className="text-blue-500 group-hover:text-blue-400" />
              <span className="text-base font-medium">Send Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCover;