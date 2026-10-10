function QuoteMark() {
  return (
    <svg
      width="40"
      height="26"
      viewBox="0 0 40 26"
      fill="#1F1D1D"
      aria-hidden="true"
    >
      <polygon points="12,0 22,0 16,26 6,26" />
      <polygon points="28,0 38,0 32,26 22,26" />
    </svg>
  );
}

function ReviewCard({
  quote,
  name,
  role,
  avatar,
  avatarAlt = "",
  quoteIcon,
  className = "",
}) {
  return (
    <figure className={`w-[540px] max-w-full ${className}`}>
      {/* Quote text + quote mark */}
      <div className="flex items-start justify-between gap-6">
        <blockquote className="max-w-[400px] font-rothek text-2xl font-normal leading-snug text-[#6B6B6B]">
          {quote}
        </blockquote>

        <div className="shrink-0 pt-1">
          {quoteIcon ? (
            <img src={quoteIcon} alt="" className="h-6 w-auto" />
          ) : (
            <QuoteMark />
          )}
        </div>
      </div>

      {/* Author */}
      <figcaption className="mt-12 flex items-center gap-6">
        <img
          src={avatar}
          alt={avatarAlt || name}
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <p className="font-rothek text-2xl font-medium text-[#1F1D1D]">
            {name}
          </p>
          <p className="font-rothek text-2xl font-normal text-[#6B6B6B]">
            {role}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}

export default ReviewCard;