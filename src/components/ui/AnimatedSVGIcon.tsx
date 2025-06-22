import React, { useEffect, useRef } from 'react';

interface AnimatedSVGIconProps {
  IconComponent: React.ElementType;
  isVisible: boolean;
  className?: string;
  size?: number;
  animationDelay?: number; // in ms
}

const AnimatedSVGIcon = ({ IconComponent, isVisible, className, size = 24, animationDelay = 0 }: AnimatedSVGIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && containerRef.current) {
      const svg = containerRef.current.querySelector('svg');
      if (svg) {
        const elements = svg.querySelectorAll<SVGGeometryElement>('path, line, polyline, circle, rect');
        
        elements.forEach((element, index) => {
          const totalLength = element.getTotalLength ? element.getTotalLength() : 200; // Fallback
          element.style.strokeDasharray = totalLength.toString();
          element.style.strokeDashoffset = totalLength.toString();
          
          const delay = (animationDelay || 0) / 1000;
          element.style.animation = `draw-svg 1.5s ease-out forwards ${delay + index * 0.1}s`;
        });
      }
    }
  }, [isVisible, animationDelay]);

  return (
    <div ref={containerRef}>
      <IconComponent className={className} size={size} />
    </div>
  );
};

export default AnimatedSVGIcon; 