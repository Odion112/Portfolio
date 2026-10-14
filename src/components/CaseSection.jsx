function CaseSection({
  id,
  label,
  heading,
  text,
  paragraphs = [],
  children,
  className = "",
}) {
  // Accept a single `text` or a list of `paragraphs`
  const allParagraphs = text ? [text, ...paragraphs] : paragraphs;

  return (
    <section
      id={id}
      className={`w-full border-b border-[#E5E5E5] pb-16 last:border-b-0 ${className}`}
    >
      {label && (
        <p className="font-lora text-base italic text-[#8A8A8A]">{label}</p>
      )}

      {heading && (
        <h2 className="mt-3 font-rothek text-[28px] font-medium leading-tight text-black md:text-[32px]">
          {heading}
        </h2>
      )}

      {allParagraphs.length > 0 && (
        <div className="mt-6 max-w-[880px] space-y-6">
          {allParagraphs.map((p, index) => (
            <p
              key={index}
              className="font-rothek text-lg font-normal leading-8 text-[#6B6B6B] md:text-xl"
            >
              {p}
            </p>
          ))}
        </div>
      )}

      {children}
    </section>
  );
}

export default CaseSection;