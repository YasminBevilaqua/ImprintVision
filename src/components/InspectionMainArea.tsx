import { X, Maximize2 } from "lucide-react";

const logos = [
  {
    id: "roi_elgin_logo",
    label: "Logo Elgin",
    content: (
      <div className="flex h-full items-center justify-center">
        <span
          className="text-4xl font-bold tracking-widest text-primary sm:text-5xl md:text-6xl"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          elgin
        </span>
      </div>
    ),
  },
  {
    id: "roi_r32_logo",
    label: "Selo R32",
    content: (
      <div className="relative flex h-full items-center justify-center">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-[3px] border-primary/80 sm:h-36 sm:w-36 md:h-40 md:w-40">
          <span className="text-3xl font-bold text-primary sm:text-4xl">R32</span>
          <svg
            className="absolute -right-1 -top-1 h-7 w-7 text-success sm:h-8 sm:w-8"
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
    label: "Logo Inverter",
    content: (
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <svg
          className="h-10 w-16 text-primary sm:h-12 sm:w-20"
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
          className="text-2xl font-bold tracking-wider text-primary sm:text-3xl"
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
    <div className="flex min-h-screen min-w-0 flex-1 flex-col bg-background">
      {/* Header */}
      <header className="flex shrink-0 items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-success animate-pulse" />
          <h2 className="text-sm font-medium text-foreground">
            Inspeção em Andamento
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground hidden sm:inline">
            Tampa Condensadora - Modelo 9/12K
          </span>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary hover:bg-muted transition-colors"
            aria-label="Tela Cheia"
          >
            <Maximize2 className="h-4 w-4 text-foreground" />
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-destructive/10 hover:bg-destructive/20 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4 text-destructive" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-6">
        <div className="h-full rounded-2xl bg-card/50 border border-border/50 p-8">
          <div className="flex h-full flex-wrap items-center justify-center gap-6 md:gap-10">
            {logos.map((logo) => (
              <div 
                key={logo.id} 
                className="group relative flex flex-col items-center"
              >
                {/* Label */}
                <span className="mb-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {logo.label}
                </span>
                
                {/* Logo Container */}
                <div className="flex min-h-[min(55vh,480px)] w-[clamp(160px,20vw,240px)] items-center justify-center rounded-2xl bg-background border border-border shadow-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl sm:min-h-[min(60vh,520px)] sm:w-[clamp(170px,22vw,260px)]">
                  {logo.content}
                </div>
                
                {/* Status Indicator */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-success" />
                  <span className="text-xs text-muted-foreground">Detectado</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex shrink-0 items-center justify-between px-6 py-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="font-medium text-foreground">IMPRINT VISION</span>
          <span className="hidden sm:inline">v1.0.0</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono hidden sm:inline">192.168.0.1</span>
          <span className="font-mono">{new Date().toLocaleString('pt-BR')}</span>
          <span className="inline-flex items-center gap-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-success" />
            Online
          </span>
        </div>
      </footer>
    </div>
  );
};

export default InspectionMainArea;
