import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Prijzen from "./pages/Prijzen";
import Diensten from "./pages/Diensten";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NoordBrabant from "./pages/NoordBrabant";
import BetaalbareWebsite from "./pages/BetaalbareWebsite";
import Privacy from "./pages/Privacy";
import Voorwaarden from "./pages/Voorwaarden";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prijzen" element={<Prijzen />} />
          <Route path="/diensten" element={<Diensten />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/website-laten-maken-noord-brabant" element={<NoordBrabant />} />
          <Route path="/betaalbare-website-laten-maken" element={<BetaalbareWebsite />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/voorwaarden" element={<Voorwaarden />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
