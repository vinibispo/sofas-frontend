import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import {StatusBar} from 'react-native';
import Plant from '../pages/Plant';
import SignUp from '../pages/Cadastro';
import Final from '../pages/Final';
import {useTheme} from 'react-native-paper';

const Stack = createStackNavigator();

export default function Navigator() {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Planta" component={Plant} />

        <Stack.Screen name="Cadastro" component={SignUp} />

        <Stack.Screen name="Final" component={Final} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
