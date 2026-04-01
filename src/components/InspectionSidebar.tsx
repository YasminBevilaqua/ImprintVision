import { CheckCircle2, Pipette, Ruler, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const statCards = [
  { label: "Aprovado", value: "9999", className: "bg-[#00a843]" },
  { label: "Reprovado", value: "9999", className: "bg-[#d93025]" },
  { label: "Eficiência", value: "9999", className: "bg-[#0c4a8c]" },
  { label: "Total", value: "9999", className: "bg-[#0a2647]" },
];

const inspections = [
  { label: "Ausência/Presença", icon: Search },
  { label: "Cor (Hexadecimal)", icon: Pipette },
  { label: "Dimensões", icon: Ruler },
];

const InspectionSidebar = () => {
  const navigate = useNavigate();

  return (
    <aside className="flex min-h-screen w-[min(26vw,380px)] min-w-[270px] shrink-0 flex-col gap-4 bg-[#0056b3] px-4 pb-4 pt-0 shadow-[4px_0_20px_rgba(0,0,0,0.1)]">
      <nav
        className="-mx-4 flex h-10 shrink-0 items-center gap-5 border-b border-black/20 bg-[#17447a] px-4 text-[13px] font-normal text-white"
        aria-label="Navegação secundária"
      >
        <button 
          type="button" 
          className="hover:opacity-90"
          onClick={() => navigate('/')}
        >
          Setup
        </button>
        <button type="button" className="hover:opacity-90">
          Outros
        </button>
      </nav>

      <h1 className="text-center text-[17px] font-bold leading-snug text-white">
        Acompanhamento de Produção
      </h1>

      {/* Quatro métricas em linha: rótulo acima + caixa com número */}
      <div className="grid grid-cols-4 gap-1.5">
        {statCards.map((card) => (
          <div key={card.label} className="flex min-w-0 flex-col gap-1">
            <span className="text-center text-[11px] font-normal leading-tight text-white/95">{card.label}</span>
            <div
              className={`${card.className} flex min-h-[52px] items-center justify-center rounded-md px-1 py-1.5 text-white shadow-sm`}
            >
              <span className="text-[17px] font-bold tabular-nums leading-none sm:text-[19px]">{card.value}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full shrink-0 flex-col rounded-xl bg-white p-3 shadow-md">
        <h2 className="mb-2.5 text-sm font-semibold text-muted-foreground">Inspeções Realizadas</h2>
        <div className="flex flex-col gap-2">
          {inspections.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-md border border-[#d1d5db] bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <item.icon className="h-[18px] w-[18px] shrink-0 text-[#0056b3]" strokeWidth={2} />
                <span className="truncate text-[13px] font-medium text-[#374151]">{item.label}</span>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#00a843] text-white shadow-sm">
                <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="mt-3 w-full rounded-lg bg-[#00a843] py-3 text-[15px] font-bold uppercase tracking-wider text-white shadow-md transition-colors hover:bg-[#008c38]"
        >
          APROVADO
        </button>
      </div>
    </aside>
  );
};

export default InspectionSidebar;
