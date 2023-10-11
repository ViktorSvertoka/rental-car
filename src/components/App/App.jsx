import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('../../pages/Home/Home'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

export default function App() {
  const [favoritesCars, setFavoritesCars] = useState([]);

  useEffect(() => {
    const favoritesLS = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoritesCars(favoritesLS);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog
              favoritesCars={favoritesCars}
              setFavoritesCars={setFavoritesCars}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favoritesCars={favoritesCars}
              setFavoritesCars={setFavoritesCars}
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
