import React, {useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodo} from '../../actions/todolist';

// meme todo que le premier exercice todolist

const TodoList = () => {
  // on crée notre dispatch pour pouvoir récupéré le resultat de notre action
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  const todoValue = useSelector(state => state.todolist.value);
  console.log(
    '🚀 ~ file: index.js ~ line 17 ~ TodoList ~ todoValue',
    todoValue,
  );

  // on change notre ancien addTodo pour l'adapter a redux
  const addTodoToRedux = () => {
    // setTodos([...todos, {label: input, id: `${Math.random()}`}]);
    dispatch(addTodo({label: input, id: `${Math.random()}`}));
    setInput('');
  };

  return (
    <View>
      <Text>TodoList</Text>
      <TextInput
        value={input}
        onChangeText={text => setInput(text)}
        placeholder="Add a todo"
      />
      <TouchableOpacity onPress={addTodoToRedux}>
        <Text>Add TODOS</Text>
      </TouchableOpacity>
      {todoValue.map((todo, index) => (
        <View key={todo.id}>
          <Text>{todo.label}</Text>
          <TouchableOpacity onPress={() => dispatch(deleteTodo(todo.id))}>
            <Text>Done</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default TodoList;
