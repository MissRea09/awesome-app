import * as React from "react";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  children: React.ReactNode;
  type?: "single" | "multiple";
  defaultValue?: string | string[];
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  activeItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
} | null>(null);

export function Accordion({
  children,
  type = "single",
  defaultValue,
  className = "",
}: AccordionProps) {
  const [activeItems, setActiveItems] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const toggleItem = (value: string) => {
    setActiveItems((prev) => {
      if (type === "single") {
        return prev.includes(value) ? [] : [value];
      } else {
        return prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      }
    });
  };

  return (
    <AccordionContext.Provider value={{ activeItems, toggleItem, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

const AccordionItemContext = React.createContext<{
  value: string;
  isOpen: boolean;
} | null>(null);

export function AccordionItem({
  children,
  value,
  className = "",
}: AccordionItemProps) {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("AccordionItem must be used within Accordion");
  }

  const isOpen = context.activeItems.includes(value);

  return (
    <AccordionItemContext.Provider value={{ value, isOpen }}>
      <div className={`border-b ${className}`}>{children}</div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className = "",
}: AccordionTriggerProps) {
  const accordionContext = React.useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);

  if (!accordionContext || !itemContext) {
    throw new Error("AccordionTrigger must be used within AccordionItem");
  }

  const handleClick = () => {
    accordionContext.toggleItem(itemContext.value);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex w-full items-start justify-between gap-4 py-4 text-left transition-all hover:underline ${className}`}
    >
      {children}
      <ChevronDown
        className={`h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200 ${
          itemContext.isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

export function AccordionContent({
  children,
  className = "",
}: AccordionContentProps) {
  const itemContext = React.useContext(AccordionItemContext);

  if (!itemContext) {
    throw new Error("AccordionContent must be used within AccordionItem");
  }

  if (!itemContext.isOpen) return null;

  return (
    <div className={`overflow-hidden pb-4 pt-0 text-sm ${className}`}>
      {children}
    </div>
  );
}
