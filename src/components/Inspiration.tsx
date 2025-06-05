
import { useState, useEffect } from "react";
import { Quote, Star, Heart } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import AnimatedIcon from "./AnimatedIcon";

const Inspiration = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [sectionRef, isVisible] = useIntersectionObserver();

  const inspirationalQuotes = [
    {
      text: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
      icon: <Star className="w-6 h-6" />
    },
    {
      text: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
      icon: <Heart className="w-6 h-6" />
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      icon: <Quote className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % inspirationalQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [inspirationalQuotes.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated spiritual icons */}
        <div className="absolute top-32 right-32">
          <AnimatedIcon type="lotus" size="sm" delay={500} />
        </div>
        <div className="absolute bottom-32 left-32">
          <AnimatedIcon type="mandala" size="md" delay={1000} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 font-light">
            Daily Inspiration
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        {/* Quote Carousel with enhanced animations */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative h-64 flex items-center justify-center">
            {inspirationalQuotes.map((quote, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1000 ${
                  index === currentQuote 
                    ? 'opacity-100 transform translate-y-0 scale-100' 
                    : 'opacity-0 transform translate-y-8 scale-95'
                }`}
              >
                <div className="mb-6 text-amber-600 animate-glow">
                  {quote.icon}
                </div>
                <blockquote className="text-2xl md:text-3xl font-serif text-gray-700 mb-6 leading-relaxed italic">
                  "{quote.text}"
                </blockquote>
                <cite className="text-lg text-amber-700 font-medium">— {quote.author}</cite>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Image Gallery with staggered animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              title: "Inner Peace",
              subtitle: "Find tranquility within",
              delay: 0
            },
            {
              src: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              title: "Ancient Wisdom",
              subtitle: "Timeless teachings",
              delay: 200
            },
            {
              src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
              title: "Spiritual Growth",
              subtitle: "Evolve consciousness",
              delay: 400
            }
          ].map((image, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${image.delay}ms` }}
            >
              <img 
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-medium">{image.title}</h4>
                  <p className="text-sm opacity-90">{image.subtitle}</p>
                </div>
              </div>
              
              {/* Overlay animation */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <AnimatedIcon type="zen" size="sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
