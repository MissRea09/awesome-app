import React from "react";
import {
  DollarSign,
  ListChecks,
  Users,
  Monitor,
  Shield,
  BarChart3,
} from "lucide-react";

const schoolFeatures = [
  {
    icon: DollarSign,
    title: "Guaranteed Cash Flow",
    description:
      "Convert fee arrears into immediate cash flow, with Knit handling the collections process from parents.",
  },
  {
    icon: ListChecks,
    title: "Reduced Workload",
    description:
      "We handle reminders, collections, and reporting, freeing your administrative staff to focus on education.",
  },
  {
    icon: Users,
    title: "Improved Parent Outcomes",
    description:
      "Offer short-term payment plans to prevent defaults and maintain positive relationships with families.",
  },
  {
    icon: Monitor,
    title: "No IT Infrastructure Needed",
    description:
      "Maintain your existing invoicing and ledger management while we handle reconciliation to statements automatically.",
  },
  {
    icon: Shield,
    title: "Full Compliance",
    description:
      "Rest assured with our adherence to South African rules on affordability and collections processes.",
  },
  {
    icon: BarChart3,
    title: "Detailed Reporting",
    description:
      "Access comprehensive weekly reports and real-time insights through your dedicated school dashboard.",
  },
];

const WhySchoolsChooseKnit: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why schools choose knit
        </h2>
        <p className="text-gray-600 mb-12">
          Partner with knit to transform your school's financial operations and
          improve parent relationships
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySchoolsChooseKnit;
