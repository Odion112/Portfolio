function ServiceCard({
  illustration,
  illustrationAlt = "",
  title,
  subtitle,
  description,
  tools = [],
  className = "",
}) {
  return (
    <article
      className={`flex h-[637px] w-[550px] max-w-full flex-col bg-white p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${className}`}
    >
      {/* Illustration */}
      <img
        src={illustration}
        alt={illustrationAlt}
        className="h-auto w-full max-w-[320px] object-contain"
      />

      {/* Title + subtitle */}
      <h3 className="mt-8 font-rothek text-4xl font-medium text-black">
        {title}
        {subtitle && (
          <span className="ml-3 text-2xl font-medium text-[#8A8A8A]">
            ({subtitle})
          </span>
        )}
      </h3>

      {/* Description */}
      <p className="mt-5 font-rothek text-xl font-normal leading-relaxed text-[#1F1D1D]">
        {description}
      </p>

      {/* Tool logos (images) */}
      {tools.length > 0 && (
        <ul className="mt-auto flex items-center gap-6">
          {tools.map((tool, index) => (
            <li key={index}>
              <img
                src={tool.logo}
                alt={tool.name}
                className="h-8 w-8 object-contain"
              />
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default ServiceCard;