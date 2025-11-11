import { Button } from "./custom/Button";
import { ArrowRight, GraduationCap, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Verticals() {
  const handleNavClick = (href: string) => {
    window.location.hash = href;
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="mb-4 text-gray-900">
            Purpose-Built Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized embedded finance for education and life services
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* knit Edu */}
          <div id="edu" className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all scroll-mt-20">
            <div className="aspect-[16/9] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758270704524-596810e891b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3NjExNjI5Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 mb-4">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="mb-3 text-gray-900">
                knit Edu
              </h3>
              <p className="text-gray-600 mb-6">
                Flexible tuition payment solutions for schools, universities, and training providers. 
                Increase enrollment, improve cash flow, and reduce administrative burden with our 
                embedded finance platform designed specifically for education.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Customizable payment plans",
                  "Automated collections & reminders",
                  "Real-time enrollment analytics",
                  "Seamless SIS integration"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full group"
                onClick={() => handleNavClick('edu')}
              >
                Learn More About knit Edu
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* knit Life */}
          <div id="life" className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all scroll-mt-20">
            <div className="aspect-[16/9] relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758887248912-03a0c34a2f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2VsbG5lc3MlMjBzZXJ2aWNlc3xlbnwxfHx8fDE3NjEyMTk5Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Life Services"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 mb-4">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="mb-3 text-gray-900">
                knit Life
              </h3>
              <p className="text-gray-600 mb-6">
                Payment solutions for healthcare, wellness, and essential life services. 
                Enable your customers to access critical services with flexible financing 
                that improves affordability and provider revenue.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Healthcare payment plans",
                  "Wellness & fitness financing",
                  "Predictable revenue streams",
                  "Patient-friendly terms"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full group hover:bg-gray-50"
                variant="outline"
                onClick={() => handleNavClick('life')}
              >
                Learn More About knit Life
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
