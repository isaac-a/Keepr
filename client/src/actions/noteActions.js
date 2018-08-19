import axios from 'axios';
import {
  SET_CURRENT_NOTE,
  SET_CURRENT_NOTES,
  GET_NOTES,
  SET_LOADING_NOTE,
  SET_LOADING_NOTES,
  SHOW_DELETE_ALERT
} from './types';

export const setLoadingNotes = () => ({
  type: SET_LOADING_NOTES
});

export const setLoadingNote = (currentNote, isLoading) => ({
  type: SET_LOADING_NOTE,
  payload: { currentNote, isLoading }
});

export const setCurrentNote = note => ({
  type: SET_CURRENT_NOTES,
  payload: note
});

export const getNotes = () => dispatch => {
  dispatch(setLoadingNotes());
  axios
    .get('/api/notes')
    .then(res => {
      localStorage.setItem(
        'keeprNotes',
        JSON.stringify(res.data.slice(0, 20))
      );
      dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getNote = id => dispatch => {
  axios
    .get(`/api/editor/${id}`)
    .then(res => {
      dispatch({
        type: SET_CURRENT_NOTE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const createNote = history => dispatch => {
  axios
    .post('/api/notes', {
      title: '',
      text: ''
    })
    .then(res => {
      dispatch(setCurrentNote(res.data));
      history.push(`/editor/${res.data._id}`);
    })
    .catch(err => console.log(err));
};

export const deleteNote = id => dispatch => {
  dispatch(setLoadingNotes());
  axios
    .delete(`/api/notes/${id}`)
    .then(res => {
      dispatch({
        type: GET_NOTES,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const saveNote = (noteData, id) => dispatch => {
  dispatch(setLoadingNote({}, true));
  axios
    .put(`/api/editor/${id}`, noteData)
    .then(res => dispatch(setLoadingNote(res.data, false)))
    .catch(err => console.log(err));
};

export const onShowDeleteAlert = bool => ({
  type: SHOW_DELETE_ALERT,
  payload: bool
});
