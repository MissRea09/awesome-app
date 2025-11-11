import { Button } from "./custom/Button";
import { Send, CheckCircle } from "lucide-react";
import { useForm } from "./useForm";
import { FormField } from "./FormField";

export function CallToAction() {
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
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interest: "",
      message: "",
      subscribeNewsletter: false,
      _honeypot: "",
    },
    {
      firstName: { required: true, minLength: 2 },
      lastName: { required: true, minLength: 2 },
      email: { required: true, email: true },
      company: { required: true, minLength: 2 },
      interest: { required: true },
      message: { required: true, minLength: 10 },
    },
    "get_in_touch"
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e, {
      // In production, replace with actual endpoint
      // endpoint: "/api/general-inquiry",
      formatForCRM: true,
      crmFormType: 'general_inquiry',
      onSuccess: () => {
        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
        }, 3000);
      },
    });
  };

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-white">
            Ready to Transform Your Payment Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join leading education and life services providers who trust knit 
            to power their embedded finance solutions.
          </p>

          {/* Contact Form */}
          <div id="contact" className="mt-8 p-6 sm:p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 scroll-mt-20">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-white">Thanks — We'll be in touch shortly</h3>
                <p className="text-gray-300">
                  We've received your request and will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate aria-label="Get in touch form">
                <h3 className="mb-6 text-white">
                  Get in Touch
                </h3>

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
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" role="alert">
                    {errors._form}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="text-left">
                    <FormField
                      label="First Name"
                      name="firstName"
                      type="text"
                      value={values.firstName}
                      onChange={handleChange}
                      error={errors.firstName}
                      required
                      placeholder="John"
                      theme="dark"
                    />
                  </div>
                  <div className="text-left">
                    <FormField
                      label="Last Name"
                      name="lastName"
                      type="text"
                      value={values.lastName}
                      onChange={handleChange}
                      error={errors.lastName}
                      required
                      placeholder="Smith"
                      theme="dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div className="text-left">
                    <FormField
                      label="Work Email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      error={errors.email}
                      required
                      placeholder="john@company.com"
                      theme="dark"
                    />
                  </div>
                  <div className="text-left">
                    <FormField
                      label="Company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      error={errors.company}
                      required
                      placeholder="Your Company"
                      theme="dark"
                    />
                  </div>
                </div>

                <div className="text-left mb-4">
                  <FormField
                    label="I'm interested in..."
                    name="interest"
                    type="select"
                    value={values.interest}
                    onChange={handleChange}
                    error={errors.interest}
                    required
                    theme="dark"
                    options={[
                      { value: "", label: "Select an option" },
                      { value: "edu", label: "knit Edu" },
                      { value: "life", label: "knit Life" },
                      { value: "both", label: "Both Solutions" },
                    ]}
                  />
                </div>

                <div className="text-left mb-4">
                  <FormField
                    label="Tell us about your needs"
                    name="message"
                    type="textarea"
                    value={values.message}
                    onChange={handleChange}
                    error={errors.message}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    theme="dark"
                  />
                </div>
                
                {/* Newsletter Checkbox */}
                <div className="text-left mb-6">
                  <FormField
                    label="Subscribe to our newsletter for product updates, industry insights, and embedded finance trends"
                    name="subscribeNewsletter"
                    type="checkbox"
                    value={values.subscribeNewsletter}
                    onChange={handleChange}
                    error={errors.subscribeNewsletter}
                    theme="dark"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label={isSubmitting ? "Submitting request" : "Submit request"}
                >
                  {isSubmitting ? (
                    <>
                      <svg 
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-gray-900">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-900">Submit Request</span>
                      <Send className="ml-2 w-5 h-5 text-gray-900" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-gray-300 underline hover:text-white">Privacy Policy</a>
                  {" "}and consent to be contacted about knit's services.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
