// on vas cree notre action pour la recuperation de l'api
import axios from 'axios';

export const STORE_CHARACTERS = 'STORE_CHARACTERS';

//    () => dispatch => { : redux-thunk demande une fonction, qui retourne une
// autre fonction prenant dispatch en parametre
// dispatch nous assure que redux ecoute cette fonction en asynchrone
export const getHarryPotter = () => dispatch => {
  axios({
    method: 'GET',
    url: 'https://hp-api.herokuapp.com/api/characters/students',
  })
    .then(res => {
      console.log('res', res);
      dispatch(storeCharacters(res.data));
    })
    .catch(err => {
      console.log('err', err);
    });
};

// on cree l'action qui va stocker les données dans le store

export const storeCharacters = payload => ({
  type: STORE_CHARACTERS,
  payload,
});
