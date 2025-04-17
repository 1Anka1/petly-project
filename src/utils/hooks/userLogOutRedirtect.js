import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/selectors';
import { useEffect } from 'react';

export default function UserLogOutRedirtect() {
  const navigate = useNavigate();
  const user = useSelector(getUser);

  useEffect(() => {
    if (!user.isLogged) {
      navigate('/login', { replace: true });
    }
  }, [navigate, user.isLogged]);
}
