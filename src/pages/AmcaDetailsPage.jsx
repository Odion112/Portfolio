import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InfoTable from "../components/InfoTable";
import CaseStudyLayout from "../components/CaseStudyLayout";
import CaseSection from "../components/CaseSection";
import ImageBlock from "../components/ImageBlock";
import ImageRow from "../components/ImageRow";

// Change to your real file names in src/assets/images
import heroImage from "../assets/images/amca.svg";
import oldDesign from "../assets/images/old-design.svg";
import PostAudit from "../assets/images/post-audit.svg";
import insightImage from "../assets/images/insight.svg";
import landingPage from "../assets/images/landing.svg";
import aboutPage from "../assets/images/about-1.svg";
import mobileScreens from "../assets/images/mobile.svg";
import mobileOne from "../assets/images/screen-1.svg";
import mobileTwo from "../assets/images/screen-2.svg";
import mobileThree from "../assets/images/screen-3.svg";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "The Problem" },
  { id: "original-design", label: "The Original Design" },
  { id: "design-insight", label: "Design Insight" },
  { id: "solution", label: "The Solution" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

const problems = [
  { bold: "Pain points", rest: "buried as plain bullets with no visual weight" },
  { bold: "No product screenshot", rest: "users couldn't see what they were signing up for" },
  { bold: "No HIPAA or compliance signal", rest: "anywhere on the page" },
  { bold: "Brand story and conversion pitch", rest: "competing on same page" },
  { bold: "Plain weak layout", rest: "no visual hierarchy at all" },
];

/*function Callout({ children, caption, className = "" }) {
  return (
    <div
      className={`mt-10 rounded-[20px] bg-[#4F46E5] px-8 py-10 text-white md:px-12 md:py-12 ${className}`}
    >
      <p className="max-w-[640px] font-rothek text-xl font-medium leading-8 md:text-2xl md:leading-9">
        {children}
      </p>
      {caption && (
        <p className="mt-8 font-rothek text-xs font-normal uppercase tracking-wider text-white/70">
          {caption}
        </p>
      )}
    </div>
  );
}*/

function AmcaDetailsPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Navbar />

      {/* Header */}
      <header className="mx-auto max-w-[1440px] px-6 pt-10 md:px-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="font-rothek text-sm text-[#8A8A8A]"
        >
          <Link to="/works" className="hover:text-[#4F46E5]">
            Works
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#1F1D1D]">AMCA AI</span>
        </nav>

        <h1 className="mt-14 font-rothek text-[36px] font-medium leading-tight text-black md:text-[44px]">
          AMCA AI - Redesign
        </h1>
        <p className="mt-3 font-rothek text-lg font-normal text-[#8A8A8A]">
          From one cluttered page to two clear ones.
        </p>

        <img
          src={heroImage}
          alt="AMCA AI website on a tablet"
          className="mt-14 h-auto w-full object-cover"
        />

        <InfoTable
          className="mt-16"
          items={[
            { label: "Role", value: "Product Designer" },
            { label: "Industry", value: "HealthTech" },
            { label: "Tools", value: "Figma" },
            { label: "Year", value: "2025" },
            { label: "Client", value: "AMCA AI" },
          ]}
        />
      </header>

      {/* Table of contents + sections */}
      <CaseStudyLayout className="mt-10" sections={sections}>
        <CaseSection
          id="overview"
          label="/Overview"
          heading="From one cluttered page to two clear ones."
          text="AMCA AI is a healthcare AI platform that automates clinical documentation so healthcare professionals spend less time on paperwork. What started as a visual redesign quickly became a strategic one, the page had bigger problems than how it looked."
        />

        <CaseSection
          id="problem"
          label="/The Problem"
          heading="The brief was simple. The problem wasn't."
          text="AMCA AI is a healthcare AI platform that automates clinical documentation so healthcare professionals spend less time on paperwork. What started as a visual redesign quickly became a strategic one, the page had bigger problems than how it looked."
        />

        <CaseSection
          id="original-design"
          label="/The Original Design"
          heading="What the page looked like"
          paragraphs={[
            "The original page had the right intentions but the wrong execution. The layout competed with itself, important information was buried, trust signals were absent, no product in sight and the visual hierarchy gave equal weight to everything, which meant nothing stood out.",
            "For a platform making a bold claim in a high-stakes industry like healthcare, the page wasn't building the confidence it needed to.",
          ]}
        >
          <ImageBlock
            label="Old website design"
            src={oldDesign}
            alt="The original AMCA AI landing page"
          />

          <ol className="mt-10 space-y-3 font-rothek text-base text-[#1F1D1D]">
            {problems.map((item, index) => (
              <li key={index}>
                <span className="font-medium">
                  {index + 1}. {item.bold}
                </span>{" "}
                {item.rest}
              </li>
            ))}
          </ol>
        </CaseSection>

        <CaseSection
          id="design-insight"
          label="/Design Insight"
          heading="One page couldn't do two jobs"
          text="The page was trying to convert healthcare decision-makers while also building credibility with them. Splitting that work was the fix: one page to convert, one to establish the trust that makes conversion possible."
        >
          {/*<Callout caption="Post audit recommendation">
            A landing page should have one job. The moment it tries to do two,
            it fails at both.
          </Callout>*/}
 
  <ImageBlock
            src={PostAudit}
            alt="Concept sketches for the landing page and the about page"
          />

          <ImageBlock
            src={insightImage}
            alt="Concept sketches for the landing page and the about page"
          />
        </CaseSection>

        <CaseSection
          id="solution"
          label="/The Solution"
          heading="What it became"
          text="The solution wasn't just structural, it was strategic. The landing page was stripped back and redesigned around one job: conversion. Layout, copy, and CTA placement were all reconsidered. A separate About Us page was introduced to handle trust and credibility, so the landing page could focus entirely on moving the right person forward."
        >
          <ImageBlock
            label="Landing page - Redesign"
            src={landingPage}
            alt="Redesigned AMCA AI landing page"
          />
          <ImageBlock
            label="About Us page"
            src={aboutPage}
            alt="New AMCA AI About Us page"
          />
        <ImageRow
  label="MOBILE SCREENS"
  imageWidth={220}
  images={[
    { src: mobileOne, alt: "Mobile landing page" },
    { src: mobileTwo, alt: "Mobile About Us page" },
    { src: mobileThree, alt: "Mobile screen three" },
  ]}
/>
        </CaseSection>

        <CaseSection
          id="impact"
          label="/Impact"
          heading="What the client walked away with"
          paragraphs={[
            "The redesign drove a 4x increase in waitlist signups compared to the original page. CTA placement was consolidated and strategically positioned at three key points across the page, ensuring the right person was always one tap from signing up.",
            "Beyond the deliverables, by reframing the brief from \"make this look better\" to \"fix a conversion problem\", I gave AMCA AI more than new pages. I gave them clarity on what their website needed to do. 4x more signups means 4x more potential paying customers in the pipeline.",
          ]}
        />

        <CaseSection
          id="reflection"
          label="/Reflection"
          heading="What this project taught me"
          text="The best thing you can sometimes do for a client is hand back a better brief than the one they gave you. Solving the right problem is always more valuable than solving the stated one faster. The most important decision on this project wasn't a layout choice or a color. It was deciding that the page needed to work from the point of view of what it needed to do."
        >
          <p className="mt-12 font-lora text-base italic text-[#8A8A8A]">
            If you got this far...
          </p>
          <p className="mt-3 inline-block bg-[#F4F3FE] px-6 py-3 font-rothek text-2xl font-medium text-[#4F46E5]">
            Thank you.
          </p>
        </CaseSection>
      </CaseStudyLayout>

      <Footer buttonHref="#contact" />
    </div>
  );
}

export default AmcaDetailsPage;