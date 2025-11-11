import { Button } from "./custom/Button";
import { ArrowRight, CreditCard, GraduationCap, TrendingUp } from "lucide-react";
import heroImage from "figma:asset/5de9b524d3f8189225b5c26d6dc8e0a9c2e31786.png";

export function Hero() {
  const handlePageNavigation = (page: string) => {
    // GA4 tracking
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "CTA",
        event_label: `Explore knit ${page === 'edu' ? 'Edu' : 'Life'} - Hero`,
      });
    }
    window.location.hash = page;
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[40%_60%] gap-8 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6 animate-slide-down">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm">Embedded Finance SaaS Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-gray-900 text-5xl lg:text-6xl">
              Turn unpaid fees into growth
            </h1>

            {/* Subtext */}
            <p className="text-2xl lg:text-3xl text-gray-900 mb-10 lg:max-w-xl">
              knit helps schools and service providers collect more, faster — securely and seamlessly.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-12">
              <Button 
                size="lg"
                onClick={() => handlePageNavigation('edu')}
                className="bg-gray-900 hover:bg-gray-800 hover:shadow-lg w-full sm:w-auto group transition-all"
              >
                Explore knit Edu
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => handlePageNavigation('life')}
                className="w-full sm:w-auto group hover:bg-gray-50 transition-all"
              >
                Explore knit Life
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>NCR Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Bank-Grade Security</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visuals */}
          <div className="relative hidden lg:block">
            {/* Main dashboard image */}
            <img
              src={heroImage}
              alt="knit: Bridging Institutions & Families - Seamless Financial Flow. Secure Futures"
              className="w-full h-auto scale-125 animate-slide-down"
            />

            {/* Floating card 1 - Payment stats */}
            <div className="absolute left-4 top-2 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Collection Rate</div>
                  <div className="text-green-600">+40%</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 - Education */}
            <div className="absolute -right-8 top-1/3 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Active Students</div>
                  <div className="text-blue-600">500K+</div>
                </div>
              </div>
            </div>

            {/* Floating card 3 - Payment */}
            <div className="absolute left-1/4 -bottom-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Portfolio Loss</div>
                  <div className="text-purple-600">&lt; 5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 1.2s ease-out;
        }
      `}</style>
    </section>
  );
}