// src/components/CreditConsentModal.tsx
import React from "react";
import { X } from "lucide-react";

interface CreditConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreditConsentModal: React.FC<CreditConsentModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-gray-50 rounded-2xl shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative text-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Privacy Policy Content */}
        <h1 className="text-3xl font-bold mb-[50px]">Knit Credit Consent</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: 16 September 2025</p>

        {/* 1. Introduction */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="mb-4">
          Luddites Group (Pty) Ltd t/a Knit ("Knit") respects your privacy and is
          committed to processing your personal information lawfully, fairly, and
          transparently, in accordance with the Protection of Personal Information
          Act (POPIA) and the Promotion of Access to Information Act (PAIA).
        </p>

        {/* 2. Information We Collect */}
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Information We Collect</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Identity documents (e.g., ID, passport, proof of residence)</li>
          <li>Contact details (e.g., phone number, email address, physical address)</li>
          <li>Financial data (e.g., income, arrears balances, repayment plans)</li>
          <li>School-related data (e.g., school fees, arrears history, payment performance)</li>
        </ul>

        {/* 3. Purpose of Collection */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Purpose of Collection</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>To assess eligibility for repayment plans and credit services</li>
          <li>To facilitate arrears settlement and manage repayment schedules</li>
          <li>To comply with legal and regulatory obligations under the National Credit Act</li>
          <li>To report repayment performance to relevant authorised stakeholders (e.g., schools, credit bureaus)</li>
        </ul>

        {/* 4. How We Safeguard Your Information */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. How We Safeguard Your Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>All data is encrypted and stored securely</li>
          <li>Access is limited to authorised personnel on a strict need-to-know basis</li>
          <li>Data will not be shared without your prior consent, unless legally required</li>
        </ul>

        {/* 5. Data Retention */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Retention</h2>
        <p className="mb-4">
          Your information is only retained for as long as necessary to:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Complete repayment arrangements</li>
          <li>Meet legal or regulatory obligations</li>
          <li>Thereafter, your data will be securely deleted or anonymised</li>
        </ul>

        {/* 6. Your Rights */}
        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Access your personal information</li>
          <li>Request correction or deletion of inaccurate or unnecessary data</li>
          <li>Withdraw consent (where applicable)</li>
        </ul>
        <p className="mb-4">
          To exercise these rights, please contact our Information Officer at:{" "}
          <a href="mailto:privacy@knit.cash" className="text-blue-600 hover:underline">
            privacy@knit.cash
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreditConsentModal;
