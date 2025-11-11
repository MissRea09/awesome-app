import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./custom/Accordion";

export function FAQ() {
  const faqs = [
    {
      question: "How does knit's embedded finance solution work?",
      answer: "knit integrates directly into your existing payment infrastructure through our API. We handle the entire payment lifecycle including offering flexible payment plans, managing collections, and ensuring compliance. Your customers get seamless payment options without ever leaving your platform.",
    },
    {
      question: "What kind of improvement can we expect in collection rates?",
      answer: "Our clients typically see up to 40% improvement in collection rates. By offering flexible payment options that work with families' budgets, we reduce payment friction and improve on-time payment rates significantly.",
    },
    {
      question: "Is there a risk to our organization?",
      answer: "knit manages risk through sophisticated underwriting and portfolio management, keeping portfolio loss under 5%. We handle all the risk assessment and collection management, so you can focus on your core services.",
    },
    {
      question: "How long does integration take?",
      answer: "Most organizations complete integration within 2-4 weeks. Our technical team provides hands-on support throughout the process, and our API is designed for quick implementation with comprehensive documentation.",
    },
    {
      question: "What types of organizations does knit serve?",
      answer: "We specialize in education institutions (K-12 schools, preschools, tutoring centers) and life services providers (childcare, eldercare, healthcare services). Our solutions are tailored to the unique needs of these sectors.",
    },
    {
      question: "How do payment plans work for families?",
      answer: "Families can choose from multiple payment plan options that fit their budget. Plans are clearly presented upfront with no hidden fees. Payments are automated and families can manage everything through an easy-to-use portal.",
    },
    {
      question: "What kind of support does knit provide?",
      answer: "We provide comprehensive support including dedicated account management, 24/7 technical support, regular business reviews, and ongoing optimization recommendations. Our team becomes an extension of yours.",
    },
    {
      question: "Are there any upfront costs?",
      answer: "Pricing varies based on your organization's needs and volume. Contact our team for a customized quote. We're transparent about all costs and work to structure pricing that aligns with your business model.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about knit
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 px-6 rounded-lg border-none"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <span className="text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
