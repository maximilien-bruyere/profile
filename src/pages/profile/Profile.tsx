import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

const Profile: React.FC = () => {
  return (
    <main className="min-h-screen scroll-smooth md:pt-17">
      {/* Hero / Home */}
      <section id="home" aria-label="Home" className="py-50 bg-secondary/10">
        <Home />
      </section>

      {/* About */} 
      <section id="about" aria-label="About" className="py-50">
        <About />
      </section>

      {/* Portfolio */}
      <section id="portfolio" aria-label="Portfolio" className="py-50 bg-secondary/20">
        <Portfolio />
      </section>

      {/* Contact */}
      <section id="contact" aria-label="Contact" className="py-50">
        <Contact />
      </section>
    </main>
  );
};

export default Profile;