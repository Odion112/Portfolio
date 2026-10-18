function ImageRow({
  label,
  images = [],
  imageWidth = 380, // default width of each image in px
  gap = 18,
  className = "",
}) {
  return (
    <figure className={`mt-10 min-w-0 ${className}`}>
      {label && (
        <p className="mb-6 font-lora text-base italic text-[#273D84]/[0.54]">
          {label}
        </p>
      )}

      <div className="w-full max-w-full overflow-x-auto pb-4">
        <ul className="flex w-max" style={{ gap }}>
          {images.map((img, index) => (
            <li
              key={index}
              className="flex-none"
              style={{ width: img.width ?? imageWidth }}
            >
              <img
                src={img.src}
                alt={img.alt || ""}
                className="block h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

export default ImageRow;