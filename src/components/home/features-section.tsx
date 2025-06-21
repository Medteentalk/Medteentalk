import { Users, BookOpen, Heart, Rocket } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Peer-to-Peer Learning",
    description: "Learn from students who understand your journey and speak your language.",
    color: "soft-pink",
  },
  {
    icon: BookOpen,
    title: "Accessible Content",
    description: "Complex topics broken down into digestible, engaging content.",
    color: "sage",
  },
  {
    icon: Heart,
    title: "Mental Wellness Focus",
    description: "Prioritizing mental health alongside academic and career development.",
    color: "coral",
  },
  {
    icon: Rocket,
    title: "Career Guidance",
    description: "Real insights from professionals and pathways to healthcare careers.",
    color: "warm-gray",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-soft-pink/10 via-creme to-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
            Why Med Teen Talk?
          </h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            We believe healthcare education should be accessible, relatable, and
            empowering. Our platform bridges the gap between complex medical
            concepts and curious young minds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center mx-auto`}>
                  <Icon className={`text-2xl text-${feature.color} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="text-warm-gray">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
