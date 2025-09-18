import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // adjust if needed
import HowknitWorksParent from "./HowknitWorks";
import HowknitWorksSchools from "./howknitWorksForSchools";
import WhyChooseknit from "./WhyChooseknit";
import WhySchoolsChooseknit from "./whySchoolsChooseknit";
import CreditConsentModal from "../compoents/CreditConsentModal";



const HomePage: React.FC = () => {
  const [formType, setFormType] = useState<"parent" | "school">("parent");

  const [formData, setFormData] = useState({
    fullName: "",
    surname: "",
    mobile: "",
    idNumber: "",
    schoolName: "",
    contactPerson: "",
    contactEmail: "",
    contactNumber: "",
    creditConsent: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    surname: "",
    mobile: "",
    idNumber: "",
    schoolName: "",
    contactPerson: "",
    contactEmail: "",
    contactNumber: "",
    creditConsent: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
<<<<<<< HEAD
  const [showCreditConsent, setShowCreditConsent] = useState(false);
  const [creditConsentEnabled, setCreditConsentEnabled] = useState(false);
=======
>>>>>>> origin/main

  const nameRegex = /^[A-Za-z\s]+$/;
  const mobileRegex = /^\d{10,}$/;
  const idRegex = /^\d{13}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...errors };
    Object.keys(newErrors).forEach((k) => (newErrors[k as keyof typeof newErrors] = ""));

    if (formType === "parent") {
      if (!formData.fullName || !nameRegex.test(formData.fullName)) {
        newErrors.fullName = "Enter a valid full name";
        valid = false;
      }
      if (!formData.surname || !nameRegex.test(formData.surname)) {
        newErrors.surname = "Enter a valid school name";
        valid = false;
      }
      if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
        newErrors.mobile = "Enter a valid mobile number (at least 10 digits)";
        valid = false;
      }
      if (!formData.idNumber || !idRegex.test(formData.idNumber)) {
        newErrors.idNumber = "Enter a valid 13-digit ID number";
        valid = false;
      }
      if (!formData.creditConsent) {
        newErrors.creditConsent = "You must give credit consent to proceed.";
        valid = false;
      }
    }

    if (formType === "school") {
      if (!formData.schoolName.trim()) {
        newErrors.schoolName = "School Name is required.";
        valid = false;
      }
      if (
        !formData.contactPerson.trim() ||
        !nameRegex.test(formData.contactPerson)
      ) {
        newErrors.contactPerson = "Enter a valid contact person";
        valid = false;
      }
      if (
        !formData.contactEmail.trim() ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contactEmail)
      ) {
        newErrors.contactEmail = "Enter a valid email address";
        valid = false;
      }
      if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber)) {
        newErrors.contactNumber = "Enter a valid 10-digit contact number";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("prequalifications").insert([
        {
          form_type: formType,
          full_name: formData.fullName,
          surname: formType === "parent" ? formData.surname : "",
          mobile: formData.mobile,
          id_number: formData.idNumber,
          school_name: formType === "school" ? formData.schoolName : "",
          contact_person: formData.contactPerson,
          contact_email: formData.contactEmail,
          contact_number: formData.contactNumber,
          consent: formData.creditConsent,
          created_at: new Date(),
        },
      ]);

      if (error) throw error;

      setMessage("✅ Form submitted successfully!");
      setShowModal(true);

      setFormData({
        fullName: "",
        surname: "",
        mobile: "",
        idNumber: "",
        schoolName: "",
        contactPerson: "",
        contactEmail: "",
        contactNumber: "",
        creditConsent: false,
      });
      setCreditConsentEnabled(false);
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 md:px-20 py-16 space-y-16 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
        {/* Left Section */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            School fees<br /> financial support
          </h1>
          <p className="text-gray-600">
            Help your child stay in school while managing your finances. knit
            pays the school upfront, you pay us back in flexible installments.
          </p>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`px-6 py-3 rounded-md ${
                formType === "parent"
                  ? "bg-gray-800 text-white"
                  : "border border-gray-400 text-gray-700"
              }`}
              onClick={() => setFormType("parent")}
            >
              Pre-qualify
            </button>
            <button
              type="button"
              className={`px-6 py-3 rounded-md ${
                formType === "school"
                  ? "bg-gray-800 text-white"
                  : "border border-gray-400 text-gray-700"
              }`}
              onClick={() => setFormType("school")}
            >
              For Schools
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Free pre-qualification · No obligation · Quick response
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
<<<<<<< HEAD
=======
          {/* Dynamic Title */}
>>>>>>> origin/main
          <h3 className="text-lg font-semibold mb-12">
            {formType === "parent" ? "Pre-qualify" : "Sign-up"}
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {formType === "parent" && (
              <>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.fullName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Enter your school name"
                    value={formData.surname}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.surname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.surname && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.surname}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.mobile ? "border-red-500" : ""
                    }`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobile}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="idNumber"
                    placeholder="Enter your ID number"
                    value={formData.idNumber}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.idNumber ? "border-red-500" : ""
                    }`}
                  />
                  {errors.idNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.idNumber}
                    </p>
                  )}
                </div>

                <div className="flex items-start space-x-2 mt-4">
                  <input
                    type="checkbox"
                    name="creditConsent"
                    checked={formData.creditConsent}
                    onChange={handleChange}
                    disabled={!creditConsentEnabled}
                    className="mt-1"
                  />
                  <label className="text-sm text-gray-700">
                    I consent to knit processing my personal information for
                    credit assessment.{" "}
                    <button
                      type="button"
                      onClick={() => setShowCreditConsent(true)}
                      className="hover:underline text-gray-700"
                    >
                      Learn more here
                    </button>
                    .
                  </label>
                </div>
                {errors.creditConsent && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.creditConsent}
                  </p>
                )}
              </>
            )}

            {formType === "school" && (
              <>
                <div>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="Enter school name"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.schoolName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.schoolName && (
                    <p className="text-red-500 text-sm mt-1">{errors.schoolName}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="contactPerson"
                    placeholder="Enter contact person"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.contactPerson ? "border-red-500" : ""
                    }`}
                  />
                  {errors.contactPerson && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactPerson}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="contactEmail"
                    placeholder="Enter contact email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.contactEmail ? "border-red-500" : ""
                    }`}
                  />
                  {errors.contactEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactEmail}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Enter contact number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.contactNumber ? "border-red-500" : ""
                    }`}
                  />
                  {errors.contactNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.contactNumber}
                    </p>
                  )}
                </div>
              </>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-800 text-white py-3 rounded-md font-medium hover:bg-gray-900 disabled:opacity-50"
            >
              {loading
                ? "Submitting..."
                : formType === "parent"
                ? "Check Eligibility"
                : "Submit"}
            </button>
          </form>

          {message && (
            <p className="text-center mt-4 text-sm font-medium">{message}</p>
          )}
        </div>
      </div>

      <div className="space-y-16">
        {formType === "parent" && (
          <>
            <HowknitWorksParent />
            <WhyChooseknit />
          </>
        )}
        {formType === "school" && (
          <>
            <HowknitWorksSchools />
            <WhySchoolsChooseknit />
          </>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">
              ✅ Submission Successful
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you! We will contact you shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ New Credit Consent Modal */}
      {showCreditConsent && (
       <CreditConsentModal
  isOpen={showCreditConsent}
  onClose={() => {
    setShowCreditConsent(false);
    setCreditConsentEnabled(true); // Enable checkbox after closing
  }}
/>
      )}
    </div>
  );
};

export default HomePage;
