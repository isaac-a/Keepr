import styled from 'styled-components';

export const AlertOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
`;

export const AlertContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
`;

export const AlertContent = styled.div`
  text-align: center;
  border-radius: 3px;
  background: #424242;
  color: white;
  padding: 0.8em 1.2em;
  width: fit-content;
  margin: 1em auto;

  > h6 {
    font-size: 1.1em;
    display: inline-block;
    margin: 0 1em 0 0;
  }

  > button {
    cursor: pointer;
    background: white;
    color: #424242;
    border-radius: 2px;
    border: none;
    outline: transparent;
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }

  > button:last-child {
    margin-left: 0.8em;
  }

  @media (max-width: 715px) {
    width: 100%;
    margin: 0 auto;

    > h6 {
      display: block;
      margin-bottom: 1em;
    }
  }
`;
