import styled from 'styled-components';

export const NotesContainer = styled.div.attrs({
  className: 'container'
})`
  margin-top: 1em !important;
  @media (max-width: 992px) {
    width: 100% !important;
    margin: 0 !important;
  }
`;

export const Row = styled.div.attrs({
  className: 'row'
})`
  margin-bottom: 0;
`;

export const TitleColumn = styled.div.attrs({
  className: 'col s12 l10 offset-l1 xl8 offset-xl2'
})`
  color: #fff;
  background: #424242;
  padding: 0.8em 0.8rem 0.6rem 0 !important;
`;

export const Title = styled.h5`
  padding: 1rem 1rem 1rem 0;
  margin: 0 0 0 1rem;
  display: inline-block;
  vertical-align: top;
  @media (max-width: 992px) {
    margin: 0;
  }
`;

export const CoverScrollbar = styled.div`
  position: absolute;
  background: #fff;
  height: 100%;
  top: 0;
  right: 0;
  width: 0.4em;
  transition: all 0.2s ease-in;
  opacity: 1;
`;

export const ListColumn = styled.div.attrs({
  className: 'col s12 l10 offset-l1 xl8 offset-xl2'
})`
  padding: 0 !important;
  position: relative;

  &:hover ${CoverScrollbar} {
    opacity: 0;
    transition: all 0.2s ease-in;
  }

  > ul {
    width: 100%;
    margin: 0;
    height: 75vh;
    overflow-y: scroll;

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

    @media (max-width: 992px) {
      height: calc(100vh - 75px);
    }
  }
`;

export const NoteItem = styled.li`
  box-sizing: border-box;
  border-bottom: 1px solid #cfcfcf;
  cursor: pointer;
  transition: background-color 0.2s;
  position: relative;

  &:hover {
    background-color: #f0eeee;
  }

  > p {
    width: 94%;
  }
`;

export const NoteTitle = styled.p`
  margin: 0;
  font-size: 1.1rem;
  padding: 0.8rem;
`;

export const DeleteNoteBtn = styled.button.attrs({
  title: 'Delete Note',
  className: 'delete-note'
})`
  background-color: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  &:focus {
    background-color: transparent;
  }

  > i {
    color: #e0e0e0 !important;
    transition: color 0.2s ease-in;

    &:hover {
      color: #616161 !important;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export const CreateNoteBtn = styled.button.attrs({
  className: 'btn-floating btn-large right',
  title: 'New Note'
})`
  background: #333333;

  > i {
    font-size: 1.7em !important;
  }

  &:hover {
    background: #424242;
  }
`;
