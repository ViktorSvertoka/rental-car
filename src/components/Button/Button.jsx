import { StylesButton, Text } from './Button.styled';

export default function Button({ text, onClick, width }) {
  return (
    <StylesButton
      variant="contained"
      onClick={onClick}
      style={{ width: width }}
    >
      <Text>{text}</Text>
    </StylesButton>
  );
}
