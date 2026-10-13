import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import WorksPage from "./pages/WorksPage";

// Scrolls to the top whenever the page changes
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    let tries = 0;

    const timer = setInterval(() => {
      const el = document.getElementById(id);
      tries++;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        clearInterval(timer);
      } else if (tries > 20) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [pathname, hash, key]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<WorksPage />} />
      </Routes>
    </>
  );
}

export default App;