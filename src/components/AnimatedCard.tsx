import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useIsMobile } from '@/hooks/use-mobile';

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

  // Otimização mobile: animação fade-in simples e delay reduzido
  const mobile = useIsMobile();
  const effectiveAnimation = mobile ? 'fade-in' : animationType;
  const effectiveDelay = mobile ? Math.min(delay, 100) : delay;

  const animationClasses = {
    'fade-in': 'animate-fade-in duration-300',
    'slide-up': 'animate-slide-up duration-500',
    'bounce-in': 'animate-bounce-in duration-500',
    'zoom-in': 'animate-zoom-in duration-500',
    'slide-in-left': 'animate-slide-in-left duration-500',
    'slide-in-right': 'animate-slide-in-right duration-500'
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[effectiveAnimation]} ${className} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${effectiveDelay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard; 