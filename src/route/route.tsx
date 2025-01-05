import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
  } from 'react-router-dom';
  
import LoginPage from '../pages/login.js';
import DashboardPage from '../pages/dashboard.js';
import NotFoundPage from '../pages/not-found.js';
import PublicRoutes from './public-route.js';
import ProtectedRoutes from './protected-route.js';

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
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
