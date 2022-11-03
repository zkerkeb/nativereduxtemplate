// crée la sate global
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
// importe tout les reducers
import reducers from '../reducers';

export const store = createStore(reducers, applyMiddleware(logger));
