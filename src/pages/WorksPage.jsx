import Navbar from "../components/Navbar";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";

// Change to your real file names in src/assets/images
import amcaImage from "../assets/images/amca.svg";
import talentRecruiterImage from "../assets/images/talentmatch.svg";
import talentDashboardImage from "../assets/images/talentmatch.svg";

const defaultWorks = [
  {
    id: "amca-1",
    image: amcaImage,
    imageAlt: "AMCA AI healthcare website on a tablet",
    title: "AMCA AI - Healthcare Website Redesign",
    tags: ["HealthTech", "Website redesign"],
    href: "#",
  },
  {
    id: "talentmatch-recruiter",
    image: talentRecruiterImage,
    imageAlt: "TalentMatch recruiter dashboard on a laptop",
    title: "TalentMatch - Recruiter Dashboard | UI/UX Case Study",
    tags: ["EdTech", "Web App"],
    href: "#",
  },
  {
    id: "talentmatch-talent-1",
    image: talentDashboardImage,
    imageAlt: "TalentMatch talent dashboard on a laptop",
    title: "TalentMatch - Talent Dashboard | UI/UX Case Study",
    tags: ["EdTech", "Web App"],
    href: "#",
  },
  {
    id: "amca-2",
    image: amcaImage,
    imageAlt: "AMCA AI healthcare website on a tablet",
    title: "AMCA AI - Healthcare Website Redesign",
    tags: ["HealthTech", "Website redesign"],
    href: "#",
  },
  {
    id: "talentmatch-talent-2",
    image: talentDashboardImage,
    imageAlt: "TalentMatch talent dashboard on a laptop",
    title: "TalentMatch - Talent Dashboard | UI/UX Case Study",
    tags: ["EdTech", "Web App"],
    href: "#",
  },
  {
    id: "amca-3",
    image: amcaImage,
    imageAlt: "AMCA AI healthcare website on a tablet",
    title: "AMCA AI - Healthcare Website Redesign",
    tags: ["HealthTech", "Website redesign"],
    href: "#",
  },
];

function WorksPage({
  label = "Selected works",
  heading = "Works",
  projectCount = defaultWorks.length,
  period = "2024 - 2025",
  works = defaultWorks,
}) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="works">
        <div className="mx-auto max-w-[1440px] px-6 pb-24 pt-12 md:px-24 md:pb-36 md:pt-16">
          {/* Heading row */}
          <div className="flex items-end justify-between border-b border-[#E5E5E5] pb-10">
            <div>
              <p className="font-lora text-base italic text-[#1F1D1D]">
                {label}
              </p>
              <h1 className="mt-2 font-rothek text-[40px] font-semibold leading-tight text-black md:text-[48px]">
                {heading}
              </h1>
            </div>

            <div className="text-right font-rothek text-base font-normal leading-relaxed text-[#A0A0A0]">
              <p>{projectCount} Projects</p>
              <p>{period}</p>
            </div>
          </div>

          {/* Cards grid */}
          <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-[60px]">
            {works.map(({ id, ...card }) => (
              <WorkCard key={id} {...card} className="!w-full" />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default WorksPage;