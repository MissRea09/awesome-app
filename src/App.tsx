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
<<<<<<< HEAD
import HowknitWorks from "./pages/HowknitWorks"; // ✅ match file
=======
import HowKnitWorks from "./pages/HowKnitWorks";
>>>>>>> origin/main

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-sans scroll-smooth">
        <Navbar />

        <Routes>
<<<<<<< HEAD
=======
          {/* Home route with sections */}
>>>>>>> origin/main
          <Route
            path="/"
            element={
              <>
<<<<<<< HEAD
                <section id="home" className="scroll-mt-28">
                  <HomePage />
                </section>

                <section id="how-it-works" className="scroll-mt-28">
                  <HowknitWorks />
                </section>
=======
                <section id="home"  className="scroll-mt-28">
                  <HomePage />
                </section>

                {/* <section id="how-it-works">
                  <HowKnitWorks />
                </section> */}
>>>>>>> origin/main

                <section id="testimonials" className="scroll-mt-28">
                  <Testimonials />
                </section>
              </>
            }
          />

<<<<<<< HEAD
          <Route path="/schools" element={<HowknitWorksSchools />} />
=======
          {/* Separate pages */}
          <Route path="/schools" element={<HowKnitWorksSchools />} />
>>>>>>> origin/main
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
