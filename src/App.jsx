import { Suspense } from 'react';
import UserRoutes from './UserRoutes';
import { AppLoader } from './components/AppLoader/AppLoader';

function App() {
  return (
    <Suspense fallback={<AppLoader />}>
      <UserRoutes />
    </Suspense>
  );
}

export default App;
