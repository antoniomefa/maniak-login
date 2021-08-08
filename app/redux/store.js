import {createStore, combineReducers, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducer';

const reducers = combineReducers({
  reducer,
});

const store = createStore(
  reducers,
  {}, // Estado inicial
  applyMiddleware(reduxThunk),
);

export default store;
