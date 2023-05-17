import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/screen/home.js';
import Chiglel from './source/screen/chiglel.js';
import Buudal from './source/screen/buudal.js';
import Medee from './source/screen/medee.js';

const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Chiglel' component={Chiglel} />
        <Stack.Screen name='Buudal' component={Buudal} />
        <Stack.Screen name='Medee' component={Medee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
