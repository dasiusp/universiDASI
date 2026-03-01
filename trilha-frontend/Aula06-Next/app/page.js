import PricingCard from "../components/PricingCard";

export default function Home() {
  const plans = [
    {
      title: "Iniciante",
      price: "29,90",
      period: "mes",
      features: [
        "1 projeto ativo",
        "Suporte por email",
        "Relatorios basicos",
      ],
      cta: "Assinar",
    },
    {
      title: "Profissional",
      price: "79,90",
      period: "mes",
      features: [
        "Projetos ilimitados",
        "Suporte prioritario",
        "Relatorios avancados",
        "Automacoes",
      ],
      featured: true,
      cta: "Assinar",
    },
    {
      title: "Enterprise",
      price: "199,90",
      period: "mes",
      features: [
        "Equipe ilimitada",
        "Suporte 24/7",
        "SLA dedicado",
        "Customizacoes",
      ],
      cta: "Assinar",
    },
  ];

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Escolha o plano que acompanha o ritmo do seu time
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
          Controle seus projetos, automatize rotinas e mantenha o time alinhado
          com um dashboard feito para crescer com voce.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.title} {...plan} />
        ))}
      </section>
    </main>
  );
}
