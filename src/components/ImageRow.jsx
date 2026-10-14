function ImageRow({
  label,
  images = [],
  imageHeight = 560,
  gap = 24,
  className = "",
}) {
  return (
    <figure className={`mt-10 min-w-0 ${className}`}>
      {label && (
        <p className="mb-6 font-lora text-base italic text-[#273D84]/[0.54]">
          {label}
        </p>
      )}

      <div className="max-w-full overflow-x-auto pb-4">
        <ul className="flex w-max" style={{ gap }}>
          {images.map((img, index) => (
            <li key={index} className="shrink-0">
              <img
                src={img.src}
                alt={img.alt || ""}
                style={{ height: imageHeight }}
                className="w-auto max-w-none"
              />
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

export default ImageRow;