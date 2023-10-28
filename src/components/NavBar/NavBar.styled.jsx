import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  background-color: #f3f3f2;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 100px;
`;

export const Link = styled(NavLink)`
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: 'Manrope';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #000000;
  text-decoration: none;

  &.active {
    color: #3470ff;
  }
`;
