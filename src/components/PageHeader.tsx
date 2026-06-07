export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/70 to-white"
      />
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
          {eyebrow}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base text-slate-600 md:text-lg">
          {lead}
        </p>
      </div>
    </section>
  );
}
