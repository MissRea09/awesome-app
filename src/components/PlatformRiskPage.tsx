import { Button } from "./custom/Button";
import { ArrowRight, Brain, Database, BarChart2, Activity, CheckCircle, FileText, TrendingUp, Shield, Eye } from "lucide-react";

export function PlatformRiskPage() {
  const handleCTAClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "click", {
        event_category: "CTA",
        event_label: label,
      });
    }
    window.location.hash = "home";
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const dataInputs = [
    {
      icon: Database,
      title: "Bureau Data",
      color: "bg-blue-100 text-blue-600",
      description: "Credit history, payment patterns, and bureau scores",
      features: [
        "CIBIL, Experian, Equifax integration",
        "Credit utilization analysis",
        "Delinquency tracking",
        "Multi-bureau score aggregation"
      ]
    },
    {
      icon: BarChart2,
      title: "Bank Statement Analysis",
      color: "bg-purple-100 text-purple-600",
      description: "Cash flow patterns and financial behavior",
      features: [
        "Income stability detection",
        "Expense categorization",
        "Bounce rate analysis",
        "Cash flow volatility metrics"
      ]
    },
    {
      icon: Activity,
      title: "Behavioral Analytics",
      color: "bg-green-100 text-green-600",
      description: "Application and interaction patterns",
      features: [
        "Device fingerprinting",
        "Application completion time",
        "Form interaction patterns",
        "Historical repayment behavior"
      ]
    }
  ];

  const riskMetrics = [
    {
      metric: "PD",
      fullName: "Probability of Default",
      description: "Likelihood of borrower defaulting within 12 months",
      icon: TrendingUp,
      color: "text-red-600",
      bgColor: "bg-red-50",
      example: "12.5%"
    },
    {
      metric: "LGD",
      fullName: "Loss Given Default",
      description: "Expected loss percentage if default occurs",
      icon: BarChart2,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      example: "45.0%"
    },
    {
      metric: "EAD",
      fullName: "Exposure at Default",
      description: "Outstanding amount at time of default",
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      example: "R85,000"
    }
  ];

  const explainabilityFeatures = [
    {
      title: "SHAP Values",
      description: "Feature importance and contribution to final decision",
      icon: Brain
    },
    {
      title: "Decision Trees",
      description: "Visual representation of decision pathways",
      icon: Activity
    },
    {
      title: "Reason Codes",
      description: "Top factors driving approval or rejection",
      icon: FileText
    },
    {
      title: "Adverse Action Notices",
      description: "Regulatory-compliant rejection explanations",
      icon: Shield
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
              <Brain className="w-4 h-4" />
              <span className="text-sm">Credit Risk Engine</span>
            </div>
            <h1 className="mb-6 text-gray-900">Intelligent Risk Decisioning</h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced machine learning models with explainable AI, combining bureau data, bank statements, and behavioral analytics to calculate PD, LGD, and EAD metrics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800"
                onClick={() => handleCTAClick("Request Demo - Risk")}
              >
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.hash = "platform"}
              >
                Back to Platform
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Data Inputs Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-gray-900">Multi-Source Data Inputs</h2>
              <p className="text-xl text-gray-600">
                Comprehensive risk assessment from multiple verified data sources
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {dataInputs.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                  <div className={`inline-flex w-12 h-12 rounded-xl ${item.color} items-center justify-center mb-4`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Metrics Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-gray-900">Basel-Compliant Risk Metrics</h2>
              <p className="text-xl text-gray-600">
                Industry-standard calculations for comprehensive credit risk assessment
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {riskMetrics.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className={`inline-flex w-12 h-12 rounded-xl ${item.bgColor} items-center justify-center mb-4`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="mb-3">
                    <div className={`text-2xl ${item.color} mb-1`}>{item.metric}</div>
                    <div className="text-sm text-gray-500">{item.fullName}</div>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500 mb-1">Example Output</div>
                    <div className="text-xl text-gray-900">{item.example}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-gray-900">Expected Loss Calculation</h3>
                  <p className="text-gray-600 mb-4">
                    Our engine automatically computes Expected Loss (EL) using the formula: <strong>EL = PD × LGD × EAD</strong>
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-500 mb-2">Sample Calculation</div>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">PD (Probability of Default):</span>
                        <span className="text-gray-900">12.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">LGD (Loss Given Default):</span>
                        <span className="text-gray-900">45.0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">EAD (Exposure at Default):</span>
                        <span className="text-gray-900">R85,000</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
                        <span className="text-gray-900">Expected Loss:</span>
                        <span className="text-blue-600">R4,781</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explainable AI Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
                <Eye className="w-4 h-4" />
                <span className="text-sm">Explainable AI</span>
              </div>
              <h2 className="mb-4 text-gray-900">Transparent Decision Making</h2>
              <p className="text-xl text-gray-600">
                Every decision backed by clear explanations and regulatory compliance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {explainabilityFeatures.map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="mb-6 text-gray-900">Sample Decision Explanation</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500">Application ID: #KN-2024-8832</div>
                    <div className="text-sm text-gray-900 mt-1">Decision: <span className="text-green-600">Approved</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Risk Score</div>
                    <div className="text-2xl text-gray-900">742</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-3">Top Contributing Factors</div>
                  <div className="space-y-3">
                    {[
                      { factor: "Stable monthly income", impact: "+85", color: "text-green-600" },
                      { factor: "Low credit utilization (28%)", impact: "+62", color: "text-green-600" },
                      { factor: "No recent delinquencies", impact: "+48", color: "text-green-600" },
                      { factor: "Short credit history (2.5 years)", impact: "-22", color: "text-red-600" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                        <span className="text-sm text-gray-700">{item.factor}</span>
                        <span className={`text-sm ${item.color}`}>{item.impact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Performance Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-gray-900">Model Performance</h2>
              <p className="text-xl text-gray-600">
                Proven accuracy across diverse customer segments
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { metric: "AUC-ROC", value: "0.87", label: "Model Accuracy" },
                { metric: "Gini", value: "0.74", label: "Discrimination Power" },
                { metric: "KS Statistic", value: "0.62", label: "Separation Ability" },
                { metric: "PSI", value: "<0.1", label: "Population Stability" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-3xl text-gray-900 mb-1">{item.value}</div>
                  <div className="text-sm text-gray-900 mb-1">{item.metric}</div>
                  <div className="text-xs text-gray-500">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-white">Ready to Deploy Intelligent Risk Decisioning?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get transparent, explainable credit decisions with industry-leading accuracy
            </p>
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => handleCTAClick("Request Demo - Risk CTA")}
            >
              <span className="text-gray-900">Request a Demo</span>
              <ArrowRight className="ml-2 w-5 h-5 text-gray-900" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
