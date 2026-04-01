import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, X } from "lucide-react";
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

  const handleClose = () => {
    window.close();
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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between">
        <span className="text-sm font-medium">Setup | Seleção de Modelo</span>
        <button
          onClick={handleClose}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 -mt-16">
        <h1 className="text-blue-600 text-lg font-medium mb-8">
          Selecione o modelo do Ar-Condicionado
        </h1>

        <div className="w-full max-w-md space-y-4">
          {/* Model Selection */}
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="w-full h-12 px-4 text-blue-600 font-medium border-gray-200 bg-white shadow-sm">
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
          <div className="flex gap-3 pt-2">
            <Button
              variant="default"
              onClick={handleOpenDialog}
              className="flex-1 h-10 bg-blue-700 hover:bg-blue-800 text-white font-medium"
            >
              Cadastrar Modelo
            </Button>
            <Button
              onClick={handleStart}
              className="flex-1 h-10 bg-green-600 hover:bg-green-700 text-white font-medium"
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
            <DialogTitle className="text-blue-600">Cadastrar Novo Modelo</DialogTitle>
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
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
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
