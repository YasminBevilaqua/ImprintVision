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
      <div className="absolute top-6 right-6 flex items-center gap-3">
        <button
          type="button"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary hover:bg-muted transition-colors border border-border"
          aria-label="Configurações"
        >
          <Settings className="w-5 h-5 text-foreground" />
        </button>
        <button
          type="button"
          onClick={() => window.close()}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-destructive/20 hover:bg-destructive/30 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 text-destructive" />
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-foreground text-4xl font-semibold mb-16">
          Selecione o modelo do Ar-Condicionado
        </h1>

        <div className="w-full max-w-3xl space-y-10">
          {/* Model Selection */}
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-full h-20 px-8 text-foreground text-2xl font-medium border-border bg-card shadow-lg rounded-xl">
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

          {/* Buttons */}
          <div className="flex gap-5 pt-5">
            <Button
              variant="default"
              onClick={handleOpenDialog}
              className="flex-1 h-20 bg-primary hover:bg-primary/90 text-primary-foreground text-2xl font-medium rounded-xl"
            >
              Cadastrar Modelo
            </Button>
            <Button
              onClick={handleStart}
              className="flex-1 h-20 bg-success hover:bg-success/90 text-success-foreground text-2xl font-medium rounded-xl"
            >
              Iniciar
            </Button>
          </div>
        </div>
      </main>

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
