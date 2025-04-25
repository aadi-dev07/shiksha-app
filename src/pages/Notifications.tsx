
import { useState } from "react";
import { Bell, Book, Trophy, Clock, Trash2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TABS = [
  { id: "all", label: "All" },
  { id: "learning", label: "Learning" },
  { id: "rewards", label: "Rewards" },
  { id: "system", label: "System" },
] as const;

const NOTIFICATIONS = [
  {
    id: 1,
    type: "learning",
    title: "New Lesson Unlocked",
    description: "Chapter 5: Advanced Mathematics is now available",
    time: "2 hours ago",
    icon: Book,
    action: "Start Now",
  },
  {
    id: 2,
    type: "rewards",
    title: "Achievement Unlocked",
    description: "You've earned the 'Quick Learner' badge!",
    time: "5 hours ago",
    icon: Trophy,
    action: "View Details",
  },
  {
    id: 3,
    type: "system",
    title: "Reminder",
    description: "Don't forget to complete your daily quiz",
    time: "1 day ago",
    icon: Clock,
  },
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]["id"]>("all");
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const clearAll = () => {
    setNotifications([]);
  };

  const markAllAsRead = () => {
    // Implementation would mark all as read
    console.log("Marked all as read");
  };

  const filteredNotifications = activeTab === "all" 
    ? notifications 
    : notifications.filter(n => n.type === activeTab);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="space-x-2">
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            <Check className="w-4 h-4 mr-2" />
            Mark all as read
          </Button>
          <Button variant="outline" size="sm" onClick={clearAll}>
            <Trash2 className="w-4 h-4 mr-2" />
            Clear all
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as typeof activeTab)}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          {TABS.map((tab) => (
            <TabsTrigger key={tab.id} value={tab.id} className="text-sm">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeTab}>
          <div className="space-y-4">
            {filteredNotifications.map((notification) => {
              const Icon = notification.icon;
              return (
                <Card key={notification.id} className="p-4 hover:bg-accent transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full p-2 bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{notification.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                        {notification.action && (
                          <Button variant="ghost" size="sm">
                            {notification.action}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
            {filteredNotifications.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No notifications to show
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Notifications;
