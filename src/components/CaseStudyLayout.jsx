import TableOfContents from "./TableOfContents";

function CaseStudyLayout({ sections, children, className = "" }) {
  return (
    <div
      className={`mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1fr)] gap-12 px-6 py-16 md:grid-cols-[240px_minmax(0,1fr)] md:gap-20 md:px-24 ${className}`}
    >
      {/* Left: sticky table of contents */}
      <aside className="hidden md:block">
        <TableOfContents items={sections} className="sticky top-32" />
      </aside>

      {/* Right: the case study sections */}
      <main className="flex min-w-0 flex-col gap-20">{children}</main>
    </div>
  );
}

export default CaseStudyLayout;