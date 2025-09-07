import React, { useState, useEffect, useRef } from "react";
import { sections } from "./sections";

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

      if (
        currentIndex !== activeSection &&
        currentIndex >= 0 &&
        currentIndex < sections.length
      ) {
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

    container.addEventListener("scroll", throttledScroll);
    return () => container.removeEventListener("scroll", throttledScroll);
  }, [activeSection]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && activeSection < sections.length - 1) {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === "ArrowUp" && activeSection > 0) {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection]);

  const scrollToSection = (index: number) => {
    const container = containerRef.current;
    const targetSection = sectionRefs.current[index];

    if (container && targetSection) {
      container.scrollTo({
        top: index * window.innerHeight,
        behavior: "smooth",
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
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {sections.map((section, index) => {
          const IconComponent = section.icon;

          return (
            <div
              key={section.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className={`
              h-screen w-full flex items-center justify-center relative
              bg-gradient-to-br ${section.gradient} ${section.textColor}
            `}
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Animated background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 overflow-hidden"
                style={{
                  backgroundImage: `url(${section.bgImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Content */}
              <div
                className={`"relative z-10 text-center ${
                  section.id === "section-1" ? "max-w-7xl" : "max-w-4xl"
                } px-8"`}
              >
                {section.id === "section-1" ? (
                  <h1 className="text-4xl md:text-6xl lg:text-8xl font-black leading-tight cursor-pointer group">
                    {section.title.split(" ").map((word, index) => (
                      <span
                        key={index}
                        className="inline-block mr-4 mb-2 group-hover:scale-110 transition-all duration-300 animate-pulse"
                        style={{
                          background:
                            index % 3 === 0
                              ? "linear-gradient(45deg, #ff6b6b, #feca57)"
                              : index % 3 === 1
                              ? "linear-gradient(45deg, #48dbfb, #0abde3)"
                              : "linear-gradient(45deg, #ff9ff3, #f368e0)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          animationDelay: `${index * 0.2}s`,
                        }}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h1>
                ) : (
                  <>
                    {/* Icon */}
                    {IconComponent && (
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${section.titleGradient} mb-8 shadow-2xl animate-pulse`}
                      >
                        <IconComponent size={32} className="text-white" />
                      </div>
                    )}
                    <div className="mb-4">
                      <h1 className="text-5xl md:text-7xl font-black mb-4 cursor-pointer hover:text-purple-400 transition-colors flex items-center justify-center gap-4">
                        <span
                          className={`bg-gradient-to-r ${section.titleGradient} bg-clip-text text-transparent`}
                        >
                          {section.title}
                        </span>
                      </h1>
                    </div>
                  </>
                )}

                {/* Subtitle */}
                {section.subtitle && (
                  <div className="mb-8">
                    <p className="text-2xl text-grey-300 transition-colors">
                      {section.subtitle}
                    </p>
                  </div>
                )}

                {/* Images */}
                {section.images && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {section.images.map((img, index) => (
                      <div
                        key={index}
                        className="w-full h-40 object-cover rounded-lg shadow-lg"
                      >
                        <img
                          src={img}
                          alt={`Activity ${index + 1}`}
                          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Content */}
                {section.id === "section-1" && (
                  <div className="mx-auto h-164 w-64">
                    <img
                      src={section.content}
                      className="w-full h-full object-coverw-30 h-50"
                    />
                  </div>
                )}

                {section.content && section.id !== "section-1" && (
                  <div className="mt-48 mb-12 max-w-2xl mx-auto">
                    <p className="text-lg leading-relaxed text-gray-100 cursor-pointer hover:text-white transition-colors bg-black/30 rounded-lg p-4 backdrop-blur-sm">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>

              {/* Scroll indicator - only show on first section */}
              {index === 0 && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <span className="block text-sm opacity-70 mb-2">
                    Begin the Journey
                  </span>
                  <div
                    className="text-2xl animate-bounce cursor-pointer"
                    onClick={() => scrollToSection(1)}
                  >
                    ↓
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300 block
              ${
                activeSection === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/50 hover:bg-white/80 hover:scale-110"
              }
            `}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </nav>

      {/* Global styles for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
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
