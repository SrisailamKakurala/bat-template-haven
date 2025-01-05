import { Link, useLocation } from "react-router-dom";
import { 
  BookmarkIcon, 
  FolderIcon, 
  LayoutTemplateIcon, 
  UserCircle2Icon,
  Settings2Icon,
  HelpCircleIcon
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation();
  
  const mainMenuItems = [
    {
      title: "Folder Structures",
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
      title: "Settings",
      url: "/settings",
      icon: Settings2Icon,
    },
    {
      title: "Help",
      url: "/help",
      icon: HelpCircleIcon,
    },
  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex justify-center p-4">
            <img 
              src="/lovable-uploads/8dd54841-1727-4dca-b89d-b42528d9d824.png" 
              alt="Bat Templates" 
              className="w-full max-w-[150px] h-auto mb-4 hover-scale"
            />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                    className="w-full"
                  >
                    <Link to={item.url} className="nav-link">
                      <item.icon className="w-5 h-5" />
                      <span className="flex-1 text-center">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-4" />

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {bottomMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                    className="w-full"
                  >
                    <Link to={item.url} className="nav-link">
                      <item.icon className="w-5 h-5" />
                      <span className="flex-1 text-center">{item.title}</span>
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