import styled from 'styled-components';

export default styled.footer`
  font-size: 0.9em;
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  color: #424242;

  @media (max-height: 680px) {
    margin-top: 6em;
    position: initial;
  }
`;
