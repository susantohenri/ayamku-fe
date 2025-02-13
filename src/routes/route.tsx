import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
import LoginPage from '@/pages/login-page.js';
import DashboardPage from '@/pages/dashboard-page.js';
import NotFoundPage from '@/pages/not-found-page.js';
import PublicRoutes from '@/routes/public-route.js';
import ProtectedRoutes from '@/routes/protected-route.js';
import UserPage from '@/pages/user-page.js';

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Routes accessible only to non-authenticated users  */}
        <Route
          path="/"
          element={<PublicRoutes />}
          errorElement={<NotFoundPage />}
        >
          <Route index={true} path="/" element={<LoginPage />} />
        </Route>

        {/* Routes accessible only to authenticated users  */}
        <Route
          path="/"
          element={<ProtectedRoutes />}
          errorElement={<NotFoundPage />}
        >
          <Route
            index={true}
            path="/dashboard"
            element={<DashboardPage />}
          />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
