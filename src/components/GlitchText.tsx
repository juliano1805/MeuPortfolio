import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
}

const GlitchText = ({ 
  text, 
  className = "", 
  glitchInterval = 3000, 
  glitchDuration = 200 
}: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), glitchDuration);
    };

    const interval = setInterval(triggerGlitch, glitchInterval);
    return () => clearInterval(interval);
  }, [glitchInterval, glitchDuration]);

  return (
    <span 
      className={`glitch ${isGlitching ? 'glitching' : ''} ${className}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText; 