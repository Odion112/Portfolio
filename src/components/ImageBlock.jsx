function ImageBlock({
  label,
  src,
  alt = "",
  background = false,
  scrollable = false,
  className = "",
  imageClassName,
}) {
  const defaultImageClass = scrollable
    ? "h-auto w-[1100px] max-w-none"
    : "h-auto w-full object-contain";

  return (
    <figure className={`mt-10 min-w-0 ${className}`}>
      {label && (
        <p className="mb-6 font-lora text-base italic text-[#273D84]/[0.54]">
          {label}
        </p>
      )}

      <div
        className={`${background ? "bg-[#F4F5F7] p-4 md:p-8" : ""} ${
          scrollable ? "max-w-full overflow-x-auto" : ""
        }`}
      >
        <img
          src={src}
          alt={alt}
          className={imageClassName ?? defaultImageClass}
        />
      </div>
    </figure>
  );
}

export default ImageBlock;