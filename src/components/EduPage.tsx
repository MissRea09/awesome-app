import { Button } from "./custom/Button";
import { ArrowRight, GraduationCap, TrendingUp, Shield, Calendar, DollarSign, Users, BarChart3, CheckCircle, Building2, AlertCircle, Monitor } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import eduHeroImage from "figma:asset/e2ce5202ba48923fe5b823d836f97f88988530a7.png";
import solutionImage1 from "figma:asset/7b1c91e495805dec821a073792e7419e52b19a4d.png";
import solutionImage2 from "figma:asset/680215a78a0930bec577953f7cf86d3a9ad888be.png";
import solutionImage3 from "figma:asset/d0f17f0a4c75c83f65a7a9394f982b9cb7f18599.png";
import solutionImage4 from "figma:asset/aad27d1756e22d5cfd3d85ceb592b2150b2d6821.png";

export function EduPage() {
  const handleDemoClick = () => {
    // GA4 tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "CTA",
        event_label: "Book Demo - knit Edu",
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
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
                <GraduationCap className="w-4 h-4" />
                <span className="text-sm">For Educational Institutions</span>
              </div>
              <h1 className="mb-6 text-gray-1000">
                Empowering schools to get paid on time
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                knit improves the screening and collection capabilities and basic and higher education institutions. Increase and improve enrollment, improve cash flow, and reduce 
                administrative burden with embedded finance built for education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gray-900 hover:bg-gray-800"
                  onClick={handleDemoClick}
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => {
                    const section = document.getElementById("edu-solutions");
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
                  <div className="text-gray-900 mb-1">40%</div>
                  <div className="text-sm text-gray-600">Collection Improvement</div>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">{"<"}5%</div>
                  <div className="text-sm text-gray-600">Portfolio Loss</div>
                </div>
                <div>
                  <div className="text-gray-900 mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Automated Support</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={eduHeroImage}
                  alt="knit Edu enrollment application interface showing student and guardian information progress"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-gray-900">Up to 40%</div>
                    <div className="text-sm text-gray-600">collection improvement</div>
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
              The Tuition Payment Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Educational institutions face unique financial barriers that impact enrollment and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertCircle,
                title: "Poor Enrollment Quality",
                description: "Many schools admit learners from households with limited or unstable financial capacity, leading to chronic non-payment and unsustainable fee books.",
                color: "text-red-600 bg-red-100"
              },
              {
                icon: Calendar,
                title: "Manual, Paper-Based Processes",
                description: "Applications, fee records, and parent information are often managed through physical forms or spreadsheets, resulting in inefficiency, lost data, and compliance risks.",
                color: "text-orange-600 bg-orange-100"
              },
              {
                icon: DollarSign,
                title: "Ineffective Payment Methods",
                description: "Most institutions rely on cash deposits or EFTs, which are difficult to track, reconcile, and automate — causing delays in collections and reporting.",
                color: "text-yellow-600 bg-yellow-100"
              },
              {
                icon: Users,
                title: "No Alternative Recovery Mechanisms",
                description: "When parents delay or refuse to pay, schools have limited tools to recover funds efficiently. There’s no digital framework for structured repayment, reminders, or escalation.",
                color: "text-blue-600 bg-blue-100"
              },
              {
                icon: BarChart3,
                title: "Cash Flow Strain and Staff Turnover",
                description: "Irregular collections disrupt cash flow, creating uncertainty in budgeting and contributing to high teacher turnover and underinvestment in school infrastructure.",
                color: "text-purple-600 bg-purple-100"
              },
              {
                icon: Building2,
                title: "Fraud and Data Integrity Risks",
                description: "Without proper verification systems, schools are vulnerable to falsified records, incorrect parent details, and fraud — all of which undermine financial and reputational stability.",
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
      <section id="edu-solutions" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-gray-900">
              The knit Edu Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built embedded finance platform that solves education-specific payment challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={solutionImage1}
                  alt="knit financing options interface showing affordability assessment with flexible payment plans for education and funeral costs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="mb-6 text-gray-900">
                Flexible Learn Now Pay Later Payment Plans
              </h3>
              <div className="space-y-4">
                {[
                  "Learn Now, Pay Later (LNPL) options to make education more accessible",
                  "Customizable payment schedules aligned with semester or program timelines",
                  "Zero-interest and low-interest financing options",
                  "Instant approval process that doesn't delay enrollment decisions",
                  
                  "Support for full-time, part-time, and continuing education programs"
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
            <div className="order-2 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={solutionImage2}
                  alt="Streamlined data entry showing effortless academic history for enrollment in knit application"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-1">
              <h3 className="mb-6 text-gray-900">
                Streamlined Data Entry
              </h3>
              <div className="space-y-4">
                {[
                  "Effortless academic history capture for enrollment",
                  "Automated data validation and verification",
                  "Seamless integration with student information systems",
                  "Previous school details and performance tracking",
                  "Instant verification and approval workflows",
                  "Simplified onboarding for families"
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
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={solutionImage3}
                  alt="Seamless submission and confirmation interface showing risk assessment with instant enrollment verification"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="mb-6 text-gray-900">
                Real-Time Dashboards & Analytics
              </h3>
              <div className="space-y-4">
                {[
                  "Live payment tracking and cash flow forecasting",
                  
                  "Enrollment and collection rate analytics",
                  "Risk assessment and portfolio health monitoring",
                  "Automated reporting for management and board presentations",
                  "Export capabilities for external systems and audits"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="mb-6 text-gray-900">
                Seamless SIS & LMS Integration
              </h3>
              <div className="space-y-4">
                {[
                  "Direct integration with Blackbaud, Ellucian, Canvas, and other major platforms",
                  "Real-time enrollment and payment data synchronization",
                  "Automated account creation and student onboarding",
                  "RESTful API for custom integrations and workflows",
                  "Webhook support for event-driven automation"
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
                <img
                  src={solutionImage4}
                  alt="Secure and compliant onboarding with instant verification for enrollment and services showing risk assessment interface"
                  className="w-full h-full object-cover"
                />
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="mb-4 text-gray-900">
                Enterprise-Grade Security & Compliance
              </h2>
              <p className="text-xl text-gray-600">
                knit Edu meets the highest standards for data protection and regulatory compliance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4 text-gray-900">Security Standards</h3>
                  <ul className="space-y-3">
                    {[
                      "SOC 2 Type II certified",
                      "PCI DSS Level 1 compliant",
                      "256-bit encryption for data at rest and in transit",
                      "Regular third-party security audits",
                      "DDoS protection and WAF"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4 text-gray-900">Regulatory Compliance</h3>
                  <ul className="space-y-3">
                    {[
                      "NCR (National Credit Regulator) registered",
                      "POPIA (Protection of Personal Information Act) compliant",
                      "FERPA compliant for student data protection",
                      "GDPR and CCPA privacy controls",
                      "Truth in Lending Act (TILA) disclosures"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
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
              Built for Every Type of Educational Institution
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible solutions that adapt to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "K-12 Schools",
                items: ["Tuition & fees", "Extended day programs", "Summer camps", "Equipment & uniforms"]
              },
              {
                title: "Higher Education",
                items: ["Semester tuition", "Housing & meal plans", "Study abroad programs", "Lab fees & materials"]
              },
              {
                title: "Professional Training",
                items: ["Certification programs", "Boot camps", "Continuing education", "Corporate training"]
              },
              {
                title: "Online Learning",
                items: ["Course bundles", "Subscription models", "Micro-credentials", "Platform access fees"]
              }
            ].map((useCase, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="mb-4 text-gray-900">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-gray-600">
                      <span className="text-blue-600 mt-1">•</span>
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
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4 text-gray-900">
              The knit Edu Impact
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Real results from educational institutions using knit Edu
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { metric: "40%", label: "Increase in Collection Rates", description: "Automated reminders and flexible payment terms" },
                { metric: "23%", label: "Growth in Enrollment", description: "Remove financial barriers to access" },
                { metric: "15 hrs", label: "Saved Per Week", description: "Reduce manual payment administration" }
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
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="mb-2 text-gray-900">Average First-Year ROI: 312%</h3>
                  <p className="text-gray-600">
                    Based on improved enrollment conversion, reduced administrative costs, and better collection rates. 
                    Most institutions see payback within the first semester.
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
              Ready to Transform Your Tuition Payments?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of educational institutions using knit Edu to increase enrollment 
              and improve cash flow. Book a personalized demo today.
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