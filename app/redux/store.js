import {createStore, combineReducers} from 'redux';
import reducer from './reducer';

const reducers = combineReducers({
  reducer,
});

const store = createStore(
  reducers,
  {}, // Estado inicial
);

export default store;
