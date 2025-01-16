import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileCode2,
  Flag,
  BarChart3,
  UserCheck,
  Settings,
  History,
  LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const mainMenuItems = [
  {
    title: "Dashboard",
    url: "/adminPanel",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    url: "/adminPanel/users",
    icon: Users,
  },
  {
    title: "Templates",
    url: "/adminPanel/templates",
    icon: FileCode2,
  },
  {
    title: "Flagged Content",
    url: "/adminPanel/flagged",
    icon: Flag,
  },
  {
    title: "Analytics",
    url: "/adminPanel/analytics",
    icon: BarChart3,
  },
  {
    title: "Contributors",
    url: "/adminPanel/contributors",
    icon: UserCheck,
  },
  {
    title: "Settings",
    url: "/adminPanel/settings",
    icon: Settings,
  },
  {
    title: "Logs",
    url: "/adminPanel/logs",
    icon: History,
  },
];

export function AdminSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="bg-[#111] border-r border-gray-800">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-center p-4">
            <Link to="/" className="text-red-600 text-xl font-bold hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/9038ef8c-a77e-4c34-9983-c7450e1b61f2.png" 
                alt="Bat Templates" 
                className="w-full max-w-[200px] h-auto"
              />
            </Link>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    className="w-full"
                  >
                    <Link to={item.url} className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-red-600/10 hover:text-red-600 transition-colors rounded-lg">
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full">
                  <Link to="/" className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-red-600/10 hover:text-red-600 transition-colors rounded-lg">
                    <LogOut className="w-5 h-5" />
                    <span>Exit Admin Panel</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}