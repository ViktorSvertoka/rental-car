import { useState } from 'react';
import Button from 'components/Button/Button';
import {
  Wrapper,
  ImageWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  Text,
  List,
  Item,
} from './CarItem.styled';
import HeartIcon from 'components/HeartIcon/HeartIcon';
import BasicModal from 'components/Modal/Modal';
import { useGetAdvertsQuery } from 'redux/operations';

export default function CarItem({ data, favorites, setFavorites }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isFavorite, setIsFavorite] = useState(false);

  const { data: carsApiData } = useGetAdvertsQuery();

  const isCarInFavorites =
    favorites && data ? favorites.find(item => item.id === data.id) : false;

  const toggleFavorite = carId => {
    if (!isCarInFavorites) {
      const carData = carsApiData.find(item => item.id === carId);
      setFavorites(prevFavorites => [...prevFavorites, carData]);
    } else {
      const updatedFavorites = favorites.filter(item => item.id !== carId);
      setFavorites(updatedFavorites);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <Wrapper>
      <ImageWrap>
        <HeartIcon onClick={() => toggleFavorite(data.id)} />
        <Image src={data.img} alt="Car" />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {data.make} {''}
          <Span>{data.model}</Span>, {data.year}
        </Title>
        <Text> {data.rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{data.address.split(',')[1]}</Item>
        <Item>{data.address.split(',')[2]}</Item>
        <Item>{data.rentalCompany}</Item>
        <Item>{data.type}</Item>
        <Item>{data.model}</Item>
        <Item>{data.mileage}</Item>
        <Item>{data.accessories[0]}</Item>
      </List>
      <Button onClick={handleOpen} text="Learn more" width="274px" />
      {open && <BasicModal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
}
