import Button from "./Button";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#works" },
];

function ArrowUpRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Footer({
  heading = "Have A Project In Mind?",
  text = "Got a rough idea, a half built product, or just a problem you can’t solve yet? Send me a message and let’s sort it out.",
  buttonLabel = "Let's talk!",
  buttonHref = "https://wa.me/2348100661300",
  name = "Odion Okhuevbie",
  links = footerLinks,
}) {
  return (
    <footer className="w-full overflow-hidden bg-white">
      {/* CTA section with gradient */}
      <section
        id="contact"
        className="bg-[linear-gradient(to_bottom,#4F46E5_0%,#FFFFFF_45%)] px-6 pb-20 pt-24 text-center"
      >
        <h2 className="mx-auto mt-10 max-w-[900px] font-rothek text-4xl font-medium text-black md:text-6xl">
          {heading}
        </h2>

        <p className="mx-auto mt-8 max-w-[760px] font-rothek text-base font-normal leading-relaxed text-[#1F1D1D] md:text-lg">
          {text}
        </p>

        <div className="mt-16">
          <Button href={buttonHref} icon={<ArrowUpRight />}>
            {buttonLabel}
          </Button>
        </div>
      </section>

      {/* Links + copyright */}
      <div className="mx-auto my-26 mt-10 flex max-w-[1440px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-24">
        <nav className="flex flex-wrap items-center gap-6 md:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-rothek text-xl font-normal text-[#1F1D1D] transition-colors hover:text-[#4F46E5]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-rothek text-base font-normal text-[#6B6B6B] md:text-lg">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>

      {/* Large cropped name */}
      <div className="mx-auto  flex h-[12vw] max-w-[1440px] justify-center overflow-hidden px-6 md:h-[min(12vw,180px)] md:px-24">
  <p className="whitespace-nowrap my-6 text-center font-lora text-[16vw] italic leading-none text-black md:text-[min(12vw,180px)]">
    {name}
  </p>
</div>
    </footer>
  );
}

export default Footer;