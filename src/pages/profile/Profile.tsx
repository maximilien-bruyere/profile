import React from "react";
import Home from "./sections/Home";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";

const Profile: React.FC = () => {
  return (
    <main className="min-h-screen scroll-smooth ">
      {/* Hero / Home - Full viewport height */}
      <section 
        id="home" 
        aria-label="Home" 
        className="min-h-screen bg-secondary/20 md:pt-10"
      >
        <Home />
      </section>

      {/* About - Contrasting background */} 
      <section 
        id="about" 
        aria-label="About" 
        className="py-16 md:py-20 lg:py-24 bg-secondary/10"
      >
        <About />
      </section>

      {/* Portfolio - Darker background for contrast */}
      <section 
        id="portfolio" 
        aria-label="Portfolio" 
        className="py-16 md:py-20 lg:py-24 bg-secondary/20"
      >
        <Portfolio />
      </section>

      {/* Contact - Light background */}
      <section 
        id="contact" 
        aria-label="Contact" 
        className="py-16 md:py-20 lg:py-24 bg-secondary/10"
      >
        <Contact />
      </section>
    </main>
  );
};

export default Profile;