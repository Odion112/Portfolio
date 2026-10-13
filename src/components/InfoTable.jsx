const defaultItems = [
  { label: "Role", value: "Product Designer" },
  { label: "Industry", value: "HealthTech" },
  { label: "Tools", value: "Figma" },
  { label: "Year", value: "2025" },
  { label: "Client", value: "AMCA AI" },
];

function InfoTable({ items = defaultItems, className = "" }) {
  return (
    <dl
      className={`grid grid-cols-2 gap-x-6 gap-y-8 border border-[#D9D9D9] bg-white px-6 py-8 md:flex md:items-stretch md:justify-between md:gap-0 md:px-10 md:py-9 ${className}`}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`md:flex-1 md:px-6 md:first:pl-0 md:last:pr-0 ${
            index > 0 ? "md:border-l md:border-[#D9D9D9]" : ""
          }`}
        >
          <dt className="font-rothek text-lg font-normal text-[#8A8A8A]">
            {item.label}
          </dt>
          <dd className="mt-3 font-rothek text-xl font-normal text-[#1F1D1D]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default InfoTable;