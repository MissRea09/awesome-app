import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Thandi Naidoo",
      role: "Director of Finance, Pine Valley Academy",
      content: "knit has transformed how we handle tuition payments. Our collection rates improved by 35% in the first semester, and parents love the flexibility.",
      rating: 5,
      initials: "TN",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Sizwe Dlamini",
      role: "CFO, Sunshine Childcare Network",
      content: "The integration was seamless and the support team was incredible. We've reduced payment friction and seen a significant decrease in late payments.",
      rating: 5,
      initials: "SD",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Lerato Molefe",
      role: "Parent",
      content: "As a working parent, having flexible payment options for my daughter's preschool has been a lifesaver. The process is simple and transparent.",
      rating: 5,
      initials: "LM",
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Pieter van der Merwe",
      role: "Administrator, Lakeside Senior Living",
      content: "knit Life has helped our residents and their families manage care costs with dignity and flexibility. The platform is user-friendly for all ages.",
      rating: 5,
      initials: "PM",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50 scroll-mt-20 overflow-hidden">
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
        
        .testimonial-card {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .testimonial-card:nth-child(1) { animation-delay: 0.1s; }
        .testimonial-card:nth-child(2) { animation-delay: 0.2s; }
        .testimonial-card:nth-child(3) { animation-delay: 0.3s; }
        .testimonial-card:nth-child(4) { animation-delay: 0.4s; }
        
        .testimonial-card:hover .avatar {
          transform: scale(1.1);
        }
        
        .avatar {
          transition: transform 0.3s ease;
        }
      `}</style>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Join hundreds of satisfied providers and families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 h-full relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-blue-500 opacity-50" />
                  </div>
                  
                  {/* Star rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial content */}
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author info with avatar */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <div className={`avatar w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                      <span className="text-lg">{testimonial.initials}</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
