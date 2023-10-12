import Checkbox from '@mui/material/Checkbox';
import { HeartFill, HeartStroke, HeartWrap } from './HeartIcon.styled';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function HeartIcon({ toggleFavorite, id, isFavorite }) {
  return (
    <HeartWrap>
      <Checkbox
        {...label}
        icon={<HeartStroke />}
        checkedIcon={<HeartFill />}
        onChange={() => toggleFavorite(id)}
        checked={isFavorite}
      />
    </HeartWrap>
  );
}
