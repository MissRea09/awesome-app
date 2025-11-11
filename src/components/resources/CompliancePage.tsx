import * as React from "react";
import { Button } from "../custom/Button";
import { Shield, Lock, FileCheck, Eye, Download, CheckCircle2, Award, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function CompliancePage() {
  const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, eventData);
    }
  };

  const handleDownload = (documentType: string) => {
    trackEvent("document_download", {
      document_type: documentType,
      page: "compliance",
    });
    // In production, this would trigger actual document download
    alert(`${documentType} download would be triggered here. In production, this will download the actual document.`);
  };

  const handleCTAClick = () => {
    trackEvent("cta_click", {
      cta_type: "contact_compliance",
      cta_location: "compliance_bottom",
      page: "compliance",
    });
    window.location.hash = "home";
    setTimeout(() => {
      const element = document.querySelector("#contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const complianceFrameworks = [
    {
      icon: Shield,
      title: "POPIA Compliance",
      subtitle: "Protection of Personal Information Act",
      description: "knit is fully compliant with South Africa's POPIA regulations, ensuring that all personal information is processed lawfully and in a manner that respects privacy rights.",
      details: [
        "Lawful processing of personal information",
        "Purpose specification and data minimization",
        "Consent management and right to access",
        "Data subject rights (access, correction, deletion)",
        "Cross-border data transfer safeguards",
        "Regular compliance audits and assessments",
      ],
    },
    {
      icon: FileCheck,
      title: "NCR Registration",
      subtitle: "National Credit Regulator",
      description: "As a registered credit provider, knit adheres to all requirements of the National Credit Act, ensuring responsible lending practices and consumer protection.",
      details: [
        "Registered credit provider in good standing",
        "Responsible lending and affordability assessments",
        "Transparent disclosure of credit terms",
        "Fair debt collection practices",
        "Consumer complaint resolution procedures",
        "Regular NCR reporting and compliance reviews",
      ],
    },
    {
      icon: Lock,
      title: "PCI DSS Compliance",
      subtitle: "Payment Card Industry Data Security Standard",
      description: "All payment card data is handled in accordance with PCI DSS Level 1 standards, the highest level of payment security certification.",
      details: [
        "Secure storage of cardholder data",
        "Encrypted transmission of card information",
        "Regular security testing and monitoring",
        "Access control and authentication measures",
        "Quarterly vulnerability scans",
        "Annual security assessments by qualified assessors",
      ],
    },
  ];

  const securityMeasures = [
    {
      icon: Lock,
      title: "Data Encryption",
      description: "256-bit AES encryption for data at rest and TLS 1.3 for data in transit",
    },
    {
      icon: Eye,
      title: "Access Controls",
      description: "Role-based access control (RBAC) with multi-factor authentication (MFA)",
    },
    {
      icon: FileCheck,
      title: "Audit Trails",
      description: "Comprehensive logging and monitoring of all system activities",
    },
    {
      icon: Shield,
      title: "Infrastructure Security",
      description: "ISO 27001 certified data centers with physical and network security",
    },
    {
      icon: Globe,
      title: "Data Residency",
      description: "All data stored in South African data centers with local backup",
    },
    {
      icon: Award,
      title: "SOC 2 Compliance",
      description: "Annual SOC 2 Type II audits for security, availability, and confidentiality",
    },
  ];

  const certifications = [
    {
      name: "ISO 27001",
      description: "Information Security Management",
      year: "2024",
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Privacy Controls",
      year: "2024",
    },
    {
      name: "PCI DSS Level 1",
      description: "Payment Card Security",
      year: "2024",
    },
  ];

  const documents = [
    {
      title: "Compliance Summary",
      description: "Overview of knit's compliance frameworks and certifications",
      type: "PDF",
    },
    {
      title: "Privacy Policy",
      description: "Detailed privacy policy and data processing practices",
      type: "PDF",
    },
    {
      title: "Security Whitepaper",
      description: "Technical overview of security architecture and measures",
      type: "PDF",
    },
    {
      title: "POPIA Statement",
      description: "POPIA compliance statement and data subject rights",
      type: "PDF",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-sm text-white">Security & Compliance</span>
              </div>
              <h1 className="mb-8 text-white text-4xl sm:text-5xl lg:text-6xl">
                Compliance & <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">POPIA</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Trust and security are fundamental to everything we do. knit maintains the highest standards of compliance and data protection.
              </p>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 flex flex-wrap justify-center gap-6"
            >
              {['Bank-Grade Security', 'POPIA Compliant', 'ISO 27001 Certified'].map((badge, index) => (
                <div key={index} className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                  <span className="text-sm text-white">{badge}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Banner */}
      <section className="py-12 sm:py-16 bg-white border-b-2 border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                  <span className="text-sm text-gray-600">Our Certifications</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center items-stretch gap-6 lg:gap-8">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center flex-1 min-w-[200px] max-w-[280px]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all h-full">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Award className="w-10 h-10 text-white" />
                      </div>
                      <div className="text-xl text-gray-900 mb-2">{cert.name}</div>
                      <div className="text-sm text-gray-600 mb-3">{cert.description}</div>
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        <CheckCircle2 className="w-3 h-3" />
                        Updated {cert.year}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                  <span className="text-sm text-gray-600">Regulatory Standards</span>
                </div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">Regulatory Compliance</h2>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                  We adhere to all relevant South African and international regulations
                </p>
              </motion.div>
            </div>
            <div className="space-y-8 lg:space-y-12">
              {complianceFrameworks.map((framework, index) => {
                const Icon = framework.icon;
                const colors = [
                  { gradient: 'from-green-900 to-green-700', badge: 'bg-green-100 text-green-700', accent: 'border-green-500' },
                  { gradient: 'from-blue-900 to-blue-700', badge: 'bg-blue-100 text-blue-700', accent: 'border-blue-500' },
                  { gradient: 'from-purple-900 to-purple-700', badge: 'bg-purple-100 text-purple-700', accent: 'border-purple-500' },
                ];
                const colorScheme = colors[index % colors.length];
                
                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border-2 border-gray-200 hover:border-gray-900 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden"
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-50"></div>
                    
                    {/* Badge Number */}
                    <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-xl">0{index + 1}</span>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 relative z-10">
                      <div className="lg:col-span-1">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colorScheme.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="mb-3 text-2xl sm:text-3xl">{framework.title}</h3>
                        <p className={`text-sm ${colorScheme.badge} px-3 py-1 rounded-full inline-block mb-4`}>{framework.subtitle}</p>
                        <p className="text-gray-600 text-lg leading-relaxed">{framework.description}</p>
                      </div>
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-1 h-10 rounded-full bg-gradient-to-b ${colorScheme.gradient}`}></div>
                          <h4 className="text-xl sm:text-2xl">Key Compliance Areas</h4>
                        </div>
                        <ul className="grid sm:grid-cols-2 gap-4">
                          {framework.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 group/item">
                              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                              <span className="text-gray-700 text-base leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
                  <span className="text-sm text-gray-600">Security Infrastructure</span>
                </div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">Security Measures</h2>
                <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                  Multi-layered security protecting your data at every level
                </p>
              </motion.div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {securityMeasures.map((measure, index) => {
                const Icon = measure.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl sm:text-2xl">{measure.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{measure.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Document Downloads */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-6 shadow-sm">
                  <span className="text-sm text-gray-600">Resources</span>
                </div>
                <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl">Documentation</h2>
                <p className="text-xl sm:text-2xl text-gray-600">
                  Download detailed compliance and security documentation
                </p>
              </motion.div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <FileCheck className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-2 text-xl">{doc.title}</h4>
                      <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block">{doc.type}</p>
                    </div>
                  </div>
                  <p className="text-base text-gray-600 mb-6 leading-relaxed">{doc.description}</p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 text-base group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all"
                    onClick={() => handleDownload(doc.title)}
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Subject Rights */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 sm:p-12 lg:p-14 border-2 border-gray-200 shadow-xl relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-50 to-transparent rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl">Your Rights Under POPIA</h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  As a data subject, you have the following rights regarding your personal information:
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Right to access your personal information",
                    "Right to correct or update inaccurate information",
                    "Right to request deletion of your information",
                    "Right to object to processing of your information",
                    "Right to data portability",
                    "Right to lodge a complaint with the Information Regulator",
                  ].map((right, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{right}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                  <p className="text-base text-gray-700">
                    <strong className="text-gray-900">Contact our Data Protection Officer:</strong>
                    <br />
                    To exercise any of these rights, please reach out at{" "}
                    <a href="mailto:privacy@knit.co.za" className="text-gray-900 underline hover:text-gray-700 transition-colors">
                      privacy@knit.co.za
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Compliance Support</span>
              </div>
              <h2 className="text-white mb-8 text-3xl sm:text-4xl lg:text-5xl">Questions About Security or Compliance?</h2>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Our compliance team is available to answer your questions and provide additional documentation as needed.
              </p>
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transition-all group"
                onClick={handleCTAClick}
              >
                Contact Compliance Team
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Compliance Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Dedicated compliance team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Regular audits & updates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span>Comprehensive documentation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
