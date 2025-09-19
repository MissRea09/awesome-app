import React from "react";
import { User, Home, CreditCard } from "lucide-react";

const HowKnitWorks: React.FC = () => {
  return (
    <section className="text-center">
<div id="how-it-works" className="text-gray-600 mb-8">
  {/* <h1 className="text-3xl font-bold">How It Works</h1> */}
<<<<<<< HEAD
  


      <h2 className="text-2xl font-bold mb-2">How knit works</h2>
=======
 


      <h2 className="text-2xl font-bold mb-2">How Knit Works</h2>
>>>>>>> origin/main
      <p className="text-gray-600 mb-8">
        Our simple process helps parents manage school fees while ensuring
        schools get paid on time.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <User className="w-10 h-10 mx-auto text-black mb-4" />
          <h3 className="font-bold mb-2">1. Pre-qualify</h3>
          <p className="text-gray-600 text-sm">
            Complete our simple form with your ID and mobile number to check
            your eligibility in seconds.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <Home className="w-10 h-10 mx-auto text-black mb-4" />
          <h3 className="font-bold mb-2">2. School Approval</h3>
          <p className="text-gray-600 text-sm">
            We coordinate with your child’s school to verify fee details and
            confirm the arrangement.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <CreditCard className="w-10 h-10 mx-auto text-black mb-4" />
          <h3 className="font-bold mb-2">3. Payment Plan</h3>
          <p className="text-gray-600 text-sm">
            We pay the school upfront, and you repay us in flexible
            installments that work with your budget.
          </p>
        </div>
      </div>
      </div>
    </section>
<<<<<<< HEAD
    
=======
   
>>>>>>> origin/main
  );
};

export default HowKnitWorks;