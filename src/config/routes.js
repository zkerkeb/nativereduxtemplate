import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Practice from '../screens/practice';
import {NavigationContainer} from '@react-navigation/native';

import ListCounter from '../screens/listCounter';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Practice" component={Practice} />
        <Stack.Screen name="listCounter" component={ListCounter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
