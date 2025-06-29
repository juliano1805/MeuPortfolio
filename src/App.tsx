import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MLOpsPipeline from "./pages/projects/MLOpsPipeline";
import TETEUIA from "./pages/projects/TETEUIA";
import Portfolio from "./pages/projects/Portfolio";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster position="top-right" richColors />
      <BrowserRouter basename="/MeuPortfolio">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/mlops-pipeline" element={<MLOpsPipeline />} />
          <Route path="/projects/teteu-ia" element={<TETEUIA />} />
          <Route path="/projects/portfolio" element={<Portfolio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
