
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MyLearning from "./pages/MyLearning";
import Achievements from "./pages/Achievements";
import ReferFriends from "./pages/ReferFriends";
import Notifications from "./pages/Notifications";
import SharedNotes from "./pages/SharedNotes";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  
  if (!isSignedIn) {
    return <Navigate to="/sign-in" replace />;
  }
  
  return <>{children}</>;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn } = useAuth();
  
  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" attribute="class">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route 
          path="/sign-in" 
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          } 
        />
        <Route 
          path="/sign-up" 
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <TooltipProvider>
                <Dashboard />
              </TooltipProvider>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/learning" 
          element={
            <ProtectedRoute>
              <TooltipProvider>
                <MyLearning />
              </TooltipProvider>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/achievements" 
          element={
            <ProtectedRoute>
              <TooltipProvider>
                <Achievements />
              </TooltipProvider>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/refer-friends" 
          element={
            <ProtectedRoute>
              <TooltipProvider>
                <ReferFriends />
              </TooltipProvider>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/notifications" 
          element={
            <ProtectedRoute>
              <TooltipProvider>
                <Notifications />
              </TooltipProvider>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/shared-notes" 
          element={
            <ProtectedRoute>
              <TooltipProvider>
                <SharedNotes />
              </TooltipProvider>
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
      <Sonner />
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
