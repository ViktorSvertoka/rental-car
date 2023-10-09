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

export default function CarItem({
  data: {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    accessories,
  },
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <ImageWrap>
        <HeartIcon />
        <Image src={img} alt="Car" />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {make} {''}
          <Span>{model}</Span>, {year}
        </Title>
        <Text> {rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{address.split(',')[1]}</Item>
        <Item>{address.split(',')[2]}</Item>
        <Item>{rentalCompany}</Item>
        <Item>{type}</Item>
        <Item>{model}</Item>
        <Item>{mileage}</Item>
        <Item>{accessories[0]}</Item>
      </List>
      <Button onClick={handleOpen} text="Learn more" width="274px" />
      {open && <BasicModal open={open} onClose={handleClose} />}
    </Wrapper>
  );
}
