import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'bounce-in' | 'zoom-in' | 'slide-in-left' | 'slide-in-right';
  delay?: number;
}

const AnimatedCard = ({ 
  children, 
  className = '', 
  animationType = 'fade-in',
  delay = 0 
}: AnimatedCardProps) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-slide-up',
    'bounce-in': 'animate-bounce-in',
    'zoom-in': 'animate-zoom-in',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right'
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animationType]} ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard; 