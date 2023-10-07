import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { styled as muiStyled } from '@mui/material/styles';
import styled from '@emotion/styled';

export const HeartWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const HeartFill = muiStyled(Favorite)({
  fill: '#3470FF',
});

export const HeartStroke = muiStyled(FavoriteBorder)({
  fill: '#FFFFFFCC',
});
