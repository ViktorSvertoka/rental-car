import { Button, Wrapper } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Button to={'/catalog'}>Go to catalog</Button>

      {/* <Text>Welcome to Your Car Rental Destination!</Text> */}
    </Wrapper>
  );
}
