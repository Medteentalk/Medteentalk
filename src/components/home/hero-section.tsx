import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Users, BookOpen, Video } from "lucide-react";

export default function HeroSection() {
  const [, setLocation] = useLocation();

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-charcoal leading-tight">
                Healthcare Education{" "}
                <span className="text-soft-pink">by Teens,</span>
                <span className="text-sage"> for Teens</span>
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed">
                Join our community of curious students and aspiring healthcare
                professionals. We're breaking down complex medical topics into
                relatable, digestible content that empowers the next generation
                of healthcare leaders.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={() => setLocation("/blog")}
              >
                Explore Our Blog
              </Button>
              <Button
                variant="outline"
                className="border-2 border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300"
                onClick={() => setLocation("/get-involved")}
              >
                Get Involved
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-soft-pink">50+</div>
                <div className="text-sm text-warm-gray">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-sage">25+</div>
                <div className="text-sm text-warm-gray">Contributors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-coral">15+</div>
                <div className="text-sm text-warm-gray">Interviews</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Diverse group of teens studying together"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Floating cards for visual interest */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-coral" />
                </div>
                <span className="text-sm font-medium">Mental Health</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-sage" />
                </div>
                <span className="text-sm font-medium">Medicine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
