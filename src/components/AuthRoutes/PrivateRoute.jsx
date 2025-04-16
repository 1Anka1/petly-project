import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const isLogged = true;
  return isLogged ? <Outlet /> : <Navigate to={'login'} replace />;
}
