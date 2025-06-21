import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, HelpCircle, Mail } from "lucide-react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        id: 1,
        question: "What is Med Teen Talk Magazine?",
        answer: "Med Teen Talk Magazine is a teen-led platform dedicated to making healthcare education accessible and engaging for young people. We provide articles, interviews, resources, and career guidance written by teens, for teens, covering medicine, mental health, and healthcare career paths."
      },
      {
        id: 2,
        question: "Who can contribute to Med Teen Talk?",
        answer: "We welcome contributions from teens, young adults, healthcare students, and professionals who are passionate about healthcare education. Whether you're interested in writing, editing, research, social media, or other roles, there's a place for you on our team."
      },
      {
        id: 3,
        question: "Is Med Teen Talk free to access?",
        answer: "Yes! All our content, resources, and tools are completely free to access. Our mission is to make healthcare education accessible to everyone, regardless of financial circumstances."
      }
    ]
  },
  {
    category: "Content & Articles",
    questions: [
      {
        id: 4,
        question: "How do I submit an article idea?",
        answer: "You can submit article ideas by filling out our volunteer application form or emailing us directly at medteentalksmagazine@gmail.com. Include your topic idea, a brief outline, and why you're passionate about writing on this subject."
      },
      {
        id: 5,
        question: "What topics do you cover?",
        answer: "We cover a wide range of healthcare topics including anatomy, medical specialties, mental health, career guidance, study tips, healthcare technology, public health, and personal stories from healthcare students and professionals."
      },
      {
        id: 6,
        question: "How do you ensure content accuracy?",
        answer: "All our content goes through a thorough review process by our editorial team, which includes healthcare students and professionals. We fact-check information and cite reliable medical sources to ensure accuracy and safety."
      }
    ]
  },
  {
    category: "Volunteering",
    questions: [
      {
        id: 7,
        question: "What volunteer opportunities are available?",
        answer: "We offer various roles including content writing, editing, research, social media management, graphic design, community outreach, and peer mentoring. Check our Get Involved page for current openings and detailed descriptions."
      },
      {
        id: 8,
        question: "How much time commitment is required?",
        answer: "Time commitment varies by role and your availability. Most volunteers contribute 2-5 hours per week, but we're flexible and understand that students have varying schedules. Quality contributions matter more than quantity."
      },
      {
        id: 9,
        question: "Do I need medical experience to volunteer?",
        answer: "Not necessarily! While healthcare knowledge is helpful, we value diverse perspectives and skills. Many of our volunteers are students just beginning their healthcare journey. We provide training and mentorship for all roles."
      }
    ]
  },
  {
    category: "Career Guidance",
    questions: [
      {
        id: 10,
        question: "How accurate is the career quiz?",
        answer: "Our career quiz is designed by healthcare education experts and provides a helpful starting point for career exploration. While it's not a definitive answer, it can guide you toward careers that match your interests and preferences."
      },
      {
        id: 11,
        question: "Can you help with college applications?",
        answer: "While we don't provide direct application assistance, our resources include guidance on healthcare career paths, educational requirements, and tips for success in healthcare programs. We also feature interviews with current students and professionals."
      },
      {
        id: 12,
        question: "Do you offer mentorship programs?",
        answer: "Yes! We connect interested students with volunteer mentors who are healthcare students or young professionals. Mentorship includes career guidance, study tips, and support throughout your healthcare journey."
      }
    ]
  }
];

export default function FAQ() {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (questionId: number) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-soft-pink" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Find answers to common questions about Med Teen Talk Magazine, our content, 
            volunteer opportunities, and how we can help with your healthcare journey.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold text-charcoal mb-6 border-b-2 border-soft-pink/20 pb-2">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <Card key={item.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-charcoal pr-4">
                          {item.question}
                        </span>
                        {openQuestions.includes(item.id) ? (
                          <ChevronUp className="w-5 h-5 text-soft-pink flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-soft-pink flex-shrink-0" />
                        )}
                      </button>
                      {openQuestions.includes(item.id) && (
                        <div className="px-6 pb-6">
                          <p className="text-warm-gray leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12">
            <div className="w-16 h-16 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-soft-pink" />
            </div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help! 
              Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl">
                <a href="mailto:medteentalksmagazine@gmail.com">
                  Email Us
                </a>
              </Button>
              <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-xl">
                <a href="/get-involved">
                  Join Our Team
                </a>
              </Button>
            </div>
            <p className="text-sm text-warm-gray mt-4">
              Email: medteentalksmagazine@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}