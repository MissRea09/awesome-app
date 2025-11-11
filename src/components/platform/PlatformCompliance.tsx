import { Shield, Lock, FileCheck, CheckCircle, Key, Database, Eye, RefreshCw } from "lucide-react";

export function PlatformCompliance() {
  const complianceBadges = [
    {
      icon: FileCheck,
      title: "NCR Registered",
      description: "Registered credit provider adhering to National Credit Act",
      status: "NCRCP#####",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const securityFeatures = [
    {
      icon: Key,
      title: "256-bit Encryption",
      description: "Bank-grade encryption for all data"
    },
    {
      icon: Database,
      title: "Data Residency",
      description: "All data stored in South Africa"
    },
    {
      icon: Eye,
      title: "Annual Audits",
      description: "Regular third-party security audits"
    },
    {
      icon: RefreshCw,
      title: "99.9% Uptime",
      description: "Enterprise SLA with redundancy"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        .compliance-badge {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .compliance-badge:nth-child(1) { animation-delay: 0.1s; }
        .compliance-badge:nth-child(2) { animation-delay: 0.2s; }
        .compliance-badge:nth-child(3) { animation-delay: 0.3s; }
        
        .security-feature {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .security-feature:nth-child(1) { animation-delay: 0.4s; }
        .security-feature:nth-child(2) { animation-delay: 0.5s; }
        .security-feature:nth-child(3) { animation-delay: 0.6s; }
        .security-feature:nth-child(4) { animation-delay: 0.7s; }
        
        .compliance-badge:hover .badge-icon,
        .security-feature:hover .feature-icon {
          transform: scale(1.1);
        }
        
        .badge-icon,
        .feature-icon {
          transition: transform 0.3s ease;
        }
        
        .gradient-border-animated {
          position: relative;
          background: white;
        }
        
        .gradient-border-animated::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .gradient-border-animated:hover::before {
          opacity: 1;
        }
        
        .verification-badge {
          position: relative;
        }
        
        .verification-badge::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: currentColor;
          transform: translate(-50%, -50%);
          animation: pulse-ring 2s ease-out infinite;
        }
      `}</style>

      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white items-center justify-center mb-6 shadow-xl shadow-blue-500/30">
              <Shield className="w-8 h-8" />
            </div>
            <h2 className="mb-4 text-gray-900">Why Compliance Matters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Without proper regulatory compliance, you face legal risks, data breaches, and financial penalties. 
              We handle the complexity so you can focus on serving your customers.
            </p>
          </div>

          {/* Main Compliance Badges */}
          <div className="flex justify-center mb-16">
            {complianceBadges.map((badge, idx) => (
              <div
                key={idx}
                className="compliance-badge gradient-border-animated rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden max-w-md w-full"
                style={{
                  '--gradient-from': `var(--${badge.gradient.split(' ')[0].replace('from-', '')})`,
                  '--gradient-to': `var(--${badge.gradient.split(' ')[1].replace('to-', '')})`,
                } as React.CSSProperties}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icon with verification badge */}
                  <div className="relative inline-block mb-6">
                    <div className={`badge-icon inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${badge.gradient} text-white items-center justify-center shadow-xl`}>
                      <badge.icon className="w-8 h-8" />
                    </div>
                    {/* Verification checkmark */}
                    <div className="verification-badge absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white" fill="currentColor" />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="mb-2 text-gray-900">{badge.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {badge.description}
                  </p>
                  
                  {/* Status badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${badge.gradient} bg-opacity-10 rounded-full`}>
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${badge.gradient}`} />
                    <span className="text-sm text-gray-700">{badge.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Security Features */}
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-xl">
            <h3 className="mb-8 text-gray-900 text-center">Additional Security Features</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="security-feature text-center group cursor-default"
                >
                  <div className="feature-icon inline-flex w-14 h-14 rounded-xl bg-gray-100 group-hover:bg-blue-50 text-gray-600 group-hover:text-blue-600 items-center justify-center mb-4 transition-all duration-300">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h4 className="mb-2 text-gray-900 text-lg">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
