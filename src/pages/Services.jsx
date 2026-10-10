import { useEffect, useRef, useState } from "react";
import ServiceCard from "../components/ServiceCard";

// Illustrations (change to your real file names in src/assets/images)
import designIllustration from "../assets/images/design-illustration.svg";
import researchIllustration from "../assets/images/research-illustration.svg";
import auditIllustration from "../assets/images/audit-illustration.svg";
import consultingIllustration from "../assets/images/consulting-illustration.svg";
import frontendIllustration from "../assets/images/frontend-illustration.svg";

// Tool logos
import figma from "../assets/images/figma.svg";
import chatgpt from "../assets/images/chatgpt.svg";
import claude from "../assets/images/claude.svg";
import search from "../assets/images/search.svg";
import googleForms from "../assets/images/google-forms.svg";
import analytics from "../assets/images/analytics.svg";
import auditTool from "../assets/images/audit-tool.svg";
import consultingTool from "../assets/images/consulting-tool.svg";
import lightbulb from "../assets/images/lightbulb.svg";
import react from "../assets/images/react.svg";
import tailwind from "../assets/images/tailwind.svg";
import javascript from "../assets/images/javascript.svg";

const defaultServices = [
  {
    id: "design",
    illustration: designIllustration,
    illustrationAlt: "Designer working on a laptop",
     illustrationHeight: 165,
    title: "Design",
    subtitle: "UX/UI",
    description:
      "This is where it all comes together for me. Turning a real problem into a web or mobile interface people don't have to think twice about, that's the part of the job I never get tired of.",
    tools: [
      { name: "Figma", logo: figma },
      { name: "ChatGPT", logo: chatgpt },
      { name: "Claude", logo: claude },
    ],
  },
  {
    id: "research",
    illustration: researchIllustration,
     illustrationHeight: 135,
      illustrationOffset: 10,
    illustrationAlt: "Documents with a magnifying glass",
    title: "User Research",
    description:
      "Honestly, this is where every project starts for me. I can't design a solution to a problem I don't understand yet — so I ask, I listen, I test, and I let what I learn shape everything that comes after.",
    tools: [
      { name: "Search", logo: search },
      { name: "Google Forms", logo: googleForms },
    ],
  },
  {
    id: "audit",
    illustration: auditIllustration,
     illustrationHeight: 150,
    illustrationAlt: "Chat bot inside a frame",
    title: "Design Audit",
    description:
      "Sometimes the most exciting thing isn't building something new — it's sitting with something that already exists and finding exactly where it's quietly failing people, then fixing it.",
    tools: [
      { name: "Google Analytics", logo: analytics },
      { name: "Audit tool", logo: auditTool, size: 32 },
    ],
  },
  {
    id: "consulting",
    illustration: consultingIllustration,
     illustrationHeight: 150,
    illustrationAlt: "Two people discussing a product",
    title: "Product Consulting",
    description:
      "I love sitting with founders and teams early, before the pixels, before the polish, helping them think through what the product should actually be and why.",
    tools: [
      { name: "Consulting tool", logo: consultingTool },
      { name: "Ideas", logo: lightbulb },
    ],
  },
  {
    id: "frontend",
    illustration: frontendIllustration,
     illustrationHeight: 150,
    illustrationAlt: "Chat bot inside a frame",
    title: "Frontend Literacy",
    description:
      "Not trying to become a developer. Just tired of designing things and wondering if they're even possible to build.",
    tools: [
      { name: "React", logo: react },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "JavaScript", logo: javascript },
    ],
  },
];

function ArrowButton({ direction, enabled, onClick }) {
  const isLeft = direction === "left";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isLeft ? "Previous card" : "Next card"}
      tabIndex={enabled ? 0 : -1}
      className={`absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#4F46E5] text-white opacity-0 shadow-lg transition-opacity duration-200 hover:bg-[#4338CA] ${
        isLeft ? "left-4" : "right-4"
      } ${
        enabled
          ? "cursor-pointer group-hover:opacity-100 focus-visible:opacity-100 [@media(hover:none)]:opacity-100"
          : "pointer-events-none"
      }`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={isLeft ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"} />
      </svg>
    </button>
  );
}

function Services({
  label = "/My Service",
  heading = "Let's Talk",
  highlight = "Skillset",
  text = `Design is only half the job, understanding the "why" and the "how it's built" is the other half. This is my range.`,
  services = defaultServices,
  className = "",
}) {
  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    setCanPrev(scroller.scrollLeft > 4);
    setCanNext(
      scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 4
    );
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollByCard = (direction) => {
    const scroller = scrollerRef.current;
    const firstCard = scroller?.children[0];
    if (!firstCard) return;

    const gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;
    scroller.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className={`w-full overflow-hidden bg-[linear-gradient(to_bottom,#F4F3FE_0%,#F4F3FE_75%,#FFFFFF_75%,#FFFFFF_100%)] py-12 md:py-16 ${className}`}
    >
      {/* Heading: normal page container */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-24">
        <p className="font-lora text-base italic text-[#1F1D1D]">{label}</p>
        <h2 className="mt-2 font-rothek text-[32px] font-medium leading-tight text-black md:text-[40px]">
          {heading} <span className="text-[#C4C4C4]">{highlight}</span>
        </h2>
        <p className="mt-6 max-w-[760px] font-rothek text-lg font-normal leading-relaxed text-[#6B6B6B]">
          {text}
        </p>
      </div>

      {/* Cards: full width, so they run off the right edge of the screen */}
      <div className="group relative mt-6">
        <div
          ref={scrollerRef}
          onScroll={updateArrows}
          className="flex snap-x snap-mandatory gap-8 overflow-x-auto py-8 pl-6 pr-6 scroll-pl-6 md:pl-[max(6rem,calc((100%-1440px)/2+6rem))] md:pr-24 md:scroll-pl-[max(6rem,calc((100%-1440px)/2+6rem))] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map(({ id, ...card }) => (
            <ServiceCard
              key={id}
              {...card}
              className="w-[260px] shrink-0 snap-start md:w-[340px] lg:w-[400px]"
            />
          ))}
        </div>

        <ArrowButton
          direction="left"
          enabled={canPrev}
          onClick={() => scrollByCard(-1)}
        />
        <ArrowButton
          direction="right"
          enabled={canNext}
          onClick={() => scrollByCard(1)}
        />
      </div>
    </section>
  );
}

export default Services;