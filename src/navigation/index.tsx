import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import {StatusBar} from 'react-native';
import Plant from '../pages/Plant';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Plant" component={Plant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
