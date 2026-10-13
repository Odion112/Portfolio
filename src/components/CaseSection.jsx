function CaseSection({
  label = "/Overview",
  heading = "From one cluttered page to two clear ones.",
  text = "AMCA AI is a healthcare AI platform that automates clinical documentation so healthcare professionals spend less time on paperwork. What started as a visual redesign quickly became a strategic one, the page had bigger problems than how it looked.",
  className = "",
}) {
  return (
    <section className={`w-full ${className}`}>
      <p className="font-lora text-base italic text-[#8A8A8A]">{label}</p>

      <h2 className="mt-3 font-rothek text-[28px] font-medium leading-tight text-black md:text-[32px]">
        {heading}
      </h2>

      <p className="mt-6 max-w-[880px] font-rothek text-lg font-normal leading-8 text-[#6B6B6B] md:text-xl">
        {text}
      </p>
    </section>
  );
}

export default CaseSection;
