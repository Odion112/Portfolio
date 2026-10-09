import Navbar from "./components/Navbar";
import ReviewCard from "./components/ReviewCard";

// Change to your real file name in src/assets/images
import ademola from "./assets/images/ademola.svg";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="flex justify-center p-10">
        <ReviewCard
          quote="For more than 4 years now, design has been at the center of my world. Along the way, I've worked across fintech, edtech, health tech, and Shopify ecommerce,"
          name="Ademola"
          role="Founder of IBT Learning"
          avatar={ademola}
          avatarAlt="Portrait of Ademola"
        />
      </main>
    </div>
  );
}

export default App;