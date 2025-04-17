import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getUser } from '../../redux/selectors';

export default function PrivateRoute() {
  const user = useSelector(getUser);
  return user.isLogged ? <Outlet /> : <Navigate to={'login'} replace />;
}
