
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the ASJI Course and who is it for?",
      answer: "The ASJI Course is a comprehensive spiritual development program designed for sincere seekers who wish to deepen their understanding of consciousness and reality. It's suitable for both beginners and those with some spiritual background who are committed to authentic inner transformation."
    },
    {
      question: "What topics and practices are covered in the curriculum?",
      answer: "The curriculum covers fundamental aspects of spiritual wisdom including meditation techniques, consciousness studies, ethical living, self-inquiry methods, and practical applications of spiritual principles. Each module integrates theory with experiential practices for holistic development."
    },
    {
      question: "How much time should I dedicate to the course daily?",
      answer: "We recommend dedicating 1-2 hours daily for study, contemplation, and practice. The course is designed to be flexible, allowing you to progress at a sustainable pace while maintaining your regular responsibilities and commitments."
    },
    {
      question: "Is there community support and interaction with other students?",
      answer: "Yes, the course includes access to a dedicated online community where students can share insights, ask questions, and support each other's journey. Regular group discussions and virtual gatherings foster a sense of spiritual fellowship."
    },
    {
      question: "What happens after completing the two-year program?",
      answer: "Graduates become part of our alumni network and may choose to pursue advanced studies, become course facilitators, or simply continue their personal practice with the deep foundation they've built. The journey of spiritual growth continues throughout life."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-gray-800 mb-16 font-light">
          Commonly Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white rounded-xl shadow-md border-0 overflow-hidden"
            >
              <AccordionTrigger className="px-8 py-6 text-left text-lg font-medium text-gray-800 hover:text-amber-700 transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
