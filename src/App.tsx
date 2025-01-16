import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FolderStructures from "./pages/FolderStructures";
import Templates from "./pages/Templates";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";
import Contributors from "./pages/Contributors";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <main className="flex-1 bg-[#111]">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/folders" element={<FolderStructures />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/contributors" element={<Contributors />} />
                <Route path="/adminPanel" element={<AdminPanel />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;