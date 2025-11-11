import * as React from "react";
import { Button } from "../custom/Button";
import { CheckCircle2, Code, Palette, Users, Zap, Shield, TrendingUp, Globe, ArrowRight, Handshake } from "lucide-react";
import { motion } from "motion/react";
import { PartnerForm } from "../PartnerForm";

export function PartnerPage() {
  const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, eventData);
    }
  };

  const handlePartnerSignUp = (partnershipType: string) => {
    trackEvent("partner_signup_click", {
      partnership_type: partnershipType,
      page: "partner",
    });
    // Scroll to partner form
    const formElement = document.getElementById("partner-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const partnershipModels = [
    {
      id: "api",
      icon: Code,
      title: "API Integration Partner",
      description: "Integrate knit's embedded finance capabilities directly into your platform or product.",
      benefits: [
        "Full API access to knit's credit engine and payment infrastructure",
        "White-label capabilities for seamless brand integration",
        "Technical support and comprehensive documentation",
        "Revenue share on transactions processed through your integration",
        "Co-marketing opportunities with knit",
      ],
      idealFor: "SaaS platforms, ERPs, billing systems, and technology providers serving education or life services sectors",
      cta: "Become an API Partner",
    },
    {
      id: "whitelabel",
      icon: Palette,
      title: "White-Label Partner",
      description: "Offer knit's payment solutions under your own brand to your customer base.",
      benefits: [
        "Fully branded payment and financing solutions",
        "Dedicated partner success manager",
        "Custom pricing and plan configurations",
        "Joint business planning and growth strategies",
        "Priority product roadmap input",
      ],
      idealFor: "Established service providers, industry associations, and consultancies with strong customer relationships",
      cta: "Explore White-Label",
    },
    {
      id: "reseller",
      icon: Users,
      title: "Reseller Partner",
      description: "Introduce knit to your network and earn commissions on successful partnerships.",
      benefits: [
        "Generous commission structure on closed deals",
        "Sales enablement training and materials",
        "Partner portal for tracking referrals and commissions",
        "Marketing collateral and co-branded resources",
        "Dedicated partner support team",
      ],
      idealFor: "Consultants, advisors, and service providers with networks in education or life services industries",
      cta: "Join as Reseller",
    },
  ];

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Create new revenue streams through commissions, revenue sharing, or margin on services",
    },
    {
      icon: Shield,
      title: "Proven Technology",
      description: "Partner with a platform maintaining <5% portfolio loss with proven results",
    },
    {
      icon: Zap,
      title: "Fast Time to Market",
      description: "Launch embedded finance capabilities in weeks, not months",
    },
    {
      icon: Globe,
      title: "Market Expansion",
      description: "Access new markets and customer segments with our specialized solutions",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <Handshake className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Partnership Opportunities</span>
              </div>
              <h1 className="mb-8 text-white text-4xl sm:text-5xl lg:text-6xl">
                Partner With <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">knit</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                Join our partner ecosystem and help education and life services providers unlock growth through embedded finance
              </p>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all group"
                onClick={() => handlePartnerSignUp("hero")}
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Quick Partner Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl text-white mb-2">3</div>
                <div className="text-sm text-gray-300">Partnership Models</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl text-white mb-2">30%+</div>
                <div className="text-sm text-gray-300">Revenue Share Potential</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl text-white mb-2">2 Weeks</div>
                <div className="text-sm text-gray-300">Time to Launch</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                  <span className="text-sm text-gray-600">Partner Benefits</span>
                </div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">Why Partner With knit</h2>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Unlock new opportunities and deliver greater value to your customers
                </p>
              </motion.div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {partnerBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl sm:text-2xl">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                  <span className="text-sm text-gray-600">Partnership Options</span>
                </div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">Choose Your Partnership Model</h2>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Flexible partnership options designed to fit your business model
                </p>
              </motion.div>
            </div>
            <div className="space-y-8 lg:space-y-12">
              {partnershipModels.map((model, index) => {
                const Icon = model.icon;
                const colors = [
                  { gradient: 'from-blue-900 to-blue-700', badge: 'bg-blue-100 text-blue-700 border-blue-200', accent: 'border-blue-500' },
                  { gradient: 'from-green-900 to-green-700', badge: 'bg-green-100 text-green-700 border-green-200', accent: 'border-green-500' },
                  { gradient: 'from-purple-900 to-purple-700', badge: 'bg-purple-100 text-purple-700 border-purple-200', accent: 'border-purple-500' },
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <motion.article
                    key={model.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all relative overflow-hidden"
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                    
                    {/* Model Number Badge */}
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-xl">0{index + 1}</span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
                      {/* Left Column */}
                      <div className="lg:col-span-1">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorScheme.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="mb-4 text-2xl sm:text-3xl">{model.title}</h3>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">{model.description}</p>
                        <Button
                          size="lg"
                          className="w-full lg:w-auto bg-gray-900 hover:bg-gray-800 text-white text-lg px-6 py-6 group"
                          onClick={() => handlePartnerSignUp(model.id)}
                        >
                          {model.cta}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>

                      {/* Right Column */}
                      <div className="lg:col-span-2 space-y-8">
                        <div>
                          <div className="flex items-center gap-3 mb-6">
                            <div className={`w-1 h-10 rounded-full bg-gradient-to-b ${colorScheme.gradient}`}></div>
                            <h4 className="text-xl sm:text-2xl">Key Benefits</h4>
                          </div>
                          <ul className="space-y-4">
                            {model.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-4 group/item">
                                <div className="flex-shrink-0 mt-1">
                                  <CheckCircle2 className="w-6 h-6 text-green-600 group-hover/item:scale-110 transition-transform" />
                                </div>
                                <span className="text-gray-700 text-lg leading-relaxed">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={`rounded-2xl p-6 border-2 ${colorScheme.badge} border-l-4 ${colorScheme.accent}`}>
                          <p className="text-lg">
                            <strong className="text-gray-900">Ideal for:</strong>{" "}
                            <span className="text-gray-700">{model.idealFor}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Process */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                  <span className="text-sm text-gray-600">Getting Started</span>
                </div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">Partnership Process</h2>
                <p className="text-xl sm:text-2xl text-gray-600">
                  Four simple steps to becoming a knit partner
                </p>
              </motion.div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
              {/* Connection Line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 z-0" style={{ left: '12.5%', right: '12.5%' }}></div>
              
              {[
                { step: "01", title: "Apply", description: "Submit your partnership application", color: "from-blue-600 to-blue-700" },
                { step: "02", title: "Review", description: "We'll evaluate fit and schedule a call", color: "from-green-600 to-green-700" },
                { step: "03", title: "Onboard", description: "Complete training and setup", color: "from-purple-600 to-purple-700" },
                { step: "04", title: "Launch", description: "Start referring and earning", color: "from-gray-900 to-gray-700" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center relative z-10"
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mx-auto mb-6 text-2xl shadow-xl hover:scale-110 transition-transform`}>
                    {item.step}
                  </div>
                  <h4 className="mb-3 text-xl sm:text-2xl">{item.title}</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
                  
                  {/* Arrow indicator for mobile */}
                  {index < 3 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <PartnerForm />

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <Handshake className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Join Our Partner Network</span>
              </div>
              <h2 className="text-white mb-8 text-3xl sm:text-4xl lg:text-5xl">Ready to Partner With Us?</h2>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Let's explore how we can work together to bring embedded finance to education and life services providers across South Africa.
              </p>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all group"
                onClick={() => handlePartnerSignUp("bottom")}
              >
                Start Your Partnership Application
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>No upfront costs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Dedicated support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Flexible terms</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
