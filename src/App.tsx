import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./compoents/navbar";
import Footer from "./compoents/footer";
import HomePage from "./pages/PreQualificationPage";
import HowKnitWorks from "./pages/HowKnitWorks";
import HowKnitWorksSchools from "./pages/HowKnitWorks";
import Testimonials from "./pages/testimonies";
import TermsOfService from "./pages/TermsOfService";
import FAQ from "./pages/FAQ";
import AboutUs from "./pages/AboutUs";

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
                <section id="home" className="scroll-mt-28">
                  <HomePage />
                </section>

                {/* Uncomment to include HowKnitWorks section */}
                {/* <section id="how-it-works" className="scroll-mt-28">
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
