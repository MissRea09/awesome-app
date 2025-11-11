import { Button } from "./custom/Button";
import { ArrowRight, Zap, CreditCard, RefreshCw, Link2, CheckCircle, Calendar, FileText, DollarSign, BarChart3, Shield, Clock, Repeat } from "lucide-react";

export function PlatformPaymentsPage() {
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

  const debitOrderFeatures = [
    {
      title: "NACH/eNACH Integration",
      description: "Direct integration with National Automated Clearing House for automated mandate registration",
      icon: FileText
    },
    {
      title: "Mandate Management",
      description: "Digital mandate creation, modification, and cancellation with bank authentication",
      icon: Shield
    },
    {
      title: "Auto-Debit Scheduling",
      description: "Set recurring debit schedules aligned with customer payment cycles",
      icon: Calendar
    },
    {
      title: "Pre-Debit Notifications",
      description: "Automated reminders sent 3 days before debit date to reduce failures",
      icon: Clock
    }
  ];

  const payByLinkFeatures = [
    {
      title: "Multi-Channel Distribution",
      description: "Send payment links via SMS, email, WhatsApp, or embed in customer portals",
      features: ["SMS Gateway Integration", "Email Templates", "WhatsApp Business API", "Portal Embedding"]
    },
    {
      title: "Multiple Payment Options",
      description: "Accept payments through UPI, cards, net banking, and wallets",
      features: ["UPI/QR Code", "Credit/Debit Cards", "Net Banking", "Wallets (Paytm, PhonePe)"]
    },
    {
      title: "Dynamic Link Generation",
      description: "Create personalized links with customer details and amount pre-filled",
      features: ["Customer Details Pre-fill", "Amount Lock/Unlock", "Validity Period", "Custom Branding"]
    }
  ];

  const reconciliationFeatures = [
    {
      icon: RefreshCw,
      title: "Automated Matching",
      description: "Auto-reconcile payments with outstanding invoices using AI-powered matching",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboard",
      description: "Live view of collection status, success rates, and pending reconciliations",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: FileText,
      title: "Bank Statement Parsing",
      description: "Automatically parse and match bank statements with internal records",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CheckCircle,
      title: "Exception Handling",
      description: "Flag and queue mismatched transactions for manual review with suggestions",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const collectionMetrics = [
    { label: "Collection Success Rate", value: "94.2%", trend: "+5.8%" },
    { label: "Auto-Reconciliation Rate", value: "98.7%", trend: "+12.3%" },
    { label: "Average Recovery Time", value: "2.3 days", trend: "-40%" },
    { label: "Payment Link Conversion", value: "76.5%", trend: "+23.1%" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Payments & Collections</span>
            </div>
            <h1 className="mb-6 text-gray-900">Automated Payment Processing</h1>
            <p className="text-xl text-gray-600 mb-8">
              End-to-end payment automation from debit orders to pay-by-link recovery with real-time reconciliation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800"
                onClick={() => handleCTAClick("Request Demo - Payments")}
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

      {/* Collection Metrics */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-gray-900">Collection Performance</h2>
              <p className="text-xl text-gray-600">
                Industry-leading collection rates with automated workflows
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {collectionMetrics.map((metric, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="text-3xl text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-2">{metric.label}</div>
                  <div className="text-xs text-green-600">{metric.trend} vs industry avg</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automated Debit Orders */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">Automated Debit Orders</span>
              </div>
              <h2 className="mb-4 text-gray-900">NACH/eNACH Integration</h2>
              <p className="text-xl text-gray-600">
                Set up recurring collections with bank-grade security and compliance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {debitOrderFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="mb-6 text-gray-900">Debit Order Flow</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Mandate Registration", desc: "Customer authorizes recurring debit via eNACH" },
                  { step: "2", title: "Bank Authentication", desc: "Bank validates and approves mandate" },
                  { step: "3", title: "Schedule Setup", desc: "System schedules debits per repayment calendar" },
                  { step: "4", title: "Pre-Debit Alert", desc: "Customer notified 3 days before debit" },
                  { step: "5", title: "Auto Execution", desc: "Debit processed on scheduled date" },
                  { step: "6", title: "Instant Reconciliation", desc: "Payment auto-matched with invoice" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                      {item.step}
                    </div>
                    <div>
                      <div className="text-gray-900 mb-1">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pay-by-Link Recovery */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full mb-4">
                <Link2 className="w-4 h-4" />
                <span className="text-sm">Pay-by-Link Recovery</span>
              </div>
              <h2 className="mb-4 text-gray-900">Smart Payment Links</h2>
              <p className="text-xl text-gray-600">
                Recover missed payments with personalized, multi-channel payment links
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {payByLinkFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="mb-6 text-gray-900">Sample Payment Link Experience</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm text-gray-600 mb-4">Customer Receives:</div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="text-sm text-gray-700 mb-3">
                      📱 <strong>SMS:</strong> "Hi Rahul, your EMI of R8,500 is due tomorrow. Pay now to avoid late fees: https://knit.pay/xyz123"
                    </div>
                    <div className="text-sm text-gray-700">
                      📧 <strong>Email:</strong> Branded email with payment button, EMI details, and payment history
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-4">Customer Sees:</div>
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
                    <div className="text-center mb-4">
                      <div className="text-sm text-gray-600 mb-1">Amount Due</div>
                      <div className="text-3xl text-gray-900 mb-1">R8,500</div>
                      <div className="text-xs text-gray-500">Due: Nov 30, 2024</div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="bg-white rounded p-3 text-sm flex items-center justify-between">
                        <span>💳 Card</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="bg-white rounded p-3 text-sm flex items-center justify-between">
                        <span>📱 UPI</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="bg-white rounded p-3 text-sm flex items-center justify-between">
                        <span>🏦 Net Banking</span>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <button className="w-full bg-purple-600 text-white rounded-lg py-3 text-sm">
                      Pay Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconciliation Features */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
                <Repeat className="w-4 h-4" />
                <span className="text-sm">Automated Reconciliation</span>
              </div>
              <h2 className="mb-4 text-gray-900">Real-Time Payment Reconciliation</h2>
              <p className="text-xl text-gray-600">
                Eliminate manual reconciliation with AI-powered payment matching
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {reconciliationFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center`}>
                        <feature.icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="mb-6 text-gray-900">Reconciliation Dashboard</h3>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl text-green-600 mb-1">1,247</div>
                    <div className="text-sm text-gray-600">Auto-Matched Today</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-orange-600 mb-1">12</div>
                    <div className="text-sm text-gray-600">Pending Review</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-blue-600 mb-1">R428K</div>
                    <div className="text-sm text-gray-600">Reconciled Amount</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-600 mb-2">Recent Transactions</div>
                  {[
                    { id: "TXN8832", amount: "R8,500", status: "Matched", customer: "Rahul Kumar", color: "text-green-600" },
                    { id: "TXN8831", amount: "R12,000", status: "Matched", customer: "Priya Sharma", color: "text-green-600" },
                    { id: "TXN8830", amount: "R5,200", status: "Review", customer: "Amit Patel", color: "text-orange-600" }
                  ].map((txn, i) => (
                    <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3 text-sm">
                      <div className="flex items-center gap-3">
                        <div className="text-gray-500">{txn.id}</div>
                        <div className="text-gray-900">{txn.customer}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-gray-900">{txn.amount}</div>
                        <div className={`${txn.color}`}>{txn.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-white">Ready to Automate Your Payments?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Streamline collections with debit orders, pay-by-link, and automated reconciliation
            </p>
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => handleCTAClick("Request Demo - Payments CTA")}
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
