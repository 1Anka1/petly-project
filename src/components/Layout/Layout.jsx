import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import { Suspense } from 'react';
import { AppLoader } from '../AppLoader/AppLoader.jsx';

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={AppLoader}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
}
