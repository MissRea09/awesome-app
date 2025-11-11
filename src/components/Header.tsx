import * as React from "react";
import { Button } from "./custom/Button";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/c6bfecd0f0998aa1adede9405f4f5d0d215274f5.png";

interface HeaderProps {
  currentPage: string;
}

export function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  const trackEvent = (eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, eventData);
    }
  };

  // Close mobile menu when clicking a link
  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    // Check if this is a page route or a hash link
    if (href === "#edu" || href === "#life" || href === "#platform" || href.startsWith("#platform/") || href.startsWith("#resources/")) {
      // Page navigation - clear active section
      setActiveSection("");
      window.location.hash = href;
    } else if (href === "#home") {
      // Go to home page
      setActiveSection("");
      if (window.location.hash) {
        window.location.hash = "";
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Section link - if not on home page, go home first
      if (currentPage !== "home") {
        window.location.hash = "";
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  // Track active section on scroll using Intersection Observer
  React.useEffect(() => {
    // Only track sections on homepage
    if (currentPage !== "home") {
      setActiveSection("");
      return;
    }

    const sections = ["how-it-works", "for-parents", "testimonials", "faq", "about"];
    const observerOptions = {
      rootMargin: "-100px 0px -60% 0px", // Activate when section passes header
      threshold: 0.1,
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Clear active state when at top
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPage]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              className="flex items-center hover:opacity-80 transition-opacity"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
                setActiveSection("");
              }}
            >
              <img
                src={logo}
                alt="knit"
                className="h-24 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            <a
              href="#platform"
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === "platform" || currentPage.startsWith("platform/")
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#platform");
              }}
            >
              Problem
            </a>
            <a
              href="#edu"
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === "edu"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#edu");
              }}
            >
              knit Edu
            </a>
            <a
              href="#life"
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === "life"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#life");
              }}
            >
              knit Life
            </a>
            <a
              href="#how-it-works"
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                activeSection === "how-it-works"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#how-it-works");
              }}
            >
              How it Works
            </a>
            <a
              href="#resources/case-studies"
              className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                currentPage === "resources/case-studies"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#resources/case-studies");
              }}
            >
              Case Studies
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800"
              onClick={() => handleNavClick("#contact")}
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-white z-[60] overflow-y-auto"
          role="dialog"
          aria-label="Mobile navigation menu"
        >
          <nav className="container mx-auto px-4 py-6 space-y-3" role="navigation">
            <a
              href="#platform"
              className={`block py-4 px-5 text-lg rounded-lg transition-all duration-200 ${
                currentPage === "platform" || currentPage.startsWith("platform/")
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#platform");
              }}
            >
              Problem
            </a>
            <a
              href="#edu"
              className={`block py-4 px-5 text-lg rounded-lg transition-all duration-200 ${
                currentPage === "edu"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#edu");
              }}
            >
              knit Edu
            </a>
            <a
              href="#life"
              className={`block py-4 px-5 text-lg rounded-lg transition-all duration-200 ${
                currentPage === "life"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#life");
              }}
            >
              knit Life
            </a>
            <a
              href="#how-it-works"
              className={`block py-4 px-5 text-lg rounded-lg transition-all duration-200 ${
                activeSection === "how-it-works"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#how-it-works");
              }}
            >
              How it Works
            </a>
            <a
              href="#resources/case-studies"
              className={`block py-4 px-5 text-lg rounded-lg transition-all duration-200 ${
                currentPage === "resources/case-studies"
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#resources/case-studies");
              }}
            >
              Case Studies
            </a>
            
            <Button
              size="lg"
              className="w-full bg-gray-900 hover:bg-gray-800 mt-6"
              onClick={() => handleNavClick("#contact")}
            >
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
