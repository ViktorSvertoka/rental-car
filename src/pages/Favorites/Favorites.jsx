import CarItem from 'components/CarItem/CarItem';
import { Wrapper, WrapperList, Text } from './Favorites.styled';

export default function Favorites({ favoritesCars, setFavoritesCars }) {
  return (
    <Wrapper>
      <WrapperList>
        {favoritesCars.length ? (
          favoritesCars.map(favorite => (
            <CarItem
              key={favorite.id}
              data={favorite}
              favoritesCars={favoritesCars}
              setFavoritesCars={setFavoritesCars}
            />
          ))
        ) : (
          <Text>Your favorites are currently empty...</Text>
        )}
      </WrapperList>
    </Wrapper>
  );
}
