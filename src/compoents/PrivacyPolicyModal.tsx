import React from "react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Privacy Policy Content */}
        <h1 className="text-3xl font-bold mb-[50px]">Knit Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: 3 September 2025</p>

        {/* 1. Introduction */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="mb-4">
          Luddites Group (Pty) Ltd, trading as Knit (“Knit”, “we”, “us”, “our”),
          is committed to protecting your privacy and ensuring that your personal
          information is processed in compliance with the Protection of Personal
          Information Act, 4 of 2013 (POPIA), the National Credit Act, 34 of 2005
          (NCA), the Financial Advisory and Intermediary Services Act, 37 of 2002
          (FAIS) where applicable, and any other relevant laws and regulations.
        </p>
        <p className="mb-4">
          This Privacy Policy explains how we collect, use, disclose, and protect
          your personal information when you interact with us, apply for credit,
          or use our Buy Now Pay Later (“BNPL”) and payments services.
        </p>
        <p className="mb-4">
          By using Knit’s services, you agree to the terms of this Privacy Policy.
        </p>

        {/* 2. Information We Collect */}
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li><strong>Identity Information:</strong> Name, surname, ID number, date of birth, nationality.</li>
          <li><strong>Contact Information:</strong> Residential and postal address, email address, phone number.</li>
          <li><strong>Financial Information:</strong> Bank account details, debit orders, income and expenditure, credit bureau data, payment behaviour.</li>
          <li><strong>Employment/Education Information:</strong> Employer details, school/learner information (for school fee BNPL).</li>
          <li><strong>Device & Technical Data:</strong> IP address, device identifiers, cookies, browser type, usage logs.</li>
          <li><strong>Regulatory Information:</strong> FICA/KYC documents, police clearance (where required), and compliance records.</li>
        </ul>

        {/* 3. How We Collect Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. How We Collect Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Directly from you when you register, apply, or communicate with us.</li>
          <li>From schools, merchants, or partners with your consent.</li>
          <li>From credit bureaus, fraud prevention agencies, or other third parties (as permitted by the NCA).</li>
          <li>Automatically when you use our website, app, or payment platforms.</li>
        </ul>

        {/* 4. How We Use Your Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Assess credit applications and affordability.</li>
          <li>Comply with the NCA, POPIA, FSCA and related laws.</li>
          <li>Manage your account, billing, collections, and reconciliations.</li>
          <li>Conduct fraud prevention, identity verification, and risk scoring.</li>
          <li>Communicate with you regarding repayments, arrears, and account status.</li>
          <li>Analyse customer trends and improve our services.</li>
        </ul>

        {/* 5. Disclosure of Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclosure of Information</h2>
        <p className="mb-4">We may share your information with:</p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Credit bureaus and fraud prevention agencies (for affordability and credit checks).</li>
          <li>Regulators (NCR, FSCA, SARB, Information Regulator).</li>
          <li>Partner schools and merchants (for reconciliation and fee management).</li>
          <li>Third-party service providers (payment processors, IT providers, auditors, lawyers).</li>
          <li>Where required by law, court order, or regulatory directive.</li>
        </ul>
        <p className="mb-4">We will never sell your personal data.</p>

        {/* 6. Security of Your Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Security of Your Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>PCI DSS compliant encryption of card and banking data.</li>
          <li>Secure authentication and restricted staff access.</li>
          <li>Firewalls, anti-phishing, and malware detection.</li>
          <li>Regular security audits, penetration testing, and backups.</li>
        </ul>

        {/* 7. International Data Transfers */}
        <h2 className="text-xl font-semibold mt-6 mb-2">7. International Data Transfers</h2>
        <p className="mb-4">
          If your data is processed outside South Africa, we will ensure that adequate protection and safeguards are in place, as required by POPIA.
        </p>

        {/* 8. Your Rights under POPIA */}
        <h2 className="text-xl font-semibold mt-6 mb-2">8. Your Rights under POPIA</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Request access to the information we hold about you.</li>
          <li>Ask us to correct or update your information.</li>
          <li>Object to processing in certain cases.</li>
          <li>Request deletion of information (subject to legal and regulatory obligations).</li>
          <li>Lodge a complaint with the Information Regulator.</li>
        </ul>

        {/* 9. Cookies and Tracking */}
        <h2 className="text-xl font-semibold mt-6 mb-2">9. Cookies and Tracking</h2>
        <p className="mb-4">
          Our website and applications may use cookies to improve functionality,
          monitor performance, and provide tailored services. You may disable
          cookies in your browser, but some features may not work properly.
        </p>

        {/* 10. Retention of Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">10. Retention of Information</h2>
        <p className="mb-4">
          We retain your personal information only as long as necessary to:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Fulfil the purposes in this policy.</li>
          <li>Comply with NCA/FICA record-keeping obligations.</li>
          <li>Resolve disputes and enforce agreements.</li>
        </ul>

        {/* 11. Changes to this Privacy Policy */}
        <h2 className="text-xl font-semibold mt-6 mb-2">11. Changes to this Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. The revised version
          will be posted on our website with the effective date.
        </p>

        {/* 12. Contact Us */}
        <h2 className="text-xl font-semibold mt-6 mb-2">12. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy or how we handle your
          data, please contact us:
          <br />
          Knit – Luddites Group (Pty) Ltd
          <br />
          Email: privacy@knit.cash
          <br />
          Website: www.knit.cash
          <br />
          Tel: [insert]
          <br />
          Address: [insert business address]
        </p>

        {/* Annexures */}
        <h2 className="text-xl font-semibold mt-6 mb-2">
          Annexures & Regulatory References
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Protection of Personal Information Act (POPIA) – Information Regulator of South Africa</li>
          <li>National Credit Act (NCA) – National Credit Regulator</li>
          <li>Financial Advisory and Intermediary Services Act (FAIS) – Financial Sector Conduct Authority</li>
          <li>Treating Customers Fairly (TCF) Principles – FSCA TCF Framework</li>
          <li>PCI DSS (Payment Card Industry Data Security Standard) – PCI Security Standards Council</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
