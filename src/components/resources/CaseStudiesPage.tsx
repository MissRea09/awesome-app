import * as React from "react";
import { Button } from "../custom/Button";
import { CheckCircle2, TrendingUp, Users, DollarSign, ArrowUp, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

interface MetricCardProps {
  result: {
    metric: string;
    label: string;
    icon: any;
    before?: number;
    after?: number;
    isPositive: boolean;
    isInverted?: boolean;
    showProgress: boolean;
    progressColor: string;
    sublabel?: string;
  };
  index: number;
}

function MetricCard({ result, index }: MetricCardProps) {
  const Icon = result.icon;
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const progressPercentage = result.showProgress && result.after !== undefined
    ? result.isInverted && result.before !== undefined
      ? ((result.before - result.after) / result.before) * 100
      : result.after
    : 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative bg-white rounded-2xl p-7 border-2 border-gray-200 hover:border-gray-900 hover:shadow-2xl transition-all group overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
      
      {/* Icon */}
      <div className="relative z-10 mb-5">
        <div className="inline-flex p-3 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors">
          <Icon className="w-7 h-7 text-gray-600 group-hover:text-gray-900 transition-colors" />
        </div>
      </div>

      {/* Before/After Indicator */}
      {result.showProgress && result.before !== undefined && result.after !== undefined && (
        <div className="relative z-10 mb-3 flex items-center gap-2 text-sm">
          <span className="text-gray-500">
            {result.isInverted ? "Was" : "From"} {result.before}%
          </span>
          {result.isInverted ? (
            <ArrowDown className="w-4 h-4 text-green-600" />
          ) : (
            <ArrowUp className="w-4 h-4 text-green-600" />
          )}
          <span className="text-gray-900">
            {result.isInverted ? "Down to" : "To"} {result.after}%
          </span>
        </div>
      )}

      {/* Main Metric */}
      <div className="relative z-10 mb-3">
        <div className="text-4xl sm:text-5xl text-gray-900 leading-none mb-2 group-hover:scale-105 transition-transform origin-left">
          {result.metric}
        </div>
        {result.sublabel && (
          <div className="text-sm text-gray-500 mt-1.5">{result.sublabel}</div>
        )}
      </div>

      {/* Label */}
      <div className="relative z-10 text-gray-700 leading-snug mb-5">
        {result.label}
      </div>

      {/* Progress Bar */}
      {result.showProgress && (
        <div className="relative z-10">
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={isVisible ? { width: `${progressPercentage}%` } : { width: 0 }}
              transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              className={`h-full ${result.progressColor} rounded-full shadow-sm`}
            />
          </div>
          <div className="mt-2 text-sm text-gray-600 text-right">
            {Math.round(progressPercentage)}% {result.isInverted ? "reduction" : "achieved"}
          </div>
        </div>
      )}

      {/* Positive Indicator Badge */}
      {result.isPositive && !result.showProgress && (
        <div className="relative z-10 inline-flex items-center gap-1 px-2 py-1 bg-green-50 rounded-full">
          <ArrowUp className="w-3 h-3 text-green-600" />
          <span className="text-xs text-green-700">Growth</span>
        </div>
      )}
    </motion.div>
  );
}

export function CaseStudiesPage() {
  const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, eventData);
    }
  };

  const handleCTAClick = (ctaLocation: string) => {
    trackEvent("cta_click", {
      cta_type: "book_demo",
      cta_location: ctaLocation,
      page: "case_studies",
    });
    
    // First navigate to home
    window.location.hash = "home";
    
    // Wait for route change and DOM update, then scroll to contact
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
  };

  const caseStudies = [
    {
      id: 1,
      vertical: "knit Edu",
      logo: "🎓",
      image: "https://images.unsplash.com/photo-1702952058716-1496a3c1e7f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjYW1wdXN8ZW58MXx8fHwxNzYxODI0OTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Modern school campus with students",
      title: "Premier Independent School",
      subtitle: "K-12 Private School, Johannesburg",
      challenge: "The school faced declining enrollment due to upfront tuition payment requirements and struggled with 32% late payments, impacting operational cash flow and causing administrative burden.",
      solution: "Implemented knit Edu's flexible payment plans with automated collections, real-time credit decisioning, and integrated billing system.",
      results: [
        { 
          metric: "23%", 
          label: "Increase in enrollment", 
          icon: Users,
          before: 0,
          after: 23,
          isPositive: true,
          showProgress: true,
          progressColor: "bg-green-500"
        },
        { 
          metric: "40%", 
          label: "Improvement in collections", 
          icon: TrendingUp,
          before: 68,
          after: 95,
          isPositive: true,
          showProgress: true,
          progressColor: "bg-blue-500"
        },
        { 
          metric: "R 2.4M", 
          label: "Additional annual revenue", 
          icon: DollarSign,
          sublabel: "per year",
          isPositive: true,
          showProgress: false,
          progressColor: "bg-green-500"
        },
        { 
          metric: "< 5%", 
          label: "Portfolio loss rate", 
          icon: CheckCircle2,
          before: 12,
          after: 5,
          isPositive: true,
          isInverted: true,
          showProgress: true,
          progressColor: "bg-green-500"
        },
      ],
      testimonial: {
        quote: "knit transformed our enrollment process. Families who previously couldn't afford our school now have access to quality education through flexible payment options. Our cash flow has never been better.",
        author: "Thandi Naidoo",
        position: "Bursar",
      },
      timeline: "Results achieved within 6 months of implementation",
    },
    {
      id: 2,
      vertical: "knit Life",
      logo: "🏥",
      image: "https://images.unsplash.com/photo-1758691463333-c79215e8bc3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwY2xpbmljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxNzMwNzkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      imageAlt: "Professional medical clinic interior",
      title: "CareWell Medical Centre",
      subtitle: "Multi-specialty Healthcare Provider, Cape Town",
      challenge: "High out-of-pocket costs prevented patients from accessing necessary treatments. 40% of patients delayed or cancelled procedures due to payment concerns, leading to poor health outcomes and lost revenue.",
      solution: "Deployed knit Life's point-of-care financing with instant approvals, flexible repayment terms, and integrated EMR system for seamless patient experience.",
      results: [
        { 
          metric: "65%", 
          label: "Increase in elective procedures", 
          icon: TrendingUp,
          before: 0,
          after: 65,
          isPositive: true,
          showProgress: true,
          progressColor: "bg-blue-500"
        },
        { 
          metric: "85%", 
          label: "Instant approval rate", 
          icon: CheckCircle2,
          before: 0,
          after: 85,
          isPositive: true,
          showProgress: true,
          progressColor: "bg-green-500"
        },
        { 
          metric: "R 1.8M", 
          label: "Monthly additional revenue", 
          icon: DollarSign,
          sublabel: "per month",
          isPositive: true,
          showProgress: false,
          progressColor: "bg-green-500"
        },
        { 
          metric: "4.2%", 
          label: "Default rate", 
          icon: Users,
          before: 8.5,
          after: 4.2,
          isPositive: true,
          isInverted: true,
          showProgress: true,
          progressColor: "bg-green-500"
        },
      ],
      testimonial: {
        quote: "Our patients no longer have to choose between their health and their finances. knit Life enabled us to say 'yes' to more treatments while maintaining excellent portfolio performance.",
        author: "Dr. Thabo Maseko",
        position: "Medical Director",
      },
      timeline: "Results achieved within 4 months of implementation",
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
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Customer Success Stories</span>
              </div>
              <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl">
                Real Results from <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Real Customers</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover how education and life services providers are transforming their businesses with knit's embedded finance solutions
              </p>
            </motion.div>

            {/* Quick Stats Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl text-white mb-2">40%+</div>
                <div className="text-sm text-gray-300">Collection Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl text-white mb-2">&lt; 5%</div>
                <div className="text-sm text-gray-300">Portfolio Loss</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="text-3xl sm:text-4xl text-white mb-2">3 Months</div>
                <div className="text-sm text-gray-300">Average Time to Results</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {caseStudies.map((study, index) => {
              const isEven = index % 2 === 0;
              // Alternating color schemes
              const headerGradient = isEven 
                ? 'bg-gradient-to-br from-gray-900 to-gray-700' 
                : 'bg-gradient-to-br from-blue-900 to-blue-700';
              
              return (
                <React.Fragment key={study.id}>
                <motion.article
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  {/* Hero Image & Header - Alternating Layout */}
                  <div className={`grid lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 sm:h-80 lg:h-full min-h-[400px] ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <ImageWithFallback
                        src={study.image}
                        alt={study.imageAlt}
                        className="w-full h-full object-cover"
                      />
                      {/* Desktop Image Overlay with directional gradient */}
                      <div className={`hidden lg:block absolute inset-0 ${
                        isEven 
                          ? 'bg-gradient-to-r from-gray-900/40 via-transparent to-transparent' 
                          : 'bg-gradient-to-l from-blue-900/40 via-transparent to-transparent'
                      }`}></div>
                      {/* Mobile gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent lg:hidden"></div>
                      
                      {/* Mobile Badge */}
                      <div className="absolute top-6 left-6 lg:hidden">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                          <span className="text-2xl">{study.logo}</span>
                          <span className="text-sm text-gray-900">{study.vertical}</span>
                        </div>
                      </div>

                      {/* Decorative Corner Element */}
                      <div className={`hidden lg:block absolute ${isEven ? 'bottom-0 right-0' : 'bottom-0 left-0'} w-32 h-32 ${
                        isEven ? 'bg-green-500/20' : 'bg-blue-500/20'
                      } rounded-tl-full`}></div>
                    </div>

                    {/* Header Content */}
                    <div className={`${headerGradient} px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''} relative overflow-hidden`}>
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className={`absolute ${isEven ? 'top-0 right-0' : 'top-0 left-0'} w-64 h-64 ${
                          isEven ? 'bg-green-500' : 'bg-blue-500'
                        } rounded-full blur-3xl`}></div>
                      </div>

                      {/* Desktop Badge */}
                      <div className="hidden lg:flex items-center gap-3 mb-6 relative z-10">
                        <span className="text-4xl">{study.logo}</span>
                        <div className={`inline-flex items-center gap-2 px-4 py-2 ${
                          isEven ? 'bg-green-500/20' : 'bg-blue-500/20'
                        } backdrop-blur-sm rounded-full border ${
                          isEven ? 'border-green-400/30' : 'border-blue-400/30'
                        }`}>
                          <span className="text-sm text-white">{study.vertical}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-white mb-4 relative z-10 text-3xl sm:text-4xl lg:text-5xl">{study.title}</h2>
                      <p className="text-xl sm:text-2xl text-gray-200 mb-8 relative z-10 leading-relaxed">{study.subtitle}</p>
                      
                      {/* Quick Stats */}
                      <div className={`flex flex-wrap gap-4 pt-6 border-t ${
                        isEven ? 'border-green-400/20' : 'border-blue-400/20'
                      } relative z-10`}>
                        <div className="flex items-center gap-2 text-white/90">
                          <CheckCircle2 className={`w-5 h-5 ${
                            isEven ? 'text-green-400' : 'text-blue-400'
                          }`} />
                          <span className="text-sm">{study.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16 ${
                    !isEven ? 'bg-gradient-to-b from-blue-50/30 to-white' : ''
                  }`}>
                    {/* Challenge & Solution - Alternating Order */}
                    <div className="mb-16 lg:mb-20">
                      <div className="flex items-center gap-4 mb-10">
                        <div className={`w-1 h-12 rounded-full ${
                          isEven ? 'bg-gradient-to-b from-red-500 to-green-500' : 'bg-gradient-to-b from-orange-500 to-blue-500'
                        }`}></div>
                        <h3 className="text-gray-900 text-2xl sm:text-3xl">The Story</h3>
                      </div>
                      
                      <div className={`grid md:grid-cols-2 gap-8 lg:gap-12 ${
                        !isEven ? 'md:grid-flow-dense' : ''
                      }`}>
                        <div className={`space-y-5 ${!isEven ? 'md:col-start-2' : ''}`}>
                          <div className={`inline-flex items-center gap-2.5 px-4 py-2 ${
                            isEven ? 'bg-red-50 border-2 border-red-100' : 'bg-orange-50 border-2 border-orange-100'
                          } rounded-xl`}>
                            <span className={`w-2.5 h-2.5 ${
                              isEven ? 'bg-red-500' : 'bg-orange-500'
                            } rounded-full animate-pulse`}></span>
                            <span className={`${
                              isEven ? 'text-red-700' : 'text-orange-700'
                            }`}>The Challenge</span>
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">{study.challenge}</p>
                        </div>

                        <div className={`space-y-5 ${!isEven ? 'md:col-start-1' : ''}`}>
                          <div className={`inline-flex items-center gap-2.5 px-4 py-2 ${
                            isEven ? 'bg-green-50 border-2 border-green-100' : 'bg-blue-50 border-2 border-blue-100'
                          } rounded-xl`}>
                            <CheckCircle2 className={`w-4 h-4 ${
                              isEven ? 'text-green-600' : 'text-blue-600'
                            }`} />
                            <span className={`${
                              isEven ? 'text-green-700' : 'text-blue-700'
                            }`}>The Solution</span>
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">{study.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className={`mb-16 lg:mb-20 rounded-3xl p-8 lg:p-10 ${
                      isEven 
                        ? 'bg-gradient-to-br from-green-50 via-gray-50 to-green-50' 
                        : 'bg-gradient-to-br from-blue-50 via-gray-50 to-blue-50'
                    }`}>
                      <div className="flex items-center gap-4 mb-10">
                        <div className={`p-3 rounded-xl ${
                          isEven ? 'bg-green-100' : 'bg-blue-100'
                        }`}>
                          <TrendingUp className={`w-7 h-7 ${
                            isEven ? 'text-green-700' : 'text-blue-700'
                          }`} />
                        </div>
                        <div>
                          <h3 className="text-gray-900 text-2xl sm:text-3xl mb-1">Measurable Results</h3>
                          <p className="text-gray-600">Data-driven impact metrics</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                        {study.results.map((result, idx) => (
                          <MetricCard key={idx} result={result} index={idx} />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial - Alternating Styles */}
                    <div className="mb-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-3 rounded-xl ${
                          isEven ? 'bg-gray-100' : 'bg-blue-100'
                        }`}>
                          <Users className={`w-6 h-6 ${
                            isEven ? 'text-gray-700' : 'text-blue-700'
                          }`} />
                        </div>
                        <h3 className="text-gray-900 text-2xl sm:text-3xl">Customer Testimonial</h3>
                      </div>
                      
                      <div className={`relative rounded-3xl p-8 lg:p-12 border-2 ${
                        isEven 
                          ? 'bg-gradient-to-br from-gray-50 to-white border-gray-200 shadow-xl' 
                          : 'bg-gradient-to-br from-blue-50 to-white border-blue-200 shadow-xl'
                      }`}>
                        <div className={`absolute ${isEven ? 'top-8 left-8' : 'top-8 right-8'} text-8xl ${
                          isEven ? 'text-gray-200' : 'text-blue-200'
                        } leading-none opacity-50`}>{isEven ? '"' : '"'}</div>
                        <div className="relative z-10">
                          <p className={`text-xl lg:text-2xl text-gray-800 mb-8 ${
                            isEven ? 'pl-12' : 'pr-12'
                          } leading-relaxed ${!isEven ? 'text-right' : ''}`}>
                            {study.testimonial.quote}
                          </p>
                          <div className={`flex items-center gap-5 ${
                            isEven ? 'pl-12' : 'pr-12 justify-end'
                          }`}>
                            <div className={`${!isEven ? 'order-2' : ''}`}>
                              <div className={`text-gray-900 text-lg mb-1 ${!isEven ? 'text-right' : ''}`}>
                                {study.testimonial.author}
                              </div>
                              <div className={`text-gray-600 ${!isEven ? 'text-right' : ''}`}>
                                {study.testimonial.position} • {study.title}
                              </div>
                            </div>
                            <div className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                              isEven 
                                ? 'bg-gradient-to-br from-gray-400 to-gray-500' 
                                : 'bg-gradient-to-br from-blue-400 to-blue-600'
                            } ${!isEven ? 'order-1' : ''}`}>
                              <Users className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>

                {/* Divider between case studies */}
                {index < caseStudies.length - 1 && (
                  <div className="py-16 lg:py-20 flex flex-col items-center justify-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-20 h-1.5 rounded-full ${
                        isEven ? 'bg-gradient-to-r from-transparent via-green-400 to-green-400' : 'bg-gradient-to-r from-transparent via-blue-400 to-blue-400'
                      }`}></div>
                      <div className={`w-4 h-4 rounded-full shadow-lg ${
                        isEven ? 'bg-green-500' : 'bg-blue-500'
                      } animate-pulse`}></div>
                      <div className={`w-20 h-1.5 rounded-full ${
                        !isEven ? 'bg-gradient-to-l from-transparent via-green-400 to-green-400' : 'bg-gradient-to-l from-transparent via-blue-400 to-blue-400'
                      }`}></div>
                    </div>
                    <div className="text-gray-400 text-sm tracking-wider uppercase">Next Success Story</div>
                  </div>
                )}
              </React.Fragment>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join these successful organizations and discover how knit can help you improve collections, increase revenue, and better serve your customers.
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => handleCTAClick("case_studies_bottom")}
            >
              Book Your Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
