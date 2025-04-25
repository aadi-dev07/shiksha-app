
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Book, Star, MessageSquare, Users, Bell } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";
import Welcome from "@/components/dashboard/Welcome";
import SmartPlan from "@/components/dashboard/SmartPlan";
import Courses from "@/components/dashboard/Courses";
import Credits from "@/components/dashboard/Credits";
import ChatBot from "@/components/dashboard/ChatBot";

const menuItems = [
  { title: "My Learning", icon: Book },
  { title: "Achievements", icon: Star },
  { title: "Chat Support", icon: MessageSquare },
  { title: "Refer Friends", icon: Users },
  { title: "Notifications", icon: Bell },
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
                      <SidebarMenuButton>
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
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
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <Welcome />
              </div>
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-10 h-10'
                  }
                }}
              />
            </div>
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
