function ServiceCard({
  illustration,
  illustrationAlt = "",
  illustrationHeight = 150,
  illustrationOffset = 0,
  title,
  subtitle,
  description,
  tools = [],
  toolSize = 28,
  className = "",
}) {
  return (
    <article
      className={`flex flex-col bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${className}`}
    >
      {/* Illustration: now sits at the TOP of its box */}
      <div className="flex h-[180px] items-start">
        <img
          src={illustration}
          alt={illustrationAlt}
          style={{ height: illustrationHeight, marginTop: illustrationOffset }}
          className="w-auto max-h-full max-w-full object-contain object-left"
        />
      </div>

      <h3 className="mt-6 font-rothek text-[28px] font-medium leading-tight text-black">
        {title}
        {subtitle && (
          <span className="ml-2 text-xl font-medium text-[#8A8A8A]">
            ({subtitle})
          </span>
        )}
      </h3>

      <p className="mt-4 font-rothek text-base font-normal leading-relaxed text-[#1F1D1D]">
        {description}
      </p>

      {tools.length > 0 && (
        <ul className="mt-auto flex items-center gap-5 pt-8">
          {tools.map((tool, index) => {
            const size = tool.size ?? toolSize;
            return (
              <li key={index}>
                <img
                  src={tool.logo}
                  alt={tool.name}
                  style={{ height: size, width: size }}
                  className="object-contain"
                />
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}

export default ServiceCard;