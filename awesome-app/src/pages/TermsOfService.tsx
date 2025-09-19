// src/pages/TermsOfService.tsx
import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main content */}
      <main className="flex-grow max-w-4xl mx-auto p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-[50px]">Knit Terms and Conditions</h1>
        <p className="text-sm text-gray-500 mb-8">Last updated: 30 August 2025</p>

        {/* 1. Introduction */}
        <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="mb-4">
          These Terms and Conditions (“Terms”) govern the use of Knit’s services
          provided by Luddites Group (Pty) Ltd trading as Knit (“Knit”, “we”,
          “our”, “us”). By applying for or using Knit’s Buy Now Pay Later (“BNPL”)
          or payments services, you agree to these Terms. Please read them
          carefully together with our Privacy Policy.
        </p>
        <p className="mb-4">
          Knit is a registered South African company and complies with the
          National Credit Act (NCA), the Protection of Personal Information Act
          (POPIA), and all other applicable financial services regulations.
        </p>

        {/* 2. Definitions */}
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Definitions</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            <strong>Customer/You</strong> – a consumer or parent applying for and
            using Knit’s BNPL or payments services.
          </li>
          <li>
            <strong>Merchant/School</strong> – a business or school contracted
            with Knit to provide BNPL facilities to their customers or parents.
          </li>
          <li>
            <strong>BNPL Service</strong> – the credit facility provided by Knit
            allowing you to pay a deposit upfront and settle the balance over
            instalments.
          </li>
          <li>
            <strong>Agreement</strong> – these Terms and Conditions, together with
            the Privacy Policy and any product-specific annexures.
          </li>
        </ul>

        {/* 3. Eligibility */}
        <h2 className="text-xl font-semibold mt-6 mb-2">3. Eligibility</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>You must be over 18 years of age.</li>
          <li>You must reside in South Africa and provide valid proof of identity.</li>
          <li>
            Knit will assess your creditworthiness in line with the NCA before
            granting BNPL facilities.
          </li>
          <li>
            Knit reserves the right to approve or decline any application at its
            discretion.
          </li>
        </ul>

        {/* 4. How Knit Works */}
        <h2 className="text-xl font-semibold mt-6 mb-2">4. How Knit Works</h2>
        <p className="mb-4">
          Knit settles the agreed amount upfront with the merchant or school. You
          pay an upfront deposit (minimum 20%) and the balance in instalments over
          the agreed repayment term. Payments are collected via DebiCheck debit
          orders or other approved payment methods. No interest is charged on
          arrears protection fees; however, interest and/or admin fees may apply
          where allowed by the NCA.
        </p>

        {/* 5. Fees and Charges */}
        <h2 className="text-xl font-semibold mt-6 mb-2">5. Fees and Charges</h2>
        <p className="mb-4">
          A once-off initiation fee and monthly service fee may be charged, in
          line with the NCA. An arrears protection fee (typically 4%) may apply to
          cover Knit’s upfront payments to the merchant/school. All fees are
          disclosed before you enter into a credit agreement. Fees are subject to
          regulatory caps under the NCA.
        </p>

        {/* ...repeat for sections 6–14 using the same structure */}

        <h2 className="text-xl font-semibold mt-6 mb-2">14. Contact Us</h2>
        <p className="mb-4">
          For any questions about these Terms:
          <br />
          Knit – Luddites Group (Pty) Ltd
          <br />
          Email: support@knit.cash
          <br />
          Website: www.knit.cash
          <br />
          Tel:  +27 83 974 9024 
          <br />
          Address: Level 2, The Zone@Rosebank,177 Oxford Road, Johannesburg,2196, South Africa
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Annexures & Regulatory References
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>
            National Credit Act, 34 of 2005 (NCA) – National Credit Regulator
          </li>
          <li>Consumer Protection Act, 68 of 2008 (CPA) – CPA Overview</li>
          <li>
            Protection of Personal Information Act, 4 of 2013 (POPIA) –
            Information Regulator
          </li>
          <li>Financial Sector Conduct Authority (FSCA) – FSCA</li>
          <li>
            Treating Customers Fairly (TCF) Principles – FSCA TCF Framework
          </li>
        </ul>
      </main>
    </div>
  );
};

export default TermsOfService;
