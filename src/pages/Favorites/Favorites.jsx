import CarItem from 'components/CarItem/CarItem';
import { Wrapper, WrapperList, Text } from './Favorites.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFavorites } from 'redux/selectors';
import { LoadMore } from 'pages/Catalog/Catalog.styled';
import NavBar from 'components/NavBar/NavBar';

export default function Favorites() {
  const favoriteCars = useSelector(selectFavorites);
  const [page, setPage] = useState(1);
  const [cars, setCars] = useState([]);

  const loadMore = () => {
    const startIndex = page * 8;
    const nextCars = favoriteCars.favorites.slice(startIndex, startIndex + 8);
    setCars([...cars, ...nextCars]);
    setPage(page + 1);
  };

  useEffect(() => {
    const initialCars = favoriteCars.favorites.slice(0, 8);
    setCars(initialCars);
  }, [favoriteCars]);

  return (
    <>
      <NavBar />
      <Wrapper>
        <WrapperList>
          {cars.length ? (
            cars.map((favorite, index) => (
              <CarItem key={index} data={favorite} />
            ))
          ) : (
            <Text>Your favorites are currently empty...</Text>
          )}
          {favoriteCars.favorites.length > cars.length && (
            <LoadMore variant="text" onClick={loadMore}>
              Load more
            </LoadMore>
          )}
        </WrapperList>
      </Wrapper>
    </>
  );
}
