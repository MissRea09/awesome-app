import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./compoents/navbar";
import HomePage from "./pages/PreQualificationPage";
import HowKnitWorks from "./pages/HowKnitWorks";
import Testimonials from "./pages/testimonies";
import Footer from "./compoents/footer";
import HowKnitWorksSchools from "./pages/howKnitWorksForSchools";
import TermsOfService from "./pages/TermsOfService";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans scroll-smooth">
        <Navbar />

        <Routes>
          {/* Home route (PreQual only) */}
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <HomePage />
                </section>
                {/* <section id="how-it-works">
                  <HowKnitWorks />
                </section> */}
                <section id="testimonials">
                  <Testimonials />
                </section>
              </>
            }
          />

          {/* Schools route */}
          <Route
            path="/schools"
            element={
              <>
                <section id="schools">
                  <HowKnitWorksSchools />
                </section>
              </>
            }
          />

          {/* Terms of Service route */}
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
