import * as React from "react";
import { Provider, store } from "./lib/jotai";
import { SEO } from "./components/SEO";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { HowItWorks } from "./components/HowItWorks";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Verticals } from "./components/Verticals";
import { Contact } from "./components/Contact";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { SkipToContent } from "./components/SkipToContent";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { EduPage } from "./components/EduPage";
import { LifePage } from "./components/LifePage";
import { PlatformPage } from "./components/PlatformPage";
import { PlatformRiskPage } from "./components/PlatformRiskPage";
import { PlatformPaymentsPage } from "./components/PlatformPaymentsPage";
import { PlatformAnalyticsPage } from "./components/PlatformAnalyticsPage";
import { CaseStudiesPage } from "./components/resources/CaseStudiesPage";
import { PartnerPage } from "./components/resources/PartnerPage";
import { FAQPage } from "./components/resources/FAQPage";
import { CompliancePage } from "./components/resources/CompliancePage";

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Verticals />
      <Contact />
      <CallToAction />
    </>
  );
}

// Safe component wrapper
function SafePageRender({ children }: { children: React.ReactNode }) {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}

export default function App() {
  const [currentPage, setCurrentPage] = React.useState(() => {
    if (typeof window === 'undefined') return "home";
    const hash = window.location.hash.slice(1);
    const validPages = [
      "edu", "life", "platform",
      "platform/risk", "platform/payments", "platform/analytics",
      "resources/case-studies", "resources/partner", "resources/faq", "resources/compliance"
    ];
    return validPages.includes(hash) ? hash : "home";
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validPages = [
        "edu", "life", "platform",
        "platform/risk", "platform/payments", "platform/analytics",
        "resources/case-studies", "resources/partner", "resources/faq", "resources/compliance"
      ];
      setCurrentPage(validPages.includes(hash) ? hash : "home");
      
      // Smooth scroll to top
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = React.useMemo(() => {
    switch (currentPage) {
      case "edu":
        return <SafePageRender><EduPage /></SafePageRender>;
      case "life":
        return <SafePageRender><LifePage /></SafePageRender>;
      case "platform":
        return <SafePageRender><PlatformPage /></SafePageRender>;
      case "platform/risk":
        return <SafePageRender><PlatformRiskPage /></SafePageRender>;
      case "platform/payments":
        return <SafePageRender><PlatformPaymentsPage /></SafePageRender>;
      case "platform/analytics":
        return <SafePageRender><PlatformAnalyticsPage /></SafePageRender>;
      case "resources/case-studies":
        return <SafePageRender><CaseStudiesPage /></SafePageRender>;
      case "resources/partner":
        return <SafePageRender><PartnerPage /></SafePageRender>;
      case "resources/faq":
        return <SafePageRender><FAQPage /></SafePageRender>;
      case "resources/compliance":
        return <SafePageRender><CompliancePage /></SafePageRender>;
      default:
        return <SafePageRender><HomePage /></SafePageRender>;
    }
  }, [currentPage]);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <SkipToContent />
        <div className="min-h-screen bg-white flex flex-col">
          <SEO />
          <Header currentPage={currentPage} />
          <main id="main-content" className="flex-1">
            {renderPage}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </ErrorBoundary>
    </Provider>
  );
}
