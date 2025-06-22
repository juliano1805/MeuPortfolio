import { useEffect, useRef } from 'react';

const MorphingBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const path = svg.querySelector('path');
    if (!path) return;

    let animationId: number;
    let lastTime = 0;
    const targetFPS = 30; // Reduzir FPS para melhor performance
    const frameInterval = 1000 / targetFPS;

    // Criar animação de morphing
    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      
      lastTime = currentTime;
      const time = currentTime * 0.0005; // Reduzir velocidade
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Gerar pontos para criar formas orgânicas (menos pontos)
      const points = [];
      const segments = 12; // Reduzir número de segmentos
      
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        const radius = 150 + Math.sin(time + i * 0.3) * 30; // Reduzir amplitude
        const x = width / 2 + Math.cos(angle) * radius;
        const y = height / 2 + Math.sin(angle) * radius;
        points.push(`${x},${y}`);
      }
      
      const pathData = `M ${points.join(' L ')} Z`;
      path.setAttribute('d', pathData);
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-5"
      style={{ background: 'transparent' }}
    >
      <defs>
        <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D8FF" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#00FF88" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        fill="url(#morphGradient)"
        stroke="none"
      />
    </svg>
  );
};

export default MorphingBackground; 