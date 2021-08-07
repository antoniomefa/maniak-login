import React from 'react';
import {Provider} from 'react-redux';

import Navigation from './app/components/Navigation';
import store from './app/redux/store';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
