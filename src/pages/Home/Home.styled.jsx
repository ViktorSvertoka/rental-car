import styled from '@emotion/styled';

import Image from '../../images/hero.jpg';

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
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
`;
