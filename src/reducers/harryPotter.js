// import de notre action de harryPotter
import {STORE_CHARACTERS} from '../actions/harryPotter';

// valeur de base pour harryPoter
const initialState = {
  value: [],
};

// On refait la meme chose que pour le reducer du compteur, mais cette fois ci
// pour harryPotter

// le reducer n'est qu'un switch
//    state = initialState > correspond a la valeur par default
//    action > correspond au action "ecouté" par le reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case STORE_CHARACTERS:
      return {
        // copie toute la state, mais augmente juste le compteur de 1
        //    ...state > recupere tout l'objet (spread operator)
        ...state,
        value: [...state.value, ...action.payload],
      };
    default:
      return state;
  }
};
