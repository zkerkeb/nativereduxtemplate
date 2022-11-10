import React from 'react';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {store} from './src/config/store';
import './src/config/translation';

const App = () => {
  return (
    // provider englobe l'app,
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
