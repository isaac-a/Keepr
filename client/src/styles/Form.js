import styled from 'styled-components';

export const Title = styled.h4`
  @media (max-width: 992px) {
    margin: 0.5rem 0 2rem;
  }
`;

export const InputFieldColumn = styled.div.attrs({
  className: 'input-field col l6 offset-l3 m8 offset-m2 s10 offset-s1'
})``;

export const SubmitBtn = styled.button.attrs({
  className: 'col l6 offset-l3 m8 offset-m2 s10 offset-s1 btn'
})`
  color: #fff;
  background: #424242;

  &:hover {
    background: #616161;
  }

  &:focus {
    background: #616161;
  }
`;

export const ErrorMessage = styled.div`
  color: #b71c1c;
`;
