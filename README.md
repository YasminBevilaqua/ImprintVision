# IMPRINT VISION

Sistema de inspeção de ar-condicionados desenvolvido com React, TypeScript e Vite.

## 🎯 Sobre o Projeto

O **IMPRINT VISION** é uma aplicação web para gerenciamento e acompanhamento de inspeções de ar-condicionados. O sistema permite:

- Selecionar modelos de ar-condicionados pré-cadastrados
- Cadastrar novos modelos de forma dinâmica
- Realizar acompanhamento de produção com métricas em tempo real
- Visualizar status de inspeções (Aprovado/Reprovado)

## 🚀 Tecnologias Utilizadas

| Tecnologia | Versão | Função |
|------------|--------|--------|
| **Vite** | ^5.4.19 | Build tool e dev server (substitui Create React App) |
| **React** | ^18.3.1 | Biblioteca para construção de interfaces |
| **TypeScript** | ^5.8.3 | Tipagem estática para código mais seguro |
| **Tailwind CSS** | ^3.4.17 | Framework CSS utilitário |
| **shadcn/ui** | Latest | Componentes de UI reutilizáveis |
| **React Router DOM** | ^6.30.1 | Roteamento entre páginas |
| **Lucide React** | ^0.462.0 | Biblioteca de ícones |
| **Vitest** | ^3.2.4 | Framework de testes |

## ⚡ Por que Vite?

Vite foi escolhido sobre Create React App por oferecer:

| Característica | Vite | CRA |
|----------------|------|-----|
| **Cold Start** | < 1 segundo | 5-10 segundos |
| **Hot Module Replacement** | Instantâneo | Lento |
| **Build Time** | Rápido (Rollup) | Lento (Webpack) |
| **Configuração** | Zero-config | Complexa |

## 📁 Estrutura de Pastas

```
IMPRINT/
├── src/
│   ├── components/
│   │   ├── ui/                    # Componentes shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── select.tsx
│   │   │   └── ...
│   │   ├── InspectionSidebar.tsx  # Menu lateral (dashboard)
│   │   └── InspectionMainArea.tsx # Área principal (dashboard)
│   ├── pages/
│   │   ├── Setup.tsx              # Tela inicial (seleção de modelo)
│   │   ├── Index.tsx              # Dashboard principal
│   │   └── NotFound.tsx           # Página 404
│   ├── App.tsx                    # Configuração de rotas
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Estilos globais
├── public/                        # Arquivos estáticos
├── index.html                     # HTML principal
├── vite.config.ts                 # Configuração do Vite
├── tailwind.config.ts             # Configuração Tailwind
└── package.json                   # Dependências
```

## 🔄 Fluxo da Aplicação

```
┌──────────────┐         ┌──────────────┐
│   "/"        │  ───→  │  "/dashboard"│
│   Setup      │         │   Dashboard  │
└──────────────┘         └──────────────┘
      │                          │
      ▼                          ▼
┌──────────────┐         ┌──────────────┐
│• Selecionar  │         │• Métricas   │
│  modelo AC   │         │• Inspeções  │
│• Cadastrar   │         │• Status      │
│  novo modelo │         │              │
│• Clicar      │         │• Clicar em  │
│ "Iniciar"    │         │ "Setup" para │
└──────────────┘         │  voltar     │
                         └──────────────┘
```

## 🎨 Sistema de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| **Azul Principal** | `#0056b3` | Sidebar, elementos primários |
| **Azul Escuro** | `#17447a` | Navbar, headers |
| **Azul Claro** | `#0c4a8c` | Cards de eficiência |
| **Verde** | `#00a843` | Aprovado, sucesso |
| **Vermelho** | `#d93025` | Reprovado, erro |

## 📝 Componentes Principais

### Setup.tsx (Tela Inicial)

Responsabilidades:
- Listar modelos de ar-condicionados cadastrados
- Permitir seleção via dropdown (componente Select do shadcn)
- Abrir modal para cadastro de novos modelos
- Navegar para dashboard ao clicar "Iniciar"

### InspectionSidebar.tsx (Menu Lateral)

Responsabilidades:
- Exibir 4 métricas: Aprovado, Reprovado, Eficiência, Total
- Listar tipos de inspeção realizadas
- Botão "Setup" para navegar de volta à tela inicial
- Botão "Aprovado" para aprovar inspeção

### Roteamento (App.tsx)

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Setup />} />          {/* Tela inicial */}
    <Route path="/dashboard" element={<Index />} />  {/* Dashboard */}
    <Route path="*" element={<NotFound />} />        {/* 404 */}
  </Routes>
</BrowserRouter>
```

## 🧪 Testes

Configuração do Vitest em `vitest.config.ts`:

```typescript
test: {
  environment: "jsdom",     // Simula DOM para testes
  globals: true,           // Permite usar expect(), describe()
  setupFiles: ["./src/test/setup.ts"],  // Configuração inicial
  include: ["src/**/*.{test,spec}.{ts,tsx}"],  // Padrão de arquivos
}
```

Para executar testes:
```bash
npm run test        # Executa testes uma vez
npm run test:watch  # Executa testes em modo watch
```

## 🛠️ Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento Vite |
| `npm run build` | Cria build otimizado para produção |
| `npm run preview` | Visualiza build de produção localmente |
| `npm run test` | Executa testes com Vitest |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run lint` | Executa ESLint para verificar código |

## 🏃 Como Executar

### Pré-requisitos
- Node.js 18+ ou Bun
- npm, yarn, ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/YasminBevilaqua/ImprintVision.git
cd ImprintVision

# Instale dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O aplicativo estará disponível em `http://localhost:8080`

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🔗 Repositório

GitHub: [https://github.com/YasminBevilaqua/ImprintVision](https://github.com/YasminBevilaqua/ImprintVision)

## 📝 Licença

Este projeto é privado e de uso interno.

---

**Desenvolvido com Vite + React + TypeScript + Tailwind CSS**
