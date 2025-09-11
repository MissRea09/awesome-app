import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./compoents/navbar";
import HomePage from "./pages/PreQualificationPage";
import Testimonials from "./pages/testimonies";
import Footer from "./compoents/footer";
import HowKnitWorksSchools from "./pages/howKnitWorksForSchools";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";
import HowKnitWorks from "./pages/HowKnitWorks";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans scroll-smooth">
        <Navbar />

        <Routes>
          {/* Home route with sections */}
          <Route
            path="/"
            element={
              <>
                <section id="home"  className="scroll-mt-28">
                  <HomePage />
                </section>

                {/* <section id="how-it-works">
                  <HowKnitWorks />
                </section> */}

                <section id="testimonials" className="scroll-mt-28">
                  <Testimonials />
                </section>
              </>
            }
          />

          {/* Separate pages */}
          <Route path="/schools" element={<HowKnitWorksSchools />} />
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
