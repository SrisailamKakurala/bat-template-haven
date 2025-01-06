import { Link, useLocation } from "react-router-dom";
import { 
  BookmarkIcon, 
  FolderIcon, 
  LayoutTemplateIcon, 
  UserCircle2Icon,
  HomeIcon,
  UsersIcon,
  LogOutIcon
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

export function AppSidebar() {
  const location = useLocation();
  
  const mainMenuItems = [
    {
      title: "Home",
      url: "/",
      icon: HomeIcon,
    },
    {
      title: "Folders",
      url: "/folders",
      icon: FolderIcon,
    },
    {
      title: "Templates",
      url: "/templates",
      icon: LayoutTemplateIcon,
    },
    {
      title: "Bookmarks",
      url: "/bookmarks",
      icon: BookmarkIcon,
    },
  ];

  const bottomMenuItems = [
    {
      title: "Profile",
      url: "/profile",
      icon: UserCircle2Icon,
    },
    {
      title: "Contributors",
      url: "/contributors",
      icon: UsersIcon,
    },
    {
      title: "Logout",
      url: "/logout",
      icon: LogOutIcon,
    },
  ];

  return (
    <Sidebar className="bg-[#111]">
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
              {bottomMenuItems.map((item) => (
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
      </SidebarContent>
    </Sidebar>
  );
}