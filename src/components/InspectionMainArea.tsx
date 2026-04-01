import { X } from "lucide-react";

const logos = [
  {
    id: "roi_elgin_logo",
    content: (
      <div className="flex h-full items-center justify-center">
        <span
          className="text-3xl font-extrabold tracking-widest text-[#0056b3] sm:text-4xl md:text-5xl"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          elgin
        </span>
      </div>
    ),
  },
  {
    id: "roi_r32_logo",
    content: (
      <div className="relative flex h-full items-center justify-center">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-[4px] border-[#0056b3] sm:h-32 sm:w-32 md:h-36 md:w-36">
          <span className="text-2xl font-extrabold text-[#0056b3] sm:text-3xl md:text-4xl">R32</span>
          <svg
            className="absolute -right-1 -top-1 h-6 w-6 text-[#00a843] sm:h-7 sm:w-7"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: "roi_inverter_logo",
    content: (
      <div className="flex h-full flex-col items-center justify-center gap-2">
        <svg
          className="h-8 w-14 text-[#0056b3] sm:h-10 sm:w-16"
          viewBox="0 0 40 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 20 Q20 2 35 12" />
          <path d="M8 18 Q20 5 32 14" />
          <path d="M11 16 Q20 8 29 15" />
        </svg>
        <span
          className="text-xl font-extrabold tracking-wider text-[#0056b3] sm:text-2xl md:text-3xl"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          inverter
        </span>
      </div>
    ),
  },
];

const InspectionMainArea = () => {
  return (
    <div className="flex min-h-screen min-w-0 flex-1 flex-col bg-white">
      <header className="flex shrink-0 items-center justify-between border-b border-[#d1d5db] bg-white px-5 py-3">
        <h2 className="text-[15px] font-semibold text-[#6b7280]">
          Inspeção | Tampa Condensadora - Modelo 9/12K
        </h2>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0056b3] text-white shadow-sm transition-colors hover:bg-[#004494]"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </header>

      <main className="flex min-h-0 flex-1 flex-col bg-[#f3f4f6] p-4 md:p-6">
        <div className="flex min-h-0 flex-1 flex-col rounded-lg border border-[#d1d5db] bg-white p-6 shadow-sm md:p-10">
          <div className="flex min-h-0 flex-1 flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {logos.map((logo) => (
              <div key={logo.id} className="flex flex-col items-center gap-2 md:gap-3">
                <span className="font-mono text-xs font-medium text-[#dc2626] sm:text-sm">{logo.id}</span>
                <div className="flex min-h-[min(58vh,520px)] w-[clamp(168px,22vw,260px)] items-center justify-center rounded-md border-2 border-[#ef4444] bg-white px-3 py-4 sm:min-h-[min(62vh,560px)] sm:w-[clamp(180px,24vw,280px)]">
                  {logo.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-[#d1d5db] bg-white px-5 py-2.5 text-[12px] text-[#6b7280]">
        <span>Imprint Vision - Versão 1.0.0</span>
        <span className="hidden sm:inline">IP 192.168.0.1</span>
        <span>Data/Hora 01/01/2026 - 00:00:00</span>
        <span className="inline-flex items-center gap-1 text-[#6b7280]">
          Status <span className="font-medium text-[#00a843]">Online</span>
        </span>
      </footer>
    </div>
  );
};

export default InspectionMainArea;
