import Navbar from "./components/Navbar";
import ServiceCard from "./components/ServiceCard";

// Change these to match your real file names in src/assets/images
import designIllustration from "./assets/images/design.svg";
import figma from "./assets/images/figma.svg";
import chatgpt from "./assets/images/chatgpt.svg";
import claude from "./assets/images/claude.svg";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex justify-center p-10">
        <ServiceCard
          illustration={designIllustration}
          illustrationAlt="Designer working on a laptop"
          title="Design"
          subtitle="UX/UI"
          description="This is where it all comes together for me. Turning a real problem into a web or mobile interface people don't have to think twice about, that's the part of the job I never get tired of."
          tools={[
            { name: "Figma", logo: figma },
            { name: "ChatGPT", logo: chatgpt },
            { name: "Claude", logo: claude },
          ]}
        />
      </main>
    </div>
  );
}

export default App;