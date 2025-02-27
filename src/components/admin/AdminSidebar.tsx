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
  LogOut,
  Flame
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

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const mainMenuItems: MenuItem[] = [
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

const Logo = () => (
  <Link to="/" className="flex items-center gap-2 text-xl font-bold hover:opacity-80 transition-opacity">
    <Flame className="w-8 h-8 text-red-600" />
    <div className="flex flex-col">
      <span className="text-red-600">BAT</span>
      <span className="text-sm text-gray-400">Templates</span>
    </div>
  </Link>
);

const MenuItem = ({ item, isActive }: { item: MenuItem; isActive: boolean }) => (
  <SidebarMenuItem>
    <SidebarMenuButton asChild isActive={isActive} className="w-full">
      <Link 
        to={item.url} 
        className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-red-600/10 hover:text-red-600 transition-colors rounded-lg"
      >
        <item.icon className="w-5 h-5" />
        <span>{item.title}</span>
      </Link>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

export function AdminSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="bg-[#111] border-r border-gray-800">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-center p-4">
            <Logo />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <MenuItem 
                  key={item.title}
                  item={item}
                  isActive={location.pathname === item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild className="w-full">
                  <Link 
                    to="/" 
                    className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:bg-red-600/10 hover:text-red-600 transition-colors rounded-lg"
                  >
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