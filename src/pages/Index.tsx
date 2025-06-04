
import Hero from "@/components/Hero";
import CourseDescription from "@/components/CourseDescription";
import CourseDetails from "@/components/CourseDetails";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseDescription />
      <CourseDetails />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
