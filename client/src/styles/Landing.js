import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  margin: 1em 0 1.3em 0;
`;

export const Description = styled.h4`
  margin-bottom: 2.5em;
`;

export const StyledLink = styled(Link)`
  color: #212121;
  padding: 0.7em;
  border: 3px solid #333333;
  font-size: 1.3em;
  display: block;
  margin: 0 auto 1.5em;
  width: 13em;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: #333333;
    color: white !important;
  }
`;
