import React, { useState, useEffect, useRef } from 'react';

interface Section {
  id: string;
  title: string;
  content: string;
  gradient: string;
  textColor: string;
}

const sections: Section[] = [
  {
    id: 'section-1',
    title: 'Welcome to Our World',
    content: 'Experience smooth full-page scrolling with modern web technologies. Each section tells a unique story through immersive design and seamless transitions.',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    textColor: 'text-white'
  },
  {
    id: 'section-2',
    title: 'Innovation Meets Design',
    content: 'Crafting digital experiences that captivate and inspire. Our approach combines cutting-edge technology with thoughtful user experience design.',
    gradient: 'from-pink-400 via-red-500 to-yellow-500',
    textColor: 'text-white'
  },
  {
    id: 'section-3',
    title: 'Seamless Interactions',
    content: 'Every scroll, every transition, every moment is carefully orchestrated to create a fluid journey through your content.',
    gradient: 'from-blue-400 via-cyan-500 to-teal-500',
    textColor: 'text-white'
  },
  {
    id: 'section-4',
    title: 'Modern Web Standards',
    content: 'Built with CSS scroll-snap for native browser performance and smooth scrolling that works across all modern devices and browsers.',
    gradient: 'from-green-400 via-emerald-500 to-cyan-500',
    textColor: 'text-gray-900'
  },
  {
    id: 'section-5',
    title: 'Ready to Start?',
    content: 'Transform your web presence with full-page scrolling experiences that engage users and tell your story in a compelling way.',
    gradient: 'from-purple-400 via-pink-500 to-red-500',
    textColor: 'text-white'
  }
];

const FullPageScroll: React.FC = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Handle scroll to update active section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const sectionHeight = window.innerHeight;
      const currentIndex = Math.round(scrollTop / sectionHeight);
      
      if (currentIndex !== activeSection && currentIndex >= 0 && currentIndex < sections.length) {
        setActiveSection(currentIndex);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', throttledScroll);
    return () => container.removeEventListener('scroll', throttledScroll);
  }, [activeSection]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' && activeSection < sections.length - 1) {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === 'ArrowUp' && activeSection > 0) {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    const targetSection = sectionRefs.current[index];
    
    if (container && targetSection) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  // Touch/swipe handling
  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = useRef<number>(0);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.changedTouches[0].clientY;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = handleTouchStart.current - handleTouchEnd.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0 && activeSection < sections.length - 1) {
        // Swipe up - go to next section
        scrollToSection(activeSection + 1);
      } else if (diff < 0 && activeSection > 0) {
        // Swipe down - go to previous section
        scrollToSection(activeSection - 1);
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main container with scroll snap */}
      <div 
        ref={containerRef}
        className="h-full overflow-y-scroll scroll-smooth"
        style={{ 
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth'
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className={`
              h-screen w-full flex items-center justify-center relative
              bg-gradient-to-br ${section.gradient} ${section.textColor}
            `}
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 20% 80%, currentColor 2px, transparent 2px),
                    radial-gradient(circle at 80% 20%, currentColor 2px, transparent 2px),
                    radial-gradient(circle at 40% 40%, currentColor 1px, transparent 1px)
                  `,
                  backgroundSize: '200px 200px, 300px 300px, 150px 150px',
                  animation: 'float 20s ease-in-out infinite'
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl px-8">
              <h1 
                className={`
                  text-4xl md:text-6xl font-light mb-6 
                  transform transition-all duration-1000 ease-out
                  ${activeSection === index ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                `}
                style={{ transitionDelay: activeSection === index ? '0.2s' : '0s' }}
              >
                {section.title}
              </h1>
              <p 
                className={`
                  text-lg md:text-xl leading-relaxed
                  transform transition-all duration-1000 ease-out
                  ${activeSection === index ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                `}
                style={{ transitionDelay: activeSection === index ? '0.5s' : '0s' }}
              >
                {section.content}
              </p>
            </div>

            {/* Scroll indicator - only show on first section */}
            {index === 0 && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <span className="block text-sm opacity-70 mb-2">Scroll to explore</span>
                <div 
                  className="text-2xl animate-bounce cursor-pointer"
                  onClick={() => scrollToSection(1)}
                >
                  ↓
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 block
              ${activeSection === index 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/80 hover:scale-110'
              }
            `}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </nav>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px); 
          }
          50% { 
            transform: translateY(-20px); 
          }
        }

        /* Hide scrollbar but keep functionality */
        div[style*="scroll-snap-type"] {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        div[style*="scroll-snap-type"]::-webkit-scrollbar {
          display: none;
        }

        /* Ensure smooth scrolling on all browsers */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default FullPageScroll;