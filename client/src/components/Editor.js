import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterializeIcon from 'material-icons-react';
import { connect } from 'react-redux';
import '../styles/medium-editor/medium-editor.min.css';
import '../styles/medium-editor/default.css';

import isEmpty from '../helpers/isEmpty';
import { getNote, saveNote } from '../actions/noteActions';
import {
  EditorContainer,
  EditorColumn,
  TitleColumn,
  TitleInput,
  TextArea
} from '../styles/Editor';
import { CoverScrollbar } from '../styles/Notes';
import Navigation from './Navigation';
import { MenuBtn } from '../styles/Navigation';

class Editor extends Component {
  state = {
    title: '',
    text: '',
    noteId: ''
  };

  componentWillMount() {
    this.props.getNote(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEmpty(nextProps.notes.currentNote)) {
      const { title, text, _id } = nextProps.notes.currentNote;
      this.setState({ title, text, noteId: _id });
    }
  }

  componentWillUnmount() {
    const { title, text, noteId } = this.state;
    if (title === '') {
      this.props.saveNote({ title: 'Untitled', text }, noteId);
    }
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onTextChange = text => {
    this.setState({ text });
  };

  onSave = () => {
    const { title, text, noteId } = this.state;
    const noteData = { title, text };
    if (title === '') {
      return this.props.saveNote({ title: 'Untitled', text }, noteId);
    } else {
      return this.props.saveNote(noteData, noteId);
    }
  };

  onKeyDown = e => {
    if (e.keyCode === 83 && e.ctrlKey) {
      this.onSave();
    }
  };

  render() {
    const { title, text } = this.state;
    return (
      <div>
        <Navigation editor />
        <EditorContainer>
          <div className="row">
            <TitleColumn>
              <MenuBtn>
                <MaterializeIcon color="#fff" icon="menu" />
              </MenuBtn>
              <TitleInput value={title} onChange={this.onTitleChange} />
              <button onClick={this.onSave} title="Save Note">
                <MaterializeIcon
                  icon={this.props.loading ? 'sync' : 'done'}
                  color="white"
                />
              </button>
            </TitleColumn>
          </div>
          <div className="row">
            <EditorColumn>
              <TextArea
                text={text}
                options={{
                  placeholder: false
                }}
                onChange={this.onTextChange}
                onKeyDown={e => this.onKeyDown(e)}
              />
              <CoverScrollbar />
            </EditorColumn>
          </div>
        </EditorContainer>
      </div>
    );
  }
}

Editor.propTypes = {
  saveNote: PropTypes.func.isRequired,
  getNote: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  notes: state.notes,
  loading: state.notes.loading
});

export default connect(
  mapStateToProps,
  { getNote, saveNote }
)(Editor);
