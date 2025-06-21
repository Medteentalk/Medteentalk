import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Handshake, Users, Target, Award, Heart, Globe } from "lucide-react";

const partnershipTypes = [
  {
    icon: Users,
    title: "Educational Institutions",
    description: "Partner with schools, colleges, and universities to expand healthcare education reach.",
    benefits: ["Student engagement programs", "Curriculum integration", "Career guidance workshops"],
    color: "soft-pink"
  },
  {
    icon: Target,
    title: "Healthcare Organizations",
    description: "Collaborate with hospitals, clinics, and healthcare companies for authentic insights.",
    benefits: ["Professional interviews", "Mentorship opportunities", "Real-world case studies"],
    color: "sage"
  },
  {
    icon: Award,
    title: "Professional Associations",
    description: "Work with medical societies and professional organizations to provide expert content.",
    benefits: ["Expert validation", "Professional networks", "Industry insights"],
    color: "coral"
  },
  {
    icon: Globe,
    title: "Community Organizations",
    description: "Partner with nonprofits and community groups to promote health education.",
    benefits: ["Community outreach", "Diverse perspectives", "Local health initiatives"],
    color: "warm-gray"
  }
];

const partnershipBenefits = [
  "Reach engaged teen and young adult audiences interested in healthcare",
  "Support the next generation of healthcare professionals",
  "Gain recognition as a supporter of healthcare education",
  "Access to our platform for content sharing and recruitment",
  "Collaborative content creation opportunities",
  "Brand exposure to students, families, and educators"
];

export default function Partnership() {
  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-10 h-10 text-soft-pink" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Partner With Us
          </h1>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            Join Med Teen Talk Magazine in our mission to make healthcare education 
            accessible, engaging, and empowering for teens and young adults worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12 mb-16 text-center">
          <div className="w-16 h-16 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-soft-pink" />
          </div>
          <h2 className="text-3xl font-bold text-charcoal mb-4">Our Mission</h2>
          <p className="text-lg text-warm-gray max-w-3xl mx-auto">
            We believe healthcare education should be accessible to everyone, regardless of background 
            or resources. Through partnerships, we can expand our reach, enhance our content quality, 
            and create more opportunities for young people to explore healthcare careers.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
            Partnership Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-12 h-12 bg-${type.color}/20 rounded-2xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 text-${type.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-charcoal mb-3">
                      {type.title}
                    </h3>
                    <p className="text-warm-gray mb-4">
                      {type.description}
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium text-charcoal">Partnership Benefits:</p>
                      <ul className="list-disc list-inside text-warm-gray space-y-1">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
            Why Partner With Med Teen Talk?
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">Our Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-soft-pink rounded-full mr-3"></div>
                    <span className="text-warm-gray">10,000+ students reached monthly</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-sage rounded-full mr-3"></div>
                    <span className="text-warm-gray">50+ active teen contributors</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-coral rounded-full mr-3"></div>
                    <span className="text-warm-gray">95% positive feedback from users</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                    <span className="text-warm-gray">Growing social media presence</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">Partnership Benefits</h3>
                <ul className="space-y-2">
                  {partnershipBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-soft-pink rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-warm-gray text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Current Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
            Current Partnerships
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-lg text-warm-gray mb-6">
              We're actively building partnerships with organizations that share our vision 
              of accessible healthcare education. Be among the first to join our network!
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-soft-pink/10 rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2">Educational Partners</h4>
                <p className="text-sm text-warm-gray">Expanding content reach in schools</p>
              </div>
              <div className="p-6 bg-sage/10 rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2">Healthcare Mentors</h4>
                <p className="text-sm text-warm-gray">Professional guidance network</p>
              </div>
              <div className="p-6 bg-coral/10 rounded-xl">
                <h4 className="font-semibold text-charcoal mb-2">Community Supporters</h4>
                <p className="text-sm text-warm-gray">Local health education initiatives</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-soft-pink/10 to-sage/10 rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-warm-gray mb-8 max-w-2xl mx-auto">
              Let's discuss how we can work together to expand healthcare education 
              opportunities for young people. We'd love to hear your ideas and explore 
              mutually beneficial partnerships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-soft-pink hover:bg-soft-pink/80 text-white px-8 py-3 rounded-xl">
                <a href="mailto:medteentalksmagazine@gmail.com?subject=Partnership Inquiry">
                  Start a Partnership
                </a>
              </Button>
              <Button asChild variant="outline" className="border-sage text-sage hover:bg-sage hover:text-white px-8 py-3 rounded-xl">
                <a href="/get-involved">
                  Learn About Volunteering
                </a>
              </Button>
            </div>
            <div className="mt-8 space-y-2 text-sm text-warm-gray">
              <p>Email: medteentalksmagazine@gmail.com</p>
              <p>Website: medteentalksmagazine.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}