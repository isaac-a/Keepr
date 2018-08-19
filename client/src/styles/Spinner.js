import styled, { keyframes } from 'styled-components';

export const scaleOut = keyframes`
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`;

export default styled.div`
  width: 40px;
  height: 40px;
  margin: 5em auto 0;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: ${scaleOut} 1s infinite ease-in-out;
`;
