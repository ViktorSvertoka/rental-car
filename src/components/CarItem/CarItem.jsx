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

const car = {
  id: 9587,
  year: 2006,
  make: 'HUMMER',
  model: 'H2',
  type: 'SUV',
  img: 'https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/hummer_h2.webp',
  description:
    'The HUMMER H2 is a rugged and powerful SUV that stands out with its imposing presence and off-road capabilities.',
  fuelConsumption: '19.8',
  engineSize: '6.0L V8',
  accessories: [
    'Heated leather seats',
    'Bose premium sound system',
    'Off-road package',
  ],
  functionalities: [
    'Electronic locking front and rear differentials',
    'Stabilitrak stability control',
    'Tire pressure monitoring system',
  ],
  rentalPrice: '$55',
  rentalCompany: 'Adventure Car Rentals',
  address: '321 Example Road, Kharkiv, Ukraine',
  rentalConditions:
    "Minimum age: 25\nValid driver's license\nSecurity deposit required",
  mileage: 4771,
};

export default function CarItem() {
  return (
    <Wrapper>
      <ImageWrap>
        <HeartIcon />
        <Image src={car.img} alt="Car" />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {car.make} {''}
          <Span>{car.model}</Span>, {car.year}
        </Title>
        <Text> {car.rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{car.address.split(',')[1]}</Item>
        <Item>{car.address.split(',')[2]}</Item>
        <Item>{car.rentalCompany}</Item>
        <Item>{car.type}</Item>
        <Item>{car.model}</Item>
        <Item>{car.mileage}</Item>
        <Item>{car.accessories[0]}</Item>
      </List>
      <Button text="Learn more" width="274px" />
    </Wrapper>
  );
}
