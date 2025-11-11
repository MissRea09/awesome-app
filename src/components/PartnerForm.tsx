import * as React from "react";
import { Button } from "./custom/Button";
import { Send, CheckCircle, Building2, Mail, User, Phone } from "lucide-react";
import { useForm } from "./useForm";
import { FormField } from "./FormField";
import { motion } from "motion/react";

export function PartnerForm() {
  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      name: "",
      email: "",
      company: "",
      phone: "",
      position: "",
      partnershipType: "",
      companySize: "",
      website: "",
      message: "",
      agreedToTerms: false,
      _honeypot: "",
    },
    {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      company: { required: true, minLength: 2 },
      phone: {
        pattern: /^[\d\s\-\+\(\)]+$/,
        custom: (value) => {
          if (value && value.length > 0 && value.length < 10) {
            return "Please enter a valid phone number";
          }
          return undefined;
        },
      },
      position: { required: true },
      partnershipType: { required: true },
      companySize: { required: true },
      website: {
        pattern: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        custom: (value) => {
          if (value && !value.match(/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/)) {
            return "Please enter a valid website URL";
          }
          return undefined;
        },
      },
      message: { required: true, minLength: 20, maxLength: 1000 },
      agreedToTerms: {
        required: true,
        custom: (value) => {
          if (!value) return "You must agree to the terms to continue";
          return undefined;
        },
      },
    },
    "partner_application"
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e, {
      // In production, replace with actual endpoint
      // endpoint: "/api/partner",
      formatForCRM: true,
      crmFormType: 'partner_application',
      onSuccess: () => {
        // Reset form after 5 seconds
        setTimeout(() => {
          resetForm();
        }, 5000);
      },
    });
  };

  return (
    <section id="partner-form" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full mb-6">
              <span className="text-sm text-gray-700">Partnership Application</span>
            </div>
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">
              Apply to Become a Partner
            </h2>
            <p className="text-xl text-gray-600">
              Tell us about your organization and how you'd like to partner with knit
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 lg:p-12 border-2 border-gray-200"
          >
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="mb-4 text-2xl sm:text-3xl text-gray-900">Thanks — We'll be in touch shortly</h3>
                <p className="text-lg text-gray-600 max-w-md">
                  We've received your partnership application and will review it within 2-3 business days. Our team will reach out to discuss next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate aria-label="Partnership application form">
                {/* Honeypot field */}
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <label htmlFor="field-_honeypot">Don't fill this out if you're human</label>
                  <input
                    type="text"
                    id="field-_honeypot"
                    name="_honeypot"
                    value={values._honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Form error message */}
                {errors._form && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700" role="alert">
                    {errors._form}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Contact Information Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-xl text-gray-900">Contact Information</h3>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        label="Full Name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                        placeholder="John Smith"
                      />

                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                        placeholder="john@company.com"
                      />

                      <FormField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+27 10 141 2770"
                      />

                      <FormField
                        label="Your Position"
                        name="position"
                        type="text"
                        value={values.position}
                        onChange={handleChange}
                        error={errors.position}
                        required
                        placeholder="CEO, CTO, Business Development Manager"
                      />
                    </div>
                  </div>

                  {/* Company Information Section */}
                  <div>
                    <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-gray-200">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-xl text-gray-900">Company Information</h3>
                    </div>

                    <div className="space-y-4">
                      <FormField
                        label="Company Name"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={handleChange}
                        error={errors.company}
                        required
                        placeholder="Your Company"
                      />

                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          label="Company Size"
                          name="companySize"
                          type="select"
                          value={values.companySize}
                          onChange={handleChange}
                          error={errors.companySize}
                          required
                          options={[
                            { value: "", label: "Select company size" },
                            { value: "1-10", label: "1-10 employees" },
                            { value: "11-50", label: "11-50 employees" },
                            { value: "51-200", label: "51-200 employees" },
                            { value: "201-500", label: "201-500 employees" },
                            { value: "500+", label: "500+ employees" },
                          ]}
                        />

                        <FormField
                          label="Website"
                          name="website"
                          type="text"
                          value={values.website}
                          onChange={handleChange}
                          error={errors.website}
                          placeholder="https://yourcompany.com"
                        />
                      </div>

                      <FormField
                        label="Partnership Type"
                        name="partnershipType"
                        type="select"
                        value={values.partnershipType}
                        onChange={handleChange}
                        error={errors.partnershipType}
                        required
                        options={[
                          { value: "", label: "Select partnership type" },
                          { value: "api", label: "API Integration Partner" },
                          { value: "whitelabel", label: "White-Label Partner" },
                          { value: "referral", label: "Referral Partner" },
                          { value: "reseller", label: "Reseller Partner" },
                          { value: "other", label: "Other" },
                        ]}
                      />
                    </div>
                  </div>

                  {/* Partnership Details Section */}
                  <div>
                    <FormField
                      label="Tell us about your partnership interest"
                      name="message"
                      type="textarea"
                      value={values.message}
                      onChange={handleChange}
                      error={errors.message}
                      required
                      rows={6}
                      placeholder="Please describe your business, your target customers, why you want to partner with knit, and how you envision the partnership working..."
                      description="Minimum 20 characters, maximum 1000 characters"
                    />
                  </div>

                  {/* Agreement */}
                  <FormField
                    label="I agree to knit's partnership terms and conditions and consent to be contacted about partnership opportunities"
                    name="agreedToTerms"
                    type="checkbox"
                    value={values.agreedToTerms}
                    onChange={handleChange}
                    error={errors.agreedToTerms}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full mt-8 bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed text-lg py-6"
                  aria-label={isSubmitting ? "Submitting application" : "Submit partnership application"}
                >
                  {isSubmitting ? (
                    <>
                      <svg 
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Partnership Application
                      <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Submitted information will be kept confidential and used only for partnership evaluation. Read our{" "}
                  <a href="#" className="text-gray-700 underline hover:text-gray-900">Privacy Policy</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
