function Button({
  children,
  href,
  onClick,
  type = "button",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const styles = `inline-flex items-center justify-center gap-2 bg-[#4F46E5] px-8 py-3.5 text-center font-rothek text-base font-medium text-white transition-colors hover:bg-[#4338CA] cursor-pointer ${className}`;

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