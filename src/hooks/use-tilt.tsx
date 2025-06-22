import { useEffect, useRef, useState } from 'react';

interface UseTiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
}

export const useTilt = (options: UseTiltOptions = {}) => {
  const {
    max = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 500
  } = options;

  const [tiltStyle, setTiltStyle] = useState({});
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = x / rect.width;
      const yPercent = y / rect.height;
      
      const xRotate = (yPercent - 0.5) * 2 * max;
      const yRotate = (xPercent - 0.5) * 2 * max;

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${xRotate}deg) rotateY(${yRotate}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${speed}ms ease-out`
      });
    };

    const handleMouseLeave = () => {
      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: `transform ${speed}ms ease-out`
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [max, perspective, scale, speed]);

  return { elementRef, tiltStyle };
}; 