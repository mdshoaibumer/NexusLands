export function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
  maxLength,
  pattern,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
  maxLength?: number;
  pattern?: string;
}) {
  return (
    <label className="relative block">
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          maxLength={maxLength}
          rows={4}
          className="w-full resize-none border-b border-forest/20 bg-transparent py-4 text-[16px] text-forest-deep transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          maxLength={maxLength}
          pattern={pattern}
          className="w-full border-b border-forest/20 bg-transparent py-4 text-[16px] text-forest-deep transition-colors placeholder:text-muted-foreground focus:border-gold focus:outline-none"
        />
      )}
      <span className="pointer-events-none absolute left-0 top-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[14px] peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-3 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.25em] peer-focus:text-gold">
        {label}
      </span>
    </label>
  );
}
