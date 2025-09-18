import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./compoents/navbar";
import HomePage from "./pages/PreQualificationPage";
import Testimonials from "./pages/testimonies";
import Footer from "./compoents/footer";
import HowknitWorksSchools from "./pages/howknitWorksForSchools"; // ✅ match file
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import HowknitWorks from "./pages/HowknitWorks"; // ✅ match file

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans scroll-smooth">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="scroll-mt-28">
                  <HomePage />
                </section>

                <section id="how-it-works" className="scroll-mt-28">
                  <HowknitWorks />
                </section>

                <section id="testimonials" className="scroll-mt-28">
                  <Testimonials />
                </section>
              </>
            }
          />

          <Route path="/schools" element={<HowknitWorksSchools />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
