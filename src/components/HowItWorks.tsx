import { CheckCircle, UserPlus, CreditCard, ArrowRight } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      number: "01",
      title: "Easy Onboard Flow",
      description: "Seamlessly integrate knit into your existing payment infrastructure with our simple API.",
    },
    {
      icon: CreditCard,
      number: "02",
      title: "Enrollment & Screening on customers",
      description: "Offer your customers multiple payment plans tailored to their needs and financial situations.",
    },
    {
      icon: CheckCircle,
      number: "03",
      title: "Payment options",
      description: "Our platform handles collection, compliance, and risk management automatically.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-20 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .step-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .step-card:nth-child(1) { animation-delay: 0.1s; }
        .step-card:nth-child(2) { animation-delay: 0.3s; }
        .step-card:nth-child(3) { animation-delay: 0.5s; }
        
        .arrow-connector {
          animation: slideRight 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .arrow-connector:nth-child(2) { animation-delay: 0.2s; }
        .arrow-connector:nth-child(4) { animation-delay: 0.4s; }
        
        .step-card:hover .step-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .step-icon {
          transition: transform 0.3s ease;
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">
            Get started with knit in three simple steps
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="step-card group relative">
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10">
                      {/* Large step number */}
                      <div className="text-7xl font-bold bg-gradient-to-br from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4 opacity-20">
                        {step.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 step-icon">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* Content */}
                      <h3 className="mb-4 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow connector - only between cards, not after the last one */}
                {index < steps.length - 1 && (
                  <div className="arrow-connector hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2" style={{ left: `${(index + 1) * 33.33 - 4}%` }}>
                    <ArrowRight className="w-8 h-8 text-blue-500" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Add React import
import * as React from "react";
