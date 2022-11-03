// exemple de syntaxe d'action pour le compteur
// une action est une demande de react pour redux
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// on definit et nomme nos actions

// le ({}) veut dire que la fonction redux retournera un objet directement
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});
// est egale a
// export const incrementCounterExemple = () => {
//   return {
//     type: INCREMENT_COUNTER,
//   };
// };
