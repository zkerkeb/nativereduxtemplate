// permet de fusioner tout les reducer de touts no reducers pour redux
import {combineReducers} from 'redux';

// on importe tout les reducer que l'on veut fusioner
import counter from './counter';
import harryPotter from './harryPotter';
import todolist from './todolist';

export default combineReducers({
  counter,
  harryPotter,
  todolist,
});
