// import de notre action de compteur
import {INCREMENT_COUNTER} from '../actions/counter';

// exemple de reducer pour le compteur
const initialState = {
  value: 0,
};

// le reducer n'est qu'un switch
//    state = initialState > correspond a la valeur par default
//    action > correspond au action "ecouté" par le reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        // copie toute la state, mais augmente juste le compteur de 1
        //    ...state > recupere tout l'objet (spread operator)
        ...state,
        value: state.value + 1,
      };
    default:
      return state;
  }
};
