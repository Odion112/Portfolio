import { Link } from "react-router-dom";

const variants = {
  primary: "bg-[#4F46E5] text-white hover:bg-[#4338CA]",
  outline:
    "border border-[#4F46E5] bg-white text-[#4F46E5] hover:bg-[#F4F3FE]",
};

function Button({
  children,
  href,
  to,
  onClick,
  type = "button",
  icon,
  iconPosition = "right",
  variant = "primary",
  className = "",
  ...props
}) {
  const styles = `inline-flex items-center justify-center gap-2 px-8 py-3.5 text-center font-rothek text-base font-medium transition-colors cursor-pointer ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="flex shrink-0 items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="flex shrink-0 items-center">{icon}</span>
      )}
    </>
  );

  // Link to another page in your site
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {content}
      </Link>
    );
  }

  // Normal link (anchors, external sites)
  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} {...props}>
      {content}
    </button>
  );
}

export default Button;