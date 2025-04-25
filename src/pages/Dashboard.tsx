
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Book, Star, MessageSquare, Users, Bell } from "lucide-react";
import Welcome from "@/components/dashboard/Welcome";
import SmartPlan from "@/components/dashboard/SmartPlan";
import Courses from "@/components/dashboard/Courses";
import Credits from "@/components/dashboard/Credits";
import ChatBot from "@/components/dashboard/ChatBot";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "My Learning", icon: Book, path: "/learning" },
  { title: "Achievements", icon: Star, path: "/achievements" },
  { title: "Chat Support", icon: MessageSquare, path: "/dashboard" },
  { title: "Refer Friends", icon: Users, path: "/dashboard" },
  { title: "Notifications", icon: Bell, path: "/dashboard" },
];

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <Sidebar>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.path}>
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
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto space-y-8">
            <Welcome />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SmartPlan />
              <Credits />
            </div>
            <Courses />
            <ChatBot />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
