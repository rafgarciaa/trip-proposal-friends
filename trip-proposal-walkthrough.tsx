import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Camera, Utensils, Plane, Plus, X, Edit, Mountain, Gift, Ghost, TreePine, Home, Lock, ArrowDown, Sparkles } from 'lucide-react';

const TripProposalWalkthrough = () => {
  const [showMainContent, setShowMainContent] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [editMode, setEditMode] = useState({});
  const [titleText, setTitleText] = useState("Trip Proposals with Expensive Friends 2025");
  
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Escape Room",
      subtitle: "Mind-Bending Team Challenges",
      content: "Time to test our collective brain power! Let's dive into themed escape rooms where we'll solve puzzles, crack codes, and hopefully not panic when the clock hits 10 minutes. Will we escape or will we be trapped forever in awkward silence?",
      icon: Lock,
      theme: "from-red-600 to-orange-600",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDd5cWE4dHRvZWNnbGJxNmVyOXF1c2VtN3BqYjRvY3N0bzJ2YnVveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abKhOpu0NwenH3O/giphy.gif",
      imageLayout: "scattered",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
      ]
    },
    {
      id: 2,
      title: "Fall Foliage Hike",
      subtitle: "Nature's Golden Hour",
      content: "Lace up those hiking boots! We're chasing the perfect autumn colors on trails that'll make our Instagram followers jealous. Think golden leaves, crisp air, and that perfect photo op where we all pretend we're not out of breath.",
      icon: Mountain,
      theme: "from-orange-500 to-yellow-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDNxaGQzYzRkZHM4cjJ4dGF6YWpnaG1xcjJzY3p6YXpqbXo1YWw5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlNQ03J5JxX6lva/giphy.gif",
      imageLayout: "carousel",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600"
      ]
    },
    {
      id: 3,
      title: "Fall Cabin Staycation",
      subtitle: "Cozy Vibes & Good Times",
      content: "Picture this: a rustic cabin, crackling fireplace, hot cocoa in oversized mugs, and zero cell service (okay, maybe some cell service). Board games, ghost stories, and that one person who insists on making s'mores indoors.",
      icon: Home,
      theme: "from-amber-600 to-orange-700",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFpZnlyYWQ4azNvbzNnN2dvdGN0ZmM4bWh1a3k3NWR5dTFsaG96NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif",
      imageLayout: "grid",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400"
      ]
    },
    {
      id: 4,
      title: "Friendsgiving",
      subtitle: "Gratitude & Gluttony",
      content: "Forget family drama - this is our chosen family feast! Everyone brings a dish (yes, store-bought counts), we'll argue about who makes the best stuffing, and create new traditions that definitely involve way too much food and even more laughter.",
      icon: Utensils,
      theme: "from-orange-400 to-red-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHF6anFxZG14dmY2M3JsbXpxOWlqNnVwcTJ4OXEzbnZ6Mmt4OW9qdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlHJGHe3yAMhdQY/giphy.gif",
      imageLayout: "masonry",
      images: [
        "https://images.unsplash.com/photo-1574972731812-734c4c71a0de?w=400",
        "https://images.unsplash.com/photo-1607946948726-47f0e4534095?w=300",
        "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=500"
      ]
    },
    {
      id: 5,
      title: "Halloween",
      subtitle: "Spooks & Spectacular Costumes",
      content: "Time to embrace our inner weirdos! Whether we're hitting up haunted houses, having a costume contest, or just eating way too much candy while watching horror movies, we're going all out. Group costume coordination is mandatory!",
      icon: Ghost,
      theme: "from-purple-600 to-orange-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzE0aWh2M3JkZTdkdHZ1c2c5YjRhc2xvZXYwMTBrNDJyYjE2M2NoaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f4bQAOKwmU8OWemSF1/giphy.gif",
      imageLayout: "floating",
      images: [
        "https://images.unsplash.com/photo-1509557965043-36e818017d81?w=400",
        "https://images.unsplash.com/photo-1571328007932-80b24fdeca5f?w=400",
        "https://images.unsplash.com/photo-1603912451204-caffa5616cc1?w=400"
      ]
    },
    {
      id: 6,
      title: "Christmas Gift Giving",
      subtitle: "Holiday Magic & Secret Santas",
      content: "The grand finale! Secret Santa reveals, white elephant gift exchanges, and that warm fuzzy feeling when someone actually loves your gift. We'll make it memorable with thoughtful presents, ugly sweaters, and enough hot chocolate to power a small village.",
      icon: Gift,
      theme: "from-red-500 to-green-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGtuMTJ1Zml6aDJpaG5nZzdpcmdoMDE5N2FsM2s1azg3cnloZWc0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6fJ5LANL0x31R1Ic/giphy.gif",
      imageLayout: "spiral",
      images: [
        "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400",
        "https://images.unsplash.com/photo-1607344645866-009c7d7a7705?w=400",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400"
      ]
    }
  ]);

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const toggleEdit = (field) => {
    setEditMode(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const updateSection = (field, value) => {
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

  const removeImage = (imageIndex) => {
    setSections(prev => prev.map((section, index) => 
      index === currentSection 
        ? { ...section, images: section.images.filter((_, i) => i !== imageIndex) }
        : section
    ));
  };

  const updateImageLayout = (layout) => {
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
        <button
          onClick={() => removeImage(index)}
          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <X size={12} />
        </button>
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
    const handleKeyPress = (e) => {
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
      } else if (e.key === 'Escape') {
        setEditMode({});
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSection, showMainContent]);

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
            {editMode.titleText ? (
              <input
                type="text"
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
                onBlur={() => toggleEdit('titleText')}
                className="text-6xl font-black bg-transparent border-b-2 border-purple-500 outline-none text-center max-w-4xl"
                autoFocus
              />
            ) : (
              <h1 
                className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight cursor-pointer group"
                onClick={() => toggleEdit('titleText')}
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
                    {word}
                  </span>
                ))}
                <Edit size={24} className="inline-block ml-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h1>
            )}
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-16 animate-pulse">
            Where every adventure costs more than your rent 💸
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
          onChange={(e) => updateImageLayout(e.target.value)}
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
            {editMode.title ? (
              <input
                type="text"
                value={currentSectionData.title}
                onChange={(e) => updateSection('title', e.target.value)}
                onBlur={() => toggleEdit('title')}
                className="text-5xl font-black bg-transparent border-b-2 border-purple-500 outline-none text-center"
                autoFocus
              />
            ) : (
              <h1 
                className="text-5xl md:text-7xl font-black mb-4 cursor-pointer hover:text-purple-400 transition-colors flex items-center justify-center gap-4"
                onClick={() => toggleEdit('title')}
              >
                <span className={`bg-gradient-to-r ${currentSectionData.theme} bg-clip-text text-transparent`}>
                  {currentSectionData.title}
                </span>
                <Edit size={20} className="text-gray-400 hover:text-white" />
              </h1>
            )}
          </div>

          {/* Subtitle */}
          <div className="mb-8">
            {editMode.subtitle ? (
              <input
                type="text"
                value={currentSectionData.subtitle}
                onChange={(e) => updateSection('subtitle', e.target.value)}
                onBlur={() => toggleEdit('subtitle')}
                className="text-2xl bg-transparent border-b border-gray-600 outline-none text-center text-gray-300"
                autoFocus
              />
            ) : (
              <p 
                className="text-2xl text-gray-300 cursor-pointer hover:text-white transition-colors"
                onClick={() => toggleEdit('subtitle')}
              >
                {currentSectionData.subtitle}
              </p>
            )}
          </div>

          {/* Images */}
          {renderImages()}

          {/* Content */}
          <div className="mb-12 max-w-2xl mx-auto">
            {editMode.content ? (
              <textarea
                value={currentSectionData.content}
                onChange={(e) => updateSection('content', e.target.value)}
                onBlur={() => toggleEdit('content')}
                className="w-full h-32 text-lg bg-black/50 border border-gray-600 rounded-lg p-4 outline-none resize-none text-gray-100"
                autoFocus
              />
            ) : (
              <p 
                className="text-lg leading-relaxed text-gray-100 cursor-pointer hover:text-white transition-colors bg-black/30 rounded-lg p-4 backdrop-blur-sm"
                onClick={() => toggleEdit('content')}
              >
                {currentSectionData.content}
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between max-w-md mx-auto">
            <button
              onClick={prevSection}
              disabled={currentSection === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                currentSection === 0 
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-gray-200 hover:scale-105 shadow-lg'
              }`}
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
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
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                currentSection === sections.length - 1
                  ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-gray-200 hover:scale-105 shadow-lg'
              }`}
            >
              <span>Next</span>
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Edit hint */}
          <p className="mt-8 text-sm text-gray-400">
            Click any text to edit • Change image layouts • Section {currentSection + 1} of {sections.length}
          </p>
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