function WorkCard({
  image,
  imageAlt = "",
  title,
  tags = [],
  href,
  className = "",
}) {
  const content = (
    <>
      {/* Project image */}
      <img
        src={image}
        alt={imageAlt}
        className="h-[400px] w-full object-cover"
      />

      {/* Title */}
      <h3 className="mt-8 px-2 font-rothek text-3xl font-medium leading-snug text-[#1F1D1D]">
        {title}
      </h3>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-4 px-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="border border-[#D9D9D9] bg-white/60 px-6 py-3 font-rothek text-lg font-normal text-[#7A7A7A]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  const styles = `block w-[580px] max-w-full bg-[#F6F6F6] p-5 pb-8 shadow-[0_8px_40px_rgba(0,0,0,0.06)] ${className}`;

  // If an href is passed, the whole card becomes a link
  if (href) {
    return (
      <a href={href} className={`${styles} transition-transform hover:-translate-y-1`}>
        {content}
      </a>
    );
  }

  return <article className={styles}>{content}</article>;
}

export default WorkCard;