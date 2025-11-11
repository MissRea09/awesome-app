import { Cpu, Zap, BarChart3, ArrowRight, Check } from "lucide-react";

export function PlatformModules() {
  const modules = [
    {
      icon: Cpu,
      title: "Credit Risk Engine",
      description: "Advanced decisioning with bureau data, bank statements, and behavioral analytics",
      link: "#platform/risk",
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-100 text-blue-600",
      features: ["ML-powered scoring", "Bureau integration", "Real-time decisions"]
    },
    {
      icon: Zap,
      title: "Payments & Collections",
      description: "Automated debit-order flows, pay-by-link recovery, and real-time reconciliation",
      link: "#platform/payments",
      gradient: "from-purple-500 to-pink-500",
      iconBg: "bg-purple-100 text-purple-600",
      features: ["Auto debit orders", "Pay-by-link", "Real-time recon"]
    },
    {
      icon: BarChart3,
      title: "MIS & Analytics",
      description: "Real-time dashboards tracking arrears, approvals, and portfolio health",
      link: "#platform/analytics",
      gradient: "from-green-500 to-emerald-500",
      iconBg: "bg-green-100 text-green-600",
      features: ["Live dashboards", "Portfolio health", "Custom reports"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
        
        .module-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .module-card:nth-child(1) { animation-delay: 0.1s; }
        .module-card:nth-child(2) { animation-delay: 0.2s; }
        .module-card:nth-child(3) { animation-delay: 0.3s; }
        
        .module-card:hover .module-icon {
          transform: scale(1.1);
        }
        
        .module-card:hover .arrow-icon {
          transform: translateX(4px);
        }
        
        .module-icon {
          transition: transform 0.3s ease;
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
        }
        
        .gradient-border {
          position: relative;
          background: white;
        }
        
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .gradient-border:hover::before {
          opacity: 1;
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-4 text-gray-900">Built for Education & Life Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three powerful modules working together to deliver seamless embedded finance experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {modules.map((module, idx) => (
            <a
              key={idx}
              href={module.link}
              className="module-card gradient-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group relative overflow-hidden"
              style={{
                '--gradient-from': `var(--${module.gradient.split(' ')[0].replace('from-', '')})`,
                '--gradient-to': `var(--${module.gradient.split(' ')[1].replace('to-', '')})`,
              } as React.CSSProperties}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`module-icon inline-flex w-14 h-14 rounded-xl ${module.iconBg} items-center justify-center mb-6 shadow-lg`}>
                  <module.icon className="w-7 h-7" />
                </div>
                
                {/* Title */}
                <h3 className="mb-3 text-gray-900">{module.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {module.description}
                </p>
                
                {/* Feature badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {module.features.map((feature, featureIdx) => (
                    <span 
                      key={featureIdx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                    >
                      <Check className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
                </div>
                
                {/* Learn more link */}
                <div className={`flex items-center font-semibold bg-gradient-to-r ${module.gradient} bg-clip-text text-transparent`}>
                  <span>Learn more</span>
                  <ArrowRight className="arrow-icon ml-2 w-4 h-4 text-gray-900" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
