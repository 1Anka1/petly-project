import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  const isLogged = false;
  return isLogged ? <Navigate to={'/'} replace /> : <Outlet />;
}
