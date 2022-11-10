// crée la sate global
import {applyMiddleware, createStore} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

// redux persist vas nous permetre de mettre le store en persistant. Un peu comme
// le async storage. Tres utile sur les préférence utilisateur par exemple:
//    -la langue
//    -le thème ...
import {persistReducer, persistStore} from 'redux-persist';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
// importe tout les reducers
import reducers from '../reducers';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

// persit config est la config de redux persit
//    storage: precise ou nous sotckons les données
//    stateReconciler: merge la state actuelle avec celle de notre storage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer, applyMiddleware(logger, thunk));
export const persistor = persistStore(store, null);
