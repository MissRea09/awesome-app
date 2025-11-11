import { TrendingUp, Shield, Users, Zap } from "lucide-react";

const metrics = [
  {
    icon: TrendingUp,
    value: "Up to 40%",
    label: "Collection Improvement",
    description: "Increased payment collection rates for our partners"
  },
  {
    icon: Shield,
    value: "< 95%",
    label: "NPS",
    description: "Industry-leading default rates through smart underwriting"
  },
  {
    icon: Users,
    value: "500K+",
    label: "Active Users",
    description: "Students and customers trust knit for their payments"
  },
  {
    icon: Zap,
    value: "< 48hrs",
    label: "Migration",
    description: "Get up and running with our simple API"
  }
];

export function Metrics() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-blue-50 overflow-hidden">
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
        
        .metric-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .metric-card:nth-child(1) { animation-delay: 0.1s; }
        .metric-card:nth-child(2) { animation-delay: 0.2s; }
        .metric-card:nth-child(3) { animation-delay: 0.3s; }
        .metric-card:nth-child(4) { animation-delay: 0.4s; }
        
        .metric-card:hover .metric-icon {
          transform: scale(1.1);
        }
        
        .metric-icon {
          transition: transform 0.3s ease;
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-4 text-gray-900">
            Proven Results Across Education and Life Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our embedded finance platform delivers measurable impact for providers and their customers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="metric-card group text-center p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white mb-6 shadow-lg shadow-blue-500/20 metric-icon">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="text-5xl mb-3 text-gray-900 font-bold">
                    {metric.value}
                  </div>
                  <div className="mb-3 text-gray-900 font-semibold">
                    {metric.label}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
