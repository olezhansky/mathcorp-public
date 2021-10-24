import { ACTION } from '../actionTypes/actionTypes';

const initialState = {
  language: 'UA', // RU
  modal: false,
  modalConfirm: false,
  userName: '',
  routePath: '/'
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.SET_LANGUAGE: {
      localStorage.setItem('lang', action.payload);
      return { ...state, language: action.payload };
    }
    case ACTION.SET_LANGUAGE_FROM_LOCAL_STORAGE: {
      return { ...state, language: action.payload };
    }
    case ACTION.CLOSE_MODAL: {
      return {
        ...state,
        modal: false
      }
    }
    case ACTION.CLOSE_MODAL_CONFIRM: {
      return {
        ...state,
        modalConfirm: false
      }
    }
    case ACTION.OPEN_MODAL: {
      return {
        ...state,
        modal: true
      }
    }
    case ACTION.OPEN_MODAL_CONFIRM: {
      return {
        ...state,
        modalConfirm: true
      }
    }
    case ACTION.SET_USER_NAME: {
      return {
        ...state,
        userName: action.payload
      }
    }
    case ACTION.SET_ROUTE_PATH: {
      sessionStorage.setItem('currentRoute', action.payload)
      return {
        ...state,
        routePath: action.payload
      }
    }
    case ACTION.SET_CURRENT_ROUTE_FROM_SESSION_STORAGE: {
      return {
        ...state,
        routePath: action.payload
      }
    }
    default:
      return state;
  }
};
export default settingsReducer;
