import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context-provider';

const ProtectedRoutes = () => {
  const { accessToken } = useAuth();

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
        <Outlet />
    </>
  );
};

export default ProtectedRoutes;
