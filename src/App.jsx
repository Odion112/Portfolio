import Navbar from "./components/Navbar";
import Hero from "./pages/HeroSection";
import About from "./pages/About";

// Change these to match your real file names in src/assets/images
import heroImage from "./assets/images/hero.svg";
import behance from "./assets/images/behance.svg";
import linkedin from "./assets/images/linkedin.svg";
import aboutImage from "./assets/images/about.svg";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero
        image={heroImage}
        imageAlt="Portrait of Odion"
        socials={[
          { name: "Behance", href: "https://www.behance.net/odionjoy", icon: behance },
          { name: "LinkedIn", href: "https://www.linkedin.com/", icon: linkedin },
        ]}
      />

      {/* About Section*/}
      <About image={aboutImage} imageAlt="Portrait of Odion" />

    </div>
  );
}

export default App;