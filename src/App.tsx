import React, { useState } from "react";
import { User, Home, RefreshCw, CreditCard, ListChecks, Users, Laptop, Shield, BarChart3 } from "lucide-react";

const PreQualificationPage: React.FC = () => {
  // ─── Content Data ────────────────────────────────────────────────────────────
  const steps = [
    {
      id: 1,
      title: "Pre-qualify",
      description:
        "Complete our simple form with your ID and mobile number to check your eligibility in seconds.",
      icon: <User className="w-10 h-10 text-gray-600" />,
    },
    {
      id: 2,
      title: "School Approval",
      description:
        "We coordinate with your child's school to verify fee details and confirm the arrangement.",
      icon: <Home className="w-10 h-10 text-gray-600" />,
    },
    {
      id: 3,
      title: "Payment Plan",
      description:
        "We pay the school upfront, and you repay us in flexible installments that work with your budget.",
      icon: <RefreshCw className="w-10 h-10 text-gray-600" />,
    },
  ];

  const features = [
    {
      id: 1,
      title: "Instant Pre-qualification",
      description:
        "Get an answer in seconds with just your mobile number and ID. No lengthy paperwork or waiting periods.",
      icon: "⚡",
    },
    {
      id: 2,
      title: "Flexible Repayment",
      description:
        "Choose a repayment schedule that fits your budget, with options for monthly or bi-weekly payments.",
      icon: "📅",
    },
    {
      id: 3,
      title: "No Hidden Fees",
      description:
        "Transparent fee structure with no surprises. Know exactly what you're paying from the start.",
      icon: "🛡️",
    },
    {
      id: 4,
      title: "Keep Children in School",
      description:
        "Ensure your child's education continues uninterrupted while you manage financial challenges.",
      icon: "🎓",
    },
      {
    title: "Guaranteed Cash Flow",
    description:
      "Convert fee arrears into immediate cash flow, with Knit handling the collections process from parents.",
    icon: <CreditCard className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Reduced Workload",
    description:
      "We handle reminders, collections, and reporting, freeing your administrative staff to focus on education.",
    icon: <ListChecks className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Improved Parent Outcomes",
    description:
      "Offer short-term payment plans to prevent defaults and maintain positive relationships with families.",
    icon: <Users className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "No IT Infrastructure Needed",
    description:
      "Maintain your existing invoicing and ledger management while we handle reconciliation to statements automatically.",
    icon: <Laptop className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Full Compliance",
    description:
      "Rest assured with our adherence to South African rules on affordability and collections processes.",
    icon: <Shield className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Detailed Reporting",
    description:
      "Access comprehensive weekly reports and real-time insights through your dedicated school dashboard.",
    icon: <BarChart3 className="w-8 h-8 text-gray-700" />,
  },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent of two",
      rating: 5,
      text: "Knit was a lifesaver when I faced unexpected financial challenges. My children stayed in school, and I was able to pay back the fees on my own terms. The process was incredibly simple.",
      avatar: "👩",
    },
    {
      id: 2,
      name: "Michael Ndlovu",
      role: "School Financial Administrator",
      rating: 5,
      text: "Partnering with Knit has improved our cash flow significantly. We no longer have to chase fee payments, and more students are able to continue their education without interruption.",
      avatar: "👨",
    },
    {
      id: 3,
      name: "David Moyo",
      role: "Single parent",
      rating: 4,
      text: "After losing my job, I was worried about my daughter's education. Knit helped me manage the school fees until I got back on my feet. The pre-qualification was incredibly fast.",
      avatar: "👨",
    },
    {
      id: 4,
      name: "Grace Mabhena",
      role: "School Principal",
      rating: 5,
      text: "Knit has reduced our student dropout rate by helping families manage fee payments. The service is professional, and the upfront payment has helped us improve our school facilities.",
      avatar: "👩",
    },
  ];

  const faqs = [
    {
      q: "How does the pre-qualification process work?",
      a: "Our pre-qualification is simple and quick. You provide your name, surname, mobile number, and ID number. We run a quick check and give you an instant decision on your eligibility for our payment plan.",
    },
    {
      q: "Does my school need to be registered with Knit?",
      a: "We work with most schools, but the process is smoother if your school is already registered with us. If they're not, we can reach out to them as part of your application process.",
    },
    {
      q: "What are the fees and interest rates?",
      a: "Our fees are transparent and competitive. The exact rate depends on your repayment term and amount. You'll see all fees clearly before you commit to anything.",
    },
    {
      q: "How quickly will the school receive payment?",
      a: "Once your application is approved and all agreements are signed, we typically pay the school within 1-2 business days.",
    },
    
  ];

  // simple expand/collapse for FAQ
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formType, setFormType] = useState<"parent" | "school">("parent");


  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ── Navbar ───────────────────────────────────────────────────────────── */}
<header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
    <div className="text-xl font-bold text-gray-900">Knit</div>

    {/* Mobile Menu Button */}
    <div className="md:hidden flex items-center">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="text-gray-600 hover:text-gray-900 focus:outline-none"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    {/* Desktop Navigation Menu */}
    <nav className="hidden md:flex space-x-8 text-gray-600">
      <a href="#features" className="hover:text-gray-900">Why knit</a>
      <a href="#how" className="hover:text-gray-900">How It Works</a>
      <a href="#schools" className="hover:text-gray-900">For Schools</a>
      <a href="#testimonials" className="hover:text-gray-900">For Parents</a>
      <a href="#faq" className="hover:text-gray-900">FAQ</a>
    </nav>

    {/* Desktop Buttons */}
    <div className="flex space-x-4">
      {/* <button className="text-gray-600 hover:text-gray-900">Log In</button> */}
      <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
        Pre-qualify Now
      </button>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  {isMobileMenuOpen && (
    <div className="md:hidden flex flex-col space-y-4 text-gray-600 px-6 py-4">
      <a href="#features" className="hover:text-gray-900">Features</a>
      <a href="#how" className="hover:text-gray-900">How It Works</a>
      <a href="#schools" className="hover:text-gray-900">For Schools</a>
      <a href="#testimonials" className="hover:text-gray-900">For Parents</a>
      <a href="#faq" className="hover:text-gray-900">FAQ</a>
      <div className="flex flex-col space-y-4 mt-4">
        <button className="text-gray-600 hover:text-gray-900">Log In</button>
        <button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Pre-qualify Now
        </button>
      </div>
    </div>
  )}
</header>


      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <main className="flex-1 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 py-12">
        {/* Left copy */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Buy Now, Pay Later for School Fees
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Help your child stay in school while managing your finances. Knit pays the school upfront, you pay us back in flexible installments.
          </p>
          <div className="flex space-x-4">
            <button onClick={() => setFormType("parent")}
              className={`px-6 py-3 rounded-lg shadow transition ${
                formType === "parent"
                ? "bg-gray-800 text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}>
    Pre-qualify Now
  </button>

  <button
    onClick={() => setFormType("school")}
    className={`px-6 py-3 rounded-lg shadow transition ${
      formType === "school"
        ? "bg-gray-800 text-white"
        : "border border-gray-300 text-gray-700 hover:bg-gray-100"
    }`}
  >
    For Schools
  </button>
</div>


          <p className="text-sm text-gray-500 mt-4">
            Free pre-qualification · No obligation · Quick response
          </p>
        </div>

        {/* Right form card */}
        {/* Right form card */}
<div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
  {formType === "parent" ? (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Pre-qualify in seconds
      </h2>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="text"
          placeholder="Enter your mobile number"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="text"
          placeholder="Enter your ID number"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <button
          type="button"
          className="w-full bg-gray-800 text-white py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          Check Eligibility
        </button>
      </form>
    </>
  ) : (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        School Partnership Form
      </h2>
      <form className="space-y-5">
        <input
          type="text"
          placeholder="School Name"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="text"
          placeholder="Contact Person"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="email"
          placeholder="Contact Email"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
        />
        <button
          type="button"
          className="w-full bg-gray-800 text-white py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          Submit Inquiry
        </button>
      </form>
    </>
  )}
</div>

      </main>

      {/* ── Why Choose Knit ──────────────────────────────────────────────────── */}
      {/* ── Features Section (Dynamic) ───────────────────────────── */}
<section id="features" className="bg-gray-50 py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">
      {formType === "school" ? "Why Schools Choose Knit" : "Why Choose Knit"}
    </h2>
    <p className="text-gray-600 mb-12">
      {formType === "school"
        ? "Partner with Knit to transform your school's financial operations and improve parent relationships."
        : "Our features are designed to make school fee payments easier for parents and schools."}
    </p>

    {/* Grid */}
    <div
      className={`grid gap-8 ${
        formType === "school"
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "md:grid-cols-2 text-left"
      }`}
    >
      {features.map((feature, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-2xl shadow-sm border border-gray-100 ${
            formType === "school"
              ? "hover:shadow-md transition text-left"
              : "flex items-start space-x-4"
          }`}
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-2xl">
            {feature.icon}
          </div>
          <div className={formType === "school" ? "" : "ml-2"}>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     

      {/* ── How Knit Works ───────────────────────────────────────────────────── */}
      <section id="how" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Knit Works</h2>
          <p className="text-gray-600 mb-12">
            Our simple process helps parents manage school fees while ensuring schools get paid on time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center border border-gray-100">
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{step.id}. {step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* -------------------for schools page ------------------------------------- */}
        {/* <section id="schools" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center"> */}
        {/* Heading */}
        {/* <h2 className="text-3xl font-bold text-gray-900">
          Why Schools Choose Knit
        </h2>
        <p className="mt-3 text-lg text-gray-600">
          Partner with Knit to transform your school's financial operations and
          improve parent relationships
        </p> */}

        {/* Features Grid */}
        {/* <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-sm border border-gray-100 text-left hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}

      {/* ── Testimonials ─────────────────────────────────────────────────────── */}
      <section id="testimonials" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Parents & Schools Say</h2>
            <p className="text-gray-600 mt-2">
              Hear from parents and schools who have benefited from Knit&apos;s payment solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white rounded-2xl shadow p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-2xl">{t.avatar}</div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-lg ${i < t.rating ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
          {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-gray-700 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Keep Your Child in School?</h2>
          <p className="text-gray-200 mb-8">
            Pre-qualify now and get an instant decision. No obligation to proceed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a  href="#"className="bg-white text-gray-800 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Pre-qualify Now
            </a>
            <button className="border border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section id="faq" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 mb-12">
            Find answers to common questions about Knit's school fee payment solutions.
          </p>

          <div className="space-y-6">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <h3 className="font-semibold text-lg text-gray-900">{faq.q}</h3>
                    <span className="text-gray-400">{open ? "▾" : "▸"}</span>
                  </button>
                  {open && <p className="text-gray-600 text-sm mt-3">{faq.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="bg-[#0f172a] text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="text-white text-2xl font-semibold mb-4">Knit</div>
            <p className="text-sm leading-6">
              Making education accessible through flexible school fee payment solutions.
            </p>
            <div className="flex items-center gap-4 mt-4 text-lg">
              <a href="#" aria-label="Facebook"></a>
              <a href="#" aria-label="Twitter"></a>
              <a href="#" aria-label="Instagram"></a>
              <a href="#" aria-label="LinkedIn"></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              {/* <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#parents" className="hover:text-white">For Parents</a></li>
              <li><a href="#schools" className="hover:text-white">For Schools</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><span>✉️</span> support@knitpay.com</li>
              <li className="flex items-center gap-2"><span>📞</span> +27 10 123 4567</li>
              <li className="flex items-center gap-2"><span>📍</span> 123 Main Street, Johannesburg, South Africa</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-6 text-sm flex flex-col md:flex-row gap-4 md:gap-0 md:items-center md:justify-between">
            <p>© 2025 Knit. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PreQualificationPage;
