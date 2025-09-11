import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mary Johnson",
    role: "Parent of two",
    rating: 5,
    text: "Knit was a lifesaver when I faced unexpected financial challenges. My children stayed in school, and I was able to pay back the fees on my own terms. The process was incredibly simple.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michelle Ndlovu",
    role: "School Financial Administrator",
    rating: 5,
    text: "Partnering with Knit has improved our cash flow significantly. We no longer have to chase fee payments, and more students are able to continue their education without interruption.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Iminathi Mahlangu",
    role: "Single parent",
    rating: 4,
    text: "After losing my job, I was worried about my daughter's education. Knit helped me manage the school fees until I got back on my feet. The pre-qualification was incredibly fast.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    name: "Grace Mabhena",
    role: "School Principal",
    rating: 5,
    text: "Knit has reduced our student dropout rate by helping families manage fee payments. The service is professional, and the upfront payment has helped us improve our school facilities.",
    img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Grace",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          What Parents & Schools Say
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Hear from parents and schools who have benefited from Knit&apos;s
          payment solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border"
                />
                <div>
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
