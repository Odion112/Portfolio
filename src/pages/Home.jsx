import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../pages/HeroSection";
import About from "../pages/About";
import Services from "../pages/Services";
import Works from "../pages/Works";
import Reviews from "../pages/Reviews";

// Change these to match your real file names in src/assets/images
import heroImage from "../assets/images/hero.svg";
import behance from "../assets/images/behance.svg";
import linkedin from "../assets/images/linkedin.svg";
import aboutImage from "../assets/images/about.svg";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <HeroSection
          image={heroImage}
          imageAlt="Portrait of Odion"
          socials={[
            {
              name: "Behance",
              href: "https://www.behance.net/odionjoy",
              icon: behance,
            },
            {
              name: "LinkedIn",
              href: "https://www.linkedin.com/",
              icon: linkedin,
            },
          ]}
        />

        <About image={aboutImage} imageAlt="Portrait of Odion" />
        <Services  className="mt-16 mb-6" />
        <Works />
        <Reviews  className=" mb-20" />
      </main>

  <Footer buttonHref="https://wa.me/+2348100661300" />
    </div>
  );
}

export default Home;