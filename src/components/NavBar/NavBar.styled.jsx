import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  border-bottom: 1px solid black;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
`;

export const Link = styled(NavLink)`
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: #3470ff;
  text-decoration: none;
`;
