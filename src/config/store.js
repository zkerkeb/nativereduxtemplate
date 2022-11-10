// crée la sate global
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// importe tout les reducers
import reducers from '../reducers';

export const store = createStore(reducers, applyMiddleware(logger, thunk));
