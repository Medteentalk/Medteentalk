import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Brain, Heart, Users, Microscope, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "What type of environment do you thrive in?",
    options: [
      { id: "a", text: "Fast-paced, high-pressure situations", careers: ["emergency-medicine", "surgery"] },
      { id: "b", text: "Quiet, research-focused settings", careers: ["pathology", "research"] },
      { id: "c", text: "Community-based, people-centered", careers: ["family-medicine", "public-health"] },
      { id: "d", text: "Technology-driven, innovative spaces", careers: ["radiology", "biomedical-engineering"] }
    ]
  },
  {
    id: 2,
    question: "Which patient interaction appeals to you most?",
    options: [
      { id: "a", text: "Building long-term relationships", careers: ["family-medicine", "psychiatry"] },
      { id: "b", text: "Helping in critical moments", careers: ["emergency-medicine", "surgery"] },
      { id: "c", text: "Working with specific populations", careers: ["pediatrics", "geriatrics"] },
      { id: "d", text: "Limited direct patient contact", careers: ["pathology", "radiology"] }
    ]
  },
  {
    id: 3,
    question: "What motivates you most in healthcare?",
    options: [
      { id: "a", text: "Preventing disease and promoting wellness", careers: ["public-health", "family-medicine"] },
      { id: "b", text: "Solving complex medical puzzles", careers: ["internal-medicine", "neurology"] },
      { id: "c", text: "Making immediate life-saving interventions", careers: ["emergency-medicine", "surgery"] },
      { id: "d", text: "Advancing medical knowledge through research", careers: ["research", "pathology"] }
    ]
  },
  {
    id: 4,
    question: "How do you prefer to work?",
    options: [
      { id: "a", text: "As part of a large team", careers: ["surgery", "emergency-medicine"] },
      { id: "b", text: "Independently with minimal supervision", careers: ["pathology", "radiology"] },
      { id: "c", text: "One-on-one with patients", careers: ["psychiatry", "family-medicine"] },
      { id: "d", text: "Leading and coordinating care", careers: ["internal-medicine", "surgery"] }
    ]
  },
  {
    id: 5,
    question: "What type of schedule appeals to you?",
    options: [
      { id: "a", text: "Regular office hours with predictability", careers: ["family-medicine", "psychiatry"] },
      { id: "b", text: "Varied shifts including nights/weekends", careers: ["emergency-medicine", "surgery"] },
      { id: "c", text: "Flexible, research-focused schedule", careers: ["research", "public-health"] },
      { id: "d", text: "Mix of clinical and administrative time", careers: ["internal-medicine", "public-health"] }
    ]
  }
];

const careerDescriptions = {
  "emergency-medicine": {
    title: "Emergency Medicine",
    description: "Fast-paced care for acute medical conditions and trauma cases.",
    icon: Heart,
    color: "coral"
  },
  "surgery": {
    title: "Surgery",
    description: "Performing operations to treat diseases, injuries, and deformities.",
    icon: Users,
    color: "soft-pink"
  },
  "family-medicine": {
    title: "Family Medicine",
    description: "Comprehensive care for patients of all ages in community settings.",
    icon: Heart,
    color: "sage"
  },
  "psychiatry": {
    title: "Psychiatry",
    description: "Diagnosing and treating mental health disorders.",
    icon: Brain,
    color: "soft-pink"
  },
  "pathology": {
    title: "Pathology",
    description: "Studying diseases through laboratory analysis of tissue and fluids.",
    icon: Microscope,
    color: "coral"
  },
  "radiology": {
    title: "Radiology",
    description: "Using medical imaging to diagnose and treat diseases.",
    icon: Brain,
    color: "sage"
  },
  "internal-medicine": {
    title: "Internal Medicine",
    description: "Comprehensive care for adult patients with complex conditions.",
    icon: Heart,
    color: "soft-pink"
  },
  "pediatrics": {
    title: "Pediatrics",
    description: "Medical care for infants, children, and adolescents.",
    icon: Heart,
    color: "coral"
  },
  "public-health": {
    title: "Public Health",
    description: "Preventing disease and promoting health in communities.",
    icon: Users,
    color: "sage"
  },
  "research": {
    title: "Medical Research",
    description: "Advancing medical knowledge through scientific investigation.",
    icon: Microscope,
    color: "soft-pink"
  },
  "neurology": {
    title: "Neurology",
    description: "Diagnosing and treating disorders of the nervous system.",
    icon: Brain,
    color: "coral"
  },
  "geriatrics": {
    title: "Geriatrics",
    description: "Specialized care for older adults and age-related conditions.",
    icon: Heart,
    color: "sage"
  },
  "biomedical-engineering": {
    title: "Biomedical Engineering",
    description: "Developing technology and devices to improve healthcare.",
    icon: Brain,
    color: "soft-pink"
  }
};

export default function CareerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<string[] | null>(null);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (data: { email?: string; results: string; careerMatches: string[] }) => {
      return await apiRequest("POST", "/api/quiz-results", data);
    },
    onSuccess: () => {
      toast({
        title: "Quiz Complete!",
        description: "Your results have been saved. Check your email for detailed career information.",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong saving your results.",
        variant: "destructive",
      });
    },
  });

  const handleAnswer = (questionId: number, answerId: string) => {
    setAnswers({ ...answers, [questionId]: answerId });
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const careerScores: Record<string, number> = {};
    
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = quizQuestions.find(q => q.id === parseInt(questionId));
      const option = question?.options.find(o => o.id === answerId);
      
      option?.careers.forEach(career => {
        careerScores[career] = (careerScores[career] || 0) + 1;
      });
    });

    const sortedCareers = Object.entries(careerScores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([career]) => career);

    setResults(sortedCareers);
  };

  const saveResults = () => {
    if (results) {
      mutation.mutate({
        email: email || undefined,
        results: JSON.stringify(answers),
        careerMatches: results
      });
    }
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (results) {
    return (
      <Card className="max-w-3xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-soft-pink" />
          </div>
          <CardTitle className="text-3xl font-bold text-charcoal">
            Your Healthcare Career Matches!
          </CardTitle>
          <p className="text-warm-gray">
            Based on your answers, here are the top career paths that align with your interests and preferences.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6">
            {results.map((career, index) => {
              const info = careerDescriptions[career as keyof typeof careerDescriptions];
              const Icon = info.icon;
              return (
                <div key={career} className="flex items-center p-6 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className="relative">
                      <div className={`w-12 h-12 bg-${info.color}/20 rounded-full flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${info.color}`} />
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-soft-pink text-white text-xs">
                        #{index + 1}
                      </Badge>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-charcoal">{info.title}</h3>
                      <p className="text-warm-gray">{info.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-charcoal mb-4">Want detailed career info sent to your email?</h4>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 border border-soft-pink/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-soft-pink/50"
              />
              <Button
                onClick={saveResults}
                disabled={mutation.isPending}
                className="bg-soft-pink hover:bg-soft-pink/80 text-white px-6 rounded-xl"
              >
                {mutation.isPending ? "Saving..." : "Get Details"}
              </Button>
            </div>
            <p className="text-sm text-warm-gray mt-2">
              We'll send you detailed information about each career path, including education requirements and day-in-the-life insights.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = quizQuestions[currentQuestion];
  const currentAnswer = answers[question.id];

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline" className="bg-soft-pink/10 text-soft-pink border-soft-pink/20">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </Badge>
          <span className="text-sm text-warm-gray">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="mb-6" />
        <CardTitle className="text-2xl font-bold text-charcoal">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswer(question.id, option.id)}
              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                currentAnswer === option.id
                  ? "border-soft-pink bg-soft-pink/10 text-charcoal"
                  : "border-gray-200 hover:border-soft-pink/50 hover:bg-soft-pink/5"
              }`}
            >
              {option.text}
            </button>
          ))}
        </div>

        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="border-sage text-sage hover:bg-sage hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            onClick={nextQuestion}
            disabled={!currentAnswer}
            className="bg-soft-pink hover:bg-soft-pink/80 text-white"
          >
            {currentQuestion === quizQuestions.length - 1 ? "Get Results" : "Next"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}