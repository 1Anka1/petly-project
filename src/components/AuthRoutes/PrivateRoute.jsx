import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isLogged = false;
  return isLogged ? <Outlet /> : <Navigate to={'login'} replace />;
}
