import { PlatformHero } from "./platform/PlatformHero";
import { PlatformProblems } from "./platform/PlatformProblems";
import { PlatformCompliance } from "./platform/PlatformCompliance";

export function PlatformPage() {
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

  return (
    <div className="bg-white">
      <PlatformHero onCTAClick={handleCTAClick} />
      <PlatformProblems />
      <PlatformCompliance />
    </div>
  );
}
