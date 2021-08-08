import {SET_USER, SET_PHOTOS} from './types';

const INITIAL_STATE = {
  usuario: {
    token: null,
    isLogged: false,
  },
  fotos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        usuario: action.payload,
      };
    case SET_PHOTOS:
      return {
        ...state,
        fotos: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
