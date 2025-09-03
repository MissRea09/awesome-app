import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./compoents/navbar";
import HomePage from "./pages/PreQualificationPage";
import HowKnitWorks from "./pages/HowKnitWorks";
import Testimonials from "./pages/testimonies";
import Footer from "./compoents/footer";
import HowKnitWorksSchools from "./pages/howKnitWorksForSchools";

// 👇 move TermsOfService into pages, not components
import TermsOfService from "./pages/TermsOfService";

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans scroll-smooth">
        <Navbar />

        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <section id="home">
                  <HomePage />
                </section>
                <section id="how-it-works">
                  <HowKnitWorks />
                </section>
                {/* Uncomment if you want schools section */}
                {/* <section id="how-it-works-for-schools">
                  <HowKnitWorksSchools />
                </section> */}
                <section id="testimonials">
                  <Testimonials />
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
