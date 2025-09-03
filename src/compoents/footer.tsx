// src/components/Footer.tsx
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import TermsOfServiceModal from "./TermsOfServiceModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import CookiesPolicyModal from "../compoents/cookiesPolicy";

const Footer: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Knit</h3>
          <p className="text-sm mb-4">
            Making education accessible through flexible school fee payment
            solutions.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">For Parents</a></li>
            <li><a href="#">For Schools</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-400" />
              support@knitpay.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-400" />
              +27 10 123 4567
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              123 Main Street, Johannesburg, South Africa
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm px-6 max-w-7xl mx-auto">
        <p>© 2025 Knit. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <button
            onClick={() => setIsTermsOpen(true)}
            className="hover:underline"
          >
            Terms of Service
          </button>
          <button
            onClick={() => setIsPrivacyOpen(true)}
            className="hover:underline"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setIsCookiesOpen(true)}
            className="hover:underline"
          >
            Cookie Policy
          </button>
        </div>
      </div>

      {/* Modals */}
      <TermsOfServiceModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
      <CookiesPolicyModal
        isOpen={isCookiesOpen}
        onClose={() => setIsCookiesOpen(false)}
      />
    </footer>
  );
};

export default Footer;
