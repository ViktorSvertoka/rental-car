import styled from '@emotion/styled';

import Image from '../../images/hero.jpg';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  padding: 60px 128px;
  position: relative;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
`;

export const Button = styled(Link)`
  position: absolute;
  top: 230px;
  padding: 14px 34px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  margin-top: 20px;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.42;
  text-transform: uppercase;
  text-decoration: none;

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #0b44cd;
  }
`;
