import Checkbox from '@mui/material/Checkbox';
import { HeartFill, HeartStroke, HeartWrap } from './HeartIcon.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { addFavorite, removeFavorite } from 'redux/slice';

export default function HeartIcon({ data }) {
  const dispatch = useDispatch();

  const favoriteCars = useSelector(selectFavorites);

  const isChecked = favoriteCars.favorites.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(removeFavorite(data));
    } else {
      dispatch(addFavorite(data));
    }
  };
  return (
    <HeartWrap>
      <Checkbox
        icon={<HeartStroke />}
        checkedIcon={<HeartFill />}
        checked={isChecked}
        onChange={handleToggleFavorite}
      />
    </HeartWrap>
  );
}
