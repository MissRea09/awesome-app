import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./custom/Button";
import logo from "figma:asset/c6bfecd0f0998aa1adede9405f4f5d0d215274f5.png";

export function Footer() {
  const handleNavClick = (href: string) => {
    // Check if this is a page route or a hash link
    if (href.startsWith("#resources/") || href === "#edu" || href === "#life" || href === "#platform") {
      window.location.hash = href;
    } else if (href.startsWith("#")) {
      // For hash links like #contact, #about, etc.
      // First check if we're already on the home page
      const currentHash = window.location.hash;
      if (currentHash && currentHash !== "#home" && currentHash !== "") {
        // Navigate to home first, then scroll to the section
        window.location.hash = "home";
        setTimeout(() => {
          const elementId = href.substring(1); // Remove the #
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      } else {
        // Already on home page, just scroll
        const elementId = href.substring(1); // Remove the #
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt="knit" 
                className="h-24 w-auto"
              />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Embedded finance for education and life services
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:hello@knit.com" 
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                info@knit.cash
              </a>
              <a 
                href="tel:+27101412770" 
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +27 10 141 2770
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Johannesburg, SA</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-gray-900">
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#platform" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#platform");
                  }}
                >
                  Platform
                </a>
              </li>
              <li>
                <a 
                  href="#edu" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#edu");
                  }}
                >
                  knit Edu
                </a>
              </li>
              <li>
                <a 
                  href="#life" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#life");
                  }}
                >
                  knit Life
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-gray-900">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#resources/partner" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#resources/partner");
                  }}
                >
                  Partner With Us
                </a>
              </li>
              <li>
                <a 
                  href="#resources/faq" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#resources/faq");
                  }}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="#resources/compliance" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#resources/compliance");
                  }}
                >
                  Compliance & POPIA
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-gray-900">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#about");
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact");
                  }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-gray-900">
              Legal & Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  Security
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors inline-block hover:translate-x-1 transition-transform"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-y border-gray-200 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-gray-900 mb-1">Ready to get started?</h4>
              <p className="text-sm text-gray-600">Transform your payment experience today.</p>
            </div>
            <Button 
              onClick={() => handleNavClick("#contact")}
              className="bg-gray-900 hover:bg-gray-800 whitespace-nowrap"
            >
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2025 knit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors hover:scale-110 transition-transform"
              aria-label="X (formerly Twitter)"
            >
              <span className="sr-only">X</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
