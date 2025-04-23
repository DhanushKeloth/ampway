import React, { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const containerHeight = containerRef.current?.clientHeight || 1000;
      const scrollPercentage = Math.min(1, scrollY / (containerHeight - window.innerHeight));
      setScrollPosition(scrollPercentage);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Points along the path
  const points = [
    { top: "20%" },
    { top: "30%" },
    { top: "45%" },
    { top: "60%" },
    { top: "75%" }
  ];
  
  // Calculate truck position along the path
  const truckPosition = {
    top: `${20 + scrollPosition * 60}%`,
    left: `calc(25% - 16px)`, // Center truck image on the line (adjust based on your image size)
    transform: `rotate(0deg)` // Keep truck straight
  };
  
  // Calculate which card should be visible based on scroll position
  const getCardVisibility = (index) => {
    const totalCards = 5;
    const cardThreshold = (index + 1) / (totalCards + 1);
    const prevThreshold = index / (totalCards + 1);
    
    if (scrollPosition > prevThreshold && scrollPosition < cardThreshold + 0.1) {
      return index % 2 === 0 
        ? 'opacity-100 translate-x-0' // Cards on the right
        : 'opacity-100 -translate-x-0'; // Cards on the left
    }
    return index % 2 === 0 
      ? 'opacity-0 translate-x-8' // Cards on the right start off-screen
      : 'opacity-0 -translate-x-8'; // Cards on the left start off-screen
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gray-100 overflow-hidden pt-20 pb-40">
      {/* Path/Road */}
      <div className="absolute w-1 h-4/5 bg-gray-400 left-1/4 top-20"></div>
      
      {/* Points and Cards */}
      {points.map((point, index) => (
        <div key={index}>
          {/* Point */}
          <div 
            className="absolute w-4 h-4 rounded-full bg-gray-600 left-1/4 -ml-1.5 z-20"
            style={{ top: point.top }}
          ></div>
          
          {/* Card */}
          <div 
            className={`absolute w-64 bg-white rounded-lg shadow-lg p-6 transition-all duration-700 z-10 ${getCardVisibility(index)}`}
            style={{ 
              top: `calc(${point.top} - 2rem)`, 
              ...(index % 2 === 0 
                ? { left: 'calc(25% + 2rem)' } // Right side cards
                : { right: 'calc(75% - 2rem)' }) // Left side cards
            }}
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">Step {index + 1}</h3>
            <p className="text-gray-600">
              {index === 0 && "Start your journey with this first important step for success."}
              {index === 1 && "Continue building momentum with our proven process."}
              {index === 2 && "Implement key strategies to overcome challenges."}
              {index === 3 && "Refine your approach and optimize for best results."}
              {index === 4 && "Complete your objectives and achieve your goals."}
            </p>
          </div>
        </div>
      ))}
      
      {/* Truck Image */}
      <div 
        className="absolute transition-all duration-300 ease-linear z-30"
        style={truckPosition}
      >
        {/* Replace the src with your actual truck image path */}
        <img 
          src="/src/assets/658bed6551d5da0bce145547_decoration-03.svg" 
          alt="Truck" 
          className="w-15 h-15"

          // You may need to adjust positioning based on your image
          style={{
            transform: 'translateY(100%)',
            rotate: '90deg'
          }}
        />
      </div>
      
      {/* Spacer to ensure scrolling works */}
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Services;