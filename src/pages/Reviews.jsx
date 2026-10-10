import ReviewCard from "../components/ReviewCard";

// Change to your real file names in src/assets/images
import avatarOne from "../assets/images/ade.svg";
import avatarTwo from "../assets/images/ademola.svg";

const defaultReviews = [
  {
    id: "review-1",
    quote:
      "For more than 4 years now, design has been at the center of my world. Along the way, I've worked across fintech, edtech, health tech, and Shopify ecommerce,",
    name: "Ademola",
    role: "Founder of IBT Learning",
    avatar: avatarOne,
    avatarAlt: "Portrait of Ademola",
  },
  {
    id: "review-2",
    quote:
      "For more than 4 years now, design has been at the center of my world. Along the way, I've worked across fintech, edtech, health tech, and Shopify ecommerce,",
    name: "Ademola",
    role: "Founder of IBT Learning",
    avatar: avatarTwo,
    avatarAlt: "Portrait of Ademola",
  },
];

function Feedback({
  label = "/Feedback",
  heading = "What People Say About Me",
  reviews = defaultReviews,
  className = "",
}) {
  // Even-numbered reviews go in the left column, odd-numbered in the right
  const leftColumn = reviews.filter((_, i) => i % 2 === 0);
  const rightColumn = reviews.filter((_, i) => i % 2 === 1);

  return (
    <section
      id="feedback"
      className={`mx-auto max-w-[1440px] px-6 py-16 md:px-24 md:py-24 ${className}`}
    >
      {/* Heading */}
      <p className="font-lora text-base italic text-[#1F1D1D]">{label}</p>
      <h2 className="mt-2 font-rothek text-[32px] font-medium leading-tight text-black md:text-[40px]">
        {heading}
      </h2>

      {/* Two columns with a divider; the right column sits lower */}
      <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-0">
        {/* Left column */}
        <div className="flex flex-col gap-16 md:pr-10 md:pt-[50px]">
          {leftColumn.map(({ id, ...review }) => (
            <ReviewCard key={id} {...review} />
          ))}
        </div>

        {/* Right column */}
        {rightColumn.length > 0 && (
          <div className="flex flex-col gap-16 md:border-l md:border-[#E5E5E5] md:pl-[72px] md:pt-[225px]">
            {rightColumn.map(({ id, ...review }) => (
              <ReviewCard key={id} {...review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Feedback;