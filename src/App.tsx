import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AdminLayout } from "@/layouts/AdminLayout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FolderStructures from "./pages/FolderStructures";
import Templates from "./pages/Templates";
import Bookmarks from "./pages/Bookmarks";
import Profile from "./pages/Profile";
import Contributors from "./pages/Contributors";
import AdminPanel from "./pages/AdminPanel";
import AdminUsers from "./pages/admin/Users";
import AdminTemplates from "./pages/admin/Templates";
import AdminFlagged from "./pages/admin/Flagged";
import AdminAnalytics from "./pages/admin/Analytics";
import AdminContributors from "./pages/admin/Contributors";
import AdminSettings from "./pages/admin/Settings";
import AdminLogs from "./pages/admin/Logs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Layout Routes */}
          <Route element={
            <SidebarProvider>
              <div className="flex min-h-screen w-full">
                <AppSidebar />
                <main className="flex-1 bg-[#111]">
                  <Outlet />
                </main>
              </div>
            </SidebarProvider>
          }>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/folders" element={<FolderStructures />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contributors" element={<Contributors />} />
          </Route>

          {/* Admin Layout Routes */}
          <Route path="/adminPanel" element={<AdminLayout />}>
            <Route index element={<AdminPanel />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="templates" element={<AdminTemplates />} />
            <Route path="flagged" element={<AdminFlagged />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="contributors" element={<AdminContributors />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="logs" element={<AdminLogs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;