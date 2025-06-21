import { Shield, Lock, Eye, Users } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-creme">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-soft-pink" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-warm-gray max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how Med Teen Talk Magazine 
            collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-warm-gray mt-4">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-8">
          
          {/* Information We Collect */}
          <section>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-soft-pink/20 rounded-full flex items-center justify-center mr-3">
                <Eye className="w-4 h-4 text-soft-pink" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-warm-gray">
              <p>
                <strong>Personal Information:</strong> When you volunteer, subscribe to our newsletter, 
                or take our career quiz, we may collect your name, email address, and other information 
                you voluntarily provide.
              </p>
              <p>
                <strong>Usage Information:</strong> We collect information about how you interact with 
                our website, including pages visited, time spent, and general location data.
              </p>
              <p>
                <strong>Device Information:</strong> We may collect information about your device, 
                including browser type, operating system, and IP address.
              </p>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-sage/20 rounded-full flex items-center justify-center mr-3">
                <Users className="w-4 h-4 text-sage" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal">How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-warm-gray">
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and improve our services and content</li>
                <li>Send newsletters and updates (only if you subscribe)</li>
                <li>Respond to your inquiries and volunteer applications</li>
                <li>Analyze website usage to improve user experience</li>
                <li>Provide personalized career quiz results</li>
                <li>Communicate about volunteer opportunities and events</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-coral/20 rounded-full flex items-center justify-center mr-3">
                <Lock className="w-4 h-4 text-coral" />
              </div>
              <h2 className="text-2xl font-bold text-charcoal">Information Sharing</h2>
            </div>
            <div className="space-y-4 text-warm-gray">
              <p>
                <strong>We do not sell your personal information.</strong> We may share your information only in these limited circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements or court orders</li>
                <li>To protect the rights, property, or safety of Med Teen Talk Magazine or others</li>
                <li>With service providers who help us operate our website (under strict confidentiality agreements)</li>
              </ul>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Data Security</h2>
            <div className="space-y-4 text-warm-gray">
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no internet 
                transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Your Rights</h2>
            <div className="space-y-4 text-warm-gray">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Unsubscribe from our communications at any time</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Cookies and Tracking</h2>
            <div className="space-y-4 text-warm-gray">
              <p>
                We use cookies and similar technologies to enhance your browsing experience, 
                analyze website traffic, and understand user preferences. You can control 
                cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Third-Party Links</h2>
            <div className="space-y-4 text-warm-gray">
              <p>
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices or content of these external sites. We encourage 
                you to review their privacy policies.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Children's Privacy</h2>
            <div className="space-y-4 text-warm-gray">
              <p>
                Our website is designed for teens and young adults interested in healthcare. 
                We do not knowingly collect personal information from children under 13. 
                If you are a parent or guardian and believe your child has provided us with 
                personal information, please contact us.
              </p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-charcoal mb-4">Changes to This Policy</h2>
            <div className="space-y-4 text-warm-gray">
              <p>
                We may update this privacy policy from time to time. We will notify you of 
                any changes by posting the new policy on this page and updating the "last updated" 
                date. Your continued use of our website after changes constitutes acceptance 
                of the new policy.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-charcoal mb-4">Contact Us</h2>
            <div className="space-y-4 text-warm-gray">
              <p>
                If you have questions about this privacy policy or how we handle your 
                personal information, please contact us:
              </p>
              <div className="bg-soft-pink/10 rounded-xl p-6">
                <p className="font-semibold text-charcoal">Med Teen Talk Magazine</p>
                <p>Email: medteentalksmagazine@gmail.com</p>
                <p>Website: medteentalksmagazine.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}