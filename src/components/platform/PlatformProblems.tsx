import { AlertCircle, Calendar, DollarSign, Users, BarChart3, Building2, TrendingDown, Shield } from "lucide-react";

export function PlatformProblems() {
  const educationProblems = [
    {
      icon: AlertCircle,
      title: "Poor Enrollment Quality",
      description: "Many schools admit learners from households with limited or unstable financial capacity, leading to chronic non-payment and unsustainable fee books.",
      impact: "60% of enrollments in high-risk categories",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: Calendar,
      title: "Manual, Paper-Based Processes",
      description: "Applications, fee records, and parent information are often managed through physical forms or spreadsheets, resulting in inefficiency, lost data, and compliance risks.",
      impact: "Hours of manual work daily",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: DollarSign,
      title: "Ineffective Payment Methods",
      description: "Most institutions rely on cash deposits or EFTs, which are difficult to track, reconcile, and automate — causing delays in collections and reporting.",
      impact: "40% slower collections",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: Users,
      title: "No Alternative Recovery Mechanisms",
      description: "When parents delay or refuse to pay, schools have limited tools to recover funds efficiently. There's no digital framework for structured repayment, reminders, or escalation.",
      impact: "R millions in unrecovered fees",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: BarChart3,
      title: "Cash Flow Strain and Staff Turnover",
      description: "Irregular collections disrupt cash flow, creating uncertainty in budgeting and contributing to high teacher turnover and underinvestment in school infrastructure.",
      impact: "30% annual staff turnover",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Building2,
      title: "Fraud and Data Integrity Risks",
      description: "Without proper verification systems, schools are vulnerable to falsified records, incorrect parent details, and fraud — all of which undermine financial and reputational stability.",
      impact: "15% fraud rate in applications",
      color: "text-green-600 bg-green-100"
    }
  ];



  return (
    <section id="customer-problems" className="py-16 sm:py-20 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900">
            The Real Cost of Payment Friction
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Educational institutions face systemic challenges that prevent growth, 
            strain operations, and exclude learners who need their services most.
          </p>
        </div>

        {/* Education Problems */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-900">Education Sector Challenges</h3>
              <p className="text-gray-600">Schools, universities, and training providers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationProblems.map((problem, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.color} mb-4`}>
                  <problem.icon className="w-6 h-6" />
                </div>
                <h4 className="mb-2 text-gray-900">{problem.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{problem.description}</p>
                <div className="pt-3 border-t border-gray-100">
                  <div className="text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{problem.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
          <h3 className="text-gray-900 mb-4">
            These problems are solvable
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            knit provides embedded finance infrastructure that addresses each of these challenges 
            through intelligent risk assessment, automated payments, and compliance-ready systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                window.location.hash = "edu";
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore knit Edu Solutions
            </button>
            <button
              onClick={() => {
                window.location.hash = "home";
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
              className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
