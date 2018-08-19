import React from 'react';
import { connect } from 'react-redux';

import {
  AlertOverlay,
  AlertContainer,
  AlertContent
} from '../styles/Alert';
import {
  getNotes,
  deleteNote,
  onShowDeleteAlert
} from '../actions/noteActions';

const Alert = ({ id, deleteNote, getNotes, onShowDeleteAlert }) => {
  const confirmDelete = () => {
    onShowDeleteAlert(false);
    deleteNote(id);
    getNotes();
  };

  const cancelDelete = () => {
    onShowDeleteAlert(false);
  };

  return (
    <AlertOverlay>
      <AlertContainer>
        <AlertContent>
          <h6>Are you sure you want to delete the note?</h6>
          <button onClick={confirmDelete}>Yes</button>
          <button onClick={cancelDelete}>No</button>
        </AlertContent>
      </AlertContainer>
    </AlertOverlay>
  );
};

export default connect(
  null,
  { getNotes, deleteNote, onShowDeleteAlert }
)(Alert);
