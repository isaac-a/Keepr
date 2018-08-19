import {
  SET_CURRENT_NOTE,
  GET_NOTES,
  SET_LOADING_NOTES,
  SET_LOADING_NOTE,
  SHOW_DELETE_ALERT
} from '../actions/types';

const initialState = {
  notes: [],
  currentNote: {},
  showDeleteAlert: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        loading: false
      };
    case SET_LOADING_NOTES:
      return {
        ...state,
        loading: true
      };
    case SET_LOADING_NOTE:
      return {
        ...state,
        currentNote: action.payload.currentNote,
        loading: action.payload.isLoading
      };
    case SET_CURRENT_NOTE:
      return {
        ...state,
        currentNote: action.payload
      };
    case SHOW_DELETE_ALERT:
      return {
        ...state,
        showDeleteAlert: action.payload
      };
    default:
      return state;
  }
}
