
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      designation: "Meditation Teacher",
      text: "The ASJI Course transformed my understanding of consciousness and provided practical tools for deep inner work. The wisdom shared here is both profound and applicable to daily life.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Rodriguez",
      designation: "Spiritual Counselor",
      text: "Two years of study that felt like a lifetime of growth. The course structure beautifully balances ancient wisdom with contemporary insights, making complex teachings accessible and transformative.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Priya Sharma",
      designation: "Wellness Practitioner",
      text: "The community aspect of this course created lifelong connections with fellow seekers. The support and shared insights enriched my journey immeasurably. Truly a path of authentic awakening.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      ></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16 font-light">
          Voices of Transformation
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-b from-white to-orange-50 border-0 shadow-md"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-amber-200 group-hover:border-amber-300 transition-colors duration-300"
                  />
                  <h4 className="text-xl font-medium text-gray-800 mb-1">{testimonial.name}</h4>
                  <p className="text-amber-600 font-medium">{testimonial.designation}</p>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
