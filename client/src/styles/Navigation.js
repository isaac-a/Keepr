import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBar = styled.nav.attrs({
  className: 'hide-on-med-and-down'
})`
  box-shadow: none;
`;

export const Logo = styled(Link).attrs({
  className: 'left'
})`
  margin: 0.6em 0 0 0.6em;
  color: #424242;
`;

export const Image = styled.img`
  width: 70px;
`;

export const NavLink = styled(Link)`
  color: #424242;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #424242;
    color: #fff;
  }
`;

export const GoBack = styled(Link).attrs({
  className: 'hide-on-large-only'
})`
  display: inline-block;
  padding: 1em;
  color: #333333;
`;

export const MenuBtn = styled.button.attrs({
  className: 'hide-on-large-only sidenav-trigger',
  'data-target': 'slide-out'
})`
  cursor: pointer;
  background: #424242;
  border: none;
  color: #fff;
  padding: 1rem !important;
  position: initial !important;

  &:focus {
    background: #424242;
  }
`;
