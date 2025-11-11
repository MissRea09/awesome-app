import { Button } from "./custom/Button";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useForm } from "./useForm";
import { FormField } from "./FormField";

export function Contact() {
  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    honeypot,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(
    {
      name: "",
      email: "",
      company: "",
      phone: "",
      vertical: "",
      message: "",
      subscribeNewsletter: false,
      _honeypot: "", // Honeypot field
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
      vertical: { required: true },
    },
    "demo_request"
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    await handleSubmit(e, {
      // In production, replace with actual endpoint
      // endpoint: "/api/contact",
      formatForCRM: true,
      crmFormType: 'demo_request',
      onSuccess: () => {
        // Reset form after 3 seconds
        setTimeout(() => {
          resetForm();
        }, 3000);
      },
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-4 text-gray-900">Get Started with knit</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your payment collection? Book a demo with our team to see how knit can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Email</div>
                    <a href="mailto:hello@knit.co.za" className="text-gray-900 hover:text-blue-600 transition-colors">
                      info@knit.cash
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Phone</div>
                    <a href="tel:+27101412770" className="text-gray-900 hover:text-blue-600 transition-colors">
                      +27 10 141 2770
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Office</div>
                    <div className="text-gray-900">
                      Johannesburg, South Africa
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <h3 className="mb-4 text-gray-900">Why Choose knit?</h3>
                <ul className="space-y-3">
                  {[
                    "Up to 40% collection improvement",
                    "< 5% portfolio loss rate",
                    "24-hour integration timeline",
                    "Full regulatory compliance",
                    "Dedicated support team"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center" role="status" aria-live="polite">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="mb-2 text-gray-900">Thanks — We'll be in touch shortly</h3>
                  <p className="text-gray-600">
                    We've received your request and will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate aria-label="Demo request form">
                  <h3 className="mb-6 text-gray-900">Request a Demo</h3>
                  
                  {/* Honeypot field - hidden from users */}
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
                  
                  <div className="space-y-4">
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
                      label="Organization"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={handleChange}
                      error={errors.company}
                      required
                      placeholder="Your School/Organization"
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
                      label="Industry Vertical"
                      name="vertical"
                      type="select"
                      value={values.vertical}
                      onChange={handleChange}
                      error={errors.vertical}
                      required
                      options={[
                        { value: "", label: "Select a vertical" },
                        { value: "education", label: "Education" },
                        { value: "healthcare", label: "Healthcare" },
                        { value: "wellness", label: "Wellness" },
                        { value: "funeral", label: "Funeral Services" },
                        { value: "other", label: "Other Life Services" },
                      ]}
                    />

                    <FormField
                      label="Message"
                      name="message"
                      type="textarea"
                      value={values.message}
                      onChange={handleChange}
                      error={errors.message}
                      rows={4}
                      placeholder="Tell us about your requirements..."
                    />

                    <FormField
                      label="Subscribe to our newsletter for product updates, industry insights, and embedded finance trends"
                      name="subscribeNewsletter"
                      type="checkbox"
                      value={values.subscribeNewsletter}
                      onChange={handleChange}
                      error={errors.subscribeNewsletter}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full mt-6 bg-gray-900 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={isSubmitting ? "Submitting form" : "Submit demo request"}
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
                        Submitting...
                      </>
                    ) : (
                      <>
                        Book Demo
                        <Send className="ml-2 w-5 h-5" aria-hidden="true" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-gray-700 underline hover:text-gray-900">Privacy Policy</a>
                    {" "}and consent to be contacted about knit's services.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
