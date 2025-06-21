import { Link } from "wouter";
import { Instagram, Twitter, Linkedin, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-soft-pink">Med Teen Talk</h3>
            <p className="text-gray-300">
              Empowering the next generation of healthcare professionals through
              accessible, peer-to-peer education.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-soft-pink transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-soft-pink transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-soft-pink transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-soft-pink transition-colors"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/interviews"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Interviews
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/get-involved"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Volunteer
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Write for Us
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Partner with Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  Partner with Us
                </Link>
              </li>
              <li>
                <a
                  href="mailto:medteentalksmagazine@gmail.com"
                  className="text-gray-300 hover:text-soft-pink transition-colors"
                >
                  medteentalksmagazine@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Med Teen Talk. Made with ❤️ by teens, for teens.
          </p>
        </div>
      </div>
    </footer>
  );
}
