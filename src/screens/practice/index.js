import React from 'react';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import UseEffectPractice from '../../components/useEffectPractice';

const Practice = ({navigation}) => {
  return (
    <SafeAreaView>
      <UseEffectPractice />
      <TouchableOpacity onPress={() => navigation.navigate('listCounter')}>
        <Text>Go to List Counter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Practice;
