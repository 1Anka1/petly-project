import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Friends from './pages/Friends/Friends';
import Search from './pages/Search/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="search" element={<Search />} />
        <Route path="friends" element={<Friends />} />
      </Route>
    </Routes>
  );
}

export default App;
