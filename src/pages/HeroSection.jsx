import Button from "../components/Button";

function Hero({
  heading = "UX/UI Designer who speaks both",
  highlight = "Design and Dev",
  text = "Understanding how interfaces are built helps me design ones that actually work. That's why I dig into React, JavaScript, and Tailwind CSS alongside my design process.",
  buttonLabel = "Let's talk!",
  buttonHref = "#contact",
  socials = [],
  image,
  imageAlt = "",
  sticker,
  stickerAlt = "",
  className = "",
}) {
  return (
    <section
      id="home"
      className={`mx-auto max-w-[1440px] px-6 py-16 md:px-24 md:py-24 ${className}`}
    >
      <div className="grid items-center gap-16 md:grid-cols-2">
        {/* Left: text */}
        <div>
          <h1 className="font-rothek text-[36px] font-extrabold leading-[44px] text-black md:text-[38px] md:leading-[50px]">
  {heading} <span className="text-[#4F46E5]">{highlight}</span>
</h1>  

          <p className="mt-9 max-w-[580px] font-rothek text-[24px] font-normal leading-relaxed text-[#1F1D1D] md:text-[20px] md:leading-[30px]">
            {text}
          </p>

          <div className="mt-12 flex items-center gap-8">
            <Button href={buttonHref}>{buttonLabel}</Button>

            {socials.length > 0 && (
              <ul className="flex items-center gap-6">
                {socials.map((s, index) => (
                  <li key={index}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.name}
                      className="block transition-opacity hover:opacity-70"
                    >
                      <img
                        src={s.icon}
                        alt=""
                        className="h-6 w-auto object-contain"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right: image (+ optional sticker) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[410px]">
            <img
              src={image}
              alt={imageAlt}
              className="h-auto w-full object-contain"
            />
            {sticker && (
              <img
                src={sticker}
                alt={stickerAlt}
                className="absolute -left-10 top-4 h-24 w-24 object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;