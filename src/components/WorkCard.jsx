import { Link } from "react-router-dom";

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
        className="h-[320px] w-full object-cover"
      />

      {/* Title */}
      <h3 className="mt-8 px-2 font-rothek text-[28px]  font-medium leading-snug text-[#1F1D1D]">
        {title}
      </h3>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-4 px-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="border border-[#D9D9D9] bg-white/60 px-4 py-2 font-rothek text-[16px]  font-normal text-[#7A7A7A]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  const styles = `block w-[580px] max-w-full bg-[#F6F6F6] p-5 pb-8 shadow-[0_2px_4px_rgba(0,0,0,0.06)] ${className}`;
  const linkStyles = `${styles} transition-transform hover:-translate-y-1`;

  // No link, or a placeholder "#": plain card
  if (!href || href === "#") {
    return <article className={styles}>{content}</article>;
  }

  // External link (starts with http): normal link, new tab
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={linkStyles}
      >
        {content}
      </a>
    );
  }

  // Internal page (e.g. "/works/amca-ai"): React Router link
  return (
    <Link to={href} className={linkStyles}>
      {content}
    </Link>
  );
}

export default WorkCard;