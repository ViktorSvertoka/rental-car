import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import NavBar from 'components/NavBar/NavBar';

const Home = lazy(() => import('../../pages/Home/Home'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
