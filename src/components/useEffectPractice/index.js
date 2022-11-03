import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {incrementCounter} from '../../actions/counter';

const UseEffectPractice = () => {
  const [count, setCount] = useState(0); // hook
  const [countTwo, setCountTwo] = useState(0); // hook
  // permet de recuperer les valeur dans la state global de redux
  // puisque le le schema est : react > global state > reducer > action,
  // on doit appeler state.[nom du reducer].nomdeLaCle, donc ici, state.counter.value
  const counterValue = useSelector(state => state.counter.value); // hook
  const dispatch = useDispatch(); // hook
  console.log(
    '🚀 ~ file: index.js ~ line 9 ~ UseEffectPractice ~ counterValue',
    counterValue,
  );

  useEffect(() => {
    console.log('count', count);
    // alert('count changed');
  }, [count]);

  return (
    <View>
      <Text>Redux Practice</Text>
      <View style={styles.counter}>
        <Text style={styles.counterText}>{counterValue}</Text>
        <View style={styles.counterButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setCountTwo(countTwo - 1)}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => dispatch(incrementCounter())}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  counter: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  counterButton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: 12,
  },
});

export default UseEffectPractice;
