
import { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene with floating particles
    const scene = {
      particles: [] as Array<{
        x: number;
        y: number;
        opacity: number;
        speed: number;
        element: HTMLDivElement;
      }>
    };

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full pointer-events-none';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.background = `linear-gradient(45deg, 
        rgba(251, 191, 36, ${Math.random() * 0.3 + 0.1}), 
        rgba(252, 165, 165, ${Math.random() * 0.3 + 0.1})
      )`;
      
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight + 50;
      const opacity = Math.random() * 0.5 + 0.2;
      const speed = Math.random() * 2 + 1;

      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.opacity = opacity.toString();

      mountRef.current?.appendChild(particle);

      return {
        x,
        y,
        opacity,
        speed,
        element: particle
      };
    };

    const animate = () => {
      // Remove particles that are off screen
      scene.particles = scene.particles.filter(particle => {
        particle.y -= particle.speed;
        particle.element.style.top = particle.y + 'px';
        
        if (particle.y < -50) {
          particle.element.remove();
          return false;
        }
        return true;
      });

      // Add new particles occasionally
      if (Math.random() < 0.02 && scene.particles.length < 15) {
        scene.particles.push(createParticle());
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      scene.particles.forEach(particle => {
        particle.element.remove();
      });
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
};

export default ThreeBackground;
