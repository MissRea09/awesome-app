import React from "react";
import Navbar from "./compoents/navbar";
import HomePage from "./pages/PreQualificationPage";
import HowKnitWorks from "./pages/HowKnitWorks";
import Testimonials from "./pages/testimonies";
import Footer from "./compoents/footer";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HomePage />
      <Testimonials />
      <Footer />
     
    </div>
  );
};

export default App;
