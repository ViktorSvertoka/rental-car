import styled from '@emotion/styled';

import Image from '../../images/bg.webp';

export const Wrapper = styled.div`
  background-image: url(${Image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  padding: 60px 128px;
`;

export const Text = styled.p`
  font-family: 'Manrope';
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
`;
