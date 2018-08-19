import styled from 'styled-components';
import Editor from 'react-medium-editor';

import { CoverScrollbar } from './Notes';

export const EditorContainer = styled.div.attrs({
  className: 'container'
})`
  margin-top: 1em !important;

  @media (max-width: 992px) {
    width: 100% !important;
    margin: 0 !important;
  }
`;

export const TitleColumn = styled.div.attrs({
  className: 'col s12 m12 l10 offset-l1 xl8 offset-xl2'
})`
  background: #424242;
  padding: 0.8em 0.8rem 0.6rem 0 !important;
  position: relative;

  > button {
    position: absolute;
    top: 35%;
    right: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding-left: 0.5em;
    padding-right: 0.5em;

    > i {
      transition: color 0.2s ease-in-out;
      &:hover {
        color: #ffc400 !important;
      }
    }
  }
`;

export const TitleInput = styled.input.attrs({
  placeholder: 'Note Title'
})`
  font-size: 1.64rem !important;
  color: white !important;
  border-bottom: 0 !important;
  margin: 0 0 0 1rem !important;
  padding: 1rem 1rem 1rem 0 !important;
  width: 80% !important;
  display: inline-block !important;
  vertical-align: top;

  &:not([type]) {
    height: 1.85rem;
  }

  &:focus {
    border-bottom: 0 !important;
    box-shadow: none !important;
  }

  @media (max-width: 992px) {
    margin: 0 !important;
  }

  @media (max-width: 550px) {
    width: 70% !important;
  }
`;

export const EditorColumn = styled.div.attrs({
  className: 'col s12 m12 l10 offset-l1 xl8 offset-xl2'
})`
  height: 75vh;
  padding: 0 !important;
  position: relative;

  &:hover ${CoverScrollbar} {
    opacity: 0;
    transition: all 0.2s ease-in;
  }
`;

export const TextArea = styled(Editor)`
  border: none;
  outline: transparent;
  overflow-y: scroll;
  height: 90%;
  width: 100%;
  margin: 0;
  padding: 0 0.5em;

  > * {
    margin: 0 !important;
  }

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    overflow: visible;
  }

  &::-webkit-scrollbar {
    width: 0.4em;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
`;
