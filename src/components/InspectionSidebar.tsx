import { CheckCircle2, Pipette, Ruler, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statCards = [
  { label: "Aprovado", value: "9999", className: "bg-[#2A9966]" },
  { label: "Reprovado", value: "9999", className: "bg-[#DC2626]" },
  { label: "Eficiência", value: "9999", className: "bg-[#2A8BD6]" },
  { label: "Total", value: "9999", className: "bg-[#E8EBF0] text-[#121826]" },
];

const inspections = [
  { label: "Ausência/Presença", icon: Search },
  { label: "Cor (Hexadecimal)", icon: Pipette },
  { label: "Dimensões", icon: Ruler },
];

const InspectionSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="flex min-h-screen w-[min(26vw,380px)] min-w-[270px] shrink-0 flex-col gap-4 bg-card px-4 pb-4 pt-4 shadow-[4px_0_20px_rgba(0,0,0,0.3)]">
      <nav
        className="flex h-12 shrink-0 items-center gap-5 border-b border-border bg-secondary px-4 rounded-xl text-[13px] font-normal text-foreground"
        aria-label="Navegação secundária"
      >
        <button 
          type="button" 
          className="hover:text-primary transition-colors"
          onClick={() => navigate('/')}
        >
          Setup
        </button>
        <button type="button" className="hover:text-primary transition-colors">
          Outros
        </button>
      </nav>

      <h1 className="text-center text-[17px] font-bold leading-snug text-foreground">
        Acompanhamento de Produção
      </h1>

      {/* Quatro métricas em linha: rótulo acima + caixa com número */}
      <div className="grid grid-cols-4 gap-1.5">
        {statCards.map((card) => (
          <div key={card.label} className="flex min-w-0 flex-col gap-1">
            <span className="text-center text-[11px] font-normal leading-tight text-muted-foreground">{card.label}</span>
            <div
              className={`${card.className} flex min-h-[52px] items-center justify-center rounded-xl px-1 py-1.5 text-white shadow-lg`}
            >
              <span className="text-[17px] font-bold tabular-nums leading-none sm:text-[19px] font-mono">{card.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full shrink-0 flex-col rounded-xl bg-card p-3 shadow-lg border border-border">
        <h2 className="mb-2.5 text-sm font-semibold text-foreground">Inspeções Realizadas</h2>
        <div className="flex flex-col gap-2">
          {inspections.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl border border-border bg-muted px-2.5 py-2 shadow-md"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <item.icon className="h-[18px] w-[18px] shrink-0 text-primary" strokeWidth={2} />
                <span className="truncate text-[13px] font-medium text-foreground">{item.label}</span>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2A9966] text-white shadow-sm">
                <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-[#2A9966] py-3 text-[15px] font-bold uppercase tracking-wider text-white shadow-lg transition-colors hover:opacity-90"
        >
          APROVADO
        </button>
      </div>
    </aside>
  );
};

export default InspectionSidebar;
