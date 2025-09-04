import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient"; // adjust path if needed
import HowKnitWorksParent from "./HowKnitWorks";
import HowKnitWorksSchools from "./howKnitWorksForSchools";
import WhyChooseKnit from "./WhyChooseKnit";
import WhySchoolsChooseKnit from "./whySchoolsChooseKnit";

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
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // 👈 modal state

  // ─── Regex Patterns ─────────────────────────────
  const nameRegex = /^[A-Za-z\s]+$/;
  const mobileRegex = /^\d{10,}$/;
  const idRegex = /^\d{13}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let newErrors = {
      fullName: "",
      surname: "",
      mobile: "",
      idNumber: "",
      schoolName: "",
      contactPerson: "",
      contactEmail: "",
      contactNumber: "",
    };

    if (formType === "parent") {
      if (!formData.fullName || !nameRegex.test(formData.fullName)) {
        newErrors.fullName = "Enter a valid full name";
        valid = false;
      }
      if (!formData.surname || !nameRegex.test(formData.surname)) {
        newErrors.surname = "Enter a valid surname";
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
          surname: formData.surname,
          mobile: formData.mobile,
          id_number: formData.idNumber,
          school_name: formData.schoolName,
          contact_person: formData.contactPerson,
          contact_email: formData.contactEmail,
          contact_number: formData.contactNumber,
          created_at: new Date(),
        },
      ]);

      if (error) throw error;

      setMessage("✅ Form submitted successfully!");
      setShowModal(true); // 👈 show modal

      setFormData({
        fullName: "",
        surname: "",
        mobile: "",
        idNumber: "",
        schoolName: "",
        contactPerson: "",
        contactEmail: "",
        contactNumber: "",
      });
    } catch (err: any) {
      setMessage(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 md:px-20 py-16 space-y-16 mt-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
        {/* Left Section */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl font-bold leading-snug">
            Buy Now, Pay Later <br /> for School Fees
          </h1>
          <p className="text-gray-600">
            Help your child stay in school while managing your finances. Knit
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
              Pre-qualify Now
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
          <h3 className="text-lg font-semibold mb-12">Pre-qualify in seconds</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {formType === "parent" && (
              <>
                {/* Parent form fields */}
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
                    <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="surname"
                    placeholder="Enter your surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.surname ? "border-red-500" : ""
                    }`}
                  />
                  {errors.surname && (
                    <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
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
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
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
                    <p className="text-red-500 text-sm mt-1">{errors.idNumber}</p>
                  )}
                </div>
              </>
            )}

            {formType === "school" && (
              <>
                {/* School form fields */}
                <div>
                  <input
                    type="text"
                    name="schoolName"
                    placeholder="School Name"
                    value={formData.schoolName}
                    onChange={handleChange}
                    className={`w-full border rounded-md p-3 ${
                      errors.schoolName ? "border-red-500" : ""
                    }`}
                  />
                  {errors.schoolName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.schoolName}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="contactPerson"
                    placeholder="Contact Person"
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
                    placeholder="Contact Email"
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
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
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
              {loading ? "Submitting..." : "Check Eligibility"}
            </button>
          </form>

          {message && (
            <p className="text-center mt-4 text-sm font-medium">{message}</p>
          )}
        </div>
      </div>

      {/* How Knit Works + Why Choose Section */}
      <div className="space-y-16">
        {formType === "parent" && (
          <>
            <HowKnitWorksParent />
            <WhyChooseKnit />
          </>
        )}

        {formType === "school" && (
          <>
            <HowKnitWorksSchools />
            <WhySchoolsChooseKnit />
          </>
        )}
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">✅ Submission Successful</h2>
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
    </div>
  );
};

export default HomePage;
