import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context-provider';
import { AppSidebar } from '@/components/sidebars/app-sidebar';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';

const ProtectedRoutes = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default ProtectedRoutes;
