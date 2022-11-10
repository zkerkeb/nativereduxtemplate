import axios from 'axios';
import React from 'react';
import {useTranslation} from 'react-i18next';

import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import HarryPotterRedux from '../../components/harryPotterRedux';
import TodoList from '../../components/todoList';
import UseEffectPractice from '../../components/useEffectPractice';

const Practice = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <SafeAreaView>
      <Text>{t('home')}</Text>
      <TodoList />
    </SafeAreaView>
  );
};

export default Practice;
