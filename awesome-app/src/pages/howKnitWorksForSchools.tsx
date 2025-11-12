import React from "react";

const HowKnitWorksSchools: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "School Onboarding",
      description:
        "Sign up with Knit and complete our school agreement to transfer credit risk from your school to us. We pay your your debtors book upfront.",
    },
    {
      id: 2,
      title: "Debtors Book Analysis",
      description:
        "Share your debtors book with Knit for analysis. We'll identify which parent accounts are eligible for our service.",
    },
    {
      id: 3,
      title: "Parent Consent",
      description:
        "Reach out to parents to obtain consent for Knit to pre-qualify them. We'll assess if we can settle their school fees and take on the parent risk.",
    },
    {
      id: 4,
      title: "Ongoing Management",
      description:
        "Knit handles underwriting, payouts, collections, and reporting. You'll receive weekly updates and have access to your school portal for real-time information.",
    },
  ];

  return (
    <section
      id="schools"
      className="py-16 bg-gray-50 scroll-mt-28" // 👈 added scroll margin
    >
      <div className="max-w-4xl mx-auto px-6">
         <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          How knit works for schools
        </h2>
        <p className="text-gray-600 text-center mb-12">
          A simple, streamlined process designed to minimize disruption to your
          operations
        </p>

        <div className="relative border-l-2 border-gray-300 ml-6">
          {steps.map((step) => (
            <div key={step.id} className="mb-12 ml-6 relative">
              {/* Number Circle */}
              <div className="absolute -left-8 top-2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
                {step.id}
              </div>

              {/* Step Content */}
              <div className="bg-white shadow-md rounded-2xl p-6 max-w-2xl mx-auto">
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowKnitWorksSchools;
