// permet de fusioner tout les reducer de toutes nos actions redux
import {combineReducers} from 'redux';

import counter from './counter';

export default combineReducers({
  counter,
});
