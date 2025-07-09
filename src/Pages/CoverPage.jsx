import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Mail, ExternalLink, Award, Sparkles } from 'lucide-react';

const CoverPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="h-screen bg-slate-900 text-white relative overflow-hidden flex flex-col">
      {/* Animated Cursor Trail */}
      <div 
        className="fixed w-6 h-6 bg-blue-400/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x - 12}px, ${mousePos.y - 12}px)`,
        }}
      />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className={`relative z-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <nav className="flex justify-between items-center p-6">
          <div className="text-2xl font-bold text-white group cursor-pointer">
            <span className="inline-block transition-transform group-hover:rotate-3 group-hover:scale-110">Shiwang</span>
            <span className="inline-block ml-2 text-blue-400 transition-transform group-hover:-rotate-3 group-hover:scale-110">Nath</span>
          </div>
          <div className="flex space-x-6">
            <button className="text-gray-300 hover:text-white transition-all hover:scale-105 relative group">
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => window.open('mailto:shiwang.work@gmail.com')}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg hover:bg-white/15 transition-all hover:scale-105 group"
            >
              <Mail size={16} className="group-hover:rotate-12 transition-transform" />
              <span>Get In Touch</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content - Single Screen */}
      <main className={`relative z-10 flex-1 px-6 py-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto h-full">
          <div className="grid lg:grid-cols-12 gap-8 h-full items-center">
            
            {/* Left Side - Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  <span className="inline-block animate-pulse">Motion</span>{' '}
                  <span className="inline-block hover:animate-bounce cursor-default">Designer</span>
                  <br />
                  <span className="text-blue-400 inline-block hover:scale-105 transition-transform cursor-default">& Visual Storyteller</span>
                </h1>
                <div className="flex items-center mt-4 space-x-2">
                  <Sparkles className="text-yellow-400 animate-spin" size={20} />
                  <span className="text-sm text-gray-400">Bringing ideas to life through motion</span>
                </div>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed hover:text-white transition-colors max-w-2xl">
                I help SaaS brands achieve their marketing goals with high-quality, engaging videos that simplify complex ideas—without the hassle of technical complexities.
              </p>

              {/* Key Achievement Badge */}
              <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 hover:bg-white/10 transition-all group max-w-md">
                <Award className="text-yellow-400 group-hover:rotate-12 group-hover:scale-110 transition-all" size={24} />
                <div>
                  <div className="font-semibold text-yellow-400">Global Fintech Fest Feature</div>
                  <div className="text-sm text-gray-300">Attended by PM Modi & Mr. Piyush Goyal</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105 hover:rotate-1 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Play size={18} className="relative z-10 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold relative z-10">View Showreel</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform relative z-10" />
                </button>
                <button className="flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-lg hover:bg-white/15 transition-all hover:scale-105 hover:-rotate-1 group">
                  <span>Book a 1:1 Call</span>
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Side - Interactive Cards & Stats */}
            <div className="lg:col-span-5 space-y-6">
              {/* Featured Project Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-500 group cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white group-hover:scale-110 transition-transform">
                      Fintech Event
                    </span>
                    <Award size={20} className="text-yellow-400 group-hover:rotate-12 group-hover:scale-110 transition-all" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">The Era of 0 - Perfios</h3>
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">Visualizing the fight against fraud and banking mishaps through motion design</p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "72%", label: "Higher Conversion" },
                  { value: "94%", label: "Understanding" },
                  { value: "88%", label: "Positive ROI" }
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:-rotate-2 group cursor-pointer"
                  >
                    <div className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                    <div className="text-xs text-gray-300 leading-tight group-hover:text-white transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Video Preview Card */}
              <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:scale-105 transition-all duration-500 group relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <Play size={28} className="text-white ml-1 relative z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">Ready for Impact?</h4>
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">Let's create something amazing</p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom CTA Strip */}
      <footer className={`relative z-10 px-6 py-4 border-t border-white/10 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-blue-400 font-semibold">Ready to make your brand unforgettable?</p>
            <p className="text-sm text-gray-400">High-quality motion design that drives results</p>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all hover:scale-105 group">
              <span className="text-sm font-medium">View Portfolio</span>
              <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
            <button 
              onClick={() => window.open('mailto:shiwang.work@gmail.com')}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg hover:bg-white/15 transition-all hover:scale-105 group"
            >
              <Mail size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="text-sm">Contact</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CoverPage;