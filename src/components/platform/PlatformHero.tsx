import { Button } from "../custom/Button";
import { ArrowRight, TrendingDown, AlertCircle, DollarSign } from "lucide-react";
import heroImage from "figma:asset/f9b3fa32154fd8574ba2edd97d94ac6adca15f70.png";

interface PlatformHeroProps {
  onCTAClick: (label: string) => void;
}

export function PlatformHero({ onCTAClick }: PlatformHeroProps) {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 mb-6 animate-slide-down">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm">Understanding the Challenge</span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-gray-900 text-5xl lg:text-6xl">
              The Hidden Cost of Financial Barriers
            </h1>

            {/* Subtext */}
            <p className="text-2xl lg:text-3xl text-gray-900 mb-10 lg:max-w-xl">
              Schools and service providers lose revenue daily due to preventable payment friction and poor financial risk assessment.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-12">
              <Button 
                size="lg"
                onClick={() => onCTAClick("See Our Solutions")}
                className="bg-gray-900 hover:bg-gray-800 hover:shadow-lg w-full sm:w-auto group transition-all"
              >
                See Our Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => {
                  const problemsSection = document.getElementById("customer-problems");
                  if (problemsSection) {
                    problemsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto group hover:bg-gray-50 transition-all"
              >
                Explore the Problems
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">60% high-risk enrollments</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">38% treatment abandonment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">R millions in arrears</span>
              </div>
            </div>
          </div>

          {/* Right Column - Risk Band Chart */}
          <div className="relative hidden lg:flex lg:justify-center lg:items-start">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-down p-6 max-w-lg">
              <img 
                src={heroImage} 
                alt="Anonymised risk band of a typical schools' debt book"
                className="w-full h-auto"
              />
            </div>

            {/* Floating card 1 - High Risk */}
            <div className="absolute left-0 top-2 bg-white rounded-xl shadow-xl p-3 border border-red-200 animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">High Risk</div>
                  <div className="text-sm text-red-600">60% of debt</div>
                </div>
              </div>
            </div>

            {/* Floating card 2 - Defaults */}
            <div className="absolute -right-4 top-1/3 bg-white rounded-xl shadow-xl p-3 border border-orange-200 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Payment Default</div>
                  <div className="text-sm text-orange-600">38% rate</div>
                </div>
              </div>
            </div>

            {/* Floating card 3 - Revenue Loss */}
            <div className="absolute left-1/4 -bottom-4 bg-white rounded-xl shadow-xl p-3 border border-yellow-200 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Arrears Impact</div>
                  <div className="text-sm text-yellow-600">R millions</div>
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
