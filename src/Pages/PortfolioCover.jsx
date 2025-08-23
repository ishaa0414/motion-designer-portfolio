import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Calendar, Send, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useVideoContext } from '../VideoContext';

const PortfolioCover = ({ profileImage = null }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [statsLoaded, setStatsLoaded] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    views: 0,
    hours: 0,
    years: 0
  });
  const { videos } = useVideoContext();
  
  // Filter videos based on the IDs you want to display: 11, 10, 1, 3, 4, 5, 9, 8
  const selectedVideoIds = [12, 11, 10, 1, 3, 4, 5, 9, 8];
  
  // Create a map for quick lookup and preserve order
  const videoMap = videos.reduce((map, video) => {
    map[video.id] = video;
    return map;
  }, {});
  
  // Get videos in the specified order, filtering out any that don't exist
  const selectedVideos = selectedVideoIds
    .map(id => videoMap[id])
    .filter(video => video !== undefined);
  
  // If we don't have enough videos, fill with remaining videos
  const remainingVideos = videos.filter(video => !selectedVideoIds.includes(video.id));
  const allSelectedVideos = [...selectedVideos, ...remainingVideos];
  
  // Debug logging
  console.log('Available videos:', videos.map(v => ({ id: v.id, title: v.title })));
  console.log('Selected video IDs:', selectedVideoIds);
  console.log('Found videos:', selectedVideos.map(v => ({ id: v.id, title: v.title })));
  
  // Display all selected videos
  const displayVideos = allSelectedVideos;

  // Target stats values
  const targetStats = {
    projects: 20,
    views: 80000,
    hours: 7500,
    years: 7
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
          views: Math.floor(targetStats.views * easeOut),
          hours: Math.floor(targetStats.hours * easeOut),
          years: Math.floor(targetStats.years * easeOut)
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
    if (type === 'views' && num >= 1000) {
      return `${(num / 1000).toFixed(0)}K+`;
    }
    if (type === 'hours' && num >= 1000) {
      return `${(num / 1000).toFixed(1)}K+`;
    }
    return `${num}${type !== 'hours' ? '+' : '+'}`;
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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Integrated Stats */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center mb-12">
          <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center mb-6 mx-auto overflow-hidden">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt="Shiwang Nath" 
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-sm">Profile</span>
            )}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Shiwang Nath</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Motion Designer crafting high-impact visuals for SaaS, Cybersecurity, and Tech brands worldwide.
          </p>
          
          {/* Animated Stats */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-4 gap-6 text-center">
              <div className="group">
                <div className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.projects, 'projects')}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">Projects</div>
                {!statsLoaded && (
                  <div className="mt-1 h-0.5 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
              <div className="group">
                <div className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.views, 'views')}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">Views</div>
                {!statsLoaded && (
                  <div className="mt-1 h-0.5 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
              <div className="group">
                <div className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.hours, 'hours')}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">Hours</div>
                {!statsLoaded && (
                  <div className="mt-1 h-0.5 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
              <div className="group">
                <div className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                  statsLoaded ? 'text-white' : 'text-blue-400'
                }`}>
                  {formatNumber(animatedStats.years, 'years')}
                </div>
                <div className="text-gray-400 text-xs md:text-sm">Years</div>
                {!statsLoaded && (
                  <div className="mt-1 h-0.5 bg-blue-400 rounded animate-pulse"></div>
                )}
              </div>
            </div>
          </div>
          
          <button className="bg-transparent border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-300">
            Work With Me
          </button>
        </div>
      </section>

      {/* Selected Work Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Selected Work</h2>
          <div className="grid grid-cols-3 gap-4">
            {/* Display selected videos */}
            {displayVideos.map((video, index) => (
              <div 
                key={video.id} 
                className="aspect-square bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                onClick={() => {
                  if (video.Yvideo) {
                    window.open(video.Yvideo, '_blank');
                  }
                }}
              >
                {/* Thumbnail */}
                {video.thumbnail ? (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    {video.title}
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="mx-auto mb-2 text-white" size={32} />
                    <p className="text-white text-sm font-medium px-2">{video.title}</p>
                  </div>
                </div>
                
                {/* Video number badge */}
                <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.number || video.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 relative">
            {/* Navigation arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
              disabled={testimonials.length <= 1}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
              disabled={testimonials.length <= 1}
            >
              <ChevronRight size={24} />
            </button>

            {/* Testimonial content */}
            <div className="px-8">
              <p className="text-gray-300 text-lg text-center mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="text-center">
                <p className="font-semibold text-white mb-1">
                  {testimonials[currentTestimonial].author}
                </p>
                <p className="text-gray-400 text-sm">
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
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentTestimonial ? 'bg-white' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-gray-400 mb-8">Ready to elevate your brand with motion design?</p>
          <div className="flex justify-center space-x-8 flex-wrap gap-4">
            <a 
              href="mailto:shiwang.work@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <Mail size={16} className="text-blue-500" />
              <span className="text-sm">Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/shiwangn5/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <Linkedin size={16} className="text-blue-500" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a 
              href="https://calendly.com/shiwang-work"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <Calendar size={16} className="text-blue-500" />
              <span className="text-sm">Book Discovery Call</span>
            </a>
            <a 
              href="/contact"
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              <Send size={16} className="text-blue-500" />
              <span className="text-sm">Send Inquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioCover;