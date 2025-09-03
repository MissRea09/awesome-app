// src/components/SuccessModal.tsx
import React from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-xl font-semibold mb-4">✅ Submission Successful</h2>
        <p className="text-gray-600 mb-6">
          Thank you! We will contact you shortly.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
