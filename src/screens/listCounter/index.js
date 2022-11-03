import React from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import UseEffectPractice from '../../components/useEffectPractice';
import {useSelector} from 'react-redux';

const ListCounter = ({navigation}) => {
  const counterValue = useSelector(state => state.counter.value); // hook
  return (
    <SafeAreaView>
      <Text>List Counteer</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Practice')}>
        <Text>Go to Practice</Text>
      </TouchableOpacity>
      <Text style={{fontSize: 60}}>{counterValue}</Text>
    </SafeAreaView>
  );
};

export default ListCounter;
