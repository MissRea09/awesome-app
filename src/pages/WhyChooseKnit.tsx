import React from "react";
import { Zap, Calendar, Shield, GraduationCap } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Pre-qualification",
    description:
      "Get an answer in seconds with just your mobile number and ID. No lengthy paperwork or waiting periods.",
  },
  {
    icon: Calendar,
    title: "Flexible Repayment",
    description:
      "Choose a repayment schedule that fits your budget, with options for monthly or bi-weekly payments.",
  },
  {
    icon: Shield,
    title: "No Hidden Fees",
    description:
      "Transparent fee structure with no surprises. Know exactly what you're paying from the start.",
  },
  {
    icon: GraduationCap,
    title: "Keep Children in School",
    description:
      "Ensure your child's education continues uninterrupted while you manage financial challenges.",
  },
];

const WhyChooseKnit: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Why choose knit
        </h2>
        <p className="text-gray-600 mb-12">
          Our features are designed to make school fee payments easier for
          parents and schools.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-100">
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

export default WhyChooseKnit;
