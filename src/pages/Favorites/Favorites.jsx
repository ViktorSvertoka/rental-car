import CarItem from 'components/CarItem/CarItem';
import { Wrapper, WrapperList, Text } from './Favorites.styled';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectFavorites } from 'redux/selectors';

export default function Favorites() {
  const favoriteCars = useSelector(selectFavorites);

  const [cars, setCars] = useState([]);

  useEffect(() => {
    setCars(favoriteCars.favorites);
  }, [favoriteCars]);

  return (
    <Wrapper>
      <WrapperList>
        {cars.length ? (
          cars.map((favorite, index) => <CarItem key={index} data={favorite} />)
        ) : (
          <Text>Your favorites are currently empty...</Text>
        )}
      </WrapperList>
    </Wrapper>
  );
}
