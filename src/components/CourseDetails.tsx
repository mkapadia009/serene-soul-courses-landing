
import { Calendar, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CourseDetails = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16 font-light">
          Course Overview
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-amber-50 to-orange-100 border-0 shadow-md">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Course Duration</h3>
              <p className="text-3xl font-light text-amber-700 mb-2">2 Years</p>
              <p className="text-gray-600 leading-relaxed">
                A comprehensive journey allowing deep integration of spiritual teachings and practices
              </p>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-rose-50 to-pink-100 border-0 shadow-md">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Laptop className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Course Mode</h3>
              <p className="text-3xl font-light text-rose-700 mb-2">Online</p>
              <p className="text-gray-600 leading-relaxed">
                Accessible from anywhere, allowing you to learn at your own pace while maintaining daily life
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
