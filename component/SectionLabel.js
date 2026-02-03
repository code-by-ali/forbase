/** Small left-border block used in section headers (e.g. "001" / "Why choose us"). */
export default function SectionLabel({ number, label, className = "" }) {
  return (
    <div className={`text-sm border-l-2 border-secondary p-2 flex flex-col gap-2 min-w-[7.5rem] md:min-w-60 lg:min-w-80 ${className}`}>
      <p className="text-secondary">{number}</p>
      <p className="text-primary">{label}</p>
    </div>
  );
}
