
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedIconProps {
  type: 'lotus' | 'mandala' | 'om' | 'zen';
  size?: 'sm' | 'md' | 'lg';
  delay?: number;
}

const AnimatedIcon = ({ type, size = 'md', delay = 0 }: AnimatedIconProps) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const getIcon = () => {
    switch (type) {
      case 'lotus':
        return (
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-pink-400 rounded-full animate-pulse" />
            <div className="relative bg-gradient-to-br from-rose-200 to-rose-300 rounded-full w-full h-full flex items-center justify-center animate-spin-slow">
              <div className="w-3/4 h-3/4 bg-gradient-to-br from-white to-rose-100 rounded-full animate-pulse" />
            </div>
          </div>
        );
      case 'mandala':
        return (
          <div className="relative">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border-2 border-amber-300 rounded-full animate-spin-slow"
                style={{
                  transform: `rotate(${i * 45}deg) scale(${1 - i * 0.1})`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        );
      case 'om':
        return (
          <div className="relative bg-gradient-to-br from-amber-200 to-amber-400 rounded-full w-full h-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xl font-bold animate-bounce">ॐ</span>
          </div>
        );
      case 'zen':
        return (
          <div className="relative">
            <div className="w-full h-full border-4 border-gray-300 rounded-full animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gray-400 rounded-full animate-pulse" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={ref}
      className={`${sizeClasses[size]} transition-all duration-1000 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {getIcon()}
    </div>
  );
};

export default AnimatedIcon;
