import {SET_USER, SET_PHOTOS} from './types';

export const setUser = user => ({
  type: SET_USER,
  data: user,
});

export const setPhotos = photos => ({
  type: SET_PHOTOS,
  key: photos,
});
