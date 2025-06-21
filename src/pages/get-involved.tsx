import VolunteerForm from "@/components/forms/volunteer-form";
import { Card, CardContent } from "@/components/ui/card";
import { Users, PenTool, Megaphone, Heart } from "lucide-react";

const opportunities = [
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Write articles, create educational content, and share your healthcare journey with our community.",
    color: "soft-pink",
  },
  {
    icon: Users,
    title: "Peer Mentoring",
    description: "Guide and support other students navigating their healthcare education path.",
    color: "sage",
  },
  {
    icon: Megaphone,
    title: "Outreach & Marketing",
    description: "Help spread the word about Med Teen Talk through social media and community engagement.",
    color: "coral",
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Contribute to our mental wellness initiatives and help create a supportive community environment.",
    color: "warm-gray",
  },
];

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Get Involved
          </h1>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Join our mission to make healthcare education accessible and empowering
            for teens everywhere. Whether you're a student, professional, or simply
            passionate about our cause, there's a place for you in our community.
          </p>
        </div>

        {/* Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
            Ways to Contribute
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-${opportunity.color}/20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 text-${opportunity.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">
                      {opportunity.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {opportunity.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Volunteer Form */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Fill out the form below to start your volunteer journey with Med Teen Talk.
              We'll review your application and get back to you within a few days.
            </p>
          </div>
          <VolunteerForm />
        </div>

        {/* Other Ways to Help */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Other Ways to Support Us
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Spread the Word
                </h3>
                <p className="text-warm-gray">
                  Share our content on social media and tell your friends about
                  Med Teen Talk.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Partnership Opportunities
                </h3>
                <p className="text-warm-gray">
                  Represent a healthcare organization? Let's explore ways to
                  collaborate.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-charcoal mb-2">
                  Feedback & Ideas
                </h3>
                <p className="text-warm-gray">
                  Have suggestions for topics or improvements? We'd love to hear
                  from you.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="mailto:hello@medteentalk.org"
                className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
