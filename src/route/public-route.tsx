import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/auth-context-provider';

const PublicRoutes = () => {
  const { accessToken } = useAuth();

  if (accessToken) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <>
        <Outlet />
    </>
  );
};

export default PublicRoutes;
