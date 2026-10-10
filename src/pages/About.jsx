const defaultParagraphs = [
  "For more than 4 years now, design has been at the center of my world. Along the way, I've worked across fintech, edtech, health tech, and Shopify ecommerce, solving real usability problems for people who actually use these products every day.",
  "Most recently, I led design at IBT Learning Africa as a full-time Design Lead. Today, I'm working independently as a freelance Product Designer, taking on projects across these industries while staying deeply hands on with the craft.",
  "This year, I also started learning software development. Not to become a developer, but to think more critically about feasibility, structure, and how design decisions actually translate into a working product.",
];

const defaultExperience = [
  { role: "UI/UX Designer", company: "Freelancing", period: "2025 - Now" },
  { role: "Design Lead", company: "IBT Learning Africa", period: "2023 - 2025" },
  { role: "Product Designer", company: "Afrisplash", period: "2022 - 2024" },
];

function About({
  label = "/About Me",
  heading = "Pushing Boundaries",
  highlight = "since 2021",
  image,
  imageAlt = "",
  name = "Odion Okhuevbie",
  role = "UI/UX Designer",
  paragraphs = defaultParagraphs,
  experience = defaultExperience,
  className = "",
}) {
  return (
    <section
      id="about"
      className={`mx-auto max-w-[1440px] px-6 py-16 md:px-24 md:py-24 ${className}`}
    >
      {/* Heading */}
      <p className="font-lora text-base italic text-[#1F1D1D]">{label}</p>
      <h2 className="mt-2 font-rothek text-[32px] font-medium leading-tight text-black md:text-[40px]">
        {heading} <span className="text-[#C4C4C4]">{highlight}</span>
      </h2>

      {/* Content */}
      <div className="mt-16 grid gap-12 md:grid-cols-[minmax(0,430px)_1fr] md:gap-20">
        {/* Left: photo + name */}
        <div>
          <img
            src={image}
            alt={imageAlt}
            className="h-auto w-full object-contain"
          />
          <div className="mt-8 px-8">
            <p className="font-rothek text-xl font-medium text-[#1F1D1D]">
              {name}
            </p>
            <p className="font-rothek text-lg font-normal text-[#B0B0B0]">
              {role}
            </p>
          </div>
        </div>

        {/* Right: text + experience */}
        <div className="flex flex-col justify-between gap-12">
          <div className="space-y-8">
            {paragraphs.map((p, index) => (
              <p
                key={index}
                className="max-w-[760px] font-rothek text-lg font-normal leading-8 text-[#6B6B6B] md:text-xl"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Experience table */}
          <div className="border-l border-[#D9D9D9] pl-10">
            <ul>
              {experience.map((item, index) => (
                <li
                  key={index}
                  className="grid grid-cols-[1.2fr_1.2fr_auto] items-center gap-4 border-b border-[#E5E5E5] py-5 font-rothek text-lg"
                >
                  <span className="font-normal text-[#1F1D1D]">{item.role}</span>
                  <span className="font-normal text-[#B0B0B0]">
                    {item.company}
                  </span>
                  <span className="text-right font-normal text-[#1F1D1D]">
                    {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;