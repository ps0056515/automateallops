type BrandWordmarkProps = {
  className?: string;
};

export default function BrandWordmark({ className = 'text-lg' }: BrandWordmarkProps) {
  return (
    <span className={`font-black tracking-tight ${className}`} aria-label="AutomateAllOps">
      <span className="text-[var(--brand-accent)]">A</span>
      <span className="text-[var(--brand-text)]">utomateAll</span>
      <span className="text-[var(--brand-accent)]">O</span>
      <span className="text-[var(--brand-text)]">ps</span>
    </span>
  );
}
