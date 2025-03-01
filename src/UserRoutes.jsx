import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Friends from './pages/Friends/Friends';
import PetSearch from './pages/PetSearch/PetSearch';

function UserRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="search" element={<PetSearch />} />
        <Route path="friends" element={<Friends />} />
      </Route>
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  );
}

export default UserRoutes;
