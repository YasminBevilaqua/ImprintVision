import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Setup = () => {
  const navigate = useNavigate();
  const [selectedModel, setSelectedModel] = useState("HI - High Wall Eco Dream");
  const [models, setModels] = useState([
    { id: "1", name: "HI - High Wall Eco Dream" },
    { id: "2", name: "HI - High Wall Inverter" },
    { id: "3", name: "HI - Piso Teto" },
    { id: "4", name: "HI - Cassete" },
    { id: "5", name: "ELG - Split Inverter 12000 BTU" },
    { id: "6", name: "SPR - Window Master 7500 BTU" },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newModelName, setNewModelName] = useState("");
  const [newModelPrefix, setNewModelPrefix] = useState("HI");

  const handleStart = () => {
    // Navigate to the dashboard (current Index page)
    navigate("/dashboard");
  };

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setNewModelName("");
    setNewModelPrefix("HI");
  };

  const handleSaveModel = () => {
    if (newModelName.trim()) {
      const fullModelName = `${newModelPrefix} - ${newModelName.trim()}`;
      const newModel = {
        id: Date.now().toString(),
        name: fullModelName,
      };
      setModels([...models, newModel]);
      setSelectedModel(fullModelName);
      handleCloseDialog();
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Right Buttons */}
      <div className="absolute top-6 right-6 flex items-center gap-2">
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          aria-label="Configurações"
        >
          <Settings className="w-4 h-4 text-muted-foreground" />
        </button>
        <button
          type="button"
          onClick={() => window.close()}
          className="w-9 h-9 flex items-center justify-center rounded-lg bg-destructive/10 hover:bg-destructive/20 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 text-destructive" />
        </button>
      </div>

      {/* Logo / Brand */}
      <div className="absolute top-6 left-6">
        <span className="text-sm font-semibold text-muted-foreground tracking-wide">IMPRINT VISION</span>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-3">
              Seleção de Modelo
            </h1>
            <p className="text-muted-foreground text-lg">
              Escolha o modelo do Ar-Condicionado para inspeção
            </p>
          </div>

          {/* Card Container */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-2xl p-8 md:p-10">
            {/* Model Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                Modelo
              </label>
              <Select value={selectedModel} onValueChange={setSelectedModel}>
                <SelectTrigger className="w-full h-16 px-6 text-foreground text-xl font-medium border-border bg-background shadow-inner rounded-xl">
                  <SelectValue placeholder="Selecione um modelo" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model.id} value={model.name}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/50 mb-8" />

            {/* Buttons */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={handleOpenDialog}
                className="flex-1 h-14 border-border hover:bg-secondary text-foreground font-medium rounded-xl"
              >
                + Cadastrar Novo
              </Button>
              <Button
                onClick={handleStart}
                className="flex-1 h-14 bg-success hover:bg-success/90 text-white font-semibold rounded-xl shadow-lg shadow-success/20"
              >
                Iniciar Inspeção
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <span className="text-xs text-muted-foreground">v1.0.0 — Sistema de Inspeção Visual</span>
      </footer>

      {/* Dialog for registering new model */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-foreground">Cadastrar Novo Modelo</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="prefix">Marca / Prefixo</Label>
              <Select value={newModelPrefix} onValueChange={setNewModelPrefix}>
                <SelectTrigger id="prefix" className="w-full">
                  <SelectValue placeholder="Selecione o prefixo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="HI">HI</SelectItem>
                  <SelectItem value="ELG">ELG</SelectItem>
                  <SelectItem value="SPR">SPR</SelectItem>
                  <SelectItem value="CONS">CONS</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="modelName">Nome do Modelo</Label>
              <Input
                id="modelName"
                placeholder="Ex: High Wall Pro Inverter"
                value={newModelName}
                onChange={(e) => setNewModelName(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleCloseDialog}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSaveModel}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Salvar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Setup;
