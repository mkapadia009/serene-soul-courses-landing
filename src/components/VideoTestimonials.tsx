
import { Play, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VideoTestimonials = () => {
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Course Introduction",
      description: "Discover the transformative journey that awaits you in the ASJI Course",
      type: "course-teaser",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: "dQw4w9WgXcQ", 
      title: "Student Experience",
      description: "Hear from Maria about her life-changing experience with our spiritual curriculum",
      type: "testimonial",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b3fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Community Connection", 
      description: "Experience the supportive community of fellow spiritual seekers",
      type: "community",
      thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const handleVideoClick = (videoId: string) => {
    // Open video in a new tab or modal
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-rose-200 to-rose-300 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 font-light">
            Experience the Journey
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Watch testimonials from our students and get a glimpse into the transformative ASJI Course experience
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card 
              key={index}
              className="group cursor-pointer hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden animate-scale-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => handleVideoClick(video.id)}
            >
              <div className="relative">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
                    <Play className="w-8 h-8 text-amber-600 ml-1" />
                  </div>
                </div>

                {/* Video Type Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-amber-700">
                    {video.icon}
                    <span className="capitalize">{video.type.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3 group-hover:text-amber-700 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
                
                {/* Watch Now Link */}
                <div className="mt-4 flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  <span>Watch Now</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
            <h3 className="text-2xl font-serif text-gray-800 mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of students who have discovered their true potential through the ASJI Course
            </p>
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow">
              Start Your Transformation Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
