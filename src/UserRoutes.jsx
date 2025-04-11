import PetSearch from './pages/PetSearch/PetSearch';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const News = lazy(() => import('./pages/News/News'));
const Friends = lazy(() => import('./pages/Friends/Friends'));
const Login = lazy(() => import('./pages/Login/Login'));
const Registration = lazy(() => import('./pages/Registration/Registration'));

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="search" element={<PetSearch />} />
        <Route path="friends" element={<Friends />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default UserRoutes;
