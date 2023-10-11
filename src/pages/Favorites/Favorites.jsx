import { Wrapper } from './Favorites.styled';

export default function Favorites({ favorites }) {
  return (
    <Wrapper>
      <h2>Hello Favorites</h2>
      <ul>
        {favorites.map((favorite, index) => (
          <li key={index}>
            {favorite.make} {favorite.model}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}
