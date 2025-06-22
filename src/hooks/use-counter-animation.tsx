import { useEffect, useRef, useState } from 'react';

interface UseCounterAnimationOptions {
  end: number;
  duration?: number;
  delay?: number;
  threshold?: number;
}

export const useCounterAnimation = (options: UseCounterAnimationOptions) => {
  const { end, duration = 2000, delay = 0, threshold = 0.1 } = options;
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Inicia a animação do contador
          setTimeout(() => {
            const startTime = performance.now();
            const startValue = 0;

            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Função de easing suave
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
              
              setCount(currentValue);

              if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate);
              }
            };

            animationRef.current = requestAnimationFrame(animate);
          }, delay);

          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, delay, threshold, isVisible]);

  return { elementRef, count, isVisible };
}; 