import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import { Holdable } from 'react-touch';

import Navigation from './Navigation';
import Alert from './Alert';
import Spinner from '../styles/Spinner';
import {
  NotesContainer,
  TitleColumn,
  Title,
  ListColumn,
  CoverScrollbar,
  NoteItem,
  NoteTitle,
  Row,
  DeleteNoteBtn,
  CreateNoteBtn
} from '../styles/Notes';
import { MenuBtn } from '../styles/Navigation';
import {
  getNote,
  createNote,
  getNotes,
  onShowDeleteAlert
} from '../actions/noteActions';

class Notes extends Component {
  state = {
    noteId: '',
    notes: []
  };

  componentWillMount() {
    if (!navigator.onLine) {
      this.setState({
        notes: JSON.parse(localStorage.getItem('keeprNotes'))
      });
    } else {
      this.props.getNotes();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notes.notes) {
      this.setState({ notes: nextProps.notes.notes });
    }
  }

  loadNote = (e, id) => {
    if (e.target.tagName !== 'I' && e.target.tagName !== 'BUTTON') {
      this.props.getNote(id);
      this.props.history.push(`/editor/${id}`);
    }
    return;
  };

  onDeleteNoteAction = (e, id) => {
    if (e.target.tagName === 'I' || e.target.tagName === 'BUTTON') {
      this.props.onShowDeleteAlert(true);
      this.setState({ noteId: id });
    }
    return;
  };

  onHoldComplete = id => {
    this.props.onShowDeleteAlert(true);
    this.setState({ noteId: id });
  };

  render() {
    const notes = this.state.notes.map(note => (
      <Holdable
        onHoldComplete={() => this.onHoldComplete(note._id)}
        key={note._id}
      >
        <NoteItem onClick={e => this.loadNote(e, note._id)}>
          <DeleteNoteBtn
            onClick={e => this.onDeleteNoteAction(e, note._id)}
          >
            <MaterialIcon icon="delete" />
          </DeleteNoteBtn>
          <NoteTitle>{note.title}</NoteTitle>
        </NoteItem>
      </Holdable>
    ));

    return (
      <div>
        <Navigation />
        <NotesContainer>
          {this.props.showDeleteAlert ? (
            <Alert id={this.state.noteId} />
          ) : null}
          <Row>
            <TitleColumn>
              <MenuBtn>
                <MaterialIcon icon="menu" color="#fff" />
              </MenuBtn>
              <Title>Notes</Title>
            </TitleColumn>
          </Row>
          <Row>
            <ListColumn>
              <ul>{this.props.loading ? <Spinner /> : notes}</ul>
              <CoverScrollbar />
            </ListColumn>
          </Row>
          <div className="fixed-action-btn">
            <CreateNoteBtn
              onClick={() => this.props.createNote(this.props.history)}
            >
              <MaterialIcon color="#fff" icon="create" />
            </CreateNoteBtn>
          </div>
        </NotesContainer>
      </div>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.object.isRequired,
  createNote: PropTypes.func.isRequired,
  getNotes: PropTypes.func.isRequired,
  getNote: PropTypes.func.isRequired,
  onShowDeleteAlert: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  showDeleteAlert: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  notes: state.notes,
  loading: state.notes.loading,
  showDeleteAlert: state.notes.showDeleteAlert
});

export default connect(
  mapStateToProps,
  { createNote, getNotes, getNote, onShowDeleteAlert }
)(Notes);
