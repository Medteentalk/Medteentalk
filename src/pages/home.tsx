import HeroSection from "@/components/home/hero-section";
import RecentPosts from "@/components/home/recent-posts";
import FeaturesSection from "@/components/home/features-section";
import NewsletterSignup from "@/components/home/newsletter-signup";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <RecentPosts />
      <FeaturesSection />
      <NewsletterSignup />
      
      {/* Floating CTA */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          className="bg-coral hover:bg-coral/80 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110"
          onClick={() => setLocation("/get-involved")}
          title="Get Involved"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
