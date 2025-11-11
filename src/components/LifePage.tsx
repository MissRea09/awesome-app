import { Button } from "./custom/Button";
import { ArrowRight, Heart, Activity, Sparkles, Shield, Calendar, DollarSign, Users, TrendingDown, AlertCircle, CheckCircle, FileText, BarChart3, Smartphone, Building2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LifePage() {
  const handleDemoClick = () => {
    // GA4 tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "CTA",
        event_label: "Book Demo - knit Life",
      });
    }
    // Scroll to contact section
    window.location.hash = "home";
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
                <Heart className="w-4 h-4" />
                <span className="text-sm">For Life Services Providers</span>
              </div>
              <h1 className="mb-6 text-gray-900">
                Embedded finance for life's most important services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                knit Life provides financial rails for healthcare, wellness, funeral services, and essential life services. 
                Enable your customers to access critical services while improving your revenue predictability and cash flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gray-900 hover:bg-gray-800"
                  onClick={handleDemoClick}
                >
                  Book Onboarding Session
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    const section = document.getElementById("life-solutions");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Learn More
                </Button>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200">
                <div>
                  <div className="text-gray-900 mb-1">35%</div>
                  <div className="text-sm text-gray-600">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">4.2%</div>
                  <div className="text-sm text-gray-600">Default Rate</div>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">92%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758887248912-03a0c34a2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2VsbG5lc3MlMjBzZXJ2aWNlc3xlbnwxfHx8fDE3NjEyMTk5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Healthcare wellness services"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">85% Approval</div>
                    <div className="text-sm text-gray-600">instant decisions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              The Affordability Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Essential service providers face barriers that prevent customers from accessing the care they need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "High Service Costs",
                description: "Large upfront payments prevent customers from accessing healthcare, funeral cover, wellness, and other essential services.",
                color: "text-red-600 bg-red-100"
              },
              {
                icon: TrendingDown,
                title: "Treatment Abandonment",
                description: "38% of patients delay or skip recommended treatments due to cost concerns, impacting health outcomes and provider revenue.",
                color: "text-orange-600 bg-orange-100"
              },
              {
                icon: DollarSign,
                title: "Cash Flow Uncertainty",
                description: "Unpredictable payment schedules and high arrears make it difficult to forecast revenue and manage operations effectively.",
                color: "text-yellow-600 bg-yellow-100"
              },
              {
                icon: Users,
                title: "Limited Customer Base",
                description: "Payment barriers exclude potential customers who would benefit from your services but can't afford large upfront costs.",
                color: "text-blue-600 bg-blue-100"
              },
              {
                icon: Calendar,
                title: "Collections Burden",
                description: "Chasing late payments creates friction with customers and diverts staff from core service delivery.",
                color: "text-purple-600 bg-purple-100"
              },
              {
                icon: Shield,
                title: "Compliance Complexity",
                description: "Navigating finance regulations, privacy laws, and lending requirements is time-consuming and risky.",
                color: "text-green-600 bg-green-100"
              }
            ].map((pain, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${pain.color} mb-4`}>
                  <pain.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-gray-900">{pain.title}</h3>
                <p className="text-gray-600">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="life-solutions" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              The knit Life Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built embedded finance for essential life services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBvbmJvYXJkaW5nfGVufDF8fHx8MTc2MTIxOTk2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Mobile app onboarding"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="mb-6 text-gray-900">
                Digital Onboarding & Instant Approval
              </h3>
              <div className="space-y-4">
                {[
                  "Fully digital onboarding process completed in under 3 minutes",
                  "Real-time identity verification via Home Affairs integration",
                  "Instant credit decisioning with 85% approval rates",
                  "E-signature support for paperless applications",
                  "Mobile-first experience optimized for smartphones",
                  "FICA-compliant KYC with automated document verification"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="mb-6 text-gray-900">
                Debit-Order Automation & Collections
              </h3>
              <div className="space-y-4">
                {[
                  "Automated debit-order processing with intelligent retry logic",
                  "Integration with all major South African banks",
                  "Smart payment reminders via SMS, email, and WhatsApp",
                  "Configurable payment schedules aligned to paydays",
                  "Automated escalation workflows for late payments",
                  "Real-time collection tracking and reconciliation"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBkYXRhfGVufDF8fHx8MTc2MTIxOTk2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dashboard analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlZ3JhdGlvbiUyMHRlY2hub2xvZ3klMjBhcGl8ZW58MXx8fHwxNzYxMjE5OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Arrears dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="mb-6 text-gray-900">
                Arrears Dashboards & Analytics
              </h3>
              <div className="space-y-4">
                {[
                  "Real-time arrears tracking with aging analysis",
                  "Customizable dashboards for portfolio health monitoring",
                  "Predictive analytics for early default detection",
                  "Automated risk scoring and segmentation",
                  "Detailed reporting for management and compliance",
                  "Export capabilities for accounting and audits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="mb-6 text-gray-900">
                Flexible Payment Plans with Insurance
              </h3>
              <div className="space-y-4">
                {[
                  "Customizable payment terms from 3 to 24 months",
                  "Optional credit life insurance add-ons for customer protection",
                  "Funeral cover integration for comprehensive solutions",
                  "Interest-free promotional periods to increase accessibility",
                  "Works with medical aid and gap cover payments",
                  "No hidden fees or prepayment penalties"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc2MTIxOTk2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Doctor patient consultation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGludGVncmF0aW9uJTIwYXBpfGVufDF8fHx8MTc2MTIxOTk2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Software integration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="mb-6 text-gray-900">
                Seamless System Integration
              </h3>
              <div className="space-y-4">
                {[
                  "Direct integration with Home Affairs for ID verification",
                  "Works with leading practice management systems",
                  "Real-time eligibility checks and approval workflows",
                  "Automated invoice reconciliation and accounting sync",
                  "White-label checkout experience branded to your business",
                  "RESTful API and webhooks for custom integrations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-100 text-purple-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="mb-4 text-gray-900">
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="text-xl text-gray-600">
                knit Life meets the highest standards for data protection and regulatory compliance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4 text-gray-900">Regulatory Compliance</h3>
                  <ul className="space-y-3">
                    {[
                      "NCR (National Credit Regulator) registered",
                      "POPIA (Protection of Personal Information Act) compliant",
                      "FICA (Financial Intelligence Centre Act) compliant",
                      "Home Affairs integration for identity verification",
                      "National Credit Act (NCA) adherence"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-gray-900">Security Standards</h3>
                  <ul className="space-y-3">
                    {[
                      "SOC 2 Type II certified",
                      "PCI DSS Level 1 compliant",
                      "256-bit encryption for data at rest and in transit",
                      "Regular third-party security audits",
                      "Fraud detection and prevention systems"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="mb-4 text-gray-900">Data Privacy</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "POPIA-compliant data processing",
                    "Secure data residency in South Africa",
                    "Right to access and erasure",
                    "Transparent privacy policies and consent management"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              Built for Essential Life Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible payment solutions for every type of service provider
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Activity,
                title: "Healthcare",
                items: ["Elective procedures", "Dental treatments", "Vision care", "Medical devices", "Rehabilitation therapy"]
              },
              {
                icon: Heart,
                title: "Funeral Services",
                items: ["Funeral packages", "Burial plans", "Memorial services", "Repatriation services", "Cremation services"]
              },
              {
                icon: Sparkles,
                title: "Wellness & Beauty",
                items: ["Med spa treatments", "Cosmetic procedures", "Massage therapy", "Hair restoration", "Aesthetic services"]
              },
              {
                icon: Users,
                title: "Lifestyle Services",
                items: ["Fitness memberships", "Personal training", "Nutrition coaching", "Mental health counseling", "Fertility services"]
              }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600 mb-4">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-4 text-gray-900">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-purple-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-gray-900">
              The knit Life Impact
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Real results from life services providers using knit Life
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { metric: "35%", label: "Revenue Growth", description: "More customers can afford your services" },
                { metric: "58%", label: "Faster Collections", description: "Automated payments and upfront funding" },
                { metric: "28%", label: "Higher Case Acceptance", description: "Remove cost barriers to treatment" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-gray-900 mb-2">{stat.metric}</div>
                  <div className="mb-2 text-gray-900">{stat.label}</div>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-left">
                  <h3 className="mb-2 text-gray-900">92% Customer Satisfaction Rate</h3>
                  <p className="text-gray-600">
                    Patients and customers love the flexibility and transparency of knit Life payment plans. 
                    Better payment experiences lead to better reviews, referrals, and retention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-white">
              Ready to Make Your Services More Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of healthcare, funeral, and wellness providers using knit Life to grow their business 
              and help more people access essential services. Book a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gray-900 hover:bg-gray-100 font-medium group"
                onClick={handleDemoClick}
              >
                <span className="text-gray-900">Book a Demo</span>
                <ArrowRight className="ml-2 w-5 h-5 text-gray-900 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-white text-white bg-transparent hover:bg-white/10"
                onClick={() => {
                  window.location.hash = "home";
                  setTimeout(() => {
                    const section = document.getElementById("faq");
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }, 100);
                }}
              >
                View FAQ
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
