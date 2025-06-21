import CareerQuiz from "@/components/quiz/career-quiz";
import { Brain, Target, Users } from "lucide-react";

export default function Quiz() {
  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-soft-pink" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Healthcare Career Quiz
          </h1>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Discover which healthcare career path aligns with your interests, personality, 
            and goals. This interactive quiz will help guide your journey into the medical field.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-soft-pink" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Personalized Results</h3>
            <p className="text-warm-gray">Get career matches based on your unique preferences and strengths.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-sage" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Evidence-Based</h3>
            <p className="text-warm-gray">Questions developed by healthcare education experts and career counselors.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
            <div className="w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-coral" />
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">Expert Insights</h3>
            <p className="text-warm-gray">Receive detailed information about education paths and career prospects.</p>
          </div>
        </div>

        {/* Quiz Component */}
        <CareerQuiz />

        {/* Additional Resources */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Want to Learn More?
            </h2>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              After taking the quiz, explore our blog posts, interviews with professionals, 
              and educational resources to dive deeper into your career interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blog"
                className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Read Career Stories
              </a>
              <a
                href="/interviews"
                className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 inline-block"
              >
                Watch Professional Interviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}