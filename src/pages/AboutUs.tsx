import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="pt-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Knit</h1>
        <p className="text-gray-700 mb-4">
          At knit, we believe access to education and essential goods should
          never be disrupted by cash-flow challenges. Too often, schools,
          parents, and businesses are trapped between rigid payment systems and
          the real-world reality of delayed income. That’s where we come in.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Purpose</h2>
        <p className="text-gray-700 mb-4">
          To unlock access. By bridging the gap between when payments are due
          and when households or businesses can pay, we create space for growth
          and stability.
        </p>
        <p className="text-gray-700 mb-4">
          To protect dignity. No parent should have to choose between paying
          school fees late and risking a child’s education. No small business
          should have to decline a customer because of rigid payment
          structures.
        </p>
        <p className="text-gray-700 mb-4">
          To empower trust. Schools, merchants, and families can engage with
          confidence knowing that Knit stands in the middle—fast, transparent,
          and reliable.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          Why It’s Important
        </h2>
        <p className="text-gray-700 mb-4">
          In South Africa, 1 in 3 independent school fees go unpaid or are
          delayed. This creates strain for schools and uncertainty for families.
        </p>
        <p className="text-gray-700 mb-4">
          Merchants across industries—from education to retail—lose potential
          sales when customers cannot pay in full upfront.
        </p>
        <p className="text-gray-700 mb-4">
          Traditional credit is often slow, complex, and exclusionary. Knit
          provides a compliant, responsible alternative that is fast,
          transparent, and built for the realities of today’s economy.
        </p>
        <p className="text-gray-700 mb-4">
          By solving these problems, Knit doesn’t just enable transactions—we
          strengthen communities. Every loan settled, every arrear cleared,
          every sale unlocked is a step toward a more inclusive and resilient
          financial ecosystem.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-4">
          To become the most trusted payments and credit partner for schools,
          families, and merchants in Africa, building a future where access is
          not defined by timing of cash flow, but by the power of potential.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
