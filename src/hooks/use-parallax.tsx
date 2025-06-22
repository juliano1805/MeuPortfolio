import { useEffect, useRef } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

export const useParallax = (options: UseParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', threshold = 0 } = options;
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let ticking = false;

    const updateParallax = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Calcula a posição relativa do elemento na viewport
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      // Aplica o efeito parallax baseado na direção
      switch (direction) {
        case 'up':
          element.style.transform = `translateY(${rate}px)`;
          break;
        case 'down':
          element.style.transform = `translateY(${-rate}px)`;
          break;
        case 'left':
          element.style.transform = `translateX(${rate}px)`;
          break;
        case 'right':
          element.style.transform = `translateX(${-rate}px)`;
          break;
      }

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    const handleScroll = () => {
      requestTick();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, direction]);

  return { elementRef };
}; 