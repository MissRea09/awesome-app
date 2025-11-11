import { Button } from "./custom/Button";
import { ArrowRight, BarChart3, TrendingUp, AlertCircle, DollarSign, Users, Calendar, Activity, PieChart, Clock, CheckCircle, XCircle, Droplet, TrendingDown } from "lucide-react";

export function PlatformAnalyticsPage() {
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

  const dashboardFeatures = [
    {
      icon: Activity,
      title: "Real-Time Updates",
      description: "Live data refresh every 15 minutes with instant webhook notifications",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: PieChart,
      title: "Portfolio Segmentation",
      description: "Breakdown by vertical, institution, product, and risk bucket",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "ML-powered forecasting for collections and defaults",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: AlertCircle,
      title: "Smart Alerts",
      description: "Automated alerts for arrears thresholds and liquidity triggers",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const arrearsMetrics = [
    { bucket: "0-30 Days", amount: "R1.2M", accounts: 342, percentage: "2.8%", color: "bg-green-100 text-green-700" },
    { bucket: "31-60 Days", amount: "R780K", accounts: 187, percentage: "1.8%", color: "bg-yellow-100 text-yellow-700" },
    { bucket: "61-90 Days", amount: "R420K", accounts: 94, percentage: "1.0%", color: "bg-orange-100 text-orange-700" },
    { bucket: "90+ Days", amount: "R210K", accounts: 45, percentage: "0.5%", color: "bg-red-100 text-red-700" }
  ];

  const approvalMetrics = [
    { metric: "Overall Approval Rate", value: "82.4%", change: "+3.2%", trend: "up" },
    { metric: "Instant Approvals", value: "68.7%", change: "+5.1%", trend: "up" },
    { metric: "Manual Review Rate", value: "12.3%", change: "-2.4%", trend: "down" },
    { metric: "Decline Rate", value: "17.6%", change: "-0.8%", trend: "down" }
  ];

  const liquidityIndicators = [
    {
      indicator: "Available Liquidity",
      value: "R42.8M",
      threshold: "R30M minimum",
      status: "healthy",
      utilization: "72%"
    },
    {
      indicator: "Expected Inflows (30 days)",
      value: "R18.5M",
      breakdown: "Collections + Repayments",
      status: "healthy",
      utilization: "N/A"
    },
    {
      indicator: "Committed Disbursals",
      value: "R12.3M",
      breakdown: "Next 14 days",
      status: "healthy",
      utilization: "28%"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-6">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm">MIS & Analytics</span>
            </div>
            <h1 className="mb-6 text-gray-900">Real-Time Portfolio Intelligence</h1>
            <p className="text-xl text-gray-600 mb-8">
              Live dashboards tracking arrears, approval rates, and liquidity with predictive analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800"
                onClick={() => handleCTAClick("Request Demo - Analytics")}
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

      {/* Dashboard Features */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-gray-900">Dashboard Capabilities</h2>
              <p className="text-xl text-gray-600">
                Comprehensive analytics platform with real-time data and actionable insights
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {dashboardFeatures.map((feature, idx) => (
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
          </div>
        </div>
      </section>

      {/* Arrears Dashboard */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Arrears Tracking</span>
              </div>
              <h2 className="mb-4 text-gray-900">Real-Time Arrears Dashboard</h2>
              <p className="text-xl text-gray-600">
                Monitor aging buckets and track collection performance
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-900">Portfolio Aging Analysis</h3>
                  <div className="text-sm text-gray-500">Updated 12 mins ago</div>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                  {arrearsMetrics.map((bucket, idx) => (
                    <div key={idx} className={`${bucket.color} rounded-lg p-4`}>
                      <div className="text-xs mb-1">{bucket.bucket}</div>
                      <div className="text-2xl mb-1">{bucket.amount}</div>
                      <div className="text-xs opacity-75">{bucket.accounts} accounts</div>
                      <div className="text-xs mt-2">{bucket.percentage} of portfolio</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                <h3 className="mb-4 text-gray-900">Arrears Trend (Last 90 Days)</h3>
                <div className="space-y-3">
                  {[
                    { label: "Total Arrears", current: "R2.61M", previous: "R2.85M", change: "-8.4%" },
                    { label: "60+ Days Bucket", current: "R630K", previous: "R720K", change: "-12.5%" },
                    { label: "Collection Rate", current: "94.2%", previous: "91.8%", change: "+2.4%" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white rounded-lg p-3">
                      <div>
                        <div className="text-sm text-gray-600">{item.label}</div>
                        <div className="text-gray-900">{item.current}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500">vs last period</div>
                        <div className={`text-sm ${item.change.startsWith('-') ? 'text-green-600' : item.change.startsWith('+') && item.label === 'Collection Rate' ? 'text-green-600' : 'text-red-600'}`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approval Rates Dashboard */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Approval Analytics</span>
              </div>
              <h2 className="mb-4 text-gray-900">Approval Rate Dashboard</h2>
              <p className="text-xl text-gray-600">
                Track decision outcomes and approval funnel performance
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="mb-6 text-gray-900">Approval Metrics (Last 30 Days)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {approvalMetrics.map((metric, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div className="text-sm text-gray-600">{metric.metric}</div>
                        <div className={`flex items-center gap-1 text-xs ${metric.trend === 'up' && (metric.metric.includes('Approval') || metric.metric.includes('Instant')) ? 'text-green-600' : metric.trend === 'down' && (metric.metric.includes('Decline') || metric.metric.includes('Manual')) ? 'text-green-600' : 'text-gray-500'}`}>
                          {metric.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          {metric.change}
                        </div>
                      </div>
                      <div className="text-3xl text-gray-900">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="mb-4 text-gray-900">Application Funnel</h3>
                <div className="space-y-3">
                  {[
                    { stage: "Applications Received", count: 2847, icon: Users, width: "100%" },
                    { stage: "Passed Initial Screening", count: 2654, icon: CheckCircle, width: "93%" },
                    { stage: "Credit Assessment Complete", count: 2512, icon: Activity, width: "88%" },
                    { stage: "Approved & Disbursed", count: 2345, icon: CheckCircle, width: "82%" }
                  ].map((stage, i) => (
                    <div key={i} className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <stage.icon className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-700">{stage.stage}</span>
                        </div>
                        <span className="text-sm text-gray-900">{stage.count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: stage.width }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Liquidity Indicators Dashboard */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
                <Droplet className="w-4 h-4" />
                <span className="text-sm">Liquidity Management</span>
              </div>
              <h2 className="mb-4 text-gray-900">Liquidity Indicators Dashboard</h2>
              <p className="text-xl text-gray-600">
                Monitor cash position and forecast liquidity requirements
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-gray-900">Current Liquidity Position</h3>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span>Healthy</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {liquidityIndicators.map((item, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-6">
                      <div className="text-sm text-gray-600 mb-2">{item.indicator}</div>
                      <div className="text-3xl text-gray-900 mb-1">{item.value}</div>
                      <div className="text-xs text-gray-500 mb-3">{item.breakdown || item.threshold}</div>
                      {item.utilization !== "N/A" && (
                        <div className="mt-3">
                          <div className="flex justify-between text-xs text-gray-600 mb-1">
                            <span>Utilization</span>
                            <span>{item.utilization}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${parseInt(item.utilization) > 80 ? 'bg-orange-600' : 'bg-blue-600'}`} 
                              style={{ width: item.utilization }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="mb-4 text-gray-900">30-Day Liquidity Forecast</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="text-sm text-gray-700">Expected Inflows</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { source: "Scheduled Repayments", amount: "R12.4M" },
                        { source: "Arrears Collections", amount: "R3.8M" },
                        { source: "Early Settlements", amount: "R2.3M" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.source}</span>
                          <span className="text-gray-900">{item.amount}</span>
                        </div>
                      ))}
                      <div className="flex justify-between pt-2 border-t border-gray-200">
                        <span className="text-gray-900">Total Inflows</span>
                        <span className="text-green-600">R18.5M</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingDown className="w-5 h-5 text-orange-600" />
                      <span className="text-sm text-gray-700">Committed Outflows</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { source: "New Disbursals", amount: "R9.2M" },
                        { source: "Operating Expenses", amount: "R2.1M" },
                        { source: "Debt Service", amount: "R1.0M" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between text-sm">
                          <span className="text-gray-600">{item.source}</span>
                          <span className="text-gray-900">{item.amount}</span>
                        </div>
                      ))}
                      <div className="flex justify-between pt-2 border-t border-gray-200">
                        <span className="text-gray-900">Total Outflows</span>
                        <span className="text-orange-600">R12.3M</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-blue-600 text-white rounded-lg p-4 text-center">
                  <div className="text-sm mb-1">Net Liquidity Change (30 days)</div>
                  <div className="text-2xl">+R6.2M</div>
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
            <h2 className="mb-4 text-white">Get Real-Time Visibility Into Your Portfolio</h2>
            <p className="text-xl text-gray-300 mb-8">
              Monitor arrears, approval rates, and liquidity with comprehensive dashboards
            </p>
            <Button 
              size="lg" 
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => handleCTAClick("Request Demo - Analytics CTA")}
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
