import WorkCard from "../components/WorkCard";
import Button from "../components/Button";

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
    id: "talentmatch-talent",
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
];

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Works({
  label = "/Portfolio",
  heading = "Selected Works",
  buttonLabel = "View all work",
  buttonTo = "/works",
  works = defaultWorks,
  className = "",
}) {
  return (
    <section
      id="works"
      className={`mx-auto max-w-[1440px] px-6 py-16 md:px-24 md:py-24 ${className}`}
    >
      {/* Heading row */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-lora text-base italic text-[#1F1D1D]">{label}</p>
          <h2 className="mt-2 font-rothek text-[32px] font-medium leading-tight text-black md:text-[40px]">
            {heading}
          </h2>
        </div>

      <Button
  to={buttonTo}
  variant="outline"
  icon={<ArrowUpRight />}
  className="self-start"
>
  {buttonLabel}
</Button>
      </div>

      {/* Cards grid */}
      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-[60px]">
        {works.map(({ id, ...card }) => (
          <WorkCard key={id} {...card} className="!w-full" />
        ))}
      </div>
    </section>
  );
}

export default Works;