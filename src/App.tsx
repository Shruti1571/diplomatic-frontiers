import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import UnderConstruction from "./pages/UnderConstruction.tsx";
import MUNPage from "./pages/MUNPage.tsx";
import InnovationAssemblyPage from "./pages/InnovationAssemblyPage.tsx";
import DebatesPage from "./pages/DebatesPage.tsx";
import YouthParliamentPage from "./pages/YouthParliamentPage.tsx";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events/muns" element={<MUNPage />} />
          <Route path="/events/debates" element={<DebatesPage />} />
          <Route path="/events/youth-parliament" element={<YouthParliamentPage />} />
          <Route path="/events/innovation-assembly" element={<InnovationAssemblyPage />} />
          <Route path="/blogs" element={<UnderConstruction />} />
          <Route path="/gallery" element={<UnderConstruction />} />
          <Route path="/hall-of-fame" element={<UnderConstruction />} />
          <Route path="/certifications" element={<UnderConstruction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
