import { useEffect, useState } from "react";

function TableOfContents({ items = [], className = "" }) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    if (items.length === 0) return;

    // Reset the highlight when the list changes
    setActiveId(items[0].id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  };

  if (items.length === 0) return null;

  return (
    <nav aria-label="Case study sections" className={className}>
      <ul className="flex flex-col gap-6">
        {items.map(({ id, label }) => {
          const active = activeId === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={active ? "true" : undefined}
                className={`flex items-center gap-3 font-rothek text-base transition-colors hover:text-black ${
                  active ? "font-medium text-black" : "font-normal text-[#8A8A8A]"
                }`}
              >
                <span className="w-2 text-center">-</span>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default TableOfContents;