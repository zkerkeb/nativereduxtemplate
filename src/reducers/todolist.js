// import de nos actions
import {ADD_TODO, DELETE_TODO} from '../actions/todolist';

// exemple de reducer pour le compteur
const initialState = {
  value: [],
};
// le reducer n'est qu'un switch
//    state = initialState > correspond a la valeur par default
//    action > correspond au action "ecouté" par le reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        // spread operator => recupère tout
        ...state,
        value: [...state.value, action.payload],
      };
    case DELETE_TODO:
      return deleteTodoReducer(state, action.payload);
    default:
      return state;
  }
};

const deleteTodoReducer = (state, id) => {
  const newTodos = [...state.value];
  // on cherche l'index de la todo a suprimé
  const indexOfTodo = newTodos.findIndex(todo => todo.id === id);
  // je le retire de la liste
  newTodos.splice(indexOfTodo, 1);
  console.log(newTodos);
  // on return la meme chose que pour le addTodo, sauf que cette fois si , on
  // return la state qui n'a plus l'element suprimé (newTodos)
  return {
    ...state,
    value: newTodos,
  };
};
