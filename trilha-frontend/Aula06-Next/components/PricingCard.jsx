export default function PricingCard({
  title,
  price,
  period = "mes",
  features = [],
  featured = false,
  cta = "Assinar",
}) {
  const cardClass = featured
    ? "rounded-2xl border border-blue-200 bg-white p-8 shadow-xl ring-2 ring-blue-500"
    : "rounded-2xl border border-slate-200 bg-white p-8 shadow-md";

  return (
    <article className={cardClass}>
      {featured ? (
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Mais popular
        </span>
      ) : null}
      <h3 className="mt-4 text-xl font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-900">R$ {price}</span>
        <span className="text-sm text-slate-500">/{period}</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-slate-600">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 flex-none rounded-full bg-blue-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={
          featured
            ? "mt-8 w-full rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
            : "mt-8 w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700"
        }
        type="button"
      >
        {cta}
      </button>
    </article>
  );
}
