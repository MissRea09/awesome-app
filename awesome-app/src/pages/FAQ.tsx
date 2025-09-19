import React, { useState } from "react";

// ─── Main FAQs ─────────────────────────────────────────────
const groupedFaqsData = [
  // Parents
  {
    category: "Parents",
<<<<<<< HEAD
    question: "Will my child be affected if I apply for knit support?",
=======
    question: "Will my child be affected if I apply for Knit support?",
>>>>>>> origin/main
    answer:
      "No. Knit ensures your child stays in school. We pay your arrears directly to the school so that your child’s education is not interrupted.",
  },
  {
    category: "Parents",
    question: "How much do I need to pay upfront?",
    answer:
<<<<<<< HEAD
      "Parents contribute a minimum deposit (usually around 20–25%) and repay the balance to knit over agreed instalments.",
=======
      "Parents contribute a minimum deposit (usually around 20–25%) and repay the balance to Knit over agreed instalments.",
>>>>>>> origin/main
  },
  {
    category: "Parents",
    question: "Do you charge interest or fees?",
    answer:
      "Yes, we charge a transparent interest rate and service fee that will always be disclosed upfront before you commit. There are no hidden costs.",
  },
  {
    category: "Parents",
<<<<<<< HEAD
    question: "Will knit check my credit record?",
=======
    question: "Will Knit check my credit record?",
>>>>>>> origin/main
    answer:
      "Yes. We run a credit check to make sure repayments are affordable for you. This protects you from over-indebtedness.",
  },
  {
    category: "Parents",
    question: "What happens if I don’t make payments?",
    answer:
<<<<<<< HEAD
      "If repayments are not made, knit may report the default to a registered credit bureau in line with the National Credit Act. This could affect your ability to borrow in future.",
=======
      "If repayments are not made, Knit may report the default to a registered credit bureau in line with the National Credit Act. This could affect your ability to borrow in future.",
>>>>>>> origin/main
  },

  // Schools
  {
    category: "Schools",
<<<<<<< HEAD
    question: "Is there any recourse if parents don’t repay knit?",
=======
    question: "Is there any recourse if parents don’t repay Knit?",
>>>>>>> origin/main
    answer:
      "No. Knit takes on the full credit risk. Once we pay you, you keep the funds regardless of whether the parent repays us.",
  },
  {
    category: "Schools",
    question: "How quickly do we receive payment?",
    answer:
      "We pay approved arrears directly to the school’s account once a parent’s application is finalised — usually within a few business days.",
  },
  {
    category: "Schools",
    question: "Do we need to change our systems?",
    answer:
      "No. You keep invoicing parents as usual. Knit handles parent repayment separately.",
  },
  {
    category: "Schools",
<<<<<<< HEAD
    question: "How much does knit charge schools?",
    answer:
      "We charge a small arrear protection fee (typically 3–5%) on the amounts we settle. This is clearly agreed upfront.",
=======
    question: "How much does Knit charge schools?",
    answer:
      "We charge a small arrear protection fee on the amounts we settle. This is clearly agreed upfront.",
>>>>>>> origin/main
  },
  {
    category: "Schools",
    question: "Will our school have visibility on repayments?",
    answer:
      "Yes. Knit provides reporting on approvals, payouts, and collections, so you always know how your arrears are being managed.",
  },

  // Compliance
  {
    category: "Compliance",
<<<<<<< HEAD
    question: "Is knit a registered credit provider?",
=======
    question: "Is Knit a registered credit provider?",
>>>>>>> origin/main
    answer:
      "Yes. Knit is registered with the National Credit Regulator (NCR) in terms of the National Credit Act (NCA).",
  },
  {
    category: "Compliance",
<<<<<<< HEAD
    question: "How does knit comply with POPIA?",
=======
    question: "How does Knit comply with POPIA?",
>>>>>>> origin/main
    answer:
      "We only use personal and financial data for credit assessment, fraud prevention, and service delivery. All data is processed and stored securely in line with the Protection of Personal Information Act (POPIA).",
  },
  {
    category: "Compliance",
<<<<<<< HEAD
    question: "How does knit protect parents and schools from unfair practices?",
=======
    question: "How does Knit protect parents and schools from unfair practices?",
>>>>>>> origin/main
    answer:
      "We follow the FSCA Treating Customers Fairly (TCF) framework, ensuring transparent pricing, clear terms, and no hidden fees.",
  },
  {
    category: "Compliance",
    question: "Are parents at risk of over-indebtedness?",
    answer:
      "No. Every application includes affordability and credit checks. Knit will only approve applications where repayments are responsible and manageable.",
  },
  {
    category: "Compliance",
<<<<<<< HEAD
    question: "Who regulates knit?",
=======
    question: "Who regulates Knit?",
>>>>>>> origin/main
    answer:
      "Knit operates under oversight from the National Credit Regulator (NCR), the Financial Sector Conduct Authority (FSCA), and POPIA compliance under the Information Regulator of South Africa.",
  },
];

// ─── Extra General FAQs ─────────────────────────────────────
const generalFaqs = [
  {
    question: "How does the pre-qualification process work?",
    answer:
      "Our pre-qualification is simple and quick. You provide your name, surname, mobile number, and ID number. We run a quick check and give you an instant decision on your eligibility for our payment plan.",
  },
  {
<<<<<<< HEAD
    question: "Does my school need to be registered with knit?",
=======
    question: "Does my school need to be registered with Knit?",
>>>>>>> origin/main
    answer:
      "We work with most schools, but the process is smoother if your school is already registered with us. If they're not, we can reach out to them as part of your application process.",
  },
  {
    question: "What are the fees and interest rates?",
    answer:
      "Our fees are transparent and competitive. The exact rate depends on your repayment term and amount. You'll see all fees clearly before you commit to anything.",
  },
  {
    question: "How quickly will the school receive payment?",
    answer:
      "Once your application is approved and all agreements are signed, we typically pay the school within 1–2 business days.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  // Group questions by category
  const groupedFaqs = groupedFaqsData.reduce((acc, faq) => {
    (acc[faq.category] = acc[faq.category] || []).push(faq);
    return acc;
  }, {} as Record<string, typeof groupedFaqsData>);

  return (
    <section id="faq" className="pt-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Find answers to common questions about Knit's school fee payment
          solutions.
        </p>

        {/* Categories */}
        {Object.keys(groupedFaqs).map((category, i) => (
          <div key={i} className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {category}
            </h3>
            <div className="space-y-6">
              {groupedFaqs[category].map((faq, index) => {
                const id = `${category}-${index}`;
                const isOpen = openIndex === id;
                return (
                  <div key={id} className="border-b pb-4">
                    <button
                      onClick={() => toggleFAQ(id)}
                      className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
                    >
                      <span className="font-medium text-gray-800">
                        {faq.question}
                      </span>
                      <span className="text-gray-500 text-xl">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* General FAQs */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            General Questions
          </h3>
          <div className="space-y-6">
            {generalFaqs.map((faq, index) => {
              const id = `general-${index}`;
              const isOpen = openIndex === id;
              return (
                <div key={id} className="border-b pb-4">
                  <button
                    onClick={() => toggleFAQ(id)}
                    className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
                  >
                    <span className="font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <span className="text-gray-500 text-xl">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Need More Help */}
        <div className="text-center mt-12">
          <p className="text-gray-700">
            💬 Need more help? Email{" "}
            <a
              href="mailto:info@knit.cash"
              className="text-blue-600 hover:underline"
            >
              info@knit.cash
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
