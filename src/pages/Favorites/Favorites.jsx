import CarItem from 'components/CarItem/CarItem';
import { Wrapper } from './Favorites.styled';

export default function Favorites({ favoritesCars, setFavoritesCars }) {
  return (
    <Wrapper>
      <ul>
        {favoritesCars.map(favorite => (
          <CarItem
            key={favorite.id}
            data={favorite}
            favoritesCars={favoritesCars}
            setFavoritesCars={setFavoritesCars}
          />
        ))}
      </ul>
    </Wrapper>
  );
}
