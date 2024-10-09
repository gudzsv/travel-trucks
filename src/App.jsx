import { Route, Routes } from 'react-router';

import SharedLayout from './components/SharedLayout/SharedLayout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage.jsx'));
const CamperDetailsPage = lazy(() => import('./pages/CamperDetailsPage.jsx'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:id" element={<CamperDetailsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
