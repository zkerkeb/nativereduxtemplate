import React from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import HarryPotterRedux from '../../components/harryPotterRedux';
import TodoList from '../../components/todoList';
import UseEffectPractice from '../../components/useEffectPractice';

const Practice = ({navigation}) => {
  return (
    <SafeAreaView>
      <TodoList />
    </SafeAreaView>
  );
};

export default Practice;
