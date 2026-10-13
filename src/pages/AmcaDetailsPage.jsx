import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CaseStudyLayout from "../components/CaseStudyLayout";
import Overview from "../components/Overview";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "original-design", label: "The Original Design" },
  { id: "design-insight", label: "Design Insight" },
  { id: "solution", label: "The Solution" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

function AmcaDetailsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <CaseStudyLayout sections={sections}>
        <Overview id="overview" />

        {/* Temporary placeholders so you can test the scrolling.
            Replace them with your real sections later. */}
        {sections.slice(1).map((s) => (
          <section key={s.id} id={s.id} className="h-[70vh]">
            <h2 className="font-rothek text-3xl font-medium">{s.label}</h2>
          </section>
        ))}
      </CaseStudyLayout>

      <Footer />
    </div>
  );
}

export default AmcaDetailsPage;