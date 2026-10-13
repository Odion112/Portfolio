function ImageBlock({ label, src, alt = "", className = "" }) {
  return (
    <figure className={`mt-10 ${className}`}>
      {label && (
        <p className="mb-6 font-lora text-base italic text-[#4F46E5]">
          {label}
        </p>
      )}
      <div className="bg-[#F4F5F7] p-4 md:p-8">
        <img src={src} alt={alt} className="h-auto w-full object-contain" />
      </div>
    </figure>
  );
}

export default ImageBlock;