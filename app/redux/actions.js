import {SET_USER, SET_PHOTOS} from './types';

export const setUser = payload => dispatch => {
  dispatch({
    type: SET_USER,
    payload,
  });
};

export const setPhotos = payload => dispatch => {
  dispatch({
    type: SET_PHOTOS,
    payload,
  });
};
