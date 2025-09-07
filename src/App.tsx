import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Plus, ArrowDown, Sparkles } from 'lucide-react';
import { sections as sectionSeed } from "./old-sections"
import type { ImageLayout } from './types';

const titleText = "Trip Proposal with Expensive Friends 2025"

const TripProposalWalkthrough = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [sections, setSections] = useState(sectionSeed);

  const nextSection = useCallback(() => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  }, [currentSection, sections.length]);

  const prevSection = useCallback(() => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  }, [currentSection]);

  const updateSection = (field: string, value: ImageLayout) => {
    setSections(prev => prev.map((section, index) => 
      index === currentSection ? { ...section, [field]: value } : section
    ));
  };

  const addImage = () => {
    const newImageUrl = prompt("Enter image URL:");
    if (newImageUrl) {
      setSections(prev => prev.map((section, index) => 
        index === currentSection 
          ? { ...section, images: [...section.images, newImageUrl] }
          : section
      ));
    }
  };

  const updateImageLayout = (layout: ImageLayout) => {
    updateSection('imageLayout', layout);
  };

  const handleScroll = () => {
    setShowMainContent(true);
  };

  const renderImages = () => {
    const currentSectionData = sections[currentSection];
    const { images, imageLayout } = currentSectionData;

    if (!images || images.length === 0) return null;

    const imageElements = images.map((img, index) => (
      <div key={index} className="relative group">
        <img 
          src={img} 
          alt={`Activity ${index + 1}`}
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    ));

    switch (imageLayout) {
      case 'carousel':
        return (
          <div className="relative w-full h-64 overflow-hidden rounded-xl mb-8">
            <div className="flex transition-transform duration-500 h-full">
              {imageElements.map((el, i) => (
                <div key={i} className="min-w-full h-full flex-shrink-0">
                  {React.cloneElement(el, { 
                    className: "w-full h-full object-cover rounded-xl shadow-2xl"
                  })}
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'scattered':
        return (
          <div className="relative h-80 mb-8">
            {imageElements.map((el, i) => (
              <div 
                key={i}
                className="absolute"
                style={{
                  top: `${Math.sin(i) * 20 + 30}%`,
                  left: `${(i * 25) + (Math.cos(i) * 10)}%`,
                  transform: `rotate(${Math.sin(i) * 10}deg)`,
                  zIndex: images.length - i
                }}
              >
                {React.cloneElement(el, { 
                  className: "w-32 h-32 object-cover rounded-lg shadow-xl hover:scale-110 transition-all cursor-pointer"
                })}
              </div>
            ))}
          </div>
        );
      
      case 'grid':
        return (
          <div className="grid grid-cols-2 gap-4 mb-8">
            {imageElements.map((el, i) => (
              <div key={i}>
                {React.cloneElement(el, { 
                  className: "w-full h-40 object-cover rounded-lg shadow-lg"
                })}
              </div>
            ))}
          </div>
        );
      
      case 'masonry':
        return (
          <div className="columns-2 gap-4 mb-8 space-y-4">
            {imageElements.map((el, i) => (
              <div key={i} className="break-inside-avoid">
                {React.cloneElement(el, { 
                  className: "w-full rounded-lg shadow-lg mb-4"
                })}
              </div>
            ))}
          </div>
        );
      
      case 'floating':
        return (
          <div className="relative h-72 mb-8 overflow-hidden">
            {imageElements.map((el, i) => (
              <div 
                key={i}
                className="absolute animate-bounce"
                style={{
                  top: `${20 + (i * 15)}%`,
                  left: `${10 + (i * 20)}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '3s'
                }}
              >
                {React.cloneElement(el, { 
                  className: "w-24 h-24 object-cover rounded-full shadow-xl border-4 border-white"
                })}
              </div>
            ))}
          </div>
        );
      
      case 'spiral':
        return (
          <div className="relative h-80 mb-8">
            {imageElements.map((el, i) => {
              const angle = (i * 90) * (Math.PI / 180);
              const radius = 60 + (i * 20);
              const x = 50 + (radius * Math.cos(angle)) / 3;
              const y = 40 + (radius * Math.sin(angle)) / 4;
              
              return (
                <div 
                  key={i}
                  className="absolute transition-all duration-1000"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `rotate(${i * 45}deg)`
                  }}
                >
                  {React.cloneElement(el, { 
                    className: "w-20 h-20 object-cover rounded-lg shadow-xl"
                  })}
                </div>
              );
            })}
          </div>
        );
      
      default:
        return (
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {imageElements}
          </div>
        );
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!showMainContent) {
        if (e.key === 'ArrowDown' || e.key === ' ') {
          setShowMainContent(true);
        }
        return;
      }
      
      if (e.key === 'ArrowRight' && currentSection < sections.length - 1) {
        nextSection();
      } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        prevSection();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSection, showMainContent, nextSection, prevSection, sections.length]);

  // Title Page Component
  if (!showMainContent) {
    return (
      <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHY0aGE0YWg4ZmZybGRrdTJlcGo2YjlvNjB4bjNzM2hzbGh4cTFkdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs4BSacFKI7A717y/giphy.gif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        <div className="relative z-10 text-center px-8">
          {/* Main Title with Effects */}
          <div className="mb-12">
              <h1 
                className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight cursor-pointer group"
              >
                {titleText.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className="inline-block mr-4 mb-2 group-hover:scale-110 transition-all duration-300 animate-pulse"
                    style={{
                      background: index % 3 === 0 
                        ? 'linear-gradient(45deg, #ff6b6b, #feca57)' 
                        : index % 3 === 1 
                        ? 'linear-gradient(45deg, #48dbfb, #0abde3)' 
                        : 'linear-gradient(45deg, #ff9ff3, #f368e0)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 animate-pulse">
            Where every adventure costs expensive as shit 💸
          </p>

          {/* Sparkle effects around scroll indicator */}
          <div className="relative">
            {[...Array(8)].map((_, i) => (
              <Sparkles
                key={i}
                className="absolute text-yellow-400 animate-ping"
                size={16}
                style={{
                  left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 60}px`,
                  top: `${50 + Math.sin(i * 45 * Math.PI / 180) * 60}px`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
            
            {/* Scroll indicator */}
            <button
              onClick={handleScroll}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all shadow-2xl flex items-center gap-3 mx-auto group"
            >
              <span>Begin the Journey</span>
              <ArrowDown className="animate-bounce group-hover:translate-y-1 transition-transform" size={20} />
            </button>
          </div>

          {/* Bottom hint */}
          <p className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-500 animate-bounce">
            Scroll down or click to continue
          </p>
        </div>
      </div>
    );
  }

  // Main Content (your existing carousel)
  const currentSectionData = sections[currentSection];
  const IconComponent = currentSectionData.icon;

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Back to title button */}
      <button
        onClick={() => setShowMainContent(false)}
        className="absolute top-4 left-4 z-30 bg-black/70 hover:bg-black text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 transition-all"
      >
        ← Back to Title
      </button>

      {/* Animated GIF background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ 
          backgroundImage: `url(${currentSectionData.bgGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-20">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500 ease-out"
          style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
        />
      </div>

      {/* Image layout controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <select 
          value={currentSectionData.imageLayout}
          onChange={(e) => updateImageLayout(e.target.value as ImageLayout)}
          className="bg-black/70 text-white px-3 py-1 rounded text-sm border border-gray-600"
        >
          <option value="carousel">Carousel</option>
          <option value="scattered">Scattered</option>
          <option value="grid">Grid</option>
          <option value="masonry">Masonry</option>
          <option value="floating">Floating</option>
          <option value="spiral">Spiral</option>
        </select>
        <button
          onClick={addImage}
          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded text-sm flex items-center gap-1"
        >
          <Plus size={16} /> Add Image
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${currentSectionData.theme} mb-8 shadow-2xl animate-pulse`}>
            <IconComponent size={32} className="text-white" />
          </div>

          {/* Title */}
          <div className="mb-4">
              <h1 
                className="text-5xl md:text-7xl font-black mb-4 cursor-pointer hover:text-purple-400 transition-colors flex items-center justify-center gap-4"
              >
                <span className={`bg-gradient-to-r ${currentSectionData.theme} bg-clip-text text-transparent`}>
                  {currentSectionData.title}
                </span>
              </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-8">
              <p 
                className="text-2xl text-gray-300 cursor-pointer hover:text-white transition-colors"
              >
                {currentSectionData.subtitle}
              </p>
          </div>

          {/* Images */}
          {renderImages()}

          {/* Content */}
          <div className="mb-12 max-w-2xl mx-auto">
              <p 
                className="text-lg leading-relaxed text-gray-100 cursor-pointer hover:text-white transition-colors bg-black/30 rounded-lg p-4 backdrop-blur-sm"
              >
                {currentSectionData.content}
              </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between max-w-md mx-auto">
            <button
              onClick={prevSection}
              disabled={currentSection === 0}
              className={`flex items-center space-x-2 px-3 py-3 rounded-full font-semibold transition-all ${
                currentSection === 0 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-gray-200 hover:scale-105 shadow-lg'
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex space-x-2">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                    index === currentSection 
                      ? `bg-gradient-to-r ${currentSectionData.theme} shadow-lg` 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSection}
              disabled={currentSection === sections.length - 1}
              className={`flex items-center space-x-2 px-3 py-3 rounded-full font-semibold transition-all ${
                currentSection === sections.length - 1
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-200 hover:scale-105 shadow-lg'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard navigation hint */}
      <div className="fixed bottom-6 right-6 text-sm text-gray-400 z-10 bg-black/50 rounded px-3 py-2">
        Use ← → keys to navigate
      </div>
    </div>
  );
};

export default TripProposalWalkthrough;