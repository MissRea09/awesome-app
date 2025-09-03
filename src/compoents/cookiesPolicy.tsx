import React from "react";

interface CookiesPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiesPolicyModal: React.FC<CookiesPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Knit Cookies Policy</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-8">Last updated: 23 August 2025</p>

        {/* 1. What Are Cookies */}
        <h3 className="text-lg font-semibold mb-2">1. What Are Cookies?</h3>
        <p className="mb-4">
          Cookies are small text files placed on your device when you browse our
          website or use our services. They help us provide a secure, reliable,
          and personalised experience for both parents and schools.
        </p>

        {/* 2. Why We Use Cookies */}
        <h3 className="text-lg font-semibold mb-2">2. Why We Use Cookies</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Essential Cookies</strong> – enable login, applications, and
            school sign-ups. Without these, services cannot function.
          </li>
          <li>
            <strong>Security & Compliance Cookies</strong> – verify identity,
            detect fraud, and meet NCA, FSCA, and POPIA compliance.
          </li>
          <li>
            <strong>Analytics Cookies</strong> – understand user interaction and
            improve services.
          </li>
          <li>
            <strong>Marketing Cookies</strong> – communicate with parents and
            schools about Knit’s products (with consent).
          </li>
        </ul>

        {/* 3. Parents Pre-Qualifying */}
        <h3 className="text-lg font-semibold mb-2">3. Parents Pre-Qualifying</h3>
        <p className="mb-4">
          We use cookies to maintain login sessions, link device/application
          data for fraud prevention, and improve the pre-qualification flow.
        </p>

        {/* 4. Schools Signing Up */}
        <h3 className="text-lg font-semibold mb-2">4. Schools Signing Up</h3>
        <p className="mb-4">
          Cookies keep sessions active, save partially completed forms, and
          provide analytics for dashboard improvements.
        </p>

        {/* 5. Third-Party Cookies */}
        <h3 className="text-lg font-semibold mb-2">5. Third-Party Cookies</h3>
        <p className="mb-4">
          Knit may use trusted third parties like credit bureaus, payment
          processors, and analytics providers. These parties may also place
          cookies in line with their own privacy policies.
        </p>

        {/* 6. Managing Cookies */}
        <h3 className="text-lg font-semibold mb-2">6. Managing Cookies</h3>
        <p className="mb-4">
          You can manage or disable cookies in your browser. Disabling essential
          cookies may limit access to Knit’s services, including
          pre-qualification and school sign-up.
        </p>

        {/* 7. Compliance */}
        <h3 className="text-lg font-semibold mb-2">
          7. Compliance and Protection of Information
        </h3>
        <p className="mb-4">
          All cookies comply with POPIA, the NCA, and FSCA rules. We do not sell
          personal data.
        </p>

        {/* 8. Updates */}
        <h3 className="text-lg font-semibold mb-2">8. Updates to This Policy</h3>
        <p className="mb-4">
          We may update this policy from time to time. Changes will appear on
          this page with a revised “last updated” date.
        </p>

        {/* 9. Contact Us */}
        <h3 className="text-lg font-semibold mb-2">9. Contact Us</h3>
        <p className="mb-4">
          Email: info@knit.cash
          <br />
          Registered Address: Luddites Group (Pty) Ltd t/a Knit, [insert address]
        </p>
      </div>
    </div>
  );
};

export default CookiesPolicyModal;
