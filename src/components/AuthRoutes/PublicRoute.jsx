import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../../redux/selectors';

export default function PublicRoute() {
  const user = useSelector(getUser);
  return user.isLogged ? <Navigate to={'/'} replace /> : <Outlet />;
}
