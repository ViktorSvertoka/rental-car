import { Route, Routes } from 'react-router-dom';
import { lazy, useState } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

export default function App() {
  const [favorites, setFavorites] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} setFavorites={setFavorites} />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
