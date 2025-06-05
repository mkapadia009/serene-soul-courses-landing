
import { Button } from "@/components/ui/button";
import ThreeBackground from "./ThreeBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Three.js Background */}
      <ThreeBackground />

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-16 h-16 bg-amber-400/20 rounded-full animate-float blur-sm"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-rose-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-20 h-20 bg-orange-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-amber-400/20 rounded-full animate-float blur-sm" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional geometric shapes */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-white/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-amber-300/30 rounded-full animate-ping"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 font-light leading-tight animate-slide-in-left">
          <span className="bg-gradient-to-r from-white via-amber-100 to-white bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_100%]">
            ASJI Course
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light italic leading-relaxed animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
          "Awaken the Self, Realize the Truth"
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Journey into the depths of spiritual wisdom and self-discovery through ancient teachings and modern insights
        </p>
        <div className="animate-scale-up" style={{ animationDelay: '0.9s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow"
          >
            Start Learning
          </Button>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-3 bg-gradient-to-b from-white/50 to-amber-400/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
